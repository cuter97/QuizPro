'use client'

import { SessionProvider } from 'next-auth/react'

type SessionProviderProps = {
    children: React.ReactNode
}

export const SessionProviderAuth = ({ children }: SessionProviderProps) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}
