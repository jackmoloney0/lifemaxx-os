export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  forWho: string;
  includes: string[];
  doesNotInclude: string[];
  cta: string;
  featured: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Ten campaign images. Zero compromise.",
    price: "€1,500",
    cadence: "one-off",
    forWho: "For brands testing AI photoshoots for the first time.",
    includes: [
      "2 creator personas",
      "2 visual directions per brief",
      "TikTok + Meta + editorial formats",
      "48-hour delivery",
      "1 revision round",
      "Full commercial usage rights",
    ],
    doesNotInclude: [
      "Campaign strategy",
      "Dedicated persona",
      "Monthly creative calls",
    ],
    cta: "Book Starter",
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "A full creative pipeline. Every month.",
    price: "€3,500",
    cadence: "/ month",
    forWho: "For brands that run ads and need a constant supply of fresh creative.",
    includes: [
      "All 4 creator personas",
      "5 hook variants per brief",
      "TikTok + Meta + editorial formats",
      "48-hour delivery",
      "Unlimited revisions",
      "Monthly strategy call",
      "Full commercial usage rights",
      "Priority turnaround",
    ],
    doesNotInclude: ["Exclusive dedicated persona"],
    cta: "Book Growth",
    featured: true,
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Your brand. Your face. Exclusively yours.",
    price: "€6,000",
    cadence: "setup + retainer",
    forWho:
      "For brands that want a proprietary AI creator persona no other brand can use.",
    includes: [
      "Exclusive AI persona (face, voice, personality)",
      "Persona trained on your brand tone",
      "Unlimited usage across all channels",
      "Priority production queue",
      "Quarterly persona refresh",
      "Dedicated account contact",
    ],
    doesNotInclude: [],
    cta: "Talk to Us",
    featured: false,
  },
];

/** Comparison-table rows. `boolean` renders a check/cross; strings render as text. */
export interface ComparisonRow {
  label: string;
  starter: string | boolean;
  growth: string | boolean;
  custom: string | boolean;
}

export const comparisonRows: ComparisonRow[] = [
  { label: "Personas", starter: "2", growth: "All 4", custom: "1 (excl.)" },
  { label: "Hook variants", starter: "2", growth: "5", custom: "Unlimited" },
  { label: "Formats", starter: true, growth: true, custom: true },
  { label: "48h delivery", starter: true, growth: true, custom: "Priority" },
  {
    label: "Revisions",
    starter: "1 round",
    growth: "Unlimited",
    custom: "Unlimited",
  },
  { label: "Strategy call", starter: false, growth: true, custom: true },
  { label: "Own persona", starter: false, growth: false, custom: true },
];
