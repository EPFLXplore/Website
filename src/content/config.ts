import { defineCollection, z } from "astro:content";

const semesterProjects = defineCollection({
  schema: z.object({
    title: z.string(),
    major: z.string(),
    pole: z.string(),
    contact: z.string(),
    applyLink: z.string().url(),
  }),
});

export const collections = {
  "semester-projects": semesterProjects,
};
