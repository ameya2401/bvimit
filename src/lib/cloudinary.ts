/**
 * Helper utility to convert local legacy asset paths to Cloudinary public URLs.
 * Ensure NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is set in your .env.local
 */
export function getCloudAsset(localPath: string): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  
  // If not configured or not a legacy path, return original
  if (!cloudName || !localPath) return localPath;
  
  // Clean the path (remove leading slash)
  const cleanPath = localPath.startsWith('/') ? localPath.substring(1) : localPath;
  
  // ONLY rewrite legacy paths
  if (cleanPath.startsWith('images/') || cleanPath.startsWith('pdf/') || cleanPath.startsWith('pdfs/')) {
    return `https://res.cloudinary.com/${cloudName}/image/upload/legacy/${cleanPath}`;
  }
  
  return localPath;
}
