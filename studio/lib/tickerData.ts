export type TickerStyle = "light" | "serif" | "bold" | "medium" | "caps";

export interface TickerBrand {
  name: string;
  style: TickerStyle;
}

export const tickerBrands: TickerBrand[] = [
  { name: "Clover Beauty", style: "light" },
  { name: "The Skin Edit", style: "serif" },
  { name: "Grá Athletics", style: "bold" },
  { name: "Beo Living", style: "light" },
  { name: "Dún & Co.", style: "medium" },
  { name: "Wild Atlantic Goods", style: "caps" },
  { name: "Méi Skincare", style: "serif" },
  { name: "Vael Jewellery", style: "light" },
  { name: "Calla Studio", style: "medium" },
  { name: "Drift Collective", style: "bold" },
];

export const tickerStyles: Record<TickerStyle, React.CSSProperties> = {
  light: {
    fontFamily: "var(--font-dm-sans)",
    fontWeight: 300,
    letterSpacing: "0.1em",
    fontSize: "13px",
  },
  serif: {
    fontFamily: "var(--font-instrument-serif)",
    fontStyle: "italic",
    fontSize: "15px",
  },
  bold: {
    fontFamily: "var(--font-dm-sans)",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    fontSize: "13px",
  },
  medium: {
    fontFamily: "var(--font-dm-sans)",
    fontWeight: 500,
    fontSize: "13px",
  },
  caps: {
    fontFamily: "var(--font-dm-sans)",
    fontWeight: 300,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "10px",
  },
};
