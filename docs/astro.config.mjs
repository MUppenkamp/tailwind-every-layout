import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import prefetch from '@astrojs/prefetch'
import mdx from '@astrojs/mdx'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  markdown: {
    syntaxHighlight: 'prism',
  },
  integrations: [tailwindcss(), react(), prefetch(), mdx()],
})
