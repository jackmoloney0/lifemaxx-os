import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { BookingProvider } from "@/components/providers/BookingProvider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fís — Irish UGC Video Ads That Convert",
  description:
    "Fís matches Irish e-commerce brands with top creators to script, shoot, and deliver high-converting UGC video ads. 48-hour delivery. Built for Meta and TikTok.",
  openGraph: {
    title: "Fís — Irish UGC Video Ads That Convert",
    description:
      "Irish creators producing platform-native UGC ads for e-commerce brands. From brief to ready-to-run in 48 hours.",
    url: "https://fisai.ie",
    siteName: "Fís",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fís — Irish UGC Video Ads",
    description:
      "Irish creators. Better creative. Faster delivery.",
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
