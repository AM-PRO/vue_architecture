import { InjectionKey } from "vue";
import { AuthServiceInterface } from "./auth/auth.interface";
import { PersistenceServiceInterface } from "./persistence/persistence.interface";
import { TodoServiceInterface } from "./todo/todo.interface";

export const TODO: InjectionKey<TodoServiceInterface> = Symbol("todoService");
export const PERSISTENCE: InjectionKey<PersistenceServiceInterface> = Symbol("persistenceService");
export const AUTH: InjectionKey<AuthServiceInterface> = Symbol("authService");