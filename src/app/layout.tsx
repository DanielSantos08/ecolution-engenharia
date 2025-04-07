import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: '#16a34a',
};

export const metadata: Metadata = {
  title: "Ecolution Engenharia - Consultoria Ambiental e Segurança do Trabalho",
  description: "Ecolution Engenharia oferece serviços de consultoria ambiental, consultoria em alimentos e consultoria em segurança do trabalho. Inovação sustentável, impacto duradouro.",
  icons: {
    icon: [
      { url: '/images/logo-ecolution.png' }
    ],
    apple: [
      { url: '/images/logo-ecolution.png' }
    ]
  },
  appleWebApp: {
    title: 'Ecolution Engenharia',
    statusBarStyle: 'black-translucent'
  }
};

import { Providers } from './providers';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
