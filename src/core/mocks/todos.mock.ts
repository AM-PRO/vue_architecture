import dayjs from "dayjs";
import { Todo } from "../entities/todo";
import { TodoCategory } from "../entities/todoCategory";

export let todoCategoriesMock: TodoCategory[] = [
    new TodoCategory({
        name: "Work",
        id: 1,
        color: "red"
    }),
    new TodoCategory({
        name: "Life",
        id: 2,
        color: "blue"
    }),
]

export let todosMock: Todo[] = [
    new Todo({
        id: 1,
        name: "Learn Vue 3",
        done: false,
        category: todoCategoriesMock[0],
        updatedAt: dayjs(new Date(2022, 1, 1)),
    }),
    new Todo({
        id: 2,
        name: "Learn cool stuff",
        done: false,
        category: todoCategoriesMock[1],
        updatedAt: dayjs(new Date(2021, 1, 1)),
    })
]