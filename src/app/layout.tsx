

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://waylo.tech"),
  title: "WayloTech",
  description: "Waylo's Portflio",
  icons:{
    icon: "/WayloTechTab.svg"
  },
    openGraph: {
      title: "WayloTech Portfolio",
      description: "My personal portflio and projects",
      url: "https://waylo.tech",
      siteName: "WayloTech",
      images: [
          {
             url: "/WayloTech.svg",
             width: 1200,
             height: 630,
             alt: "WayloTech logo"
          }
      ]
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
            rel="stylesheet"/>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable}`} style={{backgroundColor: "var(--background)"}}>
    {children}
    <Footer />
    </body>
    </html>
  );
}
