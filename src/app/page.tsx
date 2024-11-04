import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { ButtonSignIn } from "@/components/Button-signin";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Home() {
    const session = await getServerSession();

    if (session?.user) redirect("/dashboard");

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-[320px] dark:bg-chart-6 bg-card rounded-md border-2 border-b-[6px] border-r-[6px] border-ring dark:border-card">
                <CardHeader className="space-y-3">
                    <CardTitle>Welcome to QuizPro🔥!</CardTitle>
                    <CardDescription className="text-card-foreground">
                        QuizPro is a platform for creating quizzes using AI! Get started!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ButtonSignIn text="Sign In with Google" />
                </CardContent>
            </Card>
        </div>
    );
}
