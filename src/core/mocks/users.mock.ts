import dayjs from "dayjs";
import { User } from "../entities/user";

export let usersMock: User[] = [
    new User({
        id: 1,
        firstname: "John",
        lastname: "Doe",
        email: "jhon.doe@gmail.com",
        createdAt: dayjs()
    }),
    new User({
        id: 2,
        firstname: "John2",
        lastname: "Doe2",
        email: "jhon.doe2@gmail.com",
        createdAt: dayjs()
    }),
]