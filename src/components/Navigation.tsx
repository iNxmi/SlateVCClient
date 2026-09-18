import {ChevronDown, Hash, Mic, Headphones, Settings, User, Wifi, Monitor, Home, Volume2} from "lucide-react"
import Card from "./Card"
import Separator from "./Separator"
import Button from "./Button"
import {Link} from "react-router"
import type {ReactNode} from "react";

function VoiceChannel({name}: { name: string }) {
    return <Link to={`/server/voice-channel/${name}`} className="flex flex-col">
        <Button className="flex gap-2 text-left">
            <div className="flex flex-col justify-center">
                <Volume2/>
            </div>
            <div>{name}</div>
        </Button>
    </Link>
}

function TextChannel({name}: { name: string }) {
    return <Link to={`/server/text-channel/${name}`} className="flex flex-col">
        <Button className="flex gap-2 text-left">
            <div className="flex flex-col justify-center">
                <Hash/>
            </div>
            <div>{name}</div>
        </Button>
    </Link>
}

function ServerCard({className = ""}: { className?: string }) {
    return <Card className={`flex w-full ${className}`}>
        <div className="grow flex flex-col gap-3">
            <div className="shrink flex gap-1 justify-between">
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-bold">Server Name</h2>
                </div>

                <Button className="flex flex-col justify-center">
                    <ChevronDown/>
                </Button>
            </div>

            <Separator/>

            <div className="grow flex flex-col gap-2">
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
                <VoiceChannel name="Allgemein: Die Rückkehr"/>
            </div>
        </div>
    </Card>
}

function ServerIcon({children}: { children: ReactNode }) {
    return <Button className="aspect-square flex justify-center w-12">
        <div className="flex flex-col justify-center">
            {children}
        </div>
    </Button>
}

function ServerList() {
    return <Card className="flex flex-col gap-3 p-2">
        <Link to="/" className="flex justify-center">
            <ServerIcon>
                <Home size={30}/>
            </ServerIcon>
        </Link>

        <Separator/>

        <ServerIcon>
            <div className="font-bold">A</div>
        </ServerIcon>
        <ServerIcon>
            <div className="font-bold">B</div>
        </ServerIcon>
        <ServerIcon>
            <div className="font-bold">C</div>
        </ServerIcon>
        <ServerIcon>
            <div className="font-bold">D</div>
        </ServerIcon>
        <ServerIcon>
            <div className="font-bold">E</div>
        </ServerIcon>
        <ServerIcon>
            <div className="font-bold">F</div>
        </ServerIcon>
        <ServerIcon>
            <div className="font-bold">G</div>
        </ServerIcon>
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
    return <div className="flex flex-col gap-3 resize-x overflow-auto w-96 h-full">
        <div className="flex gap-3 grow justify-left">
            <ServerList/>
            <ServerCard className="grow"/>
        </div>

        <UserCard/>
    </div>
}