import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sanganak.org'),
  title: {
    default: 'Sanganak - Modern Tech Solutions',
    template: '%s | Sanganak'
  },
  description: 'Expert solutions in Design, Web & Mobile Dev, Blockchain, AI, and SaaS. Transform your ideas into reality with cutting-edge technology.',
  keywords: 'web development, mobile apps, blockchain, AI, SaaS, design, technology solutions, digital transformation, Bihar tech company, Indian tech startup',
  authors: [
    { name: 'Aryabhatta', url: 'https://twitter.com/_mrbuddhu_' },
    { name: 'Shabi Kaushal', url: 'https://twitter.com/msbuddhu' }
  ],
  creator: 'Sanganak',
  publisher: 'Sanganak',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://sanganak.org',
  },
  openGraph: {
    title: 'Sanganak - Modern Tech Solutions',
    description: 'Expert solutions in Design, Web & Mobile Dev, Blockchain, AI, and SaaS. Transform your ideas into reality with cutting-edge technology.',
    url: 'https://sanganak.org',
    siteName: 'Sanganak',
    images: [
      {
        url: 'https://sanganak.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanganak - Modern Tech Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanganak - Modern Tech Solutions',
    description: 'Expert solutions in Design, Web & Mobile Dev, Blockchain, AI, and SaaS. Transform your ideas into reality with cutting-edge technology.',
    site: '@sanganak',
    creator: '@_mrbuddhu_',
    images: ['https://sanganak.org/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}