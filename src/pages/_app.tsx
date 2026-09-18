import {Outlet} from "react-router-dom"
import Navigation from "../components/Navigation"
import Card from "@components/Card"
import TitleBar from "@components/TitleBar"

export default function Layout() {
    return (
        <div className="text-text bg-background flex flex-col min-h-svh max-h-svh min-w-svw max-w-svw p-1 gap-1">
            <TitleBar/>
            <div className="grow flex gap-1overflow-clip gap-1">
                <div className="flex-col">
                    <Navigation/>
                </div>
                <Card className="grow flex flex-col">
                    <Outlet/>
                </Card>
            </div>
        </div>

    )
}