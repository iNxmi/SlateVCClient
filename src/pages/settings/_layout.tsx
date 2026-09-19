import {Outlet} from "react-router-dom"
import ServerList from "@components/ServerList"
import Card from "@components/Card"

export default function ServerLayout() {
    return <div className="grow flex gap-1 min-h-0 max-h-full min-w-0 max-w-full">
        <div className="flex flex-col w-96 resize-x">


            <div className="grow flex flex-col gap-1">
                <div className="grow flex gap-1">
                    <ServerList/>
                    <Card className="grow"><div></div></Card>
                </div>
            </div>

        </div>
        <Outlet/>
    </div>
}