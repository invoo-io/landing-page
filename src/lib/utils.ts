import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  // In production, images might be served from a CDN or different path
  // For now, we'll just return the path as-is
  return path;
}

export function getBasePath(path: string): string {
  // This function can be used to handle base paths for different environments
  // For now, we'll just return the path as-is
  return path;
}
