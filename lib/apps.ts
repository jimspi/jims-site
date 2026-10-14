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
    id: "counterpoint",
    name: "Counterpoint",
    tag: "[NEWS / CHROME EXTENSION]",
    description:
      "A Chrome extension for reading the news with the other side in view. On any article, one click finds coverage of the same story from outlets across the political spectrum.",
    category: "professional",
    githubUrl: null,
    liveUrl: null,
    screenshotUrl: "/screenshots/counterpoint.jpg",
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
    id: "right-bower",
    name: "Right Bower",
    tag: "[GAMES / PWA]",
    description:
      "Single-player Euchre you can install on your phone. Play against computer opponents with a rules engine tested across 1,000 simulated games.",
    category: "personal",
    githubUrl: "https://github.com/jimspi/right-bower",
    liveUrl: "https://right-bower.vercel.app",
    screenshotUrl: "/screenshots/right-bower.jpg",
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
