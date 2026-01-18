import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // IMPORTANT: Your custom domain
    site: 'https://www.tirth-gaudani.ct.ws',

    // For custom domains, we do NOT need a base path like '/portfolio'
    // base: '', 

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
