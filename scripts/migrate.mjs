import { createClient } from "@supabase/supabase-js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../.env.local") });

// Validate environment variables
const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
} = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error("Missing Cloudinary environment variables. Please check your .env.local file.");
  process.exit(1);
}

if (!NEXT_PUBLIC_SUPABASE_URL || !NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error("Missing Supabase environment variables. Please check your .env.local file.");
  process.exit(1);
}

// 1. Initialize Cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// 2. Initialize Supabase (for Metadata only)
const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LEGACY_DIR = path.resolve(__dirname, "../public/legacy");

/**
 * Uploads a file to Cloudinary and saves metadata to Supabase
 */
async function uploadAndSave(filePath, relativePath, category) {
  const fileName = path.basename(filePath);
  const isPdf = fileName.toLowerCase().endsWith(".pdf");
  
  // Cloudinary uses 'raw' for PDFs/Documents, and 'image' for images
  const resourceType = isPdf ? "image" : "image"; // Setting PDF to 'image' allows Cloudinary to serve it natively
  
  // Clean up the path for the Cloudinary Public ID
  const publicId = `legacy/${relativePath.replace(/\\/g, '/').replace(/\.[^/.]+$/, "")}`;

  try {
    // 1. Upload to Cloudinary
    console.log(`Uploading ${fileName} to Cloudinary...`);
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      resource_type: "auto", // Cloudinary will automatically detect PDFs vs Images
      use_filename: true,
      unique_filename: false,
    });

    const publicUrl = uploadResult.secure_url;

    // 2. Insert metadata to Supabase Database
    console.log(`Saving metadata for ${fileName} to Supabase...`);
    const { error: dbError } = await supabase.from("documents").insert({
      title: fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "), // Format title
      category: category,
      file_url: publicUrl,
    });

    if (dbError) {
      console.error(`Supabase DB Insert Error for ${fileName}:`, dbError.message);
    } else {
      console.log(`✅ Success: ${fileName}`);
    }
  } catch (err) {
    console.error(`❌ Failed to process ${fileName}:`, err.message || err);
  }
}

/**
 * Recursively scans a directory and uploads files
 */
async function processDirectory(dir, baseDir, category) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath, baseDir, category);
    } else {
      const relativePath = path.relative(baseDir, fullPath);
      await uploadAndSave(fullPath, relativePath, category);
    }
  }
}

async function startMigration() {
  console.log("🚀 Starting Legacy Asset Migration to Cloudinary...");
  
  // Process PDFs
  console.log("\n--- Processing PDFs ---");
  await processDirectory(path.join(LEGACY_DIR, "pdfs"), LEGACY_DIR, "pdf_document");
  
  // Process Images
  console.log("\n--- Processing Images ---");
  await processDirectory(path.join(LEGACY_DIR, "images"), LEGACY_DIR, "image");

  console.log("\n🎉 Migration Complete!");
}

startMigration();
