import type {ReactNode} from "react"
import {twMerge} from "tailwind-merge"

export default function Card({children, className = "", ...rest}: { children: ReactNode, className?: string, rest?: any }) {
    return (
        <div
            className={twMerge("bg-foreground p-3 rounded-xl", className)}
            {...rest}
        >
            {children}
        </div>
    )
}