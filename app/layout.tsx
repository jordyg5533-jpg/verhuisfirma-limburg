import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo";
import "@fontsource-variable/public-sans";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobieleBalk } from "@/components/Blokken";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Verhuisfirma Limburg: prijzen, verhuislift en offerte",
  description:
    "Gids over verhuizen in Limburg: richtprijzen voor een verhuisfirma en verhuislift, de regels voor het parkeerverbod in 24 gemeenten en een vrijblijvende offerte.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "nl_BE", siteName: site.naam, url: site.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#132238", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE">
      <body className="pb-20 md:pb-0">
        <a href="#inhoud" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">
          Naar de inhoud
        </a>
        <Header />
        <main id="inhoud">{children}</main>
        <Footer />
        <MobieleBalk />
      </body>
    </html>
  );
}
