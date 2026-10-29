import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon"
import { TailwindIcon } from "./icons/TailwindIcon";
import { ClaudeCodeIcon } from "./icons/ClaudeCodeIcon"
import { Code } from "./Code"; 

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant="outline">Skills</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <ReactIcon size={42} className="text-foreground animate-spin" style={{animationDuration: "16s"}} />
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">Mobile</h3>
                    <p className="text-sm text-muted-foreground">
                        iOS and Android apps with <Code className="inline-flex items-center gap-1">React Native</Code>, and native iOS with <Code className="inline-flex items-center gap-1">SwiftUI</Code>, with real care for accessibility.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <TailwindIcon size={42} className="text-foreground animate-pulse" />
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">Web</h3>
                    <p className="text-sm text-muted-foreground">
                        Fast, maintainable websites and web apps with <Code className="inline-flex items-center gap-1">React</Code>, <Code className="inline-flex items-center gap-1">Next.js</Code> and <Code className="inline-flex items-center gap-1">TypeScript</Code>, from showcase sites to full-stack products.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <ClaudeCodeIcon size={42} className="text-foreground animate-bounce" />
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">Ai</h3>
                    <p className="text-sm text-muted-foreground">
                        AI features inside real products (support, search, document sorting), and AI-augmented workflows with <Code className="inline-flex items-center gap-1">Claude Code</Code> for review, testing and audits.
                    </p>
                </div>
            </div>
        </Section>
    );
};