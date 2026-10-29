import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Amphora, BookType, Code, FlaskConical, Leaf, UserGroup } from "lucide-react";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps} from "./Work"
import { ContactCard } from "./ContactCard";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-4">
                    <p className="text-lg text-muted-foreground">Side projects.</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject key={index} {...project} />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1 gap-4">
                    <p className="text-lg text-muted-foreground">Work</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work key={index} {...work} />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Contact me.</p>
                    <ContactCard name="Evan Engels" image="https://media.licdn.com/dms/image/v2/D4E35AQHJWKVsQkk0PQ/profile-framedphoto-shrink_200_200/B4EaDaVU47G0AQ-/0/1790369419308?e=1793901600&v=beta&t=JMUKCwb3N9RmEmv0ZL0ykG5Gm8RxynbUrwd2bYhzE4I" badge="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNRiTV1UJmwO2Z0oqPU_aTyXZHtylLBJkLbgKABBQoQ&s=10" description="Let's connect" url="https://www.linkedin.com/in/evan-engels-a25323229/" />
                    <ContactCard name="Evan Engels" image="https://media.licdn.com/dms/image/v2/D4E35AQHJWKVsQkk0PQ/profile-framedphoto-shrink_200_200/B4EaDaVU47G0AQ-/0/1790369419308?e=1793901600&v=beta&t=JMUKCwb3N9RmEmv0ZL0ykG5Gm8RxynbUrwd2bYhzE4I" badge="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-rB0uN2gw9ldkWe9J4dqOTcM_t6jhONarAtuLPRTsQ&s=10" description="evangels@outlook.fr" url="mailto:evanengels@outlook.fr" />
                </Card>
            </div>
        </Section>
    );
};

const SIDE_PROJECTS: SideProjectProps[] = [
        {
        logo: UserGroup,
        title: "Othalia",
        description: "Family organization app (shared tasks, calendar…). In closed beta on iOS (TestFlight) and Android, used daily by my family before a public release.",
        url: "https://othalia-famille.james5983.chatgpt.site/#",
        badge: true
    },
    {
        logo: Leaf,
        title: "Carbon Snap",
        description: "Track your real-time CO₂ footprint from browsing.",
        url: "https://chromewebstore.google.com/detail/carbonsnap/oipiokjegoppokhdfibggmkgambnphnb/reviews?hl=fr&utm_source=ext_sidebar"
    },
    {
        logo: Code,
        title: "DocXpress Extension",
        description: "Easily import and manage your administrative procedures and files from DocXpress or your computer.",
        url: "https://chromewebstore.google.com/detail/docxpress/bhkiaoobnanlieifgoajojdgeoknnckg?hl=fr&utm_source=ext_sidebar"
    },
    {
        logo: Amphora,
        title: "Creacoeur",
        description: "Website for an Association of Local Artists and Creators",
        url: "https://asso-creacoeur.com/"
    },
    {
        logo: FlaskConical,
        title: "NevaUI",
        description: "Experimental React component library exploring motion, interaction, spatial interfaces, physics, visual effects and layout.",
        url: "https://github.com/EvanEngels/NevaUI"
    }
];

const WORKS: WorkProps[] = [
    {
        image: "https://media.licdn.com/dms/image/v2/D4D0BAQFfFYhOKaejsQ/company-logo_100_100/B4DZnniBZtGgAQ-/0/1760526080110/kasapes_logo?e=1795046400&v=beta&t=jBoRZk5uXwLtE9FhD1Ziqd6BC7ltb-Ei2b2XuqXO1P0",
        title: "Kasap",
        role: "Swift developer",
        date: "Mar-Aug 2026",
        url: "https://kasap.es/",
        freelance: false
    },
    {
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQFEAByRcnS3jg/company-logo_100_100/B4EaE0wzFhH4AI-/0/1791886570067/epitech___european_institute_of_technology_logo?e=1795046400&v=beta&t=YC8cQ5NRP_5LCmDaJDJEM3wO_bchRcIHUqBgbRJl5_w",
        title: "Epitech Lille",
        role: "Teaching assistant",
        date: "2025-2026",
        url: "https://www.epitech.eu/ecole-informatique-lille/",
        freelance: false
    },
    {
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQF4SOZZC7Wk7g/company-logo_100_100/B4EZVbHO..G0AY-/0/1740990378548?e=1795046400&v=beta&t=Mp5tbcLc_SaCgVq-sFzG7WBpR4jkiE9GYpb63L24WBc",
        title: "DocXpress",
        role: "Co-Founder",
        date: "2024-2026",
        url: "/",
        freelance: false
    },
    {
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQHmhF10LkCsbw/company-logo_100_100/B4EZX8FFS_HkAU-/0/1743690946658/thetys_lab_logo?e=1795046400&v=beta&t=anGwjMb8dWZOxn9bg-hhEz7Yla8zyPoG4I8NO6-l_x4",
        title: "Thetys Lab",
        role: "React Native Mobile developer",
        date: "Feb-Jun 2024",
        url: "/",
        freelance: false
    },
];
