import Link from "next/link";
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils";
import Image from "next/image";
import evanImage from "../images/Evan.jpeg";

export const ContactCard = (props: {
    badge: string;
    description: string;
    url?: string;
    className?: string;
}) => {
    return (
        <Link href={props.url ?? "/"} className={cn("p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex flex-row items-center gap-4 rounded-lg border border-accent w-full", props.className)}>
            <div className="relative w-10 h-10">
                <Image src={evanImage} alt="" className="w-10 h-10 object-contain rounded-full" />
                <Image src={props.badge} alt="" width={16} height={16} className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full" />
            </div>
            <div className="mr-auto flex-1">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">Evan Engels</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform mr-4" size={16} />
        </Link>
    )
}