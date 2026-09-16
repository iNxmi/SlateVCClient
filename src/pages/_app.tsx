import {Outlet} from "react-router-dom"
import Navigation from "../components/Navigation"

export default function Layout() {
    return (
        <div className="bg-slate-950 min-h-svh max-h-svh text-gray-400">
            <div className="flex gap-3 p-3">
                <Navigation/>
                <Outlet/>
            </div>
        </div>
    )
}