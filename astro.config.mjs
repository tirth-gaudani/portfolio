import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // IMPORTANT: Your custom domain
    site: 'https://www.tirth-gaudani.ct.ws',

    // Old duplicate/demo routes now point to the redesigned pages
    redirects: {
        '/about-page': '/about',
        '/portfolio': '/work',
        '/gridx': '/',
        '/gridx/about-page': '/about',
        '/gridx/work': '/work',
        '/gridx/packages': '/packages',
        '/gridx/contact': '/contact',
        '/gridxlight': '/',
        '/gridxlight/about-page': '/about',
        '/gridxlight/work': '/work',
        '/gridxlight/packages': '/packages',
        '/gridxlight/contact': '/contact',
    },

    integrations: [sitemap()],
    compressHTML: true,
    build: {
        // Inline CSS = zero render-blocking requests (better FCP/LCP)
        inlineStylesheets: 'always',
        assets: 'assets',
    },
    // Self-hosted fonts with metric-matched fallbacks (no layout shift)
    experimental: {
        fonts: [
            { provider: fontProviders.google(), name: 'Sora', cssVariable: '--font-sora', weights: [600, 700, 800], fallbacks: ['sans-serif'] },
            { provider: fontProviders.google(), name: 'Inter', cssVariable: '--font-inter', weights: [400, 500, 600], fallbacks: ['sans-serif'] },
        ],
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
