import '@/styles/globals.css';

import { ReactNode } from 'react';
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { LandingFooter } from '@/components/LandingFooter';
import { Navbar } from '@/components/Navbar';

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  };

export const metadata = {
  title: 'PedigreeSync - Sheep Pedigree Management',
  description: 'Unofficial web implementation of PedigreeMaster (NSIP) for efficient sheep pedigree data management and breeding decisions.',
  keywords: ['sheep', 'pedigree', 'NSIP', 'breeding', 'livestock', 'agriculture', 'PedigreeMaster'],
  authors: [{ name: 'PedigreeSync Team' }],
  openGraph: {
    title: 'PedigreeSync - Sheep Pedigree Management',
    description: 'Unofficial modern web implementation of PedigreeMaster (NSIP) for efficient sheep pedigree data management and breeding decisions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PedigreeSync'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PedigreeSync',
    description: 'Sheep pedigree management platform',
  },
  other: {
    'application-name': 'PedigreeSync',
    'robots': 'index, follow',
  }
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <LandingFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
