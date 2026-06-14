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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.coralstonegroup.com.au"),
  title: {
    default: "Coralstone Services Group | Sydney small business IT & web",
    template: "%s | Coralstone Services Group",
  },
  description:
    "Coralstone builds websites for Sydney small businesses that show up on Google and AI search, then quietly handles the IT behind the scenes. No lock-in. Free audit. $400 deposit to start.",
  openGraph: {
    title: "Coralstone Services Group",
    description:
      "Websites that get Sydney small businesses found on Google and AI search, plus the IT support behind the scenes.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
