import { QuizCreation } from "@/components/forms/QuizCreation";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Quiz | QuizPro",
    description: "Quiz yourself on anything!",
};

interface Props {
    searchParams: {
        topic?: string;
    };
}

export default async function QuizPage({ searchParams }: Props) {
    const session = await getAuthSession();

    if (!session?.user) redirect("/");

    return (
        <QuizCreation topic={searchParams.topic ?? ""} />
    );
}