// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'tough-cookie/dist/cookie/index.js': 'tough-cookie',
        'tough-cookie/dist/cookie/index.js?commonjs-external': 'tough-cookie'
      }
    },
    ssr: {
      external: ['yahoo-finance2']
    }
  },

  integrations: [react()],
  output: 'server',
  adapter: vercel()
});