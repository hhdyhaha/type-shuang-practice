import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./_styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Providers from "./_config/providers";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "双拼练习",
  description: "使用我们专注的练习平台，提高您的中文打字速度和准确性。通过互动练习学习双拼方案。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
        
        {/* Umami Analytics */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="00f4786a-6c9b-4f8d-8fc6-8eb517ba26af"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
