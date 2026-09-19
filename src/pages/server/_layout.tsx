import {Outlet} from "react-router-dom"
import Navigation from "@components/Navigation.tsx"
import {useParams} from "react-router-dom"
import ServerCard from "@components/ServerCard.tsx"

export default function ServerLayout() {
    const {id_server} = useParams()

    return <div className="grow flex gap-1 min-h-0 max-h-full min-w-0 max-w-full">
        <div className="flex flex-col w-96 resize-x grow">
            <Navigation>
                <ServerCard/>
            </Navigation>
        </div>
        <Outlet/>
    </div>
}