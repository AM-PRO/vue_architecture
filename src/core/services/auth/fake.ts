import { usersMock } from "@/core/mocks/users.mock";
import { PersistenceServiceInterface } from "../persistence/persistence.interface";
import { AuthServiceInterface, LoginDTO } from "./auth.interface";

class AuthServiceFake implements AuthServiceInterface {

    constructor(private persistenceService: PersistenceServiceInterface) {

    }

    async login(loginDTO: LoginDTO): Promise<void> {
        await new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                const user = usersMock.find((user) => user.email === loginDTO.email);
                if (user && loginDTO.password === 'password') {
                    const token = "random-token"
                    this.persistenceService.setUser(user)
                    this.persistenceService.setToken(token)
                    resolve()
                }
                else {
                    reject("user not found")
                }
            }, Math.random() * 500)
        });
    }
    async logout(): Promise<void> {
        await new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                this.persistenceService.removeUser()
                this.persistenceService.removeToken()
                resolve()
            }, Math.random() * 500)
        });
    }
}

export default AuthServiceFake