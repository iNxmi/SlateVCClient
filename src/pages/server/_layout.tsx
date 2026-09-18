import {Outlet} from "react-router-dom"

export default function ServerLayout() {
    return <div className="grow flex flex-col min-h-0 min-w-0">
        <Outlet/>
    </div>
}