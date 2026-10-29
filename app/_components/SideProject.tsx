import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type SideProjectProps = {
    logo: LucideIcon;
    title: string;
    description: string;
    url: string;
    badge?: boolean
};

export const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.logo size={16} />
            </span>
            <div>
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.badge && <Badge variant="outline">Closed beta · iOS & Android</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    )
}