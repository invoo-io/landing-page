import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  // In production (GitHub Pages), prepend the repository base path
  const basePath = process.env.NODE_ENV === 'production' ? '/landing-page' : '';
  return `${basePath}${path}`;
}

export function getBasePath(path: string): string {
  // In production (GitHub Pages), prepend the repository base path for navigation
  const basePath = process.env.NODE_ENV === 'production' ? '/landing-page' : '';
  return `${basePath}${path}`;
}
