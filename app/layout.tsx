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
    "Vadodara Wealth Advisor",
  ],
  icons: {
    icon: "/amulya-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-orange-100 selection:text-orange-700">
        {children}
      </body>
    </html>
  );
}
