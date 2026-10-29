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
                    <ReactIcon size={42} className="text-foreground animate-spin" style={{animationDuration: "10s"}} />
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">Marketing</h3>
                    <p className="text-sm text-muted-foreground">
                        My main fraimwork is <Code>React</Code> I also use <Code>Next.js</Code> as a frontend and backend framework.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <TailwindIcon size={42} className="text-foreground animate-pulse" />
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">Tailewind</h3>
                    <p className="text-sm text-muted-foreground">
                        I can create <u>beautiful</u> application <i>in seconds</i> using <Code>TailwindCSS</Code>
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <ClaudeCodeIcon size={42} className="text-foreground animate-bounce" />
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">Claude Code</h3>
                    <p className="text-sm text-muted-foreground">
                        I'm an expert of integrating AI in your applications to create a perfect <u>user experience</u>.
                    </p>
                </div>
          </div>
        </Section>
    );
};