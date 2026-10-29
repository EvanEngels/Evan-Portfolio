import Link from "next/link";
import { ArrowUpRight } from "lucide-react"

export const ContactCard = (props: {
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