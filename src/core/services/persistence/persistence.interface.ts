import { User } from "@/core/entities/user"

export interface PersistenceServiceInterface {
    setUser: (user: User) => void
    getUser: () => User | null
    removeUser: () => void

    setToken: (accessToken: string) => void
    getToken: () => string
    removeToken: () => void
}