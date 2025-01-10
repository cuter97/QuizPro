import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { HistoryGames } from "../HistoryGames";

export const ActivityCard = async () => {
    const session = await getAuthSession();

    if (!session?.user) return redirect("/");
    
    return (
        <Card className="col-span-4 lg:col-span-3">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">
                    <Link href="/history">Recent Activity</Link>
                </CardTitle>
                <CardDescription>
                    You have played a total of game account quizzes.
                </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[580px] overflow-scroll">
                <HistoryGames limit={10} userId={session.user.id} />
            </CardContent>
        </Card>
    )
}
