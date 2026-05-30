export type WorkCategory = "Fashion" | "Beauty" | "Lifestyle" | "Product";

export const workCategories = [
  "All",
  "Fashion",
  "Beauty",
  "Lifestyle",
  "Product",
  "Campaign",
] as const;

export type WorkFilterValue = (typeof workCategories)[number];

export interface WorkStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroWork {
  client: string;
  campaign: string;
  season: string;
  category: WorkCategory;
  result: string;
}

export interface WorkCard {
  client: string;
  campaign: string;
  season: string;
  category: WorkCategory;
  result: string;
  bgGradient: string;
  accent: string;
  /** desktop grid span for editorial rhythm */
  size: "tall" | "wide" | "normal";
}

export const workStats: WorkStat[] = [
  { value: 47, suffix: "", label: "Campaigns" },
  { value: 12, suffix: "", label: "Brands" },
  { value: 100, suffix: "%", label: "Campaign-ready" },
];

export const heroWork: HeroWork = {
  client: "Solène",
  campaign: "Capsule Collection",
  season: "FW26",
  category: "Fashion",
  result: "Studio cost: −82%",
};

export const workCards: WorkCard[] = [
  {
    client: "Calla Studio",
    campaign: "Botanica",
    season: "SS26",
    category: "Fashion",
    result: "Turnaround: 48h",
    bgGradient: "linear-gradient(145deg, #E8DDD4 0%, #C9B8A8 50%, #A89080 100%)",
    accent: "#A89080",
    size: "tall",
  },
  {
    client: "Harlow Beauty",
    campaign: "Clean Slate",
    season: "Campaign",
    category: "Beauty",
    result: "Cost vs studio: −78%",
    bgGradient: "linear-gradient(160deg, #F0EBE3 0%, #D4C8BA 40%, #B8A898 100%)",
    accent: "#D4C8BA",
    size: "normal",
  },
  {
    client: "Drift Collective",
    campaign: "Nomad Series",
    season: "FW26",
    category: "Lifestyle",
    result: "14 hero shots in 24h",
    bgGradient: "linear-gradient(120deg, #1C2820 0%, #2D3D30 50%, #1A2418 100%)",
    accent: "#4A7C2F",
    size: "normal",
  },
  {
    client: "Vael Jewellery",
    campaign: "Quiet Gold",
    season: "Evergreen",
    category: "Product",
    result: "Shoot cost: −91%",
    bgGradient: "linear-gradient(135deg, #2A2318 0%, #3D3020 50%, #4A3C28 100%)",
    accent: "#C4A862",
    size: "wide",
  },
  {
    client: "Méi Skincare",
    campaign: "Morning Light",
    season: "SS26",
    category: "Beauty",
    result: "0 models. 0 studio.",
    bgGradient: "linear-gradient(155deg, #F5EDE6 0%, #EDD8C8 40%, #D4B8A0 100%)",
    accent: "#D4B8A0",
    size: "normal",
  },
];
