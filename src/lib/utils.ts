import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  // Deploying to root domain, no base path needed
  return path;
}

export function getBasePath(path: string): string {
  // Next.js basePath config handles the prefix automatically for Link components
  // Just return the path as-is
  return path;
}
