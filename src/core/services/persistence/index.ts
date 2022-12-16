import { PersistenceServiceInterface } from "./persistence.interface";
import { User } from "@/core/entities/user";

export enum localStorageItem {
    user = "user",
    accessToken = "accessToken"
}

class PersistenceService implements PersistenceServiceInterface {

    setUser(user: User): void {
        localStorage.setItem(localStorageItem.user, JSON.stringify(user));
    }

    getUser(): User | null {
        const user = localStorage.getItem(localStorageItem.user)
        if(user) {
            return new User(JSON.parse(user))
        }
        return null
    }

    removeUser(): void {
        localStorage.removeItem(localStorageItem.user);
    }

    setToken(token: string): void {
        localStorage.setItem(localStorageItem.accessToken, token);
    }

    getToken(): string {
        return localStorage.getItem(localStorageItem.accessToken) as string
    }

    removeToken(): void {
        localStorage.removeItem(localStorageItem.accessToken);
    }
}

export default PersistenceService;
