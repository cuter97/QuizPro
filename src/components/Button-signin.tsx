'use client'

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

type Props = { text: string }

export const ButtonSignIn = ({ text }: Props) => {
    return (
        <Button
            variant="primary"
            size="primary"
            className="text-md"
            onClick={() => {
                signIn("google").catch(console.error);
            }}
        >
            {text}
        </Button>
    )
}
