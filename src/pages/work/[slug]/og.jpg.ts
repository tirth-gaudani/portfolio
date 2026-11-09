// Social-share image per project, rendered from the same SVG artwork at build time.
import sharp from 'sharp';
import { projects, type Project } from '../../../data/siteConfig';
import { projectArt } from '../../../lib/art';

export const getStaticPaths = () => projects.map((p) => ({ params: { slug: p.slug }, props: { p } }));

export const GET = async ({ props }: { props: { p: Project } }) => {
    const png = await sharp(Buffer.from(projectArt(props.p))).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/jpeg' } });
};
