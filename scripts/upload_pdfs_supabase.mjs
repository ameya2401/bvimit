import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import mime from "mime-types";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../.env.local") });

const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } = process.env;

// Initialize Supabase
const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LEGACY_DIR = path.resolve(__dirname, "../public/legacy");
const BUCKET_NAME = "legacy";

async function uploadPdf(filePath, relativePath) {
  const fileName = path.basename(filePath);
  const storagePath = `pdfs/${relativePath.replace(/\\/g, '/')}`;
  
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, fileBuffer, {
        contentType: 'application/pdf',
        upsert: true
      });

    if (error) {
      console.error(`❌ Upload Error for ${fileName}:`, error.message);
      return;
    }

    const { data: { publicUrl } } = supabase.storage.from(BUCKET_NAME).getPublicUrl(storagePath);

    // Update the database
    const { error: dbError } = await supabase
      .from("documents")
      .update({ file_url: publicUrl })
      .eq('title', fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "));

    if (dbError) {
      console.error(`❌ DB Update Error for ${fileName}:`, dbError.message);
    } else {
      console.log(`✅ Success: ${fileName}`);
    }
  } catch (err) {
    console.error(`❌ Failed to process ${fileName}:`, err.message);
  }
}

async function processDirectory(dir, baseDir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath, baseDir);
    } else if (file.toLowerCase().endsWith('.pdf')) {
      const relativePath = path.relative(baseDir, fullPath);
      await uploadPdf(fullPath, relativePath);
    }
  }
}

async function start() {
  console.log("🚀 Starting Supabase PDF Upload...");
  
  // Ensure bucket exists
  const { data: buckets } = await supabase.storage.listBuckets();
  if (!buckets?.find(b => b.name === BUCKET_NAME)) {
    console.log("Creating public bucket...");
    await supabase.storage.createBucket(BUCKET_NAME, { public: true });
  }

  await processDirectory(path.join(LEGACY_DIR, "pdfs"), path.join(LEGACY_DIR, "pdfs"));
  console.log("\n🎉 PDF Migration Complete!");
}

start();
