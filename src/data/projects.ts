export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: string[];
  signals?: {
    scale?: string;
    architecture?: string;
    backend?: string;
    data?: string;
    models?: string;
    output?: string;
  };
};

export const featuredProjects: Project[] = [
  {
    title: "TicketHub",
    description: "Enterprise complaint management platform with structured workflows and role-aware access.",
    tags: ["Backend", "RBAC", "Architecture"],
    image: "/hero-bg.png",
    category: ["fullstack", "backend"],
    signals: {
      scale: "1200+ users",
      architecture: "Multi-tenant + RBAC",
      backend: "Type-safe API + layered design",
    },
  },
  {
    title: "AI-Powered Smart Wardrobe",
    description: "RAG-driven outfit recommendation system with contextual retrieval and metadata-aware ranking.",
    tags: ["AI", "RAG", "Computer Vision"],
    image: "/hero-bg.png",
    category: ["ai"],
    signals: {
      architecture: "Retrieval + generation pipeline",
      backend: "Context-aware inference orchestration",
      output: "Personalized recommendation stream",
    },
  },
  {
    title: "Multi-Threaded HTTP Server",
    description: "Socket-based concurrent server handling multiple client requests using threading and async I/O.",
    tags: ["Systems", "Networking", "Concurrency"],
    image: "/hero-bg.png",
    category: ["backend"],
    signals: {
      architecture: "Thread-per-connection with queueing",
      backend: "Low-level socket request pipeline",
    },
  },
  {
    title: "SaaS Billing Engine",
    description: "Usage-based billing and invoice lifecycle engine with idempotent processing and auditability.",
    tags: ["SaaS", "Billing", "Backend"],
    image: "/hero-bg.png",
    category: ["backend", "fullstack"],
    signals: {
      architecture: "Domain-driven billing modules",
      backend: "Idempotent jobs + reconciliation",
      output: "Accurate invoice generation",
    },
  },
  {
    title: "Fraud Detection System",
    description: "Anomaly detection pipeline for risk scoring using behavioral features and clustering ensembles.",
    tags: ["ML", "Data", "Python"],
    image: "/hero-bg.png",
    category: ["ai"],
    signals: {
      data: "5000+ transactions",
      models: "KMeans, GMM, DBSCAN",
      output: "Risk scoring system",
    },
  },
  {
    title: "AI Smart Mirror",
    description: "ESP32-based ambient interface with voice interaction and cloud-assisted intelligence.",
    tags: ["IoT", "AI", "Embedded"],
    image: "/hero-bg.png",
    category: ["ai"],
    signals: {
      architecture: "Edge device + cloud cognition",
      output: "Real-time contextual interaction",
    },
  },
];

// Legacy projects for filtering
export type ProjectItem = {
  title: string;
  problem: string;
  category: string[];
};

export const projects: ProjectItem[] = [
  {
    title: "Smart Bookmark Manager",
    problem: "Users struggle to organize important links across devices.",
    category: ["ai", "fullstack"],
  },
  {
    title: "Realtime TicketHub",
    problem: "Institutions need fast escalation and tracking for complaints.",
    category: ["fullstack"],
  },
  {
    title: "AI Notes Copilot",
    problem: "Students lose context while revising long-form notes.",
    category: ["ai"],
  },
  {
    title: "Experimental Graph Search UI",
    problem: "Existing dashboards make link relationships hard to inspect.",
    category: ["fullstack", "ai"],
  },
];
