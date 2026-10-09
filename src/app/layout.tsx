import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

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
  metadataBase: new URL("https://www.pipra.in"),
  title: {
    default: "Pipra — Building better food systems for a better-nourished India",
    template: "%s | Pipra",
  },
  description:
    "Building better food systems for a better-nourished India. Pipra is exploring how traditional Indian food knowledge can become globally accessible, trusted, desirable, and economically valuable.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pipra — Building better food systems for a better-nourished India",
    description:
      "Building better food systems for a better-nourished India. Pipra is exploring how traditional Indian food knowledge can become globally accessible, trusted, desirable, and economically valuable.",
    url: "https://www.pipra.in",
    siteName: "Pipra",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pipra — Building better food systems for a better-nourished India",
    description:
      "Building better food systems for a better-nourished India. Pipra is exploring how traditional Indian food knowledge can become globally accessible, trusted, desirable, and economically valuable.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
