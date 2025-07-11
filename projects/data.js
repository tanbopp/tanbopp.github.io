// projects/data.js

// Using window global instead of ES6 export for broader compatibility
window.projectsData = [
  {
    id: "shopify-plus",
    title: "ShopifyPlus E-commerce Platform",
    description: "A comprehensive e-commerce platform built with modern technologies, featuring advanced product management, real-time inventory tracking, and seamless payment integration.",
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
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    link: "project-detail.html?id=shopify-plus"
  },
  {
    id: "fitness-tracker",
    title: "FitTrack Mobile App",
    description: "A comprehensive fitness tracking application with real-time workout monitoring, nutrition planning, and social features to connect with other fitness enthusiasts.",
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
      "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    link: "project-detail.html?id=fitness-tracker"
  },
  {
    id: "task-management",
    title: "TaskFlow Management System",
    description: "An enterprise-level task management system with advanced collaboration features, time tracking, and comprehensive reporting capabilities.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Web App", "Dashboard", "Enterprise"],
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
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    link: "project-detail.html?id=task-management"
  },
  {
    id: "portfolio-website",
    title: "Creative Portfolio Website",
    description: "A stunning portfolio website showcasing creative work with smooth animations, interactive galleries, and optimized performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Portfolio", "Animation", "Design"],
    category: "Web Design",
    platform: ["Web"],
    year: "2024",
    month: "February",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Webpack"],
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    link: "project-detail.html?id=portfolio-website"
  }
];

// For backward compatibility with ES6 modules
export const applications = window.projectsData;
