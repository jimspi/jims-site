export interface App {
  id: string;
  name: string;
  tag: string;
  description: string;
  category: "professional" | "personal";
  githubUrl: string | null;
  liveUrl: string | null;
  screenshotUrl: string | null;
}

export const apps: App[] = [
  {
    id: "carousel-studio",
    name: "Carousel Studio",
    tag: "[CONTENT CREATION]",
    description:
      "Automates the creation of editorial social media carousels. Built for journalists and content creators who need to move fast without sacrificing visual standards. Integrates with the Claude API to generate structured content layouts from a single prompt.",
    category: "professional",
    githubUrl: null,
    liveUrl: null,
    screenshotUrl: "/screenshots/carousel-studio.jpg",
  },
  {
    id: "ai-chief-of-staff",
    name: "AI Chief of Staff",
    tag: "[PRODUCTIVITY / AI AGENT]",
    description:
      "A personal intelligence system that preps the day, prioritizes tasks, and surfaces what matters before the morning broadcast. Built to replace the mental overhead of task management with an agent that thinks ahead.",
    category: "professional",
    githubUrl: null,
    liveUrl: null,
    screenshotUrl: "/screenshots/ai-chief-of-staff.jpg",
  },
  {
    id: "news-agent",
    name: "News Agent (The Pulse)",
    tag: "[NEWS AUTOMATION]",
    description:
      "An editorial-style AI news aggregator that monitors sources, surfaces relevant stories, and delivers them in the format of a structured briefing — not an algorithmic feed. Built for journalists who need signal, not noise.",
    category: "professional",
    githubUrl: null,
    liveUrl: null,
    screenshotUrl: "/screenshots/news-agent.jpg",
  },
  {
    id: "moment",
    name: "Moment",
    tag: "[PRODUCTIVITY]",
    description:
      "A guest experience app that captures special moments at live events — photos, notes, and memories collected by the people who were actually there. Built for the moments worth keeping, not the ones worth scrolling past.",
    category: "professional",
    githubUrl: null,
    liveUrl: null,
    screenshotUrl: "/screenshots/moment2.jpg",
  },
  {
    id: "claude-code-academy",
    name: "Claude Code Academy",
    tag: "[EDUCATION / CONSULTING]",
    description:
      "A curriculum and consulting program teaching SMB owners and working professionals to build production-ready AI applications using Claude Code. Structured as a six-module progression from zero to shipping.",
    category: "professional",
    githubUrl: null,
    liveUrl: null,
    screenshotUrl: "/screenshots/claude-code-academy.jpg",
  },
  {
    id: "masters-2026",
    name: "Masters 2026",
    tag: "[SPORTS / FUN]",
    description:
      "A live golf score tracker for the Masters Tournament, built for a group of friends who follow the tournament together. Features real-time leaderboard updates, Claude AI-generated commentary, and editorial-grade score displays. Deployed specifically for the 2026 Masters.",
    category: "personal",
    githubUrl: null,
    liveUrl: null,
    screenshotUrl: "/screenshots/masters-2026.jpg",
  },
  {
    id: "emoji-match",
    name: "Emoji Match",
    tag: "[KIDS / EDUCATION]",
    description:
      "A memory-style matching game for young children. Built for Jim's kids as a screen time activity that actually teaches pattern recognition and visual memory.",
    category: "personal",
    githubUrl: null,
    liveUrl: null,
    screenshotUrl: "/screenshots/emoji-match.jpg",
  },
  {
    id: "spin-game",
    name: "Spin Game",
    tag: "[KIDS / GAMES]",
    description:
      "A simple, tactile spinning game built to entertain and delight young children. Colorful, responsive, and deliberately simple.",
    category: "personal",
    githubUrl: null,
    liveUrl: null,
    screenshotUrl: "/screenshots/spin-game.jpg",
  },
  {
    id: "sight-words",
    name: "Sight Words",
    tag: "[KIDS / LITERACY]",
    description:
      "A flashcard-style reading app built around early literacy sight word lists. Designed for a parent to use alongside a child — not as a replacement for it.",
    category: "personal",
    githubUrl: null,
    liveUrl: null,
    screenshotUrl: "/screenshots/sight-words.jpg",
  },
  {
    id: "math-helper",
    name: "Math Helper",
    tag: "[KIDS / EDUCATION]",
    description:
      "An adaptive math practice app for early elementary students. Builds confidence with basic operations through a clean, distraction-free interface.",
    category: "personal",
    githubUrl: null,
    liveUrl: null,
    screenshotUrl: "/screenshots/math-helper.jpg",
  },
];

export const professionalApps = apps.filter((a) => a.category === "professional");
export const personalApps = apps.filter((a) => a.category === "personal");
