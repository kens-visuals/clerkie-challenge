import './globals.css';
import { Inter } from 'next/font/google';

import Nav from '@/components/Nav';
import Banner from '@/components/Banner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Clerkie Challenge',
  description: 'Sloved by create Karapet Nersisya',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <Banner />
        {children}
      </body>
    </html>
  );
}
