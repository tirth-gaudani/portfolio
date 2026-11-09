import { siteConfig } from '../data/siteConfig';

export const GET = () =>
    new Response(`User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.url}/sitemap-index.xml\n`, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
