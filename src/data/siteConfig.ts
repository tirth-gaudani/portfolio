/* ==========================================================================
   SINGLE SOURCE OF TRUTH
   Every page, SEO tag, schema, manifest and robots.txt reads from this file.
   Edit content here — never hard-code it in a page.
   ========================================================================== */
import profileDark from '../assets/img/profile-dark.png';
import profileLight from '../assets/img/profile-light.png';

/* ---------- Date helpers ("2022-06" = June 2022, "2019" = year only) ---------- */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const fmt = (d: string | null) => {
    if (!d) return 'Present';
    const [y, m] = d.split('-');
    return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
};
export const period = (item: { start: string; end: string | null }) => `${fmt(item.start)} – ${fmt(item.end)}`;
const yearsSince = (d: string) => Math.floor((Date.now() - new Date(`${d.length === 4 ? `${d}-01` : d}-01`).getTime()) / 31_557_600_000);

/* ---------- Career (newest first) — years of experience is calculated from this ---------- */
export const experience = [
    { title: 'Senior MERN Stack Developer', company: 'Smartway Technoway Pvt. Ltd.', start: '2025-11', end: null },
    { title: 'Senior MERN Stack Developer', company: 'Nyusoft Solutions LLP', start: '2024-09', end: '2025-10' },
    { title: 'Full Stack Developer', company: 'Hyperlink InfoSystem', start: '2022-06', end: '2024-08' },
];

export const education = [
    { title: 'Master of Computer Application (MCA)', company: 'Shree Swaminarayan Institute of Technology', city: 'Gandhinagar', start: '2022', end: '2024' },
    { title: 'Bachelor of Computer Application (BCA)', company: 'Bholabhai Patel College of Computer Studies', city: 'Gandhinagar', start: '2019', end: '2022' },
];

const careerStart = experience[experience.length - 1].start;
const years = yearsSince(careerStart);
export const currentJob = experience.find((e) => !e.end) ?? experience[0];

/* ---------- Site & person ---------- */
export const siteConfig = {
    name: 'Tirth Gaudani',
    url: 'https://www.tirth-gaudani.ct.ws',
    lang: 'en',
    locale: 'en_US',
    themeColor: '#05050b',
    twitter: '@tirthgaudani',
    role: 'MERN Stack Developer',
    roles: ['MERN Stack Developer', 'Backend Engineer', 'Open-source Author'],
    location: 'Ahmedabad, Gujarat',
    summary: 'I am a Full Stack MERN Developer based in Ahmedabad, Gujarat. I build fast, scalable, and user-friendly web applications with React, Node.js, MongoDB, and Express.js.',
    available: true,
    availability: 'Available for freelance & full-time',
    resume: 'https://drive.google.com/uc?export=download&id=1YK_fuFtL8g7-JYsbf0Z0SORF7iskGhfB',
    photo: { dark: profileDark, light: profileLight },
    /** Source for every generated icon (header logo, favicon, touch icon, manifest). */
    logo: 'src/assets/img/tg-logo-dark.png',
    social: {
        linkedin: 'https://www.linkedin.com/in/tirthgaudani',
        github: 'https://github.com/tirth-gaudani',
    },
    contact: {
        /** Public email — enables the contact form (opens the visitor's mail app). */
        email: '',
        /** Optional form backend (Formspree / Web3Forms URL). Sends messages directly when set. */
        formEndpoint: '',
        /** Web3Forms only: public access key. */
        formAccessKey: '',
        address: { addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' },
        locationText: 'Ahmedabad, Gujarat, India',
    },
    stats: { years, clients: 13, projects: 13 },
    careerStart,
    keywords: [
        'Tirth Gaudani', 'MERN Stack Developer', 'Full Stack Developer India', 'Hire React Developer',
        'Node.js Developer', 'MongoDB', 'Web Developer Ahmedabad', 'Freelance Web Developer',
        'JavaScript Developer', 'Backend Developer', 'NPM Package Author', 'Next.js Developer',
    ],
    ribbon: ['MERN Stack', 'React.js', 'Node.js', 'Next.js', 'TypeScript', 'REST APIs', 'Socket.io', 'PostgreSQL'],
    expertise: [
        { name: 'React.js', iconSrc: '/img/react-js.svg' },
        { name: 'Node.js', iconSrc: '/img/node.js.svg' },
        { name: 'Express.js', iconSrc: '/img/express-js.svg' },
        { name: 'Next.js', iconSrc: '/img/next.js.svg' },
        { name: 'Prisma', iconSrc: '/img/Prisma.svg' },
        { name: 'MySQL', iconSrc: '/img/mysql.svg' },
        { name: 'PostgreSQL', iconSrc: '/img/postgresql.svg' },
        { name: 'JavaScript', iconSrc: '/img/JavaScript.svg' },
        { name: 'TypeScript', iconSrc: '/img/TypeScript.svg' },
        { name: 'NestJS', iconSrc: '/img/Nest.js.svg' },
        { name: 'Socket.io', iconSrc: '/img/socket.io.svg' },
    ],
};

/* ---------- Navigation ---------- */
export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about/' },
    { name: 'Works', href: '/work/' },
    { name: 'Packages', href: '/packages/' },
];

