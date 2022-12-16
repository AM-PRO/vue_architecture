import { reactive, computed, ComputedRef } from "vue";
import { Todo } from "@/core/entities/todo";
import { TodoCategory } from "@/core/entities/todoCategory";

export interface TodoState {
    todos: Todo[],
    categories: TodoCategory[],
}

export interface TodoGetters {
    checkedTodos: Todo[],
    uncheckedTodos: Todo[],
}

export interface TodoStore {
    state: TodoState,
    getters: ComputedRef<TodoGetters>,
}

export const todoState = reactive<TodoState>({
    categories: [],
    todos: [],
})

export const todoGetters: ComputedRef<TodoGetters> = computed(() => {
    return {
        checkedTodos: todoState.todos.filter(todo => todo.done),
        uncheckedTodos: todoState.todos.filter(todo => !todo.done),
    }
})

export const todoStore: TodoStore = {
    state: todoState,
    getters: todoGetters,
}