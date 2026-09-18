import {Square, X, Minus} from "lucide-react"
import Button from "@components/Button"

export default function TitleBar() {
    const isElectron = Boolean(window.electronAPI?.isElectron)
    if (!isElectron)
        return null

    return <div className="flex bg-foreground p-1 select-none" style={{ WebkitAppRegion: "drag" }}>
        <div className="flex-1 flex">

        </div>
        <div className="flex-1 flex justify-end gap-1">
            <Button className="flex flex-col justify-center aspect-square" style={{ WebkitAppRegion: "no-drag" }} onClick={() => {
                window.electronAPI.minimize()
            }}>
                <div className="flex justify-center">
                    <Minus/>
                </div>
            </Button>
            <Button className="flex flex-col justify-center aspect-square" style={{ WebkitAppRegion: "no-drag" }} onClick={() => {
                window.electronAPI.maximize()
            }}>
                <div className="flex justify-center">
                    <Square size={20}/>
                </div>
            </Button>
            <Button className="flex flex-col justify-center aspect-square" style={{ WebkitAppRegion: "no-drag" }} onClick={() => {
                window.electronAPI.close()
            }}>
                <div className="flex justify-center">
                    <X/>
                </div>
            </Button>
        </div>
    </div>
}