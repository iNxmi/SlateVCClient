import {useParams} from "react-router-dom"
import {useState} from "react"
import {Send, Hash} from "lucide-react"
import Input from "@components/Input.tsx"
import Button from "@components/Button.tsx"
import Separator from "@components/Separator.tsx"
import {ScrollArea} from "radix-ui"
import Card from "@components/Card"

function Container({username, messages}: { username: string, messages: string[] }) {
    return <div className="flex gap-2">

        <div>
            <div className="aspect-square w-11 bg-foreground rounded-xl flex justify-center m-1.5">
                <div className="flex flex-col justify-center font-bold select-none">
                    {username.charAt(0).toUpperCase()}
                </div>
            </div>
        </div>

        <div className="grow flex flex-col gap-0">
            <div className="font-bold text-gray-300 pl-1 pr-1">
                {username}
            </div>

            {messages.map((message, _) => (
                <div className="transition duration-150 ease-in-out hover:bg-highlight rounded-lg break-normal text-justify pl-1 pr-1">
                    {message}
                </div>
            ))}
        </div>

    </div>
}


export default function TextChannel() {
    const {id_channel} = useParams()

    const [history, setHistory] = useState([
        {username: "server", messages: ["meow", "67", "hello world", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."]},
        {username: "user1", messages: ["uwu", "c++ user"]},
        {username: "server", messages: ["test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test"]}
    ])

    const [message, setMessage] = useState("")

    function sendMessage() {
        const last = history[history.length - 1]
        if (last.username == "memphis") {
            const result = {username: "memphis", messages: [...last.messages, message]}
            setHistory([...history.slice(0, -1), result])
        } else {
            setHistory([...history, {username: "memphis", messages: [message]}])
        }

        setMessage("")
    }

    return <Card className="grow flex flex-col gap-3 min-h-0 max-h-full min-w-0 max-w-full">
        <div className="font-bold text-center">
            <div className="flex gap-1 justify-center">
                <Hash/>
                <div className="font-bold">
                    {id_channel}
                </div>
            </div>
        </div>

        <Separator/>

        <ScrollArea.Root className="min-h-0 max-h-full min-w-0 max-w-full">
            <ScrollArea.Viewport className="min-h-0 max-h-full min-w-0 max-w-full">
                <div className="grow flex flex-col gap-1 min-h-0 max-h-full min-w-0 max-w-full">
                    {history.map((entry, _) => (
                        <Container username={entry.username} messages={entry.messages}/>
                    ))}
                </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className="w-1">
                <ScrollArea.Thumb className="bg-foreground rounded-full"/>
            </ScrollArea.Scrollbar>
        </ScrollArea.Root>

        <Separator/>

        <form className="flex gap-1"
              onSubmit={(event) => {
                  event.preventDefault()
                  sendMessage()
              }}>
            <Input
                className="grow"
                placeholder={`Message #${id_channel}`}
                value={message}
                onChange={(event) => {
                    setMessage(event.target.value)
                }}
            />
            <Button className="aspect-square flex justify-center" type="submit">
                <div className="flex flex-col justify-center">
                    <Send size={20}/>
                </div>
            </Button>
        </form>

    </Card>
}