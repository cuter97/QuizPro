import Image from "next/image";
import { type User } from "next-auth";
import { type AvatarProps } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface Props extends AvatarProps {
    user: Pick<User, "name" | "image">;
}

export const AvatarUser = ({ user, ...props }: Props) => {
    return (
        <Avatar {...props}>
            {user.image ? (
                <div className="relative w-full h-full aspect-square">
                    <Image
                        fill
                        src={user.image}
                        alt="profile picture"
                        referrerPolicy="no-referrer"
                        sizes="( max-width: 768px ) 100vw, ( max-width: 1200px ) 50vw, 33vw"
                    />
                </div>
            ) : (
                <AvatarFallback>
                    <span className="sr-only ">{user?.name}</span>
                </AvatarFallback>
            )}
        </Avatar>
    )
}
