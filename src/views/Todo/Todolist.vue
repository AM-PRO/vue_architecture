<template>
    <div>
        <Card title="Todolist">
            <Loading v-if="isLoading" class="animate-spin w-16 text-center mx-auto" />
            <ErrorText v-else-if="isError">{{ error }}</ErrorText>
            <div v-else-if="data">
                <TodoList title="A faire" :todos="todoStore.getters.value.uncheckedTodos" @update-todo="updateTodo" />
                <TodoList title="Réalisées" :todos="todoStore.getters.value.checkedTodos" @update-todo="updateTodo" />
            </div>
        </Card>
        <Card title="Ajouter une todo">
            <NewTodoForm @todo-added="refetch" />
        </Card>
        <Card title="Informations">
            <ul class="list-disc ml-5">
                <li class="font-bold">
                    Si vous êtes pas en mode mock, il faut lancer l'api (commande npm run start:api)
                </li>
                <li>
                    Le code contient une proposition d'architecture Vue.js (core & locator plugin)
                </li>
                <li>
                    Le code contient un exemple d'utilisation de vue-query pour la gestion des requêtes (queries & mutations)
                </li>
                <li>
                    Le code contient un exemple de store vue natif typé (state & getters, les mutations se faisant directement en modifiant le state)
                </li>
                <li>
                    Le code contient 2 exemples de composants personnalisés utilisant le v-model (TagSelector & CustomCheckbox)
                </li>
            </ul>
        </Card>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useQuery } from 'vue-query';
import { injectStrict } from '@/composables/injectStrict';
import { Todo } from '@/core/entities/todo';
import { TODO } from '@/core/services/keys';
import { todoStore } from './todo.store';

export default defineComponent({
    setup() {
        const todoService = injectStrict(TODO)

        const fetchTodos = async () => {
            return await todoService.getTodos()
        }

        const fetchCategories = async () => {
            todoStore.state.categories = await todoService.getCategories()
        }

        const { isLoading, isError, data, error, refetch } = useQuery('todos', fetchTodos, {
            onSuccess: (data) => {
                todoStore.state.todos = [...data]
            }
        })

        const updateTodo = async (todo: Todo) => {
            await todoService.updateTodo(todo)
            refetch.value()
        }

        onMounted(async () => {
            await fetchCategories()
        })

        return {
            todoStore,
            isLoading,
            isError,
            error,
            data,
            refetch,
            updateTodo,
        }
    }
})
</script>

<style scoped>

</style>