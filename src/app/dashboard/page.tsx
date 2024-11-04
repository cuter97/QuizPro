import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getAuthSession();
    if (!session?.user) {
        redirect("/");
    }
    return (
        <div className="pt-32">
            <h1 className="text-2xl text-white">This is a dashboard page</h1>
        </div>
    );
}