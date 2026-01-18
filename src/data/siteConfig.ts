// Site Configuration - Centralized data for SEO and content
export const siteConfig = {
    name: 'Tirth Gaudani',
    title: 'Tirth Gaudani - Top Rated MERN Stack Developer in India',
    description: 'Hire Tirth Gaudani, an expert Full Stack MERN Developer. Specializing in high-performance React, Node.js, and MongoDB web applications. Available for freelance & full-time projects in Ahmedabad, Gujarat, India.',
    url: 'https://www.tirth-gaudani.ct.ws',
    author: 'Tirth Gaudani',
    locale: 'en_US',
    logo: 'GridX',
    themeColor: '#7b68ee',
    twitter: '@tirthgaudani',
    // HIGH TRAFFIC KEYWORDS FOR INDEXING
    keywords: [
        'Tirth Gaudani',
        'MERN Stack Developer',
        'Full Stack Developer India',
        'Hire React Developer',
        'Node.js Expert',
        'MongoDB Specialist',
        'Web Developer Ahmedabad',
        'Best Freelance Web Developer',
        'JavaScript Expert',
        'Frontend Developer',
        'Backend Developer',
        'Custom Web Application Development',
        'Responsive Website Design',
        'NPM Package Creator',
        'Software Engineer Gujarat',
        'Portfolio Website',
        'React.js',
        'Express.js',
        'Next.js Developer',
        'Top Rated Developer'
    ],
    social: {
        linkedin: 'https://linkedin.com/in/tirthgaudani',
        github: 'https://github.com/tirth-gaudani',
        dribbble: 'https://dribbble.com',
        twitter: 'https://twitter.com',
    },
    experience: {
        years: 3,
        clients: 13,
        projects: 13,
    },
};

export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Works', href: '/portfolio' },
    // { name: 'Contact', href: '/contact' },
    { name: 'My Packages', href: '/packages' },
];

export const mobileNavigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Works', href: '/portfolio' },
    { name: 'My Packages', href: '/packages' },
    // { name: 'Contact', href: '/contact' },
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
    {
        title: 'SaaS Dashboard',
        category: 'DASHBOARD DESIGN',
        image: '/img/project-1.png',
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
    },
    {
        title: 'Social Media App',
        category: 'APP DEVELOPMENT',
        image: '/img/project-2.png',
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #d0f0c0 0%, #c0e0b0 100%)',
    },
    {
        title: 'Portfolio V1',
        category: 'WEB DEVELOPMENT',
        image: '/img/project-3.png',
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #e0c0ff 0%, #d0b0ff 100%)',
    }
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
