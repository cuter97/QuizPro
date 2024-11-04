import { ActivityCard } from "@/components/dashboard/Card-activity";
import { HistoryCard } from "@/components/dashboard/Card-history";
import { Quizcard } from "@/components/dashboard/Card-quiz";
import { TopicsCard } from "@/components/dashboard/Card-topics";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Dashboard | QuizPro",
    description: "Quiz yourself on anything!",
};

export default async function DashboardPage() {
    const session = await getAuthSession();

    if (!session?.user) redirect("/");

    return (
        <main className="px-8 pt-32 mx-auto max-w-7xl">
            <div className="flex items-center">
                <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>

            <div className="grid gap-4 mt-4 md:grid-cols-2">
                <Quizcard />
                <HistoryCard />
            </div>
            <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
                <TopicsCard />
                <ActivityCard />
            </div>
        </main>
    );
}