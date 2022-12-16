import dayjs from "dayjs"
import { validateEmail } from "../utils/validation"

export class User {
    id: number
    firstname: string
    lastname: string
    email: string
    createdAt: dayjs.Dayjs

    constructor({ id, firstname, lastname, email, createdAt }: { id: number, firstname: string, lastname: string, email: string, createdAt: dayjs.Dayjs }) {
        if(!id) {
            throw new Error("id should be defined")
        }
        if(!firstname) {
            throw new Error("firstname should be defined")
        }
        if(!lastname) {
            throw new Error("lastname should be defined")
        }
        if(!email) {
            throw new Error("email should be defined")
        }
        if(!createdAt) {
            throw new Error("createdAt should be defined")
        }
        if(!validateEmail(email)) {
            throw new Error("email should be a valid email address")
        }

        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.createdAt = createdAt;
    }

    get formattedDate(): string {
        return this.createdAt.format("DD/MM/YYYY à HH:mm:ss")
    }

    get fullname() :string {
        return `${this.firstname} ${this.lastname}`
    }
}