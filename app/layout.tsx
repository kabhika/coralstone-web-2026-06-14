import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ENTITY } from "@/lib/facts";

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
  "We build fast websites with online booking and get Sydney trades and small businesses found on Google and AI search. One local engineer, fixed prices, no lock-in. Free check.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.coralstonegroup.com.au"),
  title: {
    default: "Coralstone Services Group | Websites, Google Visibility & IT for Sydney Small Business",
    template: "%s | Coralstone Services Group",
  },
  description,
  openGraph: {
    title: "Coralstone Services Group | Your next customer is searching",
    description,
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coralstone Services Group. Your next customer is searching. Make sure they find you first.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coralstone Services Group | Your next customer is searching",
    description,
    images: ["/og-image.png"],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: ENTITY.legalName,
  alternateName: ENTITY.tradingName,
  url: ENTITY.url,
  telephone: "+61467604791",
  email: ENTITY.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Box Hill",
    addressRegion: "NSW",
    postalCode: "2765",
    addressCountry: "AU",
  },
  areaServed: "Greater Sydney, Australia",
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
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
