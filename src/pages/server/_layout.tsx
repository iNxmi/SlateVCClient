import {Outlet} from "react-router-dom"

export default function ServerLayout() {
    return <div className="grow flex flex-col min-h-0 max-h-full min-w-0 max-w-full">
        <Outlet/>
    </div>
}