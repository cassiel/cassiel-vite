// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob /*, file*/ } from 'astro/loaders'

// 3. Define your collection(s)
// NICK: not sure why this isn't in collections directory? Ah: that's deprecated,
// it looks like feeds can be anywhere (files generally in src).
const blog = defineCollection({
    loader: glob({ pattern: "*.{md,mdx}", base: "./src/data/blog" }),
    schema: z.object({
        title: z.string(),
        author: z.string()
    })
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog }
