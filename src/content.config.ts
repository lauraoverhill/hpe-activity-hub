import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const audience = z.enum(['learner', 'teacher'])

const units = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/units' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    yearLevels: z.array(z.string()).default([]),
    audience: z.array(audience).default(['teacher', 'learner']),
    status: z.enum(['draft', 'published']).default('draft'),
  }),
})

const activities = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    unit: z.string().optional(),
    yearLevels: z.array(z.string()).default([]),
    duration: z.string().optional(),
    audience: audience.default('learner'),
    status: z.enum(['draft', 'published']).default('draft'),
  }),
})

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    resourceType: z.enum(['lesson-plan', 'worksheet', 'assessment', 'guidance', 'other']),
    unit: z.string().optional(),
    yearLevels: z.array(z.string()).default([]),
    audience: audience.default('teacher'),
    status: z.enum(['draft', 'published']).default('draft'),
  }),
})

const tools = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tools' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    audience: z.array(audience).default(['teacher', 'learner']),
    status: z.enum(['draft', 'published']).default('draft'),
    externalUrl: z.string().url().optional(),
  }),
})

export const collections = { units, activities, resources, tools }
