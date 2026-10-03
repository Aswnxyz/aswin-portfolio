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
    description: "A smart queue management platform for businesses with real-time updates and analytics.",
    features: [
      "REAL-TIME QUEUE MANAGEMENT",
      "CUSTOMER FLOW",
      "BUSINESS DASHBOARD",
      "ANALYTICS & REPORTS",
      "AUTHENTICATION",
      "MCP INTEGRATION",
    ],
    techStack: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "NODE.JS",
      "MONGODB",
      "SOCKET.IO",
      "TAILWIND CSS",
      "DOCKER",
    ],
    liveUrl: "https://qzen.vercel.app",
    githubUrl: "https://github.com/aswin-a/qzen",
    buildProcess: [
      {
        step: "01",
        phase: "IDEA",
        description: "Convert business requirements into a scalable queue management system with real-time capabilities.",
      },
      {
        step: "02",
        phase: "SYSTEM",
        description: "Architect low-latency event broadcasting and customer token synchronization across merchant counters.",
      },
      {
        step: "03",
        phase: "BUILD",
        description: "Implement responsive counter consoles, real-time waiting screens, and resilient WebSocket connections.",
      },
      {
        step: "04",
        phase: "SHIP",
        description: "Deploy containerized services with automated health checks, uptime monitoring, and persistent state.",
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
    description: "A high-performance social networking platform focused on real-time messaging, channels, and community interaction.",
    features: [
      "REAL-TIME MESSAGING",
      "USER PROFILES & FEEDS",
      "COMMUNITY CHANNELS",
      "MEDIA ASSET HANDLING",
      "PRESENCE & NOTIFICATIONS",
      "ROLE PERMISSIONS",
    ],
    techStack: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "NODE.JS",
      "POSTGRESQL",
      "SOCKET.IO",
      "TAILWIND CSS",
      "DOCKER",
    ],
    liveUrl: "https://zoro-platform.vercel.app",
    githubUrl: "https://github.com/aswin-a/zoro",
    buildProcess: [
      {
        step: "01",
        phase: "IDEA",
        description: "Define requirements for a distraction-free, low-latency social interaction layer with persistent chat.",
      },
      {
        step: "02",
        phase: "SYSTEM",
        description: "Design relational data models and WebSocket event routing for concurrent users across channels.",
      },
      {
        step: "03",
        phase: "BUILD",
        description: "Construct message delivery queues, optimistic UI updates, and responsive layouts with minimal overhead.",
      },
      {
        step: "04",
        phase: "SHIP",
        description: "Deploy production builds with database connection pooling and secure real-time socket sessions.",
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
    description: "An exploratory digital sensory concept translating olfactory notes and fragrance pyramids into an interactive visual atmosphere.",
    features: [
      "OLFACTORY NOTE VISUALIZATION",
      "FRAGRANCE ACCORD EXPLORATION",
      "INTERACTIVE NOTES PYRAMID",
      "EDITORIAL PRODUCT SHOWCASE",
      "SCENT DISCOVERY FLOW",
      "RESPONSIVE EXPERIENCE",
    ],
    techStack: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "TAILWIND CSS",
    ],
    liveUrl: "https://aurel-concept.vercel.app",
    githubUrl: "https://github.com/aswin-a/aurel-fragrance",
    buildProcess: [
      {
        step: "01",
        phase: "IDEA",
        description: "Conceptualize a sensory translation between scent pyramid notes and minimalist visual typography.",
      },
      {
        step: "02",
        phase: "SYSTEM",
        description: "Structure ingredient taxonomy, note weights, and dynamic aesthetic themes in a client-side model.",
      },
      {
        step: "03",
        phase: "BUILD",
        description: "Code interactive discovery flows with precise typography, subtle transitions, and responsive grid layouts.",
      },
      {
        step: "04",
        phase: "SHIP",
        description: "Package as a lightweight, accessible digital concept demonstration optimized for all viewport sizes.",
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
    description: "A streamlined full-stack commerce platform engineered for fast catalog browsing, cart persistence, and secure checkout.",
    features: [
      "PRODUCT CATALOG & FILTERING",
      "PERSISTENT CART STATE",
      "SECURE CHECKOUT FLOW",
      "ORDER MANAGEMENT",
      "INVENTORY TRACKING",
      "RESPONSIVE COMMERCE UI",
    ],
    techStack: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "NODE.JS",
      "MONGODB",
      "TAILWIND CSS",
    ],
    liveUrl: "https://shopzen-store.vercel.app",
    githubUrl: "https://github.com/aswin-a/shopzen",
    buildProcess: [
      {
        step: "01",
        phase: "IDEA",
        description: "Map essential commerce interactions to eliminate friction and latency in digital retail browsing.",
      },
      {
        step: "02",
        phase: "SYSTEM",
        description: "Plan inventory schemas, transactional cart state management, and clear order lifecycle transitions.",
      },
      {
        step: "03",
        phase: "BUILD",
        description: "Construct optimized server-rendered product views, real-time inventory checks, and checkout endpoints.",
      },
      {
        step: "04",
        phase: "SHIP",
        description: "Deploy with database indexing, caching strategies, and verified payment handlers for high reliability.",
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
    email: "aswin.builds@gmail.com",
    github: "https://github.com/aswin-a",
    linkedin: "https://linkedin.com/in/aswin-a",
    status: "AVAILABLE FOR PROJECTS",
    year: "2026",
  },
};
