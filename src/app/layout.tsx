import type { Metadata } from "next";
import { Press_Start_2P, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  metadataBase: new URL("https://enesefeacikgoz.com"),
  title: "Enes Efe Açıkgöz | MIS Student & Developer",
  description: "2nd-year Management Information Systems student focusing on backend architectures and AI trading bots. I know you know that I know you know... and the AI knows it better.",
  keywords: "Enes Efe Açıkgöz, YBS, Management Information Systems, Next.js Portfolio, AI Trading Bots, Software Developer Turkey",
  openGraph: {
    title: "Enes Efe Açıkgöz | MIS Student & Developer",
    description: "2nd-year Management Information Systems student focusing on backend architectures and AI trading bots. I know you know that I know you know... and the AI knows it better.",
    url: "https://enesefeacikgoz.com",
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
    description: "2nd-year Management Information Systems student focusing on backend architectures and AI trading bots. I know you know that I know you know... and the AI knows it better.",
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
          <Navbar />
          <div className="pt-20">
            {children}
          </div>
          <BackToTop />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
