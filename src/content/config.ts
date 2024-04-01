import { defineCollection, reference, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().max(65, { message: "Title cannot be longer than 65 characters." }),
      description: z.string().max(165, { message: "Description cannot be longer than 165 characters. " }),
      image: image().refine((img) => img.width >= 1000, {
        message: "Image must be at least 1000px wide.",
      }),
      pubDate: z.date(),
      isDraft: z.boolean().optional(),
    }),
});

export const collections = { posts };