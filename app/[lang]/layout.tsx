import type { Metadata } from "next";
import { Anek_Telugu, Geist, Geist_Mono, Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { lang } from "next/root-params";
import { hasLocale, Locale, locales } from "../_i18n/config";
import { getDictionary } from "../_i18n";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const AnekTelugu = Anek_Telugu({
  variable: "--font-anek-telugu",
  subsets: ["latin"],
});

const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000";

const OG_LOCALES: Record<Locale, string> = { fr: "fr_FR", en: "en_GB" };

export async function generateMetadata(): Promise<Metadata> {
  const locale = await lang();
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary();

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: "Evan Engels",
      title: dict.meta.title,
      description: dict.meta.description,
      locale: OG_LOCALES[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALES[l]),
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  return (
    <html
      lang={await lang()}
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, AnekTelugu.variable, "font-sans", inter.variable, "bg-background text-foreground")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}
