import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://walletmaster.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Wallet Master — Votre GPS financier",
  description:
    "Wallet Master transforme un objectif en trajectoire concrète. Un GPS financier intelligent qui aide chacun à comprendre sa situation, définir ses priorités et avancer étape par étape vers ses projets.",
  keywords: [
    "budget",
    "éducation financière",
    "GPS financier",
    "objectifs",
    "épargne",
    "autonomie financière",
  ],
  authors: [{ name: "Wallet Master" }],
  openGraph: {
    title: "Wallet Master — Votre GPS financier",
    description:
      "L'avenir n'appartient pas qu'aux autres. Wallet Master transforme un objectif en trajectoire concrète.",
    type: "website",
    locale: "fr_FR",
    siteName: "Wallet Master",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallet Master — Votre GPS financier",
    description:
      "L'avenir n'appartient pas qu'aux autres. Wallet Master transforme un objectif en trajectoire concrète.",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
    >
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
