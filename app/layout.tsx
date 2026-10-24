import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amulya Financial Services | Private Wealth Architecture & Advisory",
  description:
    "Preserving Legacies. Engineering Disciplined Wealth. 32+ years of institutional financial leadership, former VP at Motilal Oswal Securities. Bespoke wealth management, PMS, Mutual Funds, and Succession Planning.",
  keywords: [
    "Amulya Financial Services",
    "Amulya Wealth",
    "Private Wealth Management",
    "Motilal Oswal Partner",
    "M K Jayaprakash",
    "Portfolio Management Services",
    "Mutual Funds Advisory",
    "Financial Planning",
    "Succession Planning",
    "Vadodara Wealth Advisor",
    "Gujarat Financial Services",
  ],
  authors: [{ name: "M K Jayaprakash" }],
  openGraph: {
    title: "Amulya Financial Services | Private Wealth Architecture",
    description:
      "Transforming complex capital markets into bespoke, goal-oriented family wealth structures. Backed by 32+ years of financial leadership.",
    url: "https://amulyawealth.com",
    siteName: "Amulya Financial Services",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-obsidian text-slate-100 antialiased selection:bg-gold/20 selection:text-gold-light">
        {children}
      </body>
    </html>
  );
}
