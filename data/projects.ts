export interface BuildStep {
  step: string;
  phase: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  status: "BUILT" | "CONCEPT";
  year: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  buildProcess: BuildStep[];
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    slug: "qzen",
    name: "QZEN",
    category: "PRODUCT",
    status: "BUILT",
    year: "2026",
    subtitle: "QUEUE MANAGEMENT PLATFORM",
    description: "A digital queue management platform for businesses with real-time operations, analytics, and authenticated MCP tooling.",
    features: [
      "REAL-TIME QUEUE OPERATIONS",
      "CUSTOMER QUEUE FLOW",
      "BUSINESS DASHBOARD",
      "ANALYTICS & QUEUE HISTORY",
      "BROWSER PUSH NOTIFICATIONS",
      "AUTHENTICATED MCP INTEGRATION",
    ],
    techStack: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "NODE.JS",
      "MONGODB",
      "MONGOOSE",
      "SOCKET.IO",
      "BETTER AUTH",
      "MCP",
      "TAILWIND CSS",
    ],
    liveUrl: "https://qzen.onrender.com/",
    githubUrl: "https://github.com/Aswnxyz/qzen.git",
    buildProcess: [
      {
        step: "01",
        phase: "IDEA",
        description: "Turn physical waiting into a simple digital queue experience for businesses and their customers.",
      },
      {
        step: "02",
        phase: "SYSTEM",
        description: "Model queues, sessions, entries and ownership with predictable state transitions, authenticated access, and real-time updates.",
      },
      {
        step: "03",
        phase: "BUILD",
        description: "Build queue operations, analytics, MCP tools, Socket.IO updates, and browser push notifications around the core queue system.",
      },
      {
        step: "04",
        phase: "SHIP",
        description: "Deliver customer and business workflows through a responsive web application with live queue status and authenticated management.",
      },
    ],
  },
  {
    id: "02",
    slug: "zoro",
    name: "ZORO",
    category: "SYSTEM",
    status: "BUILT",
    year: "2025",
    subtitle: "SOCIAL PLATFORM",
    description: "A microservice-based social platform for bikers with real-time messaging, communities, events, and video calling.",
    features: [
      "MICROSERVICE ARCHITECTURE",
      "REAL-TIME MESSAGING",
      "SOCIAL FEED & MEDIA",
      "COMMUNITIES & EVENTS",
      "VIDEO CALLING",
      "REAL-TIME NOTIFICATIONS",
    ],
    techStack: [
      "REACT",
      "VITE",
      "REDUX TOOLKIT",
      "TAILWIND CSS",
      "NODE.JS",
      "EXPRESS.JS",
      "MONGODB",
      "MONGOOSE",
      "RABBITMQ",
      "SOCKET.IO",
      "DOCKER",
      "KUBERNETES",
      "AWS S3",
      "CLOUDINARY",
    ],
    liveUrl: "https://zoro-platform.vercel.app",
    githubUrl: "https://github.com/Aswnxyz/Project_ZORO-social-network-for--bikers.git",
    buildProcess: [
      {
        step: "01",
        phase: "IDEA",
        description: "Build a social platform around the way bikers connect, share content, discover communities, and participate in events.",
      },
      {
        step: "02",
        phase: "SYSTEM",
        description: "Split the platform into independent services for users, posts, messaging, notifications, communities, events, and administration, with RabbitMQ handling service communication.",
      },
      {
        step: "03",
        phase: "BUILD",
        description: "Build the social feed, real-time messaging, notifications, community and event workflows, media handling, and video calling across the distributed system.",
      },
      {
        step: "04",
        phase: "SHIP",
        description: "Containerize the services with Docker and deploy the system to Kubernetes with automated service builds and rollouts.",
      },
    ],
  },
  {
    id: "03",
    slug: "aurel",
    name: "AUREL",
    category: "EXPERIENCE",
    status: "CONCEPT",
    year: "2026",
    subtitle: "DIGITAL FRAGRANCE CONCEPT",
    description: "A cinematic luxury fragrance website concept built around scroll-driven storytelling, interactive motion, and responsive editorial design.",
    features: [
      "CINEMATIC SCROLL-DRIVEN HERO",
      "SCROLL-CONTROLLED VIDEO",
      "EDITORIAL PRODUCT STORYTELLING",
      "GSAP MOTION & TRANSITIONS",
      "SMOOTH LENIS SCROLLING",
      "RESPONSIVE & REDUCED-MOTION SUPPORT",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JAVASCRIPT",
      "VITE",
      "GSAP",
      "LENIS",
      "FFMPEG",
    ],
    liveUrl: "https://aurel-luxury-fragrance.vercel.app/",
    githubUrl: "https://github.com/Aswnxyz/aurel-luxury-fragrance.git",
    buildProcess: [
      {
        step: "01",
        phase: "IDEA",
        description: "Create a luxury fragrance experience where the product story unfolds through cinematic visuals and scroll interaction.",
      },
      {
        step: "02",
        phase: "SYSTEM",
        description: "Structure the experience around scroll-driven sections for composition, flacon, materials, collection, and product specifications.",
      },
      {
        step: "03",
        phase: "BUILD",
        description: "Build the scroll-controlled video, smooth scrolling, GSAP transitions, responsive layouts, and interactive product storytelling.",
      },
      {
        step: "04",
        phase: "SHIP",
        description: "Optimize the visual assets and responsive behavior for a polished experience across desktop and mobile, with reduced-motion support.",
      },
    ],
  },
  {
    id: "04",
    slug: "shopzen",
    name: "SHOPZEN",
    category: "COMMERCE",
    status: "BUILT",
    year: "2025",
    subtitle: "E-COMMERCE PLATFORM",
    description: "Full-stack e-commerce platform with product management, payments, orders, and customer workflows.",
    features: [
      "PRODUCT & VARIANT MANAGEMENT",
      "SEARCH & PRODUCT FILTERING",
      "CART & WISHLIST",
      "ORDERS & RETURNS",
      "RAZORPAY PAYMENTS & WALLET",
      "INVOICE PDF GENERATION",
    ],
    techStack: [
      "NODE.JS",
      "EXPRESS.JS",
      "EJS",
      "MONGODB",
      "MONGOOSE",
      "RAZORPAY",
      "MULTER",
      "CLOUDINARY",
      "NODEMAILER",
      "PDFKIT",
    ],
    liveUrl: "https://shopzen-store.vercel.app",
    githubUrl: "https://github.com/Aswnxyz/Project_ShopZen.git",
    buildProcess: [
      {
        step: "01",
        phase: "IDEA",
        description: "Build a complete e-commerce platform covering the core journey from product discovery to payment and order management.",
      },
      {
        step: "02",
        phase: "SYSTEM",
        description: "Structure customer and admin workflows around products, variants, authentication, cart, wishlist, orders, payments, and inventory management.",
      },
      {
        step: "03",
        phase: "BUILD",
        description: "Build product management, search and filtering, image handling, Razorpay payments, wallet and order workflows, email verification, and PDF invoices.",
      },
      {
        step: "04",
        phase: "SHIP",
        description: "Connect the customer and admin experiences into a complete web application with session-based authentication and integrated payment and order workflows.",
      },
    ],
  },
];

export const BUILD_SHEET_META = {
  name: "ASWIN A.",
  role: "FULL-STACK DEVELOPER",
  tagline: "I turn ideas into working digital products.",
  coreIdea: "IDEA → BUILD → SHIP",
  categories: ["PRODUCTS", "SYSTEMS", "INTERFACES"],
  techStack: [
    "REACT",
    "NEXT.JS",
    "TYPESCRIPT",
    "NODE.JS",
    "MONGODB",
    "POSTGRESQL",
    "SOCKET.IO",
    "TAILWIND CSS",
    "DOCKER",
  ],
  contact: {
    heading: "Let's build something great.",
    cta: "READY TO BUILD? LET'S TALK.",
    email: "connectaswin.dev@gmail.com",
    github: "https://github.com/Aswnxyz",
    linkedin: "https://linkedin.com/in/aswin-a-dev",
    fiverr: "https://www.fiverr.com/itsaswindev",
    resume: "/resume.pdf",
    status: "AVAILABLE FOR PROJECTS",
    year: "2026",
  },
};
