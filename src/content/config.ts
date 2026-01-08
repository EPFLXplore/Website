import { defineCollection, z } from "astro:content";
import { Subtitles } from "lucide-react";

const semesterProjects = defineCollection({
  schema: z.object({
    title: z.string(),
    major: z.string(),
    image: z.string().optional(),
    pole: z.string(),
    contact: z.string(),
    applyLink: z.string(),
    taken: z.boolean().optional(),
  }),
});

const blogArticles = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    author: z.string(),
    date: z.string(),
  }),
});

const student_led_research = defineCollection({
  type: "content",
  schema: z.object({
    key: z.string(),
    title: z.string(),
    subtitle: z.string(),
    status: z.string(),
    year: z.string(),
    tagline: z.string().optional(),
    heroImage: z.string(),
    team: z.array(z.object({
      name: z.string(),
      role: z.string().optional(),
    })).optional(),
    links: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })).optional(),
    sections: z.array(z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      body: z.array(z.string()).optional(),
      bullets: z.array(z.string()).optional(),
      media: z.array(z.object({
        type: z.enum(["image", "video"]),
        src: z.string(),
        alt: z.string().optional(),
      })).optional(),
    })).optional(),
  }),
})

const erc_years = defineCollection({
  type: "content",
  schema: z.object({
    rover: z.string(),
    drone: z.string().optional(),
    year: z.string(),
    heroImage: z.string(),
    roverImage: z.string(),
    droneImage: z.string().optional(),
    videoId: z.string(),
    teamImage: z.string(),
    show_drone: z.boolean(),
    show_rover_model: z.boolean(),
    show_techincal_section: z.boolean(),
    results: z.array(z.object({
      title: z.string(),
      text: z.string(),
      gradient: z.string(),
    })),
    technical: z.array(z.object({
      title: z.string(),
      text: z.string(),
      image: z.string(),
      design: z.string(),
    })).optional(),
  }),
})

export const collections = {
  "semester-projects": semesterProjects,
  "blog-articles": blogArticles,
  "student_led_research": student_led_research,
  "erc_years": erc_years,
};
