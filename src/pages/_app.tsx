import {Outlet} from "react-router-dom"

export default function Layout() {
    return (
        <div className="flex gap-3 p-3">
            <nav>Navigation</nav>
            <Outlet/>
        </div>
    )
}