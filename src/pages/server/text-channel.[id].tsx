import {useParams} from "react-router-dom"
import {useState} from "react"
import {Send} from "lucide-react"
import Input from "@components/Input"
import Button from "@components/Button"
import Card from "@components/Button"
import Separator from "@components/Separator"

export default function TextChannel() {
    const {id} = useParams()

    const [messages, setMessages] = useState([
        {username:"server", content: "hello world"},
        {username:"server", content: "67"},
        {username:"server", content: "nya"}
    ])

    const [message, setMessage] = useState("")

    return <div className="grow flex flex-col gap-3">
        <div className="font-bold">
            #{id}
        </div>

        <Separator/>

        <div className="grow flex flex-col gap-1">
            {messages.map((message, _) => (
                <Card className="justify-start text-left">{message.content}</Card>
            ))}
        </div>

        <Separator/>

        <div className="flex gap-3">
            <Input className="grow" placeholder={`Message #${id}`} value={message} onChange={(event) => {
                setMessage(event.target.value)
            }}/>
            <Button className="aspect-square flex justify-center" onClick={() => {
                setMessages([...messages, {username: "memphis", content: message}])
                setMessage("")
            }}>
                <div className="flex flex-col justify-center">
                    <Send size={20}/>
                </div>
            </Button>
        </div>
    </div>
}