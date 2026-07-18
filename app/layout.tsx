import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://naturelifescience.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nature Life Science — A Materia Medica for the Modern Flock",
    template: "%s · Nature Life Science",
  },
  description:
    "Herbal and nutritional supplements for poultry health — immunity, gut health, production, minerals and more. ISO 9001:2015 & GMP certified. A company by AVC Nutrition.",
  applicationName: "Nature Life Science",
  keywords: [
    "poultry feed supplements",
    "herbal poultry health",
    "Nature Life Science",
    "AVC Nutrition",
    "layer feed supplement",
    "broiler supplement",
    "poultry probiotics",
    "poultry gut health",
    "herbal growth promoter poultry",
    "poultry immunity booster",
  ],
  authors: [{ name: "Nature Life Science" }],
  creator: "Nature Life Science",
  publisher: "Nature Life Science",
  alternates: { canonical: "/" },
  category: "Animal Health & Nutrition",
  openGraph: {
    title: "Nature Life Science — Scientific & natural poultry health",
    description:
      "A complete range of herbal and nutritional supplements for poultry. ISO 9001:2015 & GMP certified.",
    url: SITE_URL,
    siteName: "Nature Life Science",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Life Science — Scientific & natural poultry health",
    description:
      "Herbal and nutritional supplements for poultry — immunity, gut health, production and more. ISO 9001:2015 & GMP certified.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0E1A12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Nature Life Science",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        image: `${SITE_URL}/opengraph-image`,
        description:
          "Herbal and nutritional supplements for poultry health — immunity, gut health, production, minerals and more. ISO 9001:2015 & GMP certified.",
        parentOrganization: { "@type": "Organization", name: "AVC Nutrition" },
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "SCO 3-16-108, Kamakshi Puram",
            addressLocality: "Hyderabad",
            postalCode: "500013",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "SCO 23, Block A, Sector 12A",
            addressLocality: "Chandigarh",
            postalCode: "160012",
            addressCountry: "IN",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9817023461",
          contactType: "technical support",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Nature Life Science",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
