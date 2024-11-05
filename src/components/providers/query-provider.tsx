import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

type SessionProviderProps = {
    children: React.ReactNode
}

const queryClient = new QueryClient()

export const QueryProvider = ({ children }: SessionProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
