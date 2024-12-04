// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob /*, file*/ } from 'astro/loaders'

// 3. Define your collection(s)
// NICK: not sure why this isn't in collections directory?
const blog = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/data/blog" }),
    schema: {
        title: z.string(),
        author: z.string()
    }
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog }
