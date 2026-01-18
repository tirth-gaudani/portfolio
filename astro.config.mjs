import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // IMPORTANT: Change this to your GitHub Pages URL
    // For custom domain: 'https://www.tirth-gaudani.ct.ws'
    // For github.io: 'https://tirth-gaudani.github.io'
    site: 'https://www.tirth-gaudani.ct.ws',

    // If NOT using a custom domain, uncomment the base path:
    // base: '/portfolio',  // Your repo name

    integrations: [sitemap()],
    compressHTML: true,
    build: {
        inlineStylesheets: 'auto',
        assets: 'assets',
    },
    vite: {
        build: {
            cssMinify: true,
            minify: 'esbuild',
        },
    },
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
        },
        remotePatterns: [{ protocol: 'https' }],
    },
});
