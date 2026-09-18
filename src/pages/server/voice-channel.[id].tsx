import {useParams} from "react-router-dom"

export default function TextChannel() {
    const {id} = useParams()

    return <div className="grow flex flex-col gap-3">
        {id}
    </div>
}