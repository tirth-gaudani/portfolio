// Site Configuration - Centralized data for SEO and content
import type { ImageMetadata } from 'astro';
import trailverseCard from '../assets/img/trailverse-card.png';
import trailverseHero from '../assets/img/trailverse-hero.png';
import clothingCard from '../assets/img/clothing-card.png';
import clothingHero from '../assets/img/clothing-hero.png';
import vpnCard from '../assets/img/vpn-card.png';
import vpnHero from '../assets/img/vpn-hero.png';
import onlineShopCard from '../assets/img/online-shop-card.png';
import onlineShopHero from '../assets/img/online-shop-hero.png';
import foodOrderCard from '../assets/img/food-order-card.png';
import foodOrderHero from '../assets/img/food-order-hero.png';
import studentWorksheetCard from '../assets/img/student-worksheet-card.png';
export const siteConfig = {
    name: 'Tirth Gaudani',
    title: 'Tirth Gaudani - Top Rated MERN Stack Developer in India',
    description: 'Hire Tirth Gaudani, an expert Full Stack MERN Developer. Specializing in high-performance React, Node.js, and MongoDB web applications. Available for freelance & full-time projects in Ahmedabad, Gujarat, India.',
    url: 'https://www.tirth-gaudani.ct.ws',
    author: 'Tirth Gaudani',
    locale: 'en_US',
    logo: 'Tirth Gaudani',
    themeColor: '#7b68ee',
    twitter: '@tirthgaudani',
    profile: {
        role: 'MERN Stack Developer',
        location: 'Ahmedabad, Gujarat',
        aboutSummary: 'I am a Full Stack MERN Developer based in Ahmedabad, Gujarat. I build fast, scalable, and user-friendly web applications with React, Node.js, MongoDB, and Express.js.',
    },
    contact: {
        emails: [] as string[],
        phones: [] as string[],
        locationLines: ['Ahmedabad, Gujarat', 'India'] as string[],
        address: {
            addressLocality: 'Ahmedabad',
            addressRegion: 'Gujarat',
            addressCountry: 'India',
        },
    },
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
    },
    experience: {
        years: 3,
        clients: 13,
        projects: 13,
    },
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

export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Works', href: '/work' },
    { name: 'My Packages', href: '/packages' },
];

export const navigationGridx = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Works', href: '/work' },
];

export const mobileNavigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Works', href: '/work' },
    { name: 'My Packages', href: '/packages' },
];

export const mobileNavigationGridx = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Works', href: '/work' },
    { name: 'My Packages', href: '/packages' },
];

export const projects = [
    {
        title: 'TrailVerse',
        slug: 'trailverse',
        category: 'FULL STACK DEVELOPMENT',
        image: trailverseCard,
        heroImage: trailverseHero,
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)',
        large: true,
        description: 'A smart adventure and experience booking platform. Users can explore, filter, and book curated outdoor activities. Includes a role-based system for organizers to manage listings and an admin dashboard.',
        technologies: ['Next.js', 'PostgreSQL', 'Express', 'Node.js'],
        features: [
            'Curated adventure listings',
            'Role-based access control (Admin/Organizer)',
            'Real-time booking management',
            'SEO-friendly Next.js frontend',
            'Optimized RESTful APIs'
        ]
    },
    {
        title: 'Clothing Purchase App',
        slug: 'clothing-purchase-app',
        category: 'BACK-END DEVELOPER',
        image: clothingCard,
        heroImage: clothingHero,
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #fff5f5 0%, #fed7e2 100%)',
        description: 'A comprehensive e-commerce solution for clothing vendors. Features a robust backend for handling high traffic, a React.js admin portal, and real-time chat between vendors and users.',
        technologies: ['Node.js', 'Express', 'MySQL', 'React.js', 'Socket.io'],
        features: [
            'Scalable Admin & Vendor portals',
            'Real-time chat with Socket.io',
            'Optimized RESTful APIs',
            'Inventory and Order management',
            'Cross-platform mobile support'
        ]
    },
    {
        title: 'VPN Application',
        slug: 'vpn-application',
        category: 'WEB DESIGN',
        image: vpnCard,
        heroImage: vpnHero,
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #e6fffa 0%, #b2f5ea 100%)',
        description: 'A secure and fast VPN application designed to protect user privacy and bypass geo-restrictions. Features a modern, intuitive interface with real-time connection stats.',
        technologies: ['React', 'Electron', 'Node.js', 'OpenVPN'],
        features: [
            'Military-grade encryption',
            'No-logs policy',
            'Kill switch functionality',
            'Multi-platform support',
            'Split tunneling'
        ]
    },
    {
        title: 'Online Purchase App',
        slug: 'online-purchase-app',
        category: 'BACK-END DEVELOPER',
        image: onlineShopCard,
        heroImage: onlineShopHero,
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%)',
        description: 'A futuristic e-commerce platform with automated product data scraping and intelligent delivery tracking. Features a high-tech UI with holographic elements and secure crypto payment options.',
        technologies: ['Node.js', 'Express', 'MySQL', 'CI/CD'],
        features: [
            'Amazon product data scraping',
            'Scheduled jobs & Notifications',
            'Text Local SMS integration',
            'Product delivery tracking system',
            'High-performance database design'
        ]
    },
    {
        title: 'Food Order System',
        slug: 'food-order-system',
        category: 'WEB & MOBILE APP',
        image: foodOrderCard,
        heroImage: foodOrderHero,
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #fff5e6 0%, #ffe0b3 100%)',
        description: 'A complete food ordering solution for school lunches. Features a student ordering portal, a teacher management panel, and a vendor dashboard for seamless lunch operations.',
        technologies: ['Node.js', 'Express', 'MySQL', 'React.js'],
        features: [
            'Student lunch ordering portal',
            'Teacher management panel',
            'Vendor dashboard',
            'Seamless data synchronization',
            'Efficient order processing'
        ]
    },
    {
        title: 'Student Worksheet',
        slug: 'student-worksheet',
        category: 'FULL STACK DEVELOPMENT',
        image: studentWorksheetCard,
        heroImage: studentWorksheetCard,
        link: 'https://github.com/tirth-gaudani',
        gradient: 'linear-gradient(135deg, #e6f7ff 0%, #b3e0ff 100%)',
        description: 'An interactive web application for creating educational worksheets. Features a "Canva-like" drag-and-drop interface for teachers to design custom worksheets with text, images, and drawings.',
        technologies: ['Node.js', 'Express', 'MySQL', 'React.js'],
        features: [
            'Drag-and-drop worksheet builder',
            'Canvas drawing capabilities',
            'Teacher resource panel',
            'Image and text manipulation',
            'RESTful API integration'
        ]
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
