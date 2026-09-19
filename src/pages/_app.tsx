import {Outlet} from "react-router-dom"
import TitleBar from "@components/TitleBar"

export default function Layout() {
    return (
        <div className="text-text bg-background flex flex-col min-h-svh max-h-svh min-w-svw max-w-svw p-1 gap-1 overflow-hidden">
            <TitleBar/>
            <Outlet/>
        </div>
    )
}