import type {ReactNode} from "react"
import {twMerge} from "tailwind-merge";

export default function Button({children, className = "", ...rest}: { children?: ReactNode, className?: string, rest: [] }) {
    return (
        <input className={twMerge("bg-pink-500/10 hover:bg-red-500/25 focus:bg-red-500/25 rounded-lg select-none cursor-text focus:outline-0 p-1", className)} {...rest}>
            {children}
        </input>
    )
}