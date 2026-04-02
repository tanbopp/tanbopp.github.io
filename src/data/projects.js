const projects = [
  {
    slug: "ecommerce-platform",
    name: "E-Commerce Platform",
    shortDescription: "A modern e-commerce platform with seamless shopping experience and intuitive product management.",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1280&h=720&fit=crop",
    banner: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop",
    workFor: "TechVentures Inc.",
    year: "2025",
    deliverables: "Full-stack Web Application, Admin Dashboard, REST API",
    platform: "Web",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe API"],
    showcase: [
      { text: "Live Demo", url: "https://example.com" },
      { text: "GitHub Repository", url: "https://github.com" },
    ],
    challenges: `The main challenge was building a scalable architecture that could handle high traffic during flash sales while maintaining real-time inventory updates across multiple concurrent sessions.

- Ensuring data consistency during concurrent purchases
- Optimizing database queries for product search with multiple filters
- Implementing real-time stock updates without page refresh`,
    solution: `We implemented an event-driven architecture using message queues and optimistic locking to handle concurrent transactions gracefully.

- Used Redis for caching frequently accessed product data
- Implemented WebSocket connections for real-time inventory updates
- Built a custom search engine with Elasticsearch for fast product discovery`,
    outline: `The platform serves as a complete solution for online retail businesses, providing everything from product catalog management to order fulfillment tracking.

- Product catalog with advanced filtering and search
- Shopping cart with persistent state across sessions
- Secure checkout flow with multiple payment options
- Admin dashboard for inventory and order management`,
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1280&h=720&fit=crop" },
      { type: "image", url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1280&h=720&fit=crop" },
      { type: "image", url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1280&h=720&fit=crop" },
    ],
  },
  {
    slug: "fitness-tracking-app",
    name: "Fitness Tracking App",
    shortDescription: "A comprehensive fitness tracking application with workout planning, progress analytics, and social features.",
    thumbnail: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1280&h=720&fit=crop",
    banner: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1920&h=1080&fit=crop",
    workFor: "FitLife Studios",
    year: "2024",
    deliverables: "Mobile Application, Backend API, Analytics Dashboard",
    platform: "iOS, Android",
    technologies: ["React Native", "Firebase", "TypeScript", "Chart.js", "Node.js"],
    showcase: [
      { text: "App Store", url: "https://apps.apple.com" },
    ],
    challenges: `Designing an intuitive interface that appeals to both beginners and advanced users while accurately tracking diverse workout types.

- Handling offline data sync when users work out without connectivity
- Accurate calorie estimation across different exercise types
- Battery optimization for continuous tracking sessions`,
    solution: `We built a modular tracking system with configurable workout templates and implemented a robust offline-first architecture.

- SQLite for local storage with background sync when connectivity returns
- Machine learning model for improved calorie estimation
- Geofencing and smart sensor management to optimize battery usage`,
    outline: `The app provides a complete fitness ecosystem, from workout planning to progress tracking, helping users achieve their health goals.

- Customizable workout plans with guided exercises
- Real-time progress tracking with detailed analytics
- Social features for workout sharing and challenges
- Integration with wearable devices`,
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1280&h=720&fit=crop" },
      { type: "image", url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1280&h=720&fit=crop" },
    ],
  },
  {
    slug: "brand-identity-system",
    name: "Brand Identity System",
    shortDescription: "Complete brand identity design system for a fintech startup, from logo to comprehensive design guidelines.",
    thumbnail: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1280&h=720&fit=crop",
    banner: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&h=1080&fit=crop",
    workFor: "NovaPay Financial",
    year: "2024",
    deliverables: "Brand Guidelines, Logo Suite, Design System, Marketing Collateral",
    platform: "Cross-platform",
    technologies: ["Figma", "Adobe Illustrator", "After Effects"],
    challenges: `Creating a brand identity that conveys trust and innovation in the competitive fintech space while remaining approachable to everyday consumers.

- Balancing professionalism with approachability
- Ensuring consistency across digital and print media
- Creating a scalable design system for a growing product suite`,
    solution: `We developed a modular design system built on a foundation of geometric shapes that symbolize stability, with carefully chosen color palettes that evolve across different product tiers.

- Created a comprehensive token system for colors, typography, and spacing
- Designed adaptive logo variants for different contexts and sizes
- Built an interactive brand guideline website for team reference`,
    outline: null,
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1280&h=720&fit=crop" },
      { type: "image", url: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1280&h=720&fit=crop" },
      { type: "image", url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1280&h=720&fit=crop" },
    ],
  },
  {
    slug: "real-estate-dashboard",
    name: "Real Estate Dashboard",
    shortDescription: "An analytics dashboard for real estate agents to track listings, client interactions, and market trends.",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1280&h=720&fit=crop",
    banner: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop",
    workFor: "PropertyHub",
    year: "2025",
    deliverables: "Web Dashboard, Data Pipeline, Reporting Module",
    platform: "Web",
    technologies: ["Next.js", "D3.js", "Python", "AWS", "MongoDB"],
    showcase: [
      { text: "Case Study", url: "https://example.com/case-study" },
    ],
    challenges: `Processing and visualizing large volumes of real estate data from multiple MLS sources with varying data formats and update frequencies.

- Normalizing data from 15+ different MLS providers
- Real-time market trend calculations across regions
- Creating meaningful visualizations for non-technical users`,
    solution: `We built a robust ETL pipeline that normalizes incoming data and a visualization layer that makes complex market data accessible.

- Apache Airflow for orchestrating data ingestion workflows
- Pre-computed aggregations for instant dashboard loading
- Interactive D3.js visualizations with drill-down capabilities`,
    outline: `A comprehensive analytics platform that empowers real estate professionals with data-driven insights for better decision-making.

- Market trend analysis with predictive indicators
- Portfolio management with performance tracking
- Client relationship management integration
- Automated reporting with customizable templates`,
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1280&h=720&fit=crop" },
      { type: "image", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=720&fit=crop" },
    ],
  },
]

export default projects
