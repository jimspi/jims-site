export interface Cert {
  title: string;
  issuer: string;
  issued: string;
  imageUrl: string;
  verifyUrl?: string;
}

export const certifications: Cert[] = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    issued: "March 2026",
    imageUrl: "/certs/claude-code-in-action.jpg",
    verifyUrl: "https://verify.skilljar.com/c/ev7qdwsadodo",
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    issued: "March 2026",
    imageUrl: "/certs/mcp-advanced-topics.jpg",
    verifyUrl: "https://verify.skilljar.com/c/5o3jzeybw9j9",
  },
  {
    title: "Claude with the Anthropic API",
    issuer: "Anthropic",
    issued: "March 2026",
    imageUrl: "/certs/claude-anthropic-api.jpg",
    verifyUrl: "https://verify.skilljar.com/c/r3pdesi5y7cq",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    issued: "March 2026",
    imageUrl: "/certs/intro-mcp.jpg",
    verifyUrl: "https://verify.skilljar.com/c/f2ta97maj6k7",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    issued: "2026",
    imageUrl: "/certs/ai-fluency-framework.jpg",
  },
  {
    title: "AI Fluency for Educators",
    issuer: "Anthropic",
    issued: "2026",
    imageUrl: "/certs/ai-fluency-educators.jpg",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    issued: "2026",
    imageUrl: "/certs/claude-101.jpg",
  },
  {
    title: "Generative AI for Learning and Development Professional Certificate",
    issuer: "LinkedIn Learning",
    issued: "March 2025",
    imageUrl: "/certs/li-genai-learning-dev.jpg",
  },
  {
    title: "Build Your Generative AI Productivity Skills with Microsoft and LinkedIn",
    issuer: "LinkedIn · Microsoft",
    issued: "February 2025",
    imageUrl: "/certs/li-genai-productivity-microsoft.jpg",
  },
  {
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "LinkedIn · Microsoft",
    issued: "February 2025",
    imageUrl: "/certs/li-career-essentials-genai.jpg",
  },
  {
    title: "The Future of Workforce Learning: AI-Powered Personalization for Skill Development",
    issuer: "LinkedIn Learning",
    issued: "March 2025",
    imageUrl: "/certs/li-future-workforce-learning.jpg",
  },
  {
    title: "Becoming an AI-First Product Leader",
    issuer: "LinkedIn Learning",
    issued: "December 2024",
    imageUrl: "/certs/li-ai-first-product-leader.jpg",
  },
  {
    title: "Generative AI for Business Leaders",
    issuer: "LinkedIn Learning",
    issued: "December 2024",
    imageUrl: "/certs/li-genai-business-leaders.jpg",
  },
];
