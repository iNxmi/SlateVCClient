import type {ReactNode} from "react"
import {twMerge} from "tailwind-merge";

export default function Button({children, className = "", ...rest}: { children?: ReactNode, className?: string }) {
    return (
        <button className={twMerge("bg-pink-500/10 hover:bg-red-500/25 rounded-lg p-1 select-none cursor-pointer", className)} {...rest}>
            {children}
        </button>
    )
}