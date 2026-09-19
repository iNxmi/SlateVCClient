import Card from "@components/Card"
import {ScrollArea } from "radix-ui"

export default function ChatCard() {
    return <Card className="flex w-full">
        <div className="grow flex flex-col gap-3">
            <ScrollArea.Root className="min-h-0 max-h-full min-w-0 max-w-full">
                <ScrollArea.Viewport className="min-h-0 max-h-full min-w-0 max-w-full">
                    <div className="grow flex flex-col gap-2">

                    </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical" className="w-1">
                    <ScrollArea.Thumb className="bg-foreground rounded-full"/>
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>

        </div>
    </Card>
}