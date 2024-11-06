'use client'

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

import {PrivyProvider} from '@privy-io/react-auth';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PrivyProvider
          appId="cm35mzk4k02hs144dbo0ezmac"
          config={{
            // Customize Privy's appearance in your app
            appearance: {
              theme: 'dark',
              accentColor: '#676FFF',
              logo: 'https://your-logo-url',
            },
            // Create embedded wallets for users who don't have a wallet
            embeddedWallets: {
              createOnLogin: 'users-without-wallets',
            },
          }}
        >
        <Navbar />
        {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
