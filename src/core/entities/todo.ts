import { TodoCategory } from "./todoCategory";
import dayjs from "dayjs"

export class Todo {
    id: number;
    name: string;
    done: boolean;
    category: TodoCategory
    updatedAt: dayjs.Dayjs

    constructor({ id, name, done, category, updatedAt }: { id: number, name: string, done: boolean, category: TodoCategory, updatedAt: dayjs.Dayjs }) {
        if(!category) {
            throw new Error("category should be defined")
        }
        if(!id) {
            throw new Error("id should be defined")
        }
        if(!name) {
            throw new Error("name should be defined")
        }
        if(done === undefined || done === null) {
            throw new Error("done should be defined")
        }
        if(!updatedAt) {
            throw new Error("updatedAt should be defined")
        }
        if(name.length < 3) {
            throw new Error("name should be at least 3 characters long")
        }
        
        this.id = id;
        this.name = name;
        this.done = done;
        this.category = category;
        this.updatedAt = updatedAt;
    }

    get formattedDate(): string {
        return this.updatedAt.format("DD/MM/YYYY à HH:mm:ss")
    }
}