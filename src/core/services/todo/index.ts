import { todoCategoriesMock, todosMock } from "../../mocks/todos.mock";
import { Todo } from "../../entities/todo";
import { AddTodoDTO, TodoServiceInterface, UpdateTodoDTO } from "./todo.interface";
import { TodoCategory } from "../../entities/todoCategory";
import axios, { AxiosError } from "axios";
import dayjs from "dayjs";
axios.defaults.baseURL = "http://localhost:3000";

export class TodoMapper {
    fromApi(json: any): Todo {
        return new Todo({
            id: json.id,
            name: json.title,
            done: json.done,
            category: new TodoCategoryMapper().fromApi(json.category),
            updatedAt: dayjs(json.updatedAt)
        })
    }
    mapFromApi(json: any[]): Todo[] {
        return json.map((todo: any) => this.fromApi(todo))
    }
}

export class TodoCategoryMapper {
    fromApi(json: any): TodoCategory {
        return new TodoCategory({
            id: json.id,
            name: json.name,
            color: json.color,
        })
    }
    mapFromApi(json: any[]): TodoCategory[] {
        return json.map((category: any) => this.fromApi(category))
    }
}

class TodoService implements TodoServiceInterface {

    async addTodo(todo: AddTodoDTO): Promise<Todo> {
        try {
            const res = await axios.post("/add-todo", {
                title: todo.name,
                categoryId: todo.categoryId
            })
            return new TodoMapper().fromApi(res.data)
        }
        catch (error: any) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data.message)
            } else {
                throw new Error('error');
            }
        }
    }

    async getTodos(): Promise<Todo[]> {
        try {
            const res = await axios.get("/todos")
            return new TodoMapper().mapFromApi(res.data)
        }
        catch (err: any) {
            throw new Error(err)
        }
    }

    async getCategories(): Promise<TodoCategory[]> {
        try {
            const res = await axios.get("/categories")
            return new TodoCategoryMapper().mapFromApi(res.data)
        }
        catch (err) {
            throw new Error("can't find categories")
        }
    }

    async updateTodo(updateTodoDTO: UpdateTodoDTO): Promise<Todo> {
        try {
            const res = await axios.post("/update-todo", {
                title: updateTodoDTO.name,
                id: updateTodoDTO.id,
                done: updateTodoDTO.done
            })
            return new TodoMapper().fromApi(res.data)
        }
        catch (err) {
            throw new Error("can't update todo")
        }
    }
}

export default TodoService