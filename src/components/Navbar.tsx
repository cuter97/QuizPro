import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import { ButtonMode } from "./Button-mode";
import { NavbarUser } from "./Navbar-user";
import { ButtonSignIn } from "./Button-signin";
import { Button } from "./ui/button";

export const Navbar = async () => {
    const session = await getAuthSession();
    return (
        <div className="fixed top-0 left-0 right-0 bg-chart-6 z-[10] h-fit border-b-2 border-card py-4 ">
            <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">

                <Button asChild variant="primary" size="primary">
                    <Link href={"/"}>
                        QuizPro
                    </Link>
                </Button>
                <div className="flex items-center justify-center align-middle">
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
