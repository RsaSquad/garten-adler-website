import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { StickyContactButton } from "@/components";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#16a34a',
};

export const metadata: Metadata = {
  title: {
    default: "Adler & Sohn | Garten- & Landschaftsbau in Lüneburg",
    template: "%s | Adler & Sohn",
  },
  description: "Professioneller Garten- und Landschaftsbau in Lüneburg und Umgebung. Wir gestalten Ihren Traumgarten – von der Planung bis zur Pflege. ✓ Gartengestaltung ✓ Gartenpflege ✓ Rollrasen ✓ Terrassenbau",
  keywords: "Garten Landschaftsbau Lüneburg, Gartengestaltung, Gartenpflege, Rollrasen, Terrassenbau, Zaunbau, Pflasterarbeiten, Adler & Sohn, GaLaBau Lüneburg",
  authors: [{ name: "Adler & Sohn", url: "https://garten-adler.de" }],
  creator: "Adler & Sohn",
  publisher: "Adler & Sohn",
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
  alternates: {
    canonical: 'https://garten-adler.de',
  },
  openGraph: {
    title: "Adler & Sohn | Garten- & Landschaftsbau in Lüneburg",
    description: "Professioneller Garten- und Landschaftsbau in Lüneburg. Wir verwandeln Ihren Garten in eine grüne Oase.",
    url: "https://garten-adler.de",
    siteName: "Adler & Sohn",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: 'https://garten-adler.de/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Adler & Sohn - Garten- & Landschaftsbau',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adler & Sohn | Garten- & Landschaftsbau",
    description: "Professioneller Garten- und Landschaftsbau in Lüneburg und Umgebung.",
  },
  // GEO meta tags are set per-page to avoid conflicts with city-specific pages
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* #8 Performance: DNS Prefetch & Preconnect */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <StickyContactButton />
      </body>
    </html>
  );
}
