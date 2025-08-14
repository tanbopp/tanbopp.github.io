// projects/data.js

// Using window global instead of ES6 export for broader compatibility
window.projectsData = [
  {
    id: "shopify-plus",
    title: "ShopifyPlus E-commerce Platform",
    description: "A comprehensive e-commerce platform built with modern technologies, featuring advanced product management, real-time inventory tracking, and seamless payment integration.",
    fullDescription: "ShopifyPlus represents the next generation of e-commerce platforms, designed to handle enterprise-level traffic while maintaining exceptional user experience. This project involved creating a scalable architecture that could support millions of products, handle thousands of concurrent users, and provide real-time inventory updates across multiple sales channels. The platform features advanced analytics, automated marketing tools, and seamless integration with popular payment gateways and shipping providers.",
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
    id: "fitness-tracker",
    title: "FitTrack Mobile App",
    description: "A comprehensive fitness tracking application with real-time workout monitoring, nutrition planning, and social features to connect with other fitness enthusiasts.",
    fullDescription: "FitTrack revolutionizes personal fitness management by combining advanced health monitoring with social engagement features. The app provides detailed workout analytics, personalized nutrition recommendations, and connects users with a community of fitness enthusiasts. Built with cross-platform compatibility in mind, it seamlessly integrates with popular health devices and platforms while maintaining strict privacy standards for sensitive health data.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Mobile App", "Flutter", "Health"],
    category: "Mobile Development",
    workFor: "HealthTech Innovations",
    platform: ["iOS", "Android"],
    year: "2024",
    month: "January",
    deliverables: ["Mobile App Design", "Cross-platform Development", "Backend API", "Real-time Analytics"],
    technologies: ["Flutter", "Firebase", "Dart", "Google Fit API", "Apple HealthKit"],
    challenge: "Integrating with multiple health data sources while ensuring data privacy and creating an intuitive user experience for users of all fitness levels.",
    solutions: "Implemented secure OAuth authentication, created modular widgets for different fitness metrics, and designed an adaptive UI that adjusts based on user preferences and fitness goals.",
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    link: "project-detail.html?id=fitness-tracker"
  },
  {
    id: "task-management",
    title: "TaskFlow Management System",
    description: "An enterprise-level task management system with advanced collaboration features, time tracking, and comprehensive reporting capabilities.",
    fullDescription: "TaskFlow represents a complete reimagining of project management software, designed specifically for modern teams who need powerful collaboration tools without complexity. The system provides intuitive task organization, real-time progress tracking, and comprehensive reporting features that help teams stay aligned and productive. Built with scalability in mind, it supports everything from small startup teams to large enterprise organizations with thousands of users.",
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
    fullDescription: "This creative portfolio website pushes the boundaries of web design with cutting-edge animations and interactive elements. Built to showcase creative work in the most compelling way possible, it features smooth page transitions, interactive galleries, and performance optimizations that ensure fast loading times across all devices. The design process involved extensive user research and multiple iterations to create an experience that truly represents the artist's creative vision.",
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
