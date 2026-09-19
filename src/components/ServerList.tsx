import {Link} from "react-router"
import Card from "@components/Card"
import {ScrollArea, Tooltip} from "radix-ui"
import type {ReactNode} from "react"
import Separator from "@components/Separator.tsx"
import {Home, Plus} from "lucide-react"

function Container({children}: { children:ReactNode }) {
    return <Card className="aspect-square flex justify-center w-12 hover:bg-highlight hover:cursor-pointer">
        <div className="flex flex-col justify-center font-bold">
            {children}
        </div>
    </Card>
}

function Server({name}: { name: string}) {
    return <Link to={`/server/${name}`}>
        <Tooltip.Provider delayDuration={0.0}>
            <Tooltip.Root>
                <Tooltip.Trigger>
                    <Container>
                        {name.charAt(0).toUpperCase()}
                    </Container>
                </Tooltip.Trigger>
                <Tooltip.Content side="right" sideOffset={16}>
                    <Card>
                        {name}
                    </Card>
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    </Link>
}

export default function ServerList() {
    return <Card className="flex flex-col gap-3 p-2 min-h-0">
        <div className="flex flex-col gap-1">
            <Link to="/">
                <Container>
                    <Home size={30}/>
                </Container>
            </Link>
            <button onClick={alert}>
                <Container>
                    <Plus size={30}/>
                </Container>
            </button>
        </div>

        <Separator/>

        <ScrollArea.Root className="min-h-0 max-h-full min-w-0 max-w-full">
            <ScrollArea.Viewport className="min-h-0 max-h-full min-w-0 max-w-full">
                <div className="flex flex-col gap-1 min-h-0 max-h-full min-w-0 max-w-full">
                    <Server name="asia_imbiss"/>
                    <Server name="Imposter"/>
                    <Server name="MCP"/>
                    <Server name="Exmatrikulations-Helfer"/>
                </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className="w-1">
                <ScrollArea.Thumb className="bg-foreground rounded-full"/>
            </ScrollArea.Scrollbar>
        </ScrollArea.Root>
    </Card>
}