'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { AIProvider } from './providers/AIProvider';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ECOMMERCE IA</title>
        <meta name="description" content="Generate product descriptions, question answers, and more with AI." />
        <link rel="icon" type="image/svg+xml" href="/logo.ico" />
        <link rel="preload" href="/banner.jpg" as="image" />
      </head>
      <body className={`${inter.className} bg-[#0E1117] text-neutral-200`}>
        <AIProvider>{children}</AIProvider>
        <Toaster
          toastOptions={{
            style: {
              background: '#1F2937',
              color: '#E5E7EB',
            },
          }}
        />
      </body>
    </html>
  );
}
