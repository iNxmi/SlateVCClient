import {ChevronDown, Hash, Home, Volume2} from "lucide-react"
import Card from "@components/Card"
import Separator from "@components/Separator"
import Button from "@components/Button"
import UserCard from "@components/UserCard"
import {Link} from "react-router"
import type {ReactNode} from "react"
import {twMerge} from "tailwind-merge"
import {ScrollArea} from "radix-ui"

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
    return <Card className={twMerge("flex w-full", className)}>
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

            <ScrollArea.Root className="min-h-0 max-h-full min-w-0 max-w-full">
                <ScrollArea.Viewport className="min-h-0 max-h-full min-w-0 max-w-full">
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
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical" className="w-1">
                    <ScrollArea.Thumb className="bg-foreground rounded-full"/>
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>

        </div>
    </Card>
}

function ServerIcon({to, children}: { to: string, children: ReactNode }) {
    return <Link to={to}>
        <Card className="aspect-square flex justify-center w-12 hover:bg-highlight">
            <div className="flex flex-col justify-center">
                {children}
            </div>
        </Card>
    </Link>
}

function ServerList() {
    return <Card className="flex flex-col gap-3 p-2 min-h-0">
        <ServerIcon to="/">
            <Home size={30}/>
        </ServerIcon>

        <Separator/>

        <ScrollArea.Root className="min-h-0 max-h-full min-w-0 max-w-full">
            <ScrollArea.Viewport className="min-h-0 max-h-full min-w-0 max-w-full">
                <div className="flex flex-col gap-1 min-h-0 max-h-full min-w-0 max-w-full">
                    <ServerIcon to="/server/a">
                        <div className="font-bold">A</div>
                    </ServerIcon>
                    <ServerIcon to="/server/b">
                        <div className="font-bold">B</div>
                    </ServerIcon>
                    <ServerIcon to="/server/c">
                        <div className="font-bold">C</div>
                    </ServerIcon>
                    <ServerIcon to="/server/d">
                        <div className="font-bold">D</div>
                    </ServerIcon>
                    <ServerIcon to="/server/e">
                        <div className="font-bold">E</div>
                    </ServerIcon>
                    <ServerIcon to="/server/f">
                        <div className="font-bold">F</div>
                    </ServerIcon>
                    <ServerIcon to="/server/g">
                        <div className="font-bold">G</div>
                    </ServerIcon>
                    <ServerIcon to="/server/g">
                        <div className="font-bold">G</div>
                    </ServerIcon>
                    <ServerIcon to="/server/g">
                        <div className="font-bold">G</div>
                    </ServerIcon>
                    <ServerIcon to="/server/g">
                        <div className="font-bold">G</div>
                    </ServerIcon>
                    <ServerIcon to="/server/g">
                        <div className="font-bold">G</div>
                    </ServerIcon>
                    <ServerIcon to="/server/g">
                        <div className="font-bold">G</div>
                    </ServerIcon>
                    <ServerIcon to="/server/g">
                        <div className="font-bold">G</div>
                    </ServerIcon>
                </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className="w-1">
                <ScrollArea.Thumb className="bg-foreground rounded-full"/>
            </ScrollArea.Scrollbar>
        </ScrollArea.Root>
    </Card>
}


export default function Navigation() {
    return <div className="grow flex flex-col gap-1 resize-x w-96 min-h-0 max-h-full min-w-0 max-w-full">
        <div className="flex gap-1 grow justify-left min-h-0">
            <ServerList/>
            <ServerCard/>
        </div>

        <UserCard/>
    </div>
}