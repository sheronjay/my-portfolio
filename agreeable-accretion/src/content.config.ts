import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.date(),
    author: z.string().default('Sheron Jayasinghe'),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    status: z.enum(['wip', 'complete']).default('complete'),
    order: z.number().int().nonnegative().default(999),
    techStack: z.array(z.string()).default([]),
    imgAlt: z.string().optional(),
    projectUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),
  }),
});

export const collections = { blog, projects };
