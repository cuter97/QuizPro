import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { OpenEnded } from "@/components/OpenEnded";

type Props = {
    params: {
        gameId: string;
    };
};

export default async function OpenEndedPage({ params: { gameId } }: Props) {
    const session = await getAuthSession();

    if (!session?.user) return redirect("/");

    const game = await prisma.game.findUnique({
        where: { id: gameId },
        include: {
            questions: {
                select: {
                    id: true,
                    question: true,
                    answer: true,
                },
            },
        },
    });

    if (!game || game.gameType === "mcq") return redirect("/quiz");

    return (
        <OpenEnded game={game} />
    );
};