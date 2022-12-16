import { z } from "zod";
import { Todo } from "../../entities/todo";
import { TodoCategory } from "../../entities/todoCategory";

export type UpdateTodoDTO = {
    id: number;
    name?: string;
    done: boolean;
}

export type AddTodoDTO = {
    name: string;
    categoryId: number;
}

export interface TodoServiceInterface {
    getTodos: () => Promise<Todo[]>;
    getCategories: () => Promise<TodoCategory[]>;

    addTodo: (todo: AddTodoDTO) => Promise<Todo>;
    updateTodo: (updateTodoDTO: UpdateTodoDTO) => Promise<Todo>;
}