import type { Metadata, Viewport } from "next";
import { fraunces, inter } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Vibes Realty | Coming Soon",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Vibes Realty is launching soon. Premium real estate solutions in Surat.",
  applicationName: siteConfig.name,
  keywords: [
    "Vibes Realty",
    "real estate Surat",
    "property Surat",
    "buy property Surat",
    "sell property Surat",
    "rent property Surat",
    "lease property Surat",
    "Vesu real estate",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteConfig.url,
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
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Vibes Realty | Coming Soon",
    description:
      "Vibes Realty is launching soon. Premium real estate solutions in Surat.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Vibes Realty — Something Exceptional is Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibes Realty | Coming Soon",
    description:
      "Vibes Realty is launching soon. Premium real estate solutions in Surat.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0C1014",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-dvh bg-ink font-sans">{children}</body>
    </html>
  );
}
