import { todoCategoriesMock, todosMock } from "../../mocks/todos.mock";
import { Todo } from "../../entities/todo";
import { AddTodoDTO, TodoServiceInterface, UpdateTodoDTO } from "./todo.interface";
import { TodoCategory } from "../../entities/todoCategory";
import dayjs from "dayjs";

class TodoServiceFake implements TodoServiceInterface {

    async addTodo(todo: AddTodoDTO): Promise<Todo> {
        return new Promise<Todo>((resolve, reject) => {
            try {
                const newTodo = new Todo({
                    name: todo.name!,
                    id: todosMock.length + 2,
                    done: false,
                    category: todoCategoriesMock.find(category => category.id === todo.categoryId)!,
                    updatedAt: dayjs()
                })

                setTimeout(() => {
                    todosMock.push(newTodo);
                    resolve(newTodo);
                }, 500)
            }
            catch (err) {
                reject(err);
            }
        });
    }

    async getTodos(): Promise<Todo[]> {
        return new Promise<Todo[]>((resolve, reject) => {
            setTimeout(() => {
                resolve([...todosMock]);
            }, Math.random() * 500)
        });
    }

    async getCategories(): Promise<TodoCategory[]> {
        return new Promise<TodoCategory[]>((resolve, reject) => {
            setTimeout(() => {
                resolve(todoCategoriesMock);
            }, Math.random() * 200)
        });
    }

    async updateTodo(updateTodoDTO: UpdateTodoDTO): Promise<Todo> {
        return new Promise<Todo>((resolve, reject) => {
            try {
                const todoIndex = todosMock.findIndex(todo => todo.id === updateTodoDTO.id)!;
                todosMock[todoIndex].name = updateTodoDTO.name || todosMock[todoIndex].name;
                todosMock[todoIndex].done = updateTodoDTO.done
                todosMock[todoIndex].updatedAt = dayjs()
                resolve(todosMock[todoIndex]);
            }
            catch (err) {
                reject(err);
            }
        });
    }
}

export default TodoServiceFake
