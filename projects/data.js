// projects/data.js

// Using window global instead of ES6 export for broader compatibility
window.projectsData = [
  {
    id: "shopify-plus",
    title: "ShopifyPlus E-commerce Platform",
    description: "A comprehensive e-commerce platform built with modern technologies, featuring advanced product management, real-time inventory tracking, and seamless payment integration.",
    fullDescription: [
      "ShopifyPlus represents the next generation of e-commerce platforms, designed to handle enterprise-level traffic while maintaining exceptional user experience. This project involved creating a scalable architecture that could support millions of products, handle thousands of concurrent users, and provide real-time inventory updates across multiple sales channels.",
      "The platform features advanced analytics, automated marketing tools, and seamless integration with popular payment gateways and shipping providers. We implemented a microservices architecture that ensures high availability and allows for independent scaling of different system components.",
      "One of the key challenges was maintaining data consistency across distributed systems while ensuring sub-second response times. Our solution involved implementing event-driven architecture with careful consideration for eventual consistency patterns.",
      "The result is a robust platform that has successfully handled Black Friday traffic spikes of over 50,000 concurrent users while maintaining 99.9% uptime and average response times under 200ms."
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["UI Design", "Frontend", "E-commerce"],
    category: "Web Development",
    workFor: "TechCorp Solutions",
    platform: ["Web", "Mobile Responsive"],
    year: "2024",
    month: "March",
    deliverables: ["UI/UX Design", "Frontend Development", "Backend API", "Admin Dashboard"],
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
    challenge: "Creating a scalable e-commerce platform that could handle high traffic loads during peak shopping seasons while maintaining fast page load times and secure payment processing.",
    solutions: "Implemented microservices architecture with Redis caching, optimized database queries, and used CDN for static assets. Added automated scaling on AWS to handle traffic spikes.",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    link: "project-detail.html?id=shopify-plus"
  },
  {
    id: "tokoku",
    title: "TokoKu - Point of Sale App",
    description: "A comprehensive Point of Sale application designed for small to medium businesses, featuring inventory management, sales tracking, and customer management.",
    fullDescription: [
      "TokoKu revolutionizes retail management by providing a complete Point of Sale solution tailored for Indonesian small and medium businesses. The app offers comprehensive inventory tracking, real-time sales analytics, and customer relationship management features.",
      "Built with modern mobile technology, it works seamlessly across multiple devices and provides offline functionality to ensure business continuity even without internet connection.",
      "The application includes advanced features like barcode scanning, receipt printing, multi-payment methods, and detailed sales reports that help business owners make informed decisions.",
      "Since launch, TokoKu has been adopted by over 500 retail businesses across Indonesia, helping them increase sales efficiency by 40% and reduce inventory management time by 60%."
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Mobile App", "POS", "Business"],
    category: "Mobile Development",
    workFor: "Local Business Solutions",
    platform: ["iOS", "Android"],
    year: "2024",
    month: "January",
    deliverables: ["Mobile App Design", "Cross-platform Development", "Backend API", "Payment Integration"],
    technologies: ["Flutter", "Firebase", "Dart", "Payment Gateway", "SQLite"],
    challenge: "Creating a reliable Point of Sale system that works offline and syncs seamlessly when connection is restored, while maintaining data integrity.",
    solutions: "Implemented local SQLite database with automatic sync mechanisms, created robust conflict resolution algorithms, and designed an intuitive interface suitable for various business types.",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    link: "project-detail.html?id=tokoku"
  },
  {
    id: "task-management",
    title: "TaskFlow Management System",
    description: "An enterprise-level task management system with advanced collaboration features, time tracking, and comprehensive reporting capabilities.",
    fullDescription: [
      "TaskFlow represents a complete reimagining of project management software, designed specifically for modern teams who need powerful collaboration tools without complexity. The system provides intuitive task organization, real-time progress tracking, and comprehensive reporting features that help teams stay aligned and productive.",
      "Built with scalability in mind, it supports everything from small startup teams to large enterprise organizations with thousands of users. The platform features advanced project templates, automated workflow triggers, and intelligent resource allocation suggestions based on team capacity and historical data.",
      "The real-time collaboration features include live document editing, instant messaging, video conferencing integration, and shared workspaces that sync across all devices. We implemented conflict resolution algorithms that ensure data integrity even when multiple users edit the same content simultaneously.",
      "TaskFlow has been adopted by over 500 companies worldwide, resulting in an average 40% improvement in project delivery times and a 60% reduction in communication overhead through its integrated collaboration tools."
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Web App", "Dashboard", "Enterprise"],
    category: "Web Development",
    workFor: "Enterprise Solutions Ltd",
    platform: ["Web", "Desktop"],
    year: "2023",
    month: "November",
    deliverables: ["System Architecture", "Frontend Development", "API Development", "Documentation"],
    technologies: [".NET Core", "Angular", "PostgreSQL", "SignalR", "Docker"],
    challenge: "Building a real-time collaborative environment that could scale to support thousands of concurrent users while maintaining data consistency and security.",
    solutions: "Utilized SignalR for real-time updates, implemented CQRS pattern for better performance, and added comprehensive caching strategies with Redis.",
    gallery: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    link: "project-detail.html?id=task-management"
  },
  {
    id: "portfolio-website",
    title: "Creative Portfolio Website",
    description: "A stunning portfolio website showcasing creative work with smooth animations, interactive galleries, and optimized performance.",
    fullDescription: [
      "This creative portfolio website pushes the boundaries of web design with cutting-edge animations and interactive elements. Built to showcase creative work in the most compelling way possible, it features smooth page transitions, interactive galleries, and performance optimizations that ensure fast loading times across all devices.",
      "The design process involved extensive user research and multiple iterations to create an experience that truly represents the artist's creative vision. We implemented advanced WebGL effects, custom shader programs, and physics-based animations that respond to user interactions in real-time.",
      "Performance was a critical consideration throughout development. We achieved sub-2-second load times through advanced image optimization, lazy loading strategies, and efficient asset bundling. The site maintains 60fps animations even on lower-end mobile devices.",
      "The portfolio has received recognition from several design communities and has been featured in web design showcases. It has helped the artist secure multiple high-profile clients and significantly increased their online visibility and engagement."
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Portfolio", "Animation", "Design"],
    category: "Web Design",
    workFor: "Creative Studios Inc",
    platform: ["Web"],
    year: "2024",
    month: "February",
    deliverables: ["Creative Direction", "UI/UX Design", "Frontend Development", "Performance Optimization"],
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Webpack"],
    challenge: "Creating a visually stunning portfolio that loads quickly and works seamlessly across all devices while maintaining artistic integrity.",
    solutions: "Implemented lazy loading for images, optimized animations for performance, and used progressive enhancement to ensure accessibility across different browsers and devices.",
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    link: "project-detail.html?id=portfolio-website"
  }
];

// For backward compatibility with ES6 modules
export const applications = window.projectsData;
