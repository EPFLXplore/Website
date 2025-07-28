import { defineCollection, z } from "astro:content";

const semesterProjects = defineCollection({
  schema: z.object({
    title: z.string(),
    major: z.string(),
    pole: z.string(),
    contact: z.string(),
    applyLink: z.string().url(),
    pdf_name: z.string()
  }),
});

const blogArticles = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string().url(),
    author: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  "semester-projects": semesterProjects,
  "blog-articles": blogArticles,
};
