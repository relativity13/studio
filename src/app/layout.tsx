import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stearic Acid Supplier in Delhi | HIKE Corporation',
  description: 'HIKE Corporation is a leading stearic acid supplier in Delhi, offering premium quality products from brands like Godrej and Adani for cosmetics, rubber, and plastics manufacturing. Contact us for bulk and wholesale orders.',
  keywords: 'stearic acid, stearic acid supplier, stearic acid dealer, stearic acid Delhi, Godrej stearic acid, Adani stearic acid, chemical supplier',
  openGraph: {
    title: 'Stearic Acid Supplier in Delhi | HIKE Corporation',
    description: 'Top supplier of high-quality stearic acid in Delhi NCR from leading brands. Reliable bulk and wholesale distribution for various industries.',
    type: 'website',
    url: 'https://www.hikecorporation.in', // Assuming this is the production URL
    siteName: 'HIKE Corporation',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
