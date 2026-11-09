// Brand icon (TG shield on a dark rounded tile) in every size the site needs:
// 32 favicon · 180 apple-touch · 192/512 manifest.
import sharp from 'sharp';
import { siteConfig } from '../../data/siteConfig';

const ICON_SIZES = [32, 180, 192, 512];
export const getStaticPaths = () => ICON_SIZES.map((s) => ({ params: { size: String(s) } }));

export const GET = async ({ params }: { params: { size: string } }) => {
    const n = Number(params.size);
    const inner = Math.round(n * 0.7);
    const tile = Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${n}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#231a5c"/><stop offset="1" stop-color="#07061a"/></linearGradient></defs><rect width="${n}" height="${n}" rx="${n * 0.24}" fill="url(#g)"/></svg>`,
    );
    const logo = await sharp(siteConfig.logo).trim().resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
    const png = await sharp(tile).composite([{ input: logo, gravity: 'center' }]).png({ compressionLevel: 9 }).toBuffer();
    return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
