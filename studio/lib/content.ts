export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Process", href: "#process" },
] as const;

export const services = [
  {
    title: "Campaign Shoots",
    subtitle:
      "A full seasonal campaign — concept, styling, and a complete set of hero images — without a studio booked or a single model on call.",
    metric: "From €4,500",
    note: "48-hour turnaround",
  },
  {
    title: "Product & Editorial",
    subtitle:
      "E-commerce and lookbook imagery made to brief. Consistent, campaign-ready, and set in any world you can describe.",
    metric: "From €1,800",
    note: "Per collection",
  },
  {
    title: "Motion & Social",
    subtitle:
      "Short-form motion and social-first cuts built from your campaign — sized for every feed, screen, and storefront.",
    metric: "From €3,200",
    note: "Concept to delivery",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Brief",
    body: "We start with your brand and the campaign you have in mind. One conversation to lock the direction, the mood, and the standard.",
  },
  {
    number: "02",
    title: "Direction",
    body: "We return a creative direction and reference frames. You approve the look before we produce a single final image.",
  },
  {
    number: "03",
    title: "Production",
    body: "Your campaign is created and finished by hand — graded, retouched, and reviewed against the direction we agreed.",
  },
  {
    number: "04",
    title: "Delivery",
    body: "Final, campaign-ready images in every format you need — feed, film, print — with full usage rights handed over.",
  },
] as const;
