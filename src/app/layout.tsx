import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/global.css';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: {
    default: 'tavin.dev',
    template: '%s | tavin.dev',
  },
  description:
    'Articles on DDD, CQRS, hexagonal architecture, and TypeScript backend patterns.',
  metadataBase: new URL('https://tavin.dev'),
  openGraph: {
    title: 'tavin.dev',
    description:
      'Articles on DDD, CQRS, hexagonal architecture, and TypeScript backend patterns.',
    url: 'https://tavin.dev',
    siteName: 'tavin.dev',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@tavindev',
  },
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
