// Site Configuration - Centralized data for SEO and content
export const siteConfig = {
    name: 'Tirth Gaudani',
    title: 'Tirth Gaudani - Full Stack MERN Developer',
    description: 'Professional portfolio of Tirth Gaudani, a passionate MERN Stack Developer with 3+ years of experience in React, Node.js, MongoDB, and Express.js. Based in Ahmedabad, Gujarat.',
    url: 'https://www.tirth-gaudani.ct.ws',
    author: 'Tirth Gaudani',
    locale: 'en_US',
    logo: 'Tirth Gaudani',
    themeColor: '#7b68ee',
    twitter: '@tirthgaudani',
    keywords: [
        'MERN Stack Developer',
        'Full Stack Developer',
        'React Developer',
        'Node.js Developer',
        'Web Developer',
        'JavaScript Developer',
        'Tirth Gaudani',
        'Ahmedabad Developer',
        'Gujarat Developer',
        'NPM Package Author',
        'MongoDB',
        'Express.js',
        'Portfolio'
    ],
    social: {
        linkedin: 'https://linkedin.com/in/tirthgaudani',
        github: 'https://github.com/tirth-gaudani',
    },
    experience: {
        years: 3,
        clients: 10,
        projects: 10,
    },
};

export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Works', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
];

export const mobileNavigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Works', href: '/portfolio' },
    { name: 'My Packages', href: '/packages' },
];

export const projects = [
    {
        title: 'VPN Application',
        category: 'WEB DESIGN',
        image: '/img/project-1.png',
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)',
        large: true,
    },
    {
        title: 'Food Order System',
        category: 'MOBILE DESIGN',
        image: '/img/project-2.png',
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #e8e8ff 0%, #d8d8ff 100%)',
    },
    {
        title: 'Student Worksheet',
        category: 'BRANDING',
        image: '/img/project-3.png',
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #e8f0f8 0%, #d0e0f0 100%)',
    },
    {
        title: 'Clothing E-Commerce',
        category: 'BACK-END DEVELOPMENT',
        image: '/img/project-4.png',
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #fff8e8 0%, #ffeed0 100%)',
    },
    {
        title: 'Online E-Commerce',
        category: 'FRONT-END DEVELOPMENT',
        image: '/img/project-5.png',
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #e8f5ff 0%, #d0ebff 100%)',
    },
    {
        title: 'Mobile App',
        category: 'FULL STACK DEVELOPMENT',
        image: '/img/project-6.png',
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #e8ffe8 0%, #d0ffd0 100%)',
    },
];

export const packages = [
    {
        name: 'Images Watermark',
        description: 'Add watermarks to images using a simple Node.js utility.',
        url: 'https://www.npmjs.com/package/images-watermark',
    },
    {
        name: 'HTML to PDF',
        description: 'Convert HTML to high-quality PDF documents using Node.js.',
        url: 'https://www.npmjs.com/package/html-to-pdf',
    },
    {
        name: 'Letter Avatar Image',
        description: 'Generate avatars with initials as images dynamically.',
        url: 'https://www.npmjs.com/package/letter-avatar-image',
    },
    {
        name: 'React Maintenance',
        description: 'Add a maintenance screen in your React applications easily.',
        url: 'https://www.npmjs.com/package/react-maintenance',
    },
    {
        name: 'Node API Documentation',
        description: 'Automatically generate API documentation for Node.js backends.',
        url: 'https://www.npmjs.com/package/node-api-documentation',
    },
    {
        name: 'Check Disposable Email',
        description: 'Validate if an email is from a disposable provider.',
        url: 'https://www.npmjs.com/package/check-disposable-email',
    },
    {
        name: 'Postman Runtime Collection',
        description: 'Run Postman collections programmatically inside Node.js.',
        url: 'https://www.npmjs.com/package/postman-runtime-collection',
    },
    {
        name: 'Node Prisma Structure',
        description: 'Scaffold Prisma-based backend projects in Node.js efficiently.',
        url: 'https://www.npmjs.com/package/node-prisma-structure',
    },
    {
        name: 'Generate Node Structure',
        description: 'Generate Node.js project structure with ease.',
        url: 'https://www.npmjs.com/package/generate-node-structure',
    },
    {
        name: 'React Video Player',
        description: 'Feature-rich video player component for React applications.',
        url: 'https://www.npmjs.com/package/react-video-player',
    },
    {
        name: 'React Network Logger',
        description: 'A lightweight network logger for React.js and Next.js apps.',
        url: 'https://www.npmjs.com/package/react-network-logger',
    },
];

export const experience = [
    {
        date: 'Jun 2022 - Aug 2024',
        title: 'Full Stack Developer',
        company: 'Hyperlink InfoSystem',
    },
    {
        date: 'Sep 2024 - Oct 2025',
        title: 'Senior MERN Stack Developer',
        company: 'Nyusoft Solutions LLP',
    },
    {
        date: 'November 2025 - Present',
        title: 'Senior MERN Stack Developer',
        company: 'Smartway Technoway Pvt. Ltd.',
    },
];

export const education = [
    {
        date: '2019 - 2022',
        title: 'Bachelor of Computer Application (BCA)',
        company: 'Bholabhai Patel College of Computer Studies, Gandhinagar',
    },
    {
        date: '2022 - 2024',
        title: 'Master of Computer Application (MCA)',
        company: 'Shree Swaminarayan Institute of Technology, Gandhinagar',
    },
];
