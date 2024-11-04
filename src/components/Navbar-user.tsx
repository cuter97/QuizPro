"use client";

import { signOut } from "next-auth/react";
import type { User } from "next-auth";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AvatarUser } from "./Avatar-user";
import { LogOut } from "lucide-react";

type Props = {
    user: Pick<User, "name" | "image" | "email">;
};

export const NavbarUser = ({ user }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <AvatarUser
                    className="w-10 h-10"
                    user={{
                        name: user.name || null,
                        image: user.image || null,
                    }}
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                        {user.name && <p className="font-medium ">{user.name}</p>}
                        {user.email && (
                            <p className="w-[200px] truncate text-sm text-muted-foreground">
                                {user.email}
                            </p>
                        )}
                    </div>
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    onSelect={(event) => {
                        event.preventDefault();
                        signOut().catch(console.error);
                    }}
                    className="text-red-600 cursor-pointer"
                >
                    Sign out
                    <LogOut className="w-4 h-4 ml-2 " />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};