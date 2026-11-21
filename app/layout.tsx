import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const SITE_URL = "https://wft57.vercel.app";
const DESCRIPTION =
  "Prince Hall Masonic lodge in Maryland focused on brotherhood, charity, and community.";

export const viewport: Viewport = {
  themeColor: "#070b17",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "William F. Taylor Lodge #57",
    template: "%s | WFT57",
  },
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: "/images/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/WFTLogo.webp", type: "image/webp" },
    ],
    apple: [{ url: "/images/WFTLogo.webp" }],
  },
  openGraph: {
    title: "William F. Taylor Lodge #57",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "WFT57",
    type: "website",
    images: [{ url: "/images/WFTLogo.webp", width: 300, height: 298, alt: "WFT57 Logo" }],
  },
  twitter: {
    card: "summary",
    title: "William F. Taylor Lodge #57",
    description: DESCRIPTION,
    images: ["/images/WFTLogo.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "William F. Taylor Lodge #57",
  url: SITE_URL,
  logo: `${SITE_URL}/images/WFTLogo.webp`,
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1307 Eutaw Place",
    addressLocality: "Baltimore",
    addressRegion: "MD",
    postalCode: "21217",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main" className="container-max py-10 md:py-14 space-y-14">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
