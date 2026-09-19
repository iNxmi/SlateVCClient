import Card from "@components/Card"

export default function Dashboard() {
    return <Card className="grow flex flex-col justify-center">
        <span className="font-bold text-center text-3xl flex justify-center animate-pulse select-none">
            Welcome to {"<Slate>"}
        </span>
    </Card>
}