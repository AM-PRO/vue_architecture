"use strict";
let todoCategoriesMock = [
  {
    name: "Work",
    id: 1,
    color: "red",
  },
  {
    name: "Life",
    id: 2,
    color: "blue",
  },
];

let todosMock = [
  {
    id: 1,
    title: "Learn Vue 3",
    done: false,
    category: todoCategoriesMock[0],
    updatedAt: Date.now(),
  },
  {
    id: 2,
    title: "Learn cool stuff",
    done: false,
    category: todoCategoriesMock[1],
    updatedAt: Date.now(),
  },
];

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return { root: true };
  });
  fastify.get("/categories", async function (request, reply) {
    return todoCategoriesMock;
  });
  fastify.get("/todos", async function (request, reply) {
    return todosMock;
  });

  fastify.post("/add-todo", async function (request, reply) {
    const todo = request.body;
    const newTodo = {
      title: todo.title,
      id: todosMock.length + 2,
      done: false,
      category: todoCategoriesMock.find(
        (category) => category.id === todo.categoryId
      ),
      updatedAt: Date.now(),
    };
    if(!newTodo.category) return reply.code(400).send({message: "Category should be defined"});
    if(!newTodo.title) return reply.code(400).send({message: "Title should be defined"});
    if(newTodo.title.length < 3) return reply.code(400).send({message: "Title must be at least 3 characters long"});
    todosMock.push(newTodo);
    return newTodo;
  });

  fastify.post("/update-todo", async function (request, reply) {
    const body = request.body;
    const todoIndex = todosMock.findIndex((todo) => todo.id === body.id);
    todosMock[todoIndex].title = body.title || todosMock[todoIndex].title;
    todosMock[todoIndex].done = body.done;
    todosMock[todoIndex].updatedAt = Date.now();
    return todosMock[todoIndex]
  });
};
