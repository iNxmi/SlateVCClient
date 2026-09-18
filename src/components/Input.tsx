import type {ReactNode} from "react"
import {twMerge} from "tailwind-merge";

export default function Button({children, className = "", ...rest}: { children?: ReactNode, className?: string, rest: [] }) {
    return (
        <input className={twMerge("bg-foreground hover:bg-highlight focus:bg-highlight rounded-lg select-none cursor-text focus:outline-0 p-1", className)} {...rest}>
            {children}
        </input>
    )
}