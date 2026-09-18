import type {ReactNode} from "react"
import {twMerge} from "tailwind-merge"

export default function Card({children, className = ""}: { children: ReactNode, className?: string }) {
    return <div className={twMerge("bg-foreground p-3 rounded-xl", className)}>
        {children}
    </div>
}