import {Outlet} from "react-router-dom"

export default function ServerLayout() {
    return <div className="grow flex flex-col">
        <Outlet/>
    </div>
}