import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code } from "lucide-react";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps} from "./Work"
import { ContactCard } from "./ContactCard";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-4">
                    <p className="text-lg text-muted-foreground">Side project.</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject key={index} {...project} />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-3">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">Work</p>
                    <div className="flex flex-col gap-2">
                        {WORKS.map((work, index) => (
                            <Work key={index} {...work} />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Contact me.</p>
                    <ContactCard name="Evan Engels" image="/images/contacts/1.png" meduimImage="/images/contacts/2.png" description="Software Engineer" />
                    <ContactCard name="Evan Engels" image="/images/contacts/1.png" meduimImage="/images/contacts/2.png" description="Software Engineer" />
                </Card>
            </div>
        </Section>
    );
};

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        logo: Code,
        title: "Project 1",
        description: "Description of project 1",
        url: "/"
    },
    {
        logo: Code,
        title: "Project 2",
        description: "Description of project 2",
        url: "/"
    },
    {
        logo: Code,
        title: "Project 3",
        description: "Description of project 3",
        url: "/"
    },
    {
        logo: Code,
        title: "Project 4",
        description: "Description of project 4",
        url: "/"
    },
    {
        logo: Code,
        title: "Project 5",
        description: "Description of project 5",
        url: "/"
    },
    {
        logo: Code,
        title: "Project 6",
        description: "Description of project 6",
        url: "/"
    }
];

const WORKS: WorkProps[] = [
    {
        image: "/images/works/1.png",
        title: "Work 1",
        role: "Role 1",
        date: "Date 1",
        url: "/",
        freelance: false
    },
    {
        image: "/images/works/2.png",
        title: "Work 2",
        role: "Role 2",
        date: "Date 2",
        url: "/",
        freelance: false
    },
    {
        image: "/images/works/3.png",
        title: "Work 3",
        role: "Role 3",
        date: "Date 3",
        url: "/",
        freelance: true
    },
];
