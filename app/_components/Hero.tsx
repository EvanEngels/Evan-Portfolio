import { Section } from "./Section"
import Image from "next/image";
import evanImage from "../images/Evan.jpeg"
import { Code } from "./Code";
import { GitHubIcon } from "./icons/GithubIcon";
import Link from "next/link";


export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">Evan Engels</h2>
                <h3 className="font-caption text-3xl">Product-oriented software engineer specialized in mobile development and AI-augmented engineering workflows.</h3>
                <p className="font-caption text-base">I design and build products end to end, from the first idea to the version in users' hands. I've built iOS features in {" "}
                    <Link href="https://github.com/evanengels">
                        <Code className="inline-flex items-center gap-1">
                            <GitHubIcon size={16} className="inline" /> SwiftUI
                        </Code>
                    </Link>
                    , shipped {""}
                    <Code className="inline-flex items-center gap-1">
                        React Native
                    </Code>
                    {""} to production and published Chrome extensions. I use AI to speed up review, testing and audits, while staying accountable for every line I ship. Based near Lille, France, I'm open to freelance missions and full-time roles.
                </p>

            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <Image src={evanImage} alt="Evan Engels" className="rounded-full w-full h-auto max-w-xs max-md:w-56" />
            </div>
        </Section>
    )
}