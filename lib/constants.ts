export const navLinks = [
  { label: "Work", href: "#before-after" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Creators", href: "#creators" },
  { label: "Pricing", href: "#pricing" },
] as const;

/** Replace with your own files in /public/videos/ */
export const heroReelVideo = {
  mp4: "/videos/hero-reel.mp4",
  /** Demo fallback until hero-reel.mp4 is added */
  fallback:
    "https://assets.mixkit.co/videos/preview/mixkit-woman-recording-a-vertical-video-with-her-smartphone-40748-large.mp4",
  poster: "/videos/hero-poster.jpg",
} as const;

export const CTA_MICROCOPY =
  "No discovery calls required if you know what you want. Quick brief onboarding available.";

export const brandLogos = [
  {
    name: "Clover Beauty",
    className:
      "font-sans text-[13px] font-light uppercase tracking-[0.12em]",
  },
  {
    name: "The Skin Edit",
    className: "font-serif text-base italic",
  },
  {
    name: "Grá Athletics",
    className: "font-sans text-[15px] font-bold tracking-tight",
  },
  {
    name: "Beo Living",
    className: "font-sans text-[15px] font-light tracking-[0.08em]",
  },
  {
    name: "Dún & Co.",
    className: "font-sans text-sm font-medium",
  },
  {
    name: "Wild Atlantic Goods",
    className:
      "font-sans text-[11px] font-light uppercase tracking-[0.06em]",
  },
] as const;

export const testimonials = [
  {
    metricValue: "+94%",
    metricLabel: "CTR",
    quote:
      "We went from 3 new creatives a month to 12. Our CTR doubled in 6 weeks.",
    author: "Sarah M.",
    role: "Founder, Clover Beauty",
  },
  {
    metricValue: "3.8×",
    metricLabel: "ROAS",
    quote:
      "Finally an agency that gets how Irish women actually talk. These ads don't feel like ads.",
    author: "Niamh K.",
    role: "Marketing Lead, The Skin Edit",
  },
] as const;

export const howItWorksSteps = [
  {
    number: "01",
    title: "Send your product",
    description:
      "Share your product URL, brand guidelines, and target creator. No briefing decks. No calls required.",
  },
  {
    number: "02",
    title: "We build the creative",
    description:
      "We write hooks, script the ad, and produce the video with your chosen Irish creator — managed end to end on our studio workflow.",
  },
  {
    number: "03",
    title: "Ready-to-run ads",
    description:
      "You receive polished, platform-native videos in 48 hours, formatted for TikTok and Meta Reels.",
  },
] as const;

export const personas = [
  {
    name: "Aoife",
    handle: "@aoife.creates",
    age: "27",
    location: "Dublin",
    niches: ["Beauty", "Skincare", "Lifestyle"],
    accent: "Soft Dublin",
    since: "Creating since 2023 · 847k combined reach",
    bio: "Honest reviews. Real results. Aoife covers everything from Penneys hauls to premium skincare without the filter.",
    gradient: "from-rose-50 to-stone-100",
    accentColor: "#C4A882",
    reelVideo:
      "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-in-front-of-a-mirror-42026-large.mp4",
  },
  {
    name: "Conor",
    handle: "@conorfitirl",
    age: "25",
    location: "Dublin 4",
    niches: ["Fitness", "Men's Style", "Supplements"],
    accent: "South Dublin",
    since: "Creating since 2024 · 412k combined reach",
    bio: "No fluff. Conor tests products so you don't have to. Fitness, style, and kit that actually performs.",
    gradient: "from-slate-100 to-stone-50",
    accentColor: "#4A7C2F",
    reelVideo:
      "https://assets.mixkit.co/videos/preview/mixkit-man-doing-push-ups-at-the-gym-40758-large.mp4",
  },
  {
    name: "Máire",
    handle: "@maireshome",
    age: "45",
    location: "Cork",
    niches: ["Home", "Cleaning", "Family"],
    accent: "Gentle Cork",
    since: "Creating since 2023 · 1.1M combined reach",
    bio: "The most trusted voice in Irish home content. Máire's audience buys what she recommends. Full stop.",
    gradient: "from-amber-50 to-stone-100",
    accentColor: "#C4833A",
    reelVideo:
      "https://assets.mixkit.co/videos/preview/mixkit-woman-cleaning-a-kitchen-4278-large.mp4",
  },
  {
    name: "Róisín",
    handle: "@roisin.edit",
    age: "32",
    location: "Galway",
    niches: ["Fashion", "Skincare", "Travel"],
    accent: "Neutral Galway",
    since: "Creating since 2024 · 334k combined reach",
    bio: "Editorial eye. Considered taste. Róisín moves audiences that premium brands care about.",
    gradient: "from-stone-100 to-neutral-50",
    accentColor: "#7B6EA6",
    reelVideo:
      "https://assets.mixkit.co/videos/preview/mixkit-young-woman-posing-for-a-photo-shoot-40745-large.mp4",
  },
] as const;

export const whyFisFeatures = [
  {
    icon: "Clock" as const,
    title: "48-Hour Turnaround",
    description:
      "Hooks live before your competitor finishes their brief.",
  },
  {
    icon: "Mic" as const,
    title: "Genuinely Irish",
    description:
      "Accents, references, humour. Content that feels local because it is.",
  },
  {
    icon: "BarChart" as const,
    title: "Built to Test",
    description:
      "Receive 3–5 hook variants per product. Kill losers fast.",
  },
  {
    icon: "RefreshCw" as const,
    title: "No Creative Fatigue",
    description: "Fresh creators, new angles, every month.",
  },
] as const;

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    videos: "10 Videos",
    price: "€1,500",
    period: "one-off",
    popular: false,
    cta: "Book Starter",
    features: [
      "2 Irish creators",
      "2 hook variants per video",
      "TikTok + Meta Reels format",
      "48-hour delivery",
      "1 revision round",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    videos: "30 Videos / Month",
    price: "€3,500",
    period: "/ month",
    popular: true,
    cta: "Book Growth",
    features: [
      "All 4 Irish creators",
      "5 hook variants per video",
      "TikTok + Meta Reels format",
      "48-hour delivery",
      "Unlimited revisions",
      "Monthly strategy call",
    ],
  },
  {
    id: "custom",
    name: "Dedicated Creator",
    videos: "Exclusive creator for your brand",
    price: "€6,000",
    period: "setup + ongoing retainer",
    popular: false,
    cta: "Talk to Us →",
    isCustom: true,
    customDescription:
      "Your brand gets a dedicated Irish creator — not shared with any other client. Briefed on your tone, audience, and product range from day one.",
    features: [] as string[],
  },
] as const;

export const faqItems = [
  {
    question: "Are the creators real people?",
    answer:
      "Yes. You work with real Irish creators — matched to your niche, briefed on your brand, and producing UGC that reads authentically on TikTok and Meta. Our studio handles scripting, production, and delivery so you move fast without managing freelancers.",
  },
  {
    question: "How fast is delivery?",
    answer:
      "Standard delivery is 48 hours from brief submission. Rush delivery (24h) is available for Growth clients at no extra cost.",
  },
  {
    question: "Can we request revisions?",
    answer:
      "Starter clients receive one revision round. Growth clients have unlimited revisions within their monthly cycle. We rarely need more than one round — the brief intake process is thorough.",
  },
  {
    question: "Can you match our existing brand tone?",
    answer:
      "Yes. Send us existing copy, brand guidelines, or content you love. We calibrate scripts, pacing, and creator selection accordingly.",
  },
  {
    question: "Is UGC compliant for Meta and TikTok ads?",
    answer:
      "Yes. We follow current platform guidelines for sponsored and branded content. All deliverables include recommended disclosure language where required.",
  },
  {
    question: "Can we work with one creator exclusively?",
    answer:
      "Through our Dedicated Creator package, you retain a single Irish creator for your brand — not shared with any other client.",
  },
] as const;

export const adSpendOptions = [
  { value: "under-500", label: "<€500" },
  { value: "500-2k", label: "€500–2k" },
  { value: "2k-10k", label: "€2k–10k" },
  { value: "10k-plus", label: "€10k+" },
] as const;

export const videoHooks = [
  "This dupe is UNREAL 😭",
  "POV: you smell incredible",
  "Under €20 and it's actually good",
] as const;

export const CALENDLY_URL = "#";
