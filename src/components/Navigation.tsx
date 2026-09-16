import {ChevronDown, Hash} from "lucide-react"
import Card from "./Card"

function TextChannel({name}:{name:string}) {
    return <div className="flex gap-1 bg-pink-500/10 hover:bg-red-500/25 rounded-lg p-1 select-none cursor-pointer">
        <Hash/>
        <div>{name}</div>
    </div>
}

function ServerCard({className = ""}: {className?: string}) {
    return <div className={`flex overflow-scroll w-full ${className}`}>
        <div className="grow flex flex-col gap-3">
            <Card className="shrink flex gap-1 justify-center">
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-bold">Server Name</h2>
                </div>

                <div className="flex flex-col justify-center">
                    <ChevronDown/>
                </div>
            </Card>

            <Card className="grow flex flex-col gap-2">
                <TextChannel name="hinterräume"/>
                <TextChannel name="allgemein"/>
                <TextChannel name="spieleliste"/>
                <TextChannel name="netzfunde"/>
                <TextChannel name="tech-nick"/>
                <TextChannel name="gehirnverfall"/>
                <TextChannel name="essens-erregung"/>
                <TextChannel name="bildschirm-schüsse"/>
                <TextChannel name="zitate"/>
                <TextChannel name="asiatische-delikatessen"/>
                <TextChannel name="kunst-unterricht"/>
            </Card>
        </div>
    </div>
}

function ServerIcon() {
    return <Card className="aspect-square rounded-3xl flex justify-center">
        <div className="flex flex-col justify-center">
            name
        </div>
    </Card>
}

function ServerList() {
    return <div className="flex flex-col gap-3">
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
    </div>
}

function UserCard() {
    return <Card>
        <div>Stream Status</div>
        <div className="border"></div>
        <div>Connection Status</div>
        <div className="border"></div>
        <div>Username</div>
    </Card>
}

export default function Navigation() {
    return <div className="flex flex-col gap-3 resize-x overflow-auto w-64 h-full">
        <div className="flex gap-3 grow justify-left">
            <ServerList/>
            <ServerCard className="grow"/>
        </div>

        <UserCard/>
    </div>
}