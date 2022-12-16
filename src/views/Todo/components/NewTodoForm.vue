<template>
    <form @submit.prevent="mutate()" class="flex gap-5 flex-col">
        <input class="input" v-model="newTodo.name" type="text" placeholder="Nom de la todo">
        <TagSelector :tags="categoriesTags" v-model:id="newTodo.categoryId" />
        <div class="flex justify-center">
            <Btn :loading="isLoading">
                <button type="submit">Ajouter</button>
            </Btn>
        </div>
        <div v-if="isError" class="text-red-600 text-center text-lg">
            {{ error }}
        </div>
    </form>
</template>

<script lang="ts">
import { todoStore } from '@/views/Todo/todo.store'
import { computed, defineComponent, ref } from 'vue'
import { useMutation } from 'vue-query'
import { injectStrict } from '@/composables/injectStrict'
import { TODO } from '@/core/services/keys'
import { AddTodoDTO } from '@/core/services/todo/todo.interface'
import { Tag } from '@/types/tag'

export default defineComponent({
    setup(props, { emit }) {
        const todoService = injectStrict(TODO)

        const newTodoInitialState = {
            name: null,
            categoryId: null,
        }
        const newTodo = ref<AddTodoDTO>({ ...newTodoInitialState })

        const categoriesTags = computed<Tag[]>(() => {
            return todoStore.state.categories.map(category => {
                return {
                    id: category.id,
                    value: category.name,
                    color: category.color,
                }
            })
        })

        const resetForm = () => {
            newTodo.value = { ...newTodoInitialState }
        }

        const addTodo = async () => {
            await todoService.addTodo({ ...newTodo.value })
        }

        const { isError, error, mutate, isLoading } = useMutation(addTodo, {
            onSuccess: () => {
                emit("todo-added")
                resetForm();
            },
        });

        return {
            todoStore,
            newTodo,
            categoriesTags,
            isError,
            error,
            isLoading,
            resetForm,
            addTodo,
            mutate
        }
    }
})
</script>

<style scoped>

</style>