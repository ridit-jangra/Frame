import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Providers from "@/components/providers/providers";
import Layout from "@/components/layout/root-layout";

import "./globals.css";

const fontSans = Geist({
  variable: "--font-giest-sans",
  subsets: ["latin"],
});

const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frame",
  description: "A pixel perfect ui library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontInter.variable} font-inter antialiased dark`}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
