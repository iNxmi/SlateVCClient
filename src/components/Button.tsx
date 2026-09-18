import type {ReactNode} from "react"
import {twMerge} from "tailwind-merge";

export default function Button({children, className = "", ...rest}: { children?: ReactNode, className?: string }) {
    return (
        <button className={twMerge("transition duration-150 ease-in-out bg-foreground hover:bg-highlight rounded-lg p-1 select-none cursor-pointer", className)} {...rest}>
            {children}
        </button>
    )
}