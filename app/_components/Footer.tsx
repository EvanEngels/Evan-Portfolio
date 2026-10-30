import { Section } from "./Section";
import { getDictionary } from "../_i18n";

export const Footer = async () => {
    const dict = await getDictionary();
    return (
        <footer className="bg-card">
            <Section className="py-8">
                <p className="text-muted-foreground text-sm">
                    {dict.footer.rights}
                </p>
            </Section>
        </footer>
    )
}