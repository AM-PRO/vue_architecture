import { AuthServiceInterface } from "@/core/services/auth/auth.interface";
import AuthServiceFake from "@/core/services/auth/fake";
import PersistenceService from "@/core/services/persistence";
import { PersistenceServiceInterface } from "@/core/services/persistence/persistence.interface";
import { App } from "vue";
import { PERSISTENCE, TODO, AUTH } from "../core/services/keys";
import TodoService from "../core/services/todo";
import TodoServiceFake from "../core/services/todo/fake";
import { TodoServiceInterface } from "../core/services/todo/todo.interface";

export default {
    install: (app: App) => {
        const mock = import.meta.env.VITE_APP_MOCK;
        
        let todoService: TodoServiceInterface;
        let authService: AuthServiceInterface;
        let persistenceService: PersistenceServiceInterface;
        
        if (mock) {
            todoService = new TodoServiceFake()
            persistenceService = new PersistenceService()
            authService = new AuthServiceFake(persistenceService)
        }
        else {
            todoService = new TodoService()
            persistenceService = new PersistenceService()
            // TODO : implémenter un vrai service d'authentification
            authService = new AuthServiceFake(persistenceService)
        }

        app.provide(TODO, todoService)
        app.provide(PERSISTENCE, persistenceService)
        app.provide(AUTH, authService)
    }
}