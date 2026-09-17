import {ChevronDown, Hash, Mic, Headphones, Settings, User, Wifi, Monitor} from "lucide-react"
import Card from "./Card"
import Separator from "./Separator"
import Button from "./Button"
import {Link} from "react-router"

function TextChannel({name}: { name: string }) {
    return <Link to={`/server/text-channel/${name}`} className="flex flex-col">
        <Button className="flex gap-1">
            <Hash/>
            <div>{name}</div>
        </Button>
    </Link>
}

function ServerCard({className = ""}: { className?: string }) {
    return <div className={`flex overflow-scroll w-full ${className}`}>
        <div className="grow flex flex-col gap-3">
            <Card className="shrink flex gap-1 justify-between">
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-bold">Server Name</h2>
                </div>

                <Button className="flex flex-col justify-center">
                    <ChevronDown/>
                </Button>
            </Card>

            <Card className="grow flex flex-col gap-2 overflow-scroll">
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
    return <Button className="aspect-square flex justify-center p-3">
        <div className="flex flex-col justify-center">
            uwu
        </div>
    </Button>
}

function ServerList() {
    return <Card className="flex flex-col gap-3 p-2">
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
    </Card>
}

function UserCard() {
    return <Card className="flex flex-col gap-0 p-0 justify-evenly">
        <div className="min-h-8 flex flex-col justify-center p-2 gap-3">
            <div className="flex gap-3">
                <Monitor/>
                <p>Stream Status</p>
            </div>
        </div>

        <Separator/>

        <div className="min-h-8 flex flex-col justify-center p-2 gap-3">
            <div className="flex gap-3">
                <Wifi/>
                <p>Connection Status</p>
            </div>
        </div>

        <Separator/>

        <div className="min-h-8 flex flex-col justify-center p-2">
            <div className="flex gap-1">
                <div className="grow flex gap-3">
                    <User/>
                    <p>Username</p>
                </div>
                <Button className="aspect-square flex justify-center">
                    <div className="flex flex-col justify-center">
                        <Mic size={20}/>
                    </div>
                </Button>
                <Button className="aspect-square flex justify-center">
                    <div className="flex flex-col justify-center">
                        <Headphones size={20}/>
                    </div>
                </Button>
                <Button className="aspect-square flex justify-center">
                    <div className="flex flex-col justify-center">
                        <Settings size={20}/>
                    </div>
                </Button>
            </div>
        </div>
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