import '../styles/globals.css';
import { Inter } from "next/font/google";
import { ReactNode } from 'react';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

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
    <html lang="en" data-theme="lofi">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={`antialiased text-white bg-blue-900 ${inter.className}}`}>
        <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
          <div className="flex flex-col w-full max-w-5xl mx-auto grow">
            <Header />
            <div className="grow">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
