export type SkillItem = {
  name: string;
  description: string;
  level: number;
  category: string[];
};

export const skills: SkillItem[] = [
  {
    name: "Next.js",
    description: "Full-stack applications",
    level: 90,
    category: ["frontend", "backend"],
  },
  {
    name: "PostgreSQL",
    description: "Data modeling and queries",
    level: 85,
    category: ["database"],
  },
  {
    name: "TypeScript",
    description: "Type-safe architecture",
    level: 90,
    category: ["frontend", "backend"],
  },
  {
    name: "Python",
    description: "Machine learning systems",
    level: 80,
    category: ["backend", "ai"],
  },
  {
    name: "OpenAI API",
    description: "Applied AI integration",
    level: 75,
    category: ["ai"],
  },
];
