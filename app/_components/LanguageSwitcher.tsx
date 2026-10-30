import Image from "next/image";
import Link from "next/link";
import { lang } from "next/root-params";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { hasLocale, type Locale } from "../_i18n/config";

const TARGET: Record<Locale, { locale: Locale; flag: string; code: string; label: string }> = {
    fr: { locale: "en", flag: "/flags/gb.svg", code: "EN", label: "Switch to English" },
    en: { locale: "fr", flag: "/flags/fr.svg", code: "FR", label: "Passer en français" },
};

export const LanguageSwitcher = async () => {
  const current = await lang();
  if (!hasLocale(current)) return null;
  const target = TARGET[current];

  return (
    <Link
      href={`/${target.locale}`}
      hrefLang={target.locale}
      lang={target.locale}
      aria-label={target.label}
      className={cn(buttonVariants({ variant: "outline" }), "h-6 px-1.5 gap-1 rounded-md text-xs")}
    >
      <Image src={target.flag} alt="" width={16} height={12} className="rounded-[2px]" />
      {target.code}
    </Link>
  );
};