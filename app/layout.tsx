import type { Metadata } from "next";
import { generateBaseMetadata } from "@/config/metadata";
import Plausible from "@/components/common/Plausible";
import ShareThisScript from "@/components/common/ShareThisScript";
import Clarity from "@/components/common/Clarity";
import AdSense from "@/components/common/AdSense";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { config } from "@/config/config";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

type Props = {
  children: React.ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {
  return await generateBaseMetadata();
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={config.analytics.google.gaId} />
      <head>
        <Plausible />
        <ShareThisScript />
        <Clarity />
        <AdSense />
      </head>
      <body className="bg-zinc-800 text-white antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow w-full max-w-5xl mx-auto px-2 md:px-4">
            {children}
          </main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}