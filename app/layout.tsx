import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "William F. Taylor Lodge #57",
    template: "%s | WFT57",
  },
  description:
    "Prince Hall Masonic lodge in Maryland focused on brotherhood, charity, and community.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "William F. Taylor Lodge #57",
    description:
      "Prince Hall Masonic lodge in Maryland focused on brotherhood, charity, and community.",
    url: "https://wft57.vercel.app",
    siteName: "WFT57",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="container-max py-8 space-y-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
