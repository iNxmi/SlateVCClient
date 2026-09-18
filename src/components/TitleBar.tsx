import {Square, X, Minus} from "lucide-react"
import type {ReactNode} from "react"
import Card from "@components/Card"

function Button({children, onClick}: { children: ReactNode, onClick: any }) {
    return (
        <button
            className="flex flex-col justify-center aspect-square hover:bg-highlight cursor-pointer rounded-lg p-1"
            onClick={onClick}
            style={{WebkitAppRegion: "no-drag"}}
        >
            <div className="flex justify-center">
                {children}
            </div>
        </button>
    )
}

export default function TitleBar() {
    const isElectron = Boolean(window.electronAPI?.isElectron)
    if (!isElectron)
        return null

    return <Card className="flex bg-foreground p-1 select-none" style={{WebkitAppRegion: "drag"}}>
        <div className="flex-1 flex justify-start gap-1">

        </div>
        <div className="flex-1 flex justify-end gap-1">
            <Button onClick={window.electronAPI.minimize}>
                <Minus/>
            </Button>
            <Button onClick={window.electronAPI.maximize}>
                <Square size={20}/>
            </Button>
            <Button onClick={window.electronAPI.close}>
                <X/>
            </Button>
        </div>
    </Card>
}