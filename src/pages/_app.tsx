import {Outlet} from "react-router-dom"
import Navigation from "../components/Navigation"
import Card from "@components/Card"

export default function Layout() {
    return (
        <div className="flex gap-3 p-3 bg-background min-h-svh max-h-svh min-w-svw max-w-svw text-text overflow-clip">
            <div className="flex-col">
                <Navigation/>
            </div>
            <Card className="grow flex flex-col">
                <Outlet/>
            </Card>
        </div>
    )
}