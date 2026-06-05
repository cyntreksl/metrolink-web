import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.metrolink-sa.com"),
  title: {
    default: "MetroLink Freight Forwarding - Saudi Arabia's Premier Logistics Company",
    template: "%s | MetroLink Freight Forwarding"
  },
  description: "MetroLink is Saudi Arabia's premier freight forwarding company based in Dammam, offering sea freight, air freight, land transport, customs clearance, and warehousing services across the Kingdom and globally.",
  keywords: [
    "freight forwarding Saudi Arabia",
    "logistics Dammam",
    "sea freight KSA",
    "air freight Saudi Arabia",
    "customs clearance Dammam",
    "warehousing Saudi Arabia",
    "cargo services KSA",
    "international shipping Saudi Arabia",
    "supply chain logistics",
    "MetroLink freight"
  ],
  authors: [{ name: "MetroLink Freight Forwarding" }],
  creator: "MetroLink Freight Forwarding",
  publisher: "MetroLink Freight Forwarding",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.metrolink-sa.com",
    siteName: "MetroLink Freight Forwarding",
    title: "MetroLink Freight Forwarding - Saudi Arabia's Premier Logistics Company",
    description: "Saudi Arabia's premier freight forwarding company based in Dammam, offering comprehensive logistics solutions including sea freight, air freight, land transport, and warehousing services.",
    images: [
      {
        url: "/images/home-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MetroLink Freight Forwarding - Logistics Excellence",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MetroLink Freight Forwarding - Saudi Arabia's Premier Logistics Company",
    description: "Saudi Arabia's premier freight forwarding company offering comprehensive logistics solutions.",
    images: ["/images/home-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://www.metrolink-sa.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0A4F7E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
