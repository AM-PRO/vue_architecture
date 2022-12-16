<template>
    <div class="mb-5">
        <h2 class="text-2xl mb-2">{{ title }}</h2>
        <ul v-if="todos.length > 0">
            <li class="flex items-center gap-2 mb-4" v-for="(todo, i) in todos" :key="todo.id">
                <CustomCheckbox :modelValue="todo.done" @update:modelValue="updateTodo($event, todo)" />
                <p>{{ todo.name }} - {{ todo.category.name }} - {{ todo.formattedDate }}</p>
            </li>
        </ul>
        <div v-else>
            Aucun élément
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Todo } from '../core/entities/todo';

export default defineComponent({
    props: {
        todos: {
            type: Array as PropType<Todo[]>,
            required: true
        },
        title: {
            type: String,
            default: "Todo list"
        }
    },
    setup(props, { emit }) {
        const updateTodo = (event: any, todo: Todo) => {
            todo.done = event
            emit('update-todo', { ...todo, done: event })
        }

        return {
            updateTodo
        }
    }
})
</script>

<style scoped>

</style>