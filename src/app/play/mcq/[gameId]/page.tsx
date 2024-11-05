import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/nextauth";
import { MCQ } from "@/components/MultipleChoise";

type Props = {
    params: {
        gameId: string;
    };
};

export default async function MCQPage({ params: { gameId } }: Props) {
    const session = await getAuthSession();

    if (!session?.user) return redirect("/");

    const game = await prisma.game.findUnique({
        where: { id: gameId },
        include: {
            questions: {
                select: {
                    id: true,
                    question: true,
                    options: true,
                },
            },
        },
    });

    if (!game || game.gameType === "open_ended") return redirect("/quiz");

    return (
        <MCQ game={game} />
    );
};