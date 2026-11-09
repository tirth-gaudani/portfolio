import { siteConfig } from '../data/siteConfig';

export const GET = () =>
    Response.json({
        name: `${siteConfig.name} — ${siteConfig.role}`,
        short_name: siteConfig.name,
        description: siteConfig.summary,
        start_url: '/',
        scope: '/',
        display: 'standalone',
        lang: siteConfig.lang,
        background_color: siteConfig.themeColor,
        theme_color: siteConfig.themeColor,
        icons: [192, 512].map((n) => ({ src: `/icons/${n}.png`, sizes: `${n}x${n}`, type: 'image/png', purpose: 'any' })),
    });
