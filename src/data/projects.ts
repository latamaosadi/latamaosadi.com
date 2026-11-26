import type { ImageMetadata } from "astro";
import clockUi from "../assets/projects/clock-ui.png";
import pokepedia from "../assets/projects/pokepedia.png";
import masa from "../assets/projects/masa.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  source?: string;
  tools: string[];
  cover: ImageMetadata;
};

export const projects: Project[] = [
  {
    id: "clock-ui",
    title: "@clock-ui",
    description:
      "An open-source analog clock component library for plain DOM, React and Vue. Smooth animations, timezone support, customizable colors and sizes, and full TypeScript types.",
    url: "https://clock-ui.github.io/clock-ui/",
    source: "https://github.com/clock-ui/clock-ui",
    tools: ["TypeScript", "Vue", "React", "VitePress"],
    cover: clockUi,
  },
  {
    id: "pokepedia",
    title: "Poképedia",
    description:
      "Browse all 1,025 Pokémon with per-game Pokédexes, type matchups, moves and abilities, shiny sprites, and a team builder.",
    url: "https://pokepedia.latamaosadi.com",
    tools: ["Vue 3", "Vite", "Pinia", "Tailwind v4"],
    cover: pokepedia,
  },
  {
    id: "masa",
    title: "Masa: Simple Desk Clock",
    description:
      "Turns a spare phone into an LCD-style desk clock showing the time, date and local weather, in 12- or 24-hour format.",
    url: "https://masa.latamaosadi.com",
    tools: ["Vue 3", "Vite", "@vueuse/core"],
    cover: masa,
  },
];
