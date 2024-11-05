import { QuizCreation } from "@/components/forms/QuizCreation";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Quiz | QuizPro",
    description: "Quiz yourself on anything!",
};

export default async function QuizPage() {
    const session = await getAuthSession();

    if (!session?.user) redirect("/");
    
    return (
        <QuizCreation />
    );
}