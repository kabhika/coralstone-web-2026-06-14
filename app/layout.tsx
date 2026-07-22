import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const description =
  "AI automation, IT support, and websites found on Google and AI search, so Sydney small business never misses a lead. Free audit, $497 to start, no lock-in.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.coralstonegroup.com.au"),
  title: {
    default: "Coralstone Services Group | Sydney AI Automation, IT & Websites",
    template: "%s | Coralstone Services Group",
  },
  description,
  openGraph: {
    title: "Coralstone Services Group | Never miss a lead",
    description,
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coralstone Services Group | Never miss a lead",
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
