import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Amphora, Code, FlaskConical, Leaf, UserGroup, LucideIcon } from "lucide-react";
import { SideProject } from "./SideProject";
import { Work } from "./Work"
import { ContactCard } from "./ContactCard";
import { getDictionary } from "../_i18n";
import type { Dictionary } from "../_i18n/fr";
import { CONTACTS, EMAIL } from "./contacts";

export const Status = async () => {
    const dict = await getDictionary();
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-4">
                    <p className="text-lg text-muted-foreground">{dict.status.sideProjects}</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project) => (
                            <SideProject
                            key={project.id}
                            logo={project.logo}
                            title={project.title}
                            url={project.url}
                            description={dict.projects[project.id]}
                            badge={project.beta ? dict.status.beta : undefined}
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1 gap-4">
                    <p className="text-lg text-muted-foreground">{dict.status.work}</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work) => (
                            <Work
                            key={work.id}
                            image={work.image}
                            title={work.title}
                            role={dict.works[work.id].role}
                            date={dict.works[work.id].period}
                            url={work.url}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">{dict.status.contact}</p>
                    <ContactCard {...CONTACTS.linkedin} description={dict.contact.linkedin} />
                    <ContactCard {...CONTACTS.email} description={EMAIL} />
                </Card>
            </div>
        </Section>
    );
};

type ProjectId = keyof Dictionary["projects"];

const SIDE_PROJECTS: { id: ProjectId; logo: LucideIcon; title: string; url: string; beta?: boolean }[] = [
    { id: "othalia", logo: UserGroup, title: "Othalia", url: "https://othalia-famille.james5983.chatgpt.site/#", beta: true },
    { id: "carbonSnap", logo: Leaf, title: "Carbon Snap", url: "https://chromewebstore.google.com/detail/carbonsnap/oipiokjegoppokhdfibggmkgambnphnb" },
    { id: "docxpress", logo: Code, title: "DocXpress Extension", url: "https://chromewebstore.google.com/detail/docxpress/bhkiaoobnanlieifgoajojdgeoknnckg" },
    { id: "creacoeur", logo: Amphora, title: "Creacoeur", url: "https://asso-creacoeur.com/" },
    { id: "nevaUi", logo: FlaskConical, title: "NevaUI", url: "https://github.com/EvanEngels/NevaUI" },
];

type WorkId = keyof Dictionary["works"];

const WORKS: { id: WorkId; image: string; title: string; url: string; }[] = [
    {
        id: "kasap",
        image: "/logos/kasap.jpg",
        title: "Kasap",
        url: "https://kasap.es/",
    },
    {
        id: "epitech",
        image: "/logos/epitech.jpg",
        title: "Epitech Lille",
        url: "https://www.epitech.eu/ecole-informatique-lille/",
    },
    {
        id: "docxpress",
        image: "/logos/docxpress.jpg",
        title: "DocXpress",
        url: "/",
    },
    {
        id: "thetys",
        image: "/logos/thetys.jpg",
        title: "Thetys Lab",
        url: "/",
    },
];
