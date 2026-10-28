import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ArrowUpRight, Code, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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

type SideProjectProps = {
    logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.logo size={16} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    )
}

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

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
};

const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
                <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" />
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.freelance && <Badge variant="outline">Mission</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{props.role}</p>
            </div>
            <div>
                <p className="text-xs text-end text-muted-foreground">{props.date}</p>
            </div>
        </Link>
    )
}

const ContactCard = (props: {
    image: string;
    meduimImage: string;
    name: string;
    description: string;
}) => {
    return (
        <Link href="#" className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex flex-row items-center gap-4 rounded-lg border border-accent">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 object-contain rounded-full" />
                <img src={props.meduimImage} alt={props.name} className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full" />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform mr-4" size={16} />
        </Link>
    )
}