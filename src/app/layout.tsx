import type { Metadata } from "next";
import { Press_Start_2P, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-press-start'
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enes-efe-portfolio.vercel.app/"),
  title: "Enes Efe Açıkgöz | MIS Student & Developer",
  description: "Researching the tech, dreaming of the world. Seeking the truth beyond the code and across the horizons.",
  alternates: {
    canonical: "https://enes-efe-portfolio.vercel.app/",
  },
  keywords: "Enes Efe Açıkgöz, YBS, Management Information Systems, Next.js Portfolio, AI Trading Bots, Software Developer Turkey",
  openGraph: {
    title: "Enes Efe Açıkgöz | MIS Student & Developer",
    description: "Researching the tech, dreaming of the world. Seeking the truth beyond the code and across the horizons.",
    url: "https://enes-efe-portfolio.vercel.app/",
    siteName: "Enes Efe Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Enes Efe Açıkgöz - Retro Arcade Terminal Portfolio Preview",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enes Efe Açıkgöz | MIS Student & Developer",
    description: "Researching the tech, dreaming of the world. Seeking the truth beyond the code and across the horizons.",
    images: ["/og-image.png"],
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${pressStart2P.variable} font-sans antialiased text-foreground bg-background`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="theme" disableTransitionOnChange>
          <LanguageProvider>
            <Navbar />
            <div className="pt-20">
              {children}
            </div>
            <BackToTop />
          </LanguageProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
