export function getImagePath(src: string): string {
  // In production on GitHub Pages, prepend the repository name
  if (process.env.NODE_ENV === 'production') {
    return `/landing-page${src}`;
  }
  return src;
}