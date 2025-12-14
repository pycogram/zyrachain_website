import type { Metadata } from "next";
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

const useLogoX = "/logo/new-zyrachain-logo-1.png";


export const metadata: Metadata = {
  metadataBase: new URL("https://zyrachain-v1.vercel.app"), 

  openGraph: {
    title: "Zyrachain",
    description: "Zyrachain is a Web3 ecosystem powered by Pi, enabling fast, secure, and scalable blockchain interactions for developers and users.",
    images: [
      {
        url: "/pic/banner-fg.png", 
        width: 1200,
        height: 630,
      },
    ],
  },

  icons: {
    icon: useLogoX,
    shortcut: useLogoX,
    apple: useLogoX,
  },
};


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
        {children}
      </body>
    </html>
  );
}
