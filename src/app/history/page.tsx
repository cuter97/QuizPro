import { HistoryGames } from "@/components/HistoryGames";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { LucideLayoutDashboard } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HistoryPage() {
    const session = await getAuthSession();

    if (!session?.user) return redirect("/");

    return (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[400px]">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-bold">History</CardTitle>
                        <Link className={buttonVariants()} href="/dashboard">
                            <LucideLayoutDashboard className="mr-2" />
                            Back to Dashboard
                        </Link>
                    </div>
                </CardHeader>
                <CardContent className="max-h-[60vh] overflow-scroll">
                    <HistoryGames limit={100} userId={session.user.id} />
                </CardContent>
            </Card>
        </div>
    );
}