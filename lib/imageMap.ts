// lib/imageMap.ts — centralized placeholder fallback
export const PLACEHOLDER = "/assets/_placeholder.svg";

export function asset(path: string): string {
  // path stored as "projects/foo/cover.jpg" -> "/assets/projects/foo/cover.jpg"
  return `/assets/${path}`;
}