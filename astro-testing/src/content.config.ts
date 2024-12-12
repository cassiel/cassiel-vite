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

// Let's try a collection which ends up on a single page. (We'll see what
// actually comes in as the body, if we don't use a dynamic page template.)
const cards = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/data/cards" }),
    schema: z.object({
        title: z.string(),
        author: z.string()
    })
})

export const collections = { blog, cards }
