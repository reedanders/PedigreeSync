import '@/styles/globals.css';

import { ReactNode } from 'react';
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { AuthProvider } from '@/lib/contexts/AuthContext';

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  };

export const metadata = {
  title: "PedigreeSync – Open-Source NFC Livestock Recordkeeping",
  description:
    "Scan livestock ear tags with your iPhone. PedigreeSync is a farmer-led, open-source tool for accessible, affordable, and resilient animal welfare recordkeeping.",
  openGraph: {
    title: "PedigreeSync – Open-Source NFC Livestock Recordkeeping",
    description:
      "Scan livestock ear tags with your iPhone. PedigreeSync is a farmer-led, open-source tool for accessible, affordable, and resilient animal welfare recordkeeping.",
    url: "https://pedigreesync.com",
    images: [
      {
        url: "/images/sheep_ear_tag_tiny.png",
        width: 1200,
        height: 630,
        alt: "Sheep in a pasture with NFC tag",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PedigreeSync – Open-Source NFC Livestock Recordkeeping",
    description:
      "Scan livestock ear tags with your iPhone. PedigreeSync is a farmer-led, open-source tool for accessible, affordable, and resilient animal welfare recordkeeping.",
    images: ["/images/sheep_ear_tag_tiny.png"],
  },
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        {/* Background with gradient using class */}
        <div className="background-gradient" aria-hidden="true" />
        
        {/* Content wrapper with higher z-index */}
        <div className="content-wrapper">
          <ThemeProvider attribute="class">
            <AuthProvider>
              <Navbar />
              <div>{children}</div>
              <Footer />
            </AuthProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
