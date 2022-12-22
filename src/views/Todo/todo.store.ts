import { reactive, computed, ComputedRef } from "vue";
import { Todo } from "@/core/entities/todo";
import { TodoCategory } from "@/core/entities/todoCategory";
import { Tag } from "@/types/tag";
import { injectStrict } from "@/composables/injectStrict";
import { AUTH } from "@/core/services/keys";

export interface TodoState {
    todos: Todo[],
    categories: TodoCategory[],
}

export interface TodoGetters {
    checkedTodos: Todo[],
    uncheckedTodos: Todo[],
    categoriesAsTags: Tag[],
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
        categoriesAsTags: todoState.categories.map(category => {
            return {
                id: category.id,
                value: category.name,
                color: category.color,
            } as Tag
        })
    }
})

export const todoStore: TodoStore = {
    state: todoState,
    getters: todoGetters,
}