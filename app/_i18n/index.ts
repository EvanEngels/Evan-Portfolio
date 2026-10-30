import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { hasLocale, Locale } from "./config";
import { Dictionary } from "./fr";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    fr: () => import("./fr").then((m) => m.fr),
    en: () => import("./en").then((m) => m.en),
};

export async function getDictionary() {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return dictionaries[locale]();
}