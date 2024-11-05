import { Percent, Target } from "lucide-react"
import { Card } from "./ui/card"

type Props = {
    percentage: number;
};

export const OpenEndedPercentage = ({ percentage }: Props) => {
    return (
        <Card className="flex flex-row items-center p-2">
            <Target size={30} />
            <span className="ml-3 text-2xl opacity-75">{percentage}</span>
            <Percent size={25} />
        </Card>
    )
}
