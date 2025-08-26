// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  // Set the site URL for production
  site: 'https://mikewest.page',
  
  // Base path (set to '/' for most sites)
  base: '/',

  // Experimental Fonts

  experimental: {
    fonts: [
      {
      provider: fontProviders.fontshare(),
      name: "Erode",
      cssVariable: "--font-erode"
    },
    {
      provider: fontProviders.fontshare(),
      name: "Spline Sans",
      cssVariable: "--font-spline"
    }
  ]
  },
  
  // Configure Vite plugins and server settings
  vite: {
    plugins: [
      tailwindcss() // Reverted to simpler form, configPath removed
    ],
    server: {
      fs: {
        allow: [
          // Allow the project root (default)
          '.',
          // Allow the src/assets directory to be served directly during development.
          // This is needed for cases where assets from src/assets/ are referenced
          // by direct string paths (e.g., in Markdown frontmatter processed by pages)
          // instead of ESM imports. For example, the image specified in 
          // 'src/content/about/index.md' and used by 'src/pages/about.astro'.
          path.resolve('./src/assets'),
        ],
      },
    },
  },
  
  // Configure Astro integrations
  integrations: [mdx(), icon(), sitemap()]
});