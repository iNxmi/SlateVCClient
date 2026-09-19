import {Mic, Headphones, Settings, User, Wifi, Monitor} from "lucide-react"
import Card from "@components/Card"
import Separator from "@components/Separator"
import Button from "@components/Button"

export default function UserCard() {
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