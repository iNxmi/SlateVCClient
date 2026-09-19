import {Volume2, Hash, ChevronDown} from "lucide-react"
import {Link} from "react-router"
import Button from "@components/Button"
import Card from "@components/Card"
import Separator from "@components/Separator"
import {ScrollArea } from "radix-ui"
import {useParams} from "react-router"

function VoiceChannel({name}: { name: string }) {
    const {id_server} = useParams()

    return <Link to={`/server/${id_server}/voice-channel/${name}`} className="flex flex-col">
        <Button className="flex gap-2 text-left">
            <div className="flex flex-col justify-center">
                <Volume2/>
            </div>
            <div>{name}</div>
        </Button>
    </Link>
}

function TextChannel({name}: { name: string }) {
    const {id_server} = useParams()

    return <Link to={`/server/${id_server}/text-channel/${name}`} className="flex flex-col">
        <Button className="flex gap-2 text-left">
            <div className="flex flex-col justify-center">
                <Hash/>
            </div>
            <div>{name}</div>
        </Button>
    </Link>
}

export default function ServerCard({name}:{name:string}) {
    return <Card className="flex w-full">
        <div className="grow flex flex-col gap-3">
            <div className="shrink flex gap-1 justify-between">
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-bold">{name}</h2>
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