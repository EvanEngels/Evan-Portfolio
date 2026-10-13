import { cn } from "@/lib/utils"

export type SpacingProps = {
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
    className?: string
}

export const Spacing = ({ size = "md" }: SpacingProps) => {
    return (
        <div className={cn({
            "h-8 lg:h-16": size === "sm",
            "h-16 lg:h-32": size === "md",
            "h-32 lg:h-64": size === "lg",
            "h-64 lg:h-96": size === "xl",
            "h-96 lg:h-[32rem]": size === "2xl",
            "h-[32rem] lg:h-[48rem]": size === "3xl",
            "h-[48rem] lg:h-[64rem]": size === "4xl",
            "h-[64rem] lg:h-[80rem]": size === "5xl",
        })} />
    )
}