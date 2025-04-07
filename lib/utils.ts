import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function base64ToImage(base64: string): HTMLImageElement {
  if (!base64.startsWith('data:image')) {
    throw new Error('Invalid base64 image string - must start with "data:image"');
  }

  const image = new Image();
  image.src = base64;

  // Check if image is already loaded (might work for cached images)
  if (image.complete && image.naturalWidth !== 0) {
    return image;
  }

  // For most cases, the image won't be loaded synchronously
  throw new Error('Image loading requires asynchronous operation. Use base64ToImageAsync instead.');
}
