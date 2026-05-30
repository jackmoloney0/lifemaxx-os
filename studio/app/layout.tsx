import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fís — AI photoshoots for fashion, beauty & lifestyle brands",
  description:
    "Fís creates campaign-ready imagery for fashion, beauty, and lifestyle brands — the look of a full production, without the studio, models, or wait.",
  openGraph: {
    title: "Fís — AI photoshoots for considered brands",
    description:
      "Campaign-ready imagery for fashion, beauty, and lifestyle brands — without the studio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
