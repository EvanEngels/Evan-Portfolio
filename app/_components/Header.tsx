import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section"
import { GitHubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
    return (
        <header className="sticky top-0">
            <Section className="flex items-baseline gap-4 py-4">
                <h1 className="text-lg font-bold foreground">Evan Engels</h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link href="https://github.com/evanengels" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0 rounded-md")}>
                        <GitHubIcon size={16} className="text-foreground" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/evan-engels-a25323229/" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0 rounded-md")}>
                        <LinkedinIcon size={16} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    )
}
