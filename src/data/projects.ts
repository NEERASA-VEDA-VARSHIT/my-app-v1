export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: string[];
};

export const featuredProjects: Project[] = [
  {
    title: "AI-Powered Smart Wardrobe",
    description: "RAG-based outfit recommendation system using vector metadata and contextual filtering for personalized suggestions.",
    tags: ["AI", "RAG", "Computer Vision"],
    image: "/hero-bg.png",
    category: ["ai"],
  },
  {
    title: "Real-Time Bookmark System",
    description: "Private, synced bookmark manager with Supabase realtime and event-driven updates across multiple devices.",
    tags: ["Next.js", "Realtime", "Supabase"],
    image: "/hero-bg.png",
    category: ["fullstack"],
  },
  {
    title: "Multi-Threaded HTTP Server",
    description: "Socket-based concurrent server handling multiple client requests using threading and async I/O.",
    tags: ["Systems", "Networking", "Concurrency"],
    image: "/hero-bg.png",
    category: ["backend"],
  },
  {
    title: "AI Smart Mirror",
    description: "ESP32-based smart mirror with voice interaction and cloud AI processing for real-time information display.",
    tags: ["IoT", "AI", "Embedded"],
    image: "/hero-bg.png",
    category: ["ai"],
  },
  {
    title: "Fraud Detection System",
    description: "Data-driven anomaly detection system using statistical modeling and pattern recognition for return abuse prevention.",
    tags: ["ML", "Data", "Python"],
    image: "/hero-bg.png",
    category: ["ai"],
  },
  {
    title: "Enterprise Complaint Management",
    description: "Multi-tenant ticketing platform with RBAC, escalation workflows, and analytics serving 1200+ users.",
    tags: ["Backend", "RBAC", "Architecture"],
    image: "/hero-bg.png",
    category: ["fullstack", "backend"],
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
