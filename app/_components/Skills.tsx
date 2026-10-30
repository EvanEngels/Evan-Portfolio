import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon"
import { TailwindIcon } from "./icons/TailwindIcon";
import { ClaudeCodeIcon } from "./icons/ClaudeCodeIcon"
import { getDictionary } from "../_i18n";
import { RichText } from "./RichText";

export const Skills = async () => {
    const dict = await getDictionary();
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant="outline">{dict.skills.badge}</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {dict.skills.title}
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <ReactIcon size={42} className="text-foreground animate-spin" style={{animationDuration: "16s"}} />
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">{dict.skills.mobile.title}</h3>
                    <p className="text-sm text-muted-foreground">
                        <RichText text={dict.skills.mobile.text} />
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <TailwindIcon size={42} className="text-foreground animate-pulse" />
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">{dict.skills.web.title}</h3>
                    <p className="text-sm text-muted-foreground">
                        <RichText text={dict.skills.web.text} />
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <ClaudeCodeIcon size={42} className="text-foreground animate-bounce" />
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">{dict.skills.ai.title}</h3>
                    <p className="text-sm text-muted-foreground">
                        <RichText text={dict.skills.ai.text} />
                    </p>
                </div>
            </div>
        </Section>
    );
};