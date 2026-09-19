import UserCard from "@components/UserCard"
import ServerList from "@components/ServerList"
import type {ReactNode} from "react";

export default function Navigation({children}:{children: ReactNode}) {
    return <div className="grow flex flex-col gap-1 resize-x w-96 min-h-0 max-h-full min-w-0 max-w-full">
        <div className="flex gap-1 grow justify-left min-h-0">
            <ServerList/>
            {children}
        </div>

        <UserCard/>
    </div>
}