import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import FullWidthImage from '../components/layout/FullWidthImage';
import Card from '../components/ui/Card';
import Content from '../components/layout/Content';
import Image from 'next/image';
import Navigation from '../components/layout/Navigation';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mundesley Haig Bowls Club',
  description: 'An outdoor only bowls club in Mundesley, North Norfolk. Since 1929.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cardContent = {
    title: 'Mundesley Haig Bowls Club',
    subtitle:
      'An outdoor only bowls club in Mundesley, North Norfolk. Since 1929.',
    text: '46 High St, Mundesley, Norwich NR11 8JW',
    link1: {
      url: 'https://maps.app.goo.gl/CvmQqu4icCJ8YfEE6',
      text: 'Get Directions',
    },
    link2: { url: '/contact', text: 'Contact Us' },
  };
  return (

      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header>
            <FullWidthImage>
              <Image
                className="rounded-full overflow-hidden max-w-[250px] w-48 md:w-max"
                src={'/images/logo.jpeg'}
                alt="logo"
                width="827"
                height="849"
              />
            </FullWidthImage>
            <Navigation />
          </header>
          <main className="flex justify-center">
            <Content>{children}</Content>
          </main>
          <footer className="bg-navy flex flex-row justify-center px-3 py-2 text-center text-white">
            <Card content={cardContent} />
          </footer>
        </body>
      </html>

  );
}

