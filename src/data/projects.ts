import type { ImageMetadata } from "astro";
import clockUi from "../assets/projects/clock-ui.png";
import pokepedia from "../assets/projects/pokepedia.png";
import masa from "../assets/projects/masa.jpg";

export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  tools: string[];
  cover: ImageMetadata;
};

export const projects: Project[] = [
  {
    id: "clock-ui",
    title: "@clock-ui",
    description:
      "An open-source analog clock component library for plain DOM, React and Vue. Real-time updates, timezone support, full theming and first-class TypeScript types.",
    url: "https://clock-ui.github.io/clock-ui/",
    tools: ["TypeScript", "Vue", "React", "VitePress"],
    cover: clockUi,
  },
  {
    id: "pokepedia",
    title: "Poképedia",
    description:
      "A fast Pokémon browser covering every generation. Filter by Pokédex and type, search by name or number, toggle shiny sprites, and build a team.",
    url: "https://pokepedia.latamaosadi.com",
    tools: ["Vue 3", "Vite", "Pinia", "Tailwind v4"],
    cover: pokepedia,
  },
  {
    id: "masa",
    title: "Masa: Simple Desk Clock",
    description:
      "A clean web desk clock that shows the time, date and local weather, with 12- and 24-hour formats.",
    url: "https://masa.latamaosadi.com",
    tools: ["Vue 3", "Vite", "@vueuse/core"],
    cover: masa,
  },
];
