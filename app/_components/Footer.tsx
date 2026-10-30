import Link from "next/link";
import { lang } from "next/root-params";
import { Section } from "./Section";
import { getDictionary } from "../_i18n";

export const Footer = async () => {
    const locale = await lang();
    const dict = await getDictionary();
    return (
        <footer className="bg-card">
            <Section className="py-8 flex max-md:flex-col gap-2 justify-between">
                <p className="text-muted-foreground text-sm">
                    © 2026 Evan Engels · {dict.footer.rights}
                </p>
                <Link href={`/${locale}/mentions-legales`} className="text-muted-foreground text-sm hover:text-foreground underline">
                    {dict.footer.legal}
                </Link>
            </Section>
        </footer>
    )
}
