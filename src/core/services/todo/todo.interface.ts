import { Todo } from "../../entities/todo";
import { TodoCategory } from "../../entities/todoCategory";

export type AddTodoDTO = {
    name: string | null;
    categoryId: number | null;
}

export type UpdateTodoDTO = {
    id: number;
    name?: string;
    done: boolean;
}

export interface TodoServiceInterface {
    getTodos: () => Promise<Todo[]>;
    getCategories: () => Promise<TodoCategory[]>;

    addTodo: (todo: AddTodoDTO) => Promise<Todo>;
    updateTodo: (updateTodoDTO: UpdateTodoDTO) => Promise<Todo>;
}