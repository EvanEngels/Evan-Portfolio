import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant="outline">Contact me</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I will be happy to work with you.
            </h2>
            <div className="flex max-md:flex-col gap-4 w-full">
                <ContactCard name="Evan Engels" image="https://media.licdn.com/dms/image/v2/D4E35AQHJWKVsQkk0PQ/profile-framedphoto-shrink_200_200/B4EaDaVU47G0AQ-/0/1790369419308?e=1793901600&v=beta&t=JMUKCwb3N9RmEmv0ZL0ykG5Gm8RxynbUrwd2bYhzE4I" badge="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNRiTV1UJmwO2Z0oqPU_aTyXZHtylLBJkLbgKABBQoQ&s=10" description="Software Engineer" className="flex-1" url="https://www.linkedin.com/in/evan-engels-a25323229/"/>
                <ContactCard name="Evan Engels" image="https://media.licdn.com/dms/image/v2/D4E35AQHJWKVsQkk0PQ/profile-framedphoto-shrink_200_200/B4EaDaVU47G0AQ-/0/1790369419308?e=1793901600&v=beta&t=JMUKCwb3N9RmEmv0ZL0ykG5Gm8RxynbUrwd2bYhzE4I" badge="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-rB0uN2gw9ldkWe9J4dqOTcM_t6jhONarAtuLPRTsQ&s=10" description="evanengels@outlook.fr" className="flex-1" url="mailto:evanengels@outlook.fr"/>
                <ContactCard name="Evan Engels" image="https://media.licdn.com/dms/image/v2/D4E35AQHJWKVsQkk0PQ/profile-framedphoto-shrink_200_200/B4EaDaVU47G0AQ-/0/1790369419308?e=1793901600&v=beta&t=JMUKCwb3N9RmEmv0ZL0ykG5Gm8RxynbUrwd2bYhzE4I" badge="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7R0mpVDjsII5tmr-hgUO6LMd7C2jciDPr44I_fCAyg&s=10" description="Ready for a demo?" className="flex-1" url="https://cal.com/Evan_E"/>
            </div>
        </Section>
    );
};