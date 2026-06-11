import { defineCollection, z } from 'astro:content';

// Writing — thought-leadership essays (handoff 6 spec, 2026-06-11).
// One .mdx file per article in src/content/writing/; rendered via ArticleLayout.
const writing = defineCollection({
  type: 'content',
  // image() makes heroImage a processed asset (src/assets/…) — Astro emits
  // responsive variants via <Image>; plain string paths are not allowed here.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      dek: z.string(),
      category: z.enum(['The Practice', 'Leadership', 'Change', 'Research', 'Field notes']),
      publishDate: z.date(),
      readingTime: z.string(),
      author: z.string().default('Taylor Winters'),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      heroCaption: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      ogImage: z.string().optional(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = { writing };
