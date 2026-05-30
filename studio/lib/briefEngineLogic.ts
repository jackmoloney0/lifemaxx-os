export type CategoryId = "fashion" | "beauty" | "lifestyle" | "product";
export type GoalId = "awareness" | "conversion" | "content";

export interface Recommendation {
  packageName: string;
  tagline: string;
  price: string;
  features: string[];
  ctaLabel: string;
}

export const productCategories = [
  { id: "fashion", label: "Fashion & Apparel", icon: "Shirt" },
  { id: "beauty", label: "Beauty & Skincare", icon: "Sparkles" },
  { id: "lifestyle", label: "Lifestyle & Home", icon: "Home" },
  { id: "product", label: "Product / E-commerce", icon: "Package" },
] as const;

export const budgetRanges = [
  { id: "seed", label: "Under €2k", value: 1 },
  { id: "small", label: "€2k–€5k", value: 2 },
  { id: "medium", label: "€5k–€15k", value: 3 },
  { id: "growth", label: "€15k–€50k", value: 4 },
  { id: "scale", label: "€50k+", value: 5 },
] as const;

export const goals = [
  {
    id: "awareness",
    label: "Build brand awareness",
    description: "Get in front of new audiences at scale.",
    icon: "Megaphone",
  },
  {
    id: "conversion",
    label: "Drive direct sales",
    description: "Performance creative designed to convert.",
    icon: "TrendingUp",
  },
  {
    id: "content",
    label: "Fill our content calendar",
    description: "Volume output. Consistent. On-brand.",
    icon: "CalendarDays",
  },
] as const;

const STARTER: Recommendation = {
  packageName: "Starter Pack",
  tagline: "The right entry point for your budget.",
  price: "From €1,500",
  features: [
    "10 campaign-ready images",
    "2 persona options",
    "48-hour delivery",
  ],
  ctaLabel: "Book a call about this package",
};

const GROWTH: Recommendation = {
  packageName: "Growth Retainer",
  tagline: "A full creative pipeline, every month.",
  price: "From €3,500 / month",
  features: [
    "All 4 creator personas",
    "5 hook variants per brief",
    "Unlimited revisions",
    "Monthly strategy call",
  ],
  ctaLabel: "Book a call about this package",
};

const CUSTOM: Recommendation = {
  packageName: "Custom Avatar",
  tagline: "Your brand. Your face. Exclusively yours.",
  price: "From €6,000",
  features: [
    "Exclusive AI persona",
    "Trained on your brand tone",
    "Unlimited usage, all channels",
    "Priority production queue",
  ],
  ctaLabel: "Book a call about this package",
};

const CUSTOM_PLUS: Recommendation = {
  packageName: "Growth Retainer + Custom Avatar",
  tagline: "A dedicated persona, fed by a monthly pipeline.",
  price: "From €8,500",
  features: [
    "Everything in Growth",
    "Exclusive AI persona",
    "Priority production queue",
    "Quarterly persona refresh",
  ],
  ctaLabel: "Book a call about this package",
};

/**
 * Pure recommendation logic — given the three answers, return one package.
 *  budget 1–2  → Starter
 *  budget 3    → Growth
 *  budget 4–5 + fashion/beauty       → Custom Avatar
 *  budget 4–5 + lifestyle/product    → Growth + Custom Avatar
 */
export function getRecommendation(
  category: CategoryId,
  budget: number,
  _goal: GoalId
): Recommendation {
  if (budget <= 2) return STARTER;
  if (budget === 3) return GROWTH;
  // budget 4–5
  if (category === "fashion" || category === "beauty") return CUSTOM;
  return CUSTOM_PLUS;
}
