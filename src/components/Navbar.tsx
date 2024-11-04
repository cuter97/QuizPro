import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import { ButtonMode } from "./Button-mode";
import { NavbarUser } from "./Navbar-user";
import { ButtonSignIn } from "./Button-signin";

export const Navbar = async () => {
    const session = await getAuthSession();
    return (
        <div className="fixed inset-x-0 top-0 bg-background z-[10] h-fit border-b border-zinc-300 py-4 ">
            <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
                <Link href={"/"} className="flex items-center gap-2">
                    <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
                        QuizPro
                    </p>
                </Link>
                <div className="flex items-center">
                    <ButtonMode className="mr-4" />
                    {session?.user ? (
                        <NavbarUser user={session.user} />
                    ) : (
                        <ButtonSignIn text={"Sign In"} />
                    )}
                </div>
            </div>
        </div>
    )
}
