import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";
import { getDictionary } from "../_i18n";
import { CONTACTS, EMAIL } from "./contacts";

export const Contact = async () => {
    const dict = await getDictionary();
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant="outline">{dict.contact.badge}</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {dict.contact.title}
            </h2>
            <div className="flex max-md:flex-col gap-4 w-full">
                <ContactCard {...CONTACTS.linkedin} description={dict.contact.linkedin} className="flex-1"/>
                <ContactCard {...CONTACTS.email} description={EMAIL} className="flex-1"/>
                <ContactCard  {...CONTACTS.call} description={dict.contact.call} className="flex-1"/>
            </div>
        </Section>
    );
};