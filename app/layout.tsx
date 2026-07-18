import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-monospace",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.naturelifescience.in"),
  title: {
    default: "Nature Life Science — A Materia Medica for the Modern Flock",
    template: "%s · Nature Life Science",
  },
  description:
    "Herbal and nutritional supplements for poultry health — immunity, gut health, production, minerals and more. ISO 9001:2015 & GMP certified.",
  keywords: [
    "poultry feed supplements",
    "herbal poultry health",
    "Nature Life Science",
    "layer feed supplement",
    "broiler supplement",
    "poultry probiotics",
  ],
  openGraph: {
    title: "Nature Life Science — Scientific & natural poultry health",
    description:
      "A complete range of herbal and nutritional supplements for poultry. ISO 9001:2015 & GMP certified.",
    url: "https://www.naturelifescience.in",
    siteName: "Nature Life Science",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body>
        <ScrollProgress />
        <Header />
        <main id="top">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ScrollReveal />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
