'use client'

import { BrainCircuit } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { useRouter } from "next/navigation";

export const Quizcard = () => {
    const router = useRouter();
    return (
        <Card
            className="hover:cursor-pointer hover:opacity-75 hover:-translate-y-[2px]"
            onClick={() => {
                router.push("/quiz");
            }}
        >
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-2xl font-bold">Quiz me!</CardTitle>
                <BrainCircuit size={28} strokeWidth={2.5} />
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    Challenge yourself to a quiz with a topic of your choice.
                </p>
            </CardContent>
        </Card>
    )
}