/* ---------- Projects ---------- */
/** `art` picks the illustration layout, `colors` its two accent colours (see src/lib/art.ts). */
export type Project = {
    title: string; slug: string; category: string; art: 'booking' | 'chat' | 'vpn' | 'shop' | 'food' | 'canvas';
    colors: [string, string]; link: string; description: string; technologies: string[]; features: string[];
};

export const projects: Project[] = [
    {
        title: 'TrailVerse',
        slug: 'trailverse',
        category: 'Full Stack Development',
        art: 'booking',
        colors: ['#10b981', '#0ea5e9'],
        link: 'https://github.com/tirth-gaudani',
        description: 'A smart adventure and experience booking platform. Users can explore, filter, and book curated outdoor activities. Includes a role-based system for organizers to manage listings and an admin dashboard.',
        technologies: ['Next.js', 'PostgreSQL', 'Express', 'Node.js'],
        features: ['Curated adventure listings', 'Role-based access control (Admin/Organizer)', 'Real-time booking management', 'SEO-friendly Next.js frontend', 'Optimized RESTful APIs'],
    },
    {
        title: 'Clothing Purchase App',
        slug: 'clothing-purchase-app',
        category: 'Back-end Development',
        art: 'chat',
        colors: ['#ec4899', '#8b5cf6'],
        link: 'https://github.com/tirth-gaudani',
        description: 'A comprehensive e-commerce solution for clothing vendors. Features a robust backend for handling high traffic, a React.js admin portal, and real-time chat between vendors and users.',
        technologies: ['Node.js', 'Express', 'MySQL', 'React.js', 'Socket.io'],
        features: ['Scalable Admin & Vendor portals', 'Real-time chat with Socket.io', 'Optimized RESTful APIs', 'Inventory and Order management', 'Cross-platform mobile support'],
    },
    {
        title: 'VPN Application',
        slug: 'vpn-application',
        category: 'Web Design',
        art: 'vpn',
        colors: ['#22d3ee', '#6366f1'],
        link: 'https://github.com/tirth-gaudani',
        description: 'A secure and fast VPN application designed to protect user privacy and bypass geo-restrictions. Features a modern, intuitive interface with real-time connection stats.',
        technologies: ['React', 'Electron', 'Node.js', 'OpenVPN'],
        features: ['Military-grade encryption', 'No-logs policy', 'Kill switch functionality', 'Multi-platform support', 'Split tunneling'],
    },
    {
        title: 'Online Purchase App',
        slug: 'online-purchase-app',
        category: 'Back-end Development',
        art: 'shop',
        colors: ['#3b82f6', '#a855f7'],
        link: 'https://github.com/tirth-gaudani',
        description: 'A futuristic e-commerce platform with automated product data scraping and intelligent delivery tracking. Features a high-tech UI with holographic elements and secure crypto payment options.',
        technologies: ['Node.js', 'Express', 'MySQL', 'CI/CD'],
        features: ['Amazon product data scraping', 'Scheduled jobs & Notifications', 'Text Local SMS integration', 'Product delivery tracking system', 'High-performance database design'],
    },
    {
        title: 'Food Order System',
        slug: 'food-order-system',
        category: 'Web & Mobile App',
        art: 'food',
        colors: ['#f97316', '#facc15'],
        link: 'https://github.com/tirth-gaudani',
        description: 'A complete food ordering solution for school lunches. Features a student ordering portal, a teacher management panel, and a vendor dashboard for seamless lunch operations.',
        technologies: ['Node.js', 'Express', 'MySQL', 'React.js'],
        features: ['Student lunch ordering portal', 'Teacher management panel', 'Vendor dashboard', 'Seamless data synchronization', 'Efficient order processing'],
    },
    {
        title: 'Student Worksheet',
        slug: 'student-worksheet',
        category: 'Full Stack Development',
        art: 'canvas',
        colors: ['#a3e635', '#22d3ee'],
        link: 'https://github.com/tirth-gaudani',
        description: 'An interactive web application for creating educational worksheets. Features a "Canva-like" drag-and-drop interface for teachers to design custom worksheets with text, images, and drawings.',
        technologies: ['Node.js', 'Express', 'MySQL', 'React.js'],
        features: ['Drag-and-drop worksheet builder', 'Canvas drawing capabilities', 'Teacher resource panel', 'Image and text manipulation', 'RESTful API integration'],
    },
];

/* ---------- npm packages ---------- */
export const packages = [
    { name: 'Images Watermark', npm: 'images-watermark', description: 'Add watermarks to images using a simple Node.js utility.' },
    { name: 'HTML to PDF', npm: 'html-to-pdf', description: 'Convert HTML to high-quality PDF documents using Node.js.' },
    { name: 'Letter Avatar Image', npm: 'letter-avatar-image', description: 'Generate avatars with initials as images dynamically.' },
    { name: 'React Maintenance', npm: 'react-maintenance', description: 'Add a maintenance screen in your React applications easily.' },
    { name: 'Node API Documentation', npm: 'node-api-documentation', description: 'Automatically generate API documentation for Node.js backends.' },
    { name: 'Check Disposable Email', npm: 'check-disposable-email', description: 'Validate if an email is from a disposable provider.' },
    { name: 'Postman Runtime Collection', npm: 'postman-runtime-collection', description: 'Run Postman collections programmatically inside Node.js.' },
    { name: 'Node Prisma Structure', npm: 'node-prisma-structure', description: 'Scaffold Prisma-based backend projects in Node.js efficiently.' },
    { name: 'Generate Node Structure', npm: 'generate-node-structure', description: 'Generate Node.js project structure with ease.' },
    { name: 'React Video Player', npm: 'react-video-player', description: 'Feature-rich video player component for React applications.' },
    { name: 'React Network Logger', npm: 'react-network-logger', description: 'A lightweight network logger for React.js and Next.js apps.' },
].map((p) => ({ ...p, url: `https://www.npmjs.com/package/${p.npm}` }));

/* ---------- Page SEO + headings (title ≤ 60 chars, description ≤ 160 chars) ---------- */
export const pages = {
    home: {
        title: `${siteConfig.name} — ${siteConfig.role} in India`,
        description: `${siteConfig.name} is a ${siteConfig.role} with ${years}+ years of experience building fast, scalable React, Node.js and MongoDB web apps. Based in ${siteConfig.location}.`,
    },
    about: {
        title: `About ${siteConfig.name} — ${siteConfig.role}`,
        description: `Experience, education and tech stack of ${siteConfig.name}, a ${siteConfig.role} with ${years}+ years building React, Node.js and MongoDB applications.`,
        eyebrow: 'Self-summary', heading: "Hello, I'm", highlight: 'Tirth.',
    },
    work: {
        title: `Projects & Case Studies — ${siteConfig.name}`,
        description: `Explore web and full-stack projects by ${siteConfig.name}: e-commerce, booking platforms, real-time apps and dashboards built with React, Node.js and SQL.`,
        eyebrow: 'Selected works', heading: 'Projects that', highlight: 'ship.',
        intro: 'A collection of products solving real-world problems with clean code and thoughtful design.',
    },
    packages: {
        title: `Open-source npm Packages — ${siteConfig.name}`,
        description: `Open-source npm packages by ${siteConfig.name} for Node.js and React: image watermarking, HTML to PDF, API docs, network logging and more.`,
        eyebrow: 'Open source', heading: 'My', highlight: 'packages.',
        intro: `${packages.length} open-source npm packages built to boost developer productivity.`,
    },
    contact: {
        title: `Contact ${siteConfig.name} — Hire a MERN Developer`,
        description: `Get in touch with ${siteConfig.name} for freelance projects, full-time roles and collaborations in React, Node.js and full-stack development.`,
        eyebrow: 'Usually replies within a day', heading: "Let's work", highlight: 'together.',
        intro: "Tell me about your product, idea or role. I'd love to hear what you're building.",
    },
    notFound: {
        title: `Page not found — ${siteConfig.name}`,
        description: 'The page you are looking for could not be found. Return to the homepage to explore the portfolio.',
    },
};
