import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolves a blog image to its per-article folder:
 *   /images/blogs/<slug>/<image>
 * where <slug> is the markdown filename (without extension) and <image>
 * is the bare filename set in the article's frontmatter.
 */
export function blogImage(slug: string, image: string) {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  return `${base}/images/blogs/${slug}/${image}`;
}
