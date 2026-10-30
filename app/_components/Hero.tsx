import { Section } from "./Section"
import Image from "next/image";
import evanImage from "../images/Evan.jpeg"
import { Code } from "./Code";
import { GitHubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { getDictionary } from "../_i18n";
import { RichText } from "./RichText";


export const Hero = async () => {
    const dict = await getDictionary();
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">Evan Engels</h2>
                <h3 className="font-caption text-3xl">{dict.hero.tagline}</h3>
                <p className="font-caption text-base">
                    <RichText
                        text={dict.hero.about}
                        tags={{
                            github: (content) => (
                                <Link href="https://github.com/evanengels">
                                    <Code className="inline-flex items-center gap-1">
                                        <GitHubIcon size={16} className="inline" /> {content}
                                    </Code>
                                </Link>
                            ),
                        }}
                    />
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <Image src={evanImage} alt="Evan Engels" className="rounded-full w-full h-auto max-w-xs max-md:w-56" />
            </div>
        </Section>
    )
}