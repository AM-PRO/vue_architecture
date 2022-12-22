<template>
    <div>
        <form @submit.prevent="onSubmit" class="flex gap-5 flex-col">
            <div>
                <input class="todo-name-input input" v-model="name" type="text" placeholder="Nom de la todo">
                <ErrorText v-if="errors.name">{{ errors.name }}</ErrorText>
            </div>
            <div>
                <TagSelector :tags="todoStore.getters.value.categoriesAsTags" v-model:id="categoryId" />
                <ErrorText v-if="errors.categoryId">{{ errors.categoryId }}</ErrorText>
            </div>
            <div class="flex justify-center">
                <Btn :loading="isLoading">
                    <button type="submit">Ajouter</button>
                </Btn>
            </div>
            <ErrorText v-if="isError">Erreur API : {{ error }}</ErrorText>
        </form>
    </div>
</template>

<script lang="ts">
import { todoStore } from '@/views/Todo/todo.store'
import { defineComponent } from 'vue'
import { useMutation } from 'vue-query'
import { injectStrict } from '@/composables/injectStrict'
import { TODO } from '@/core/services/keys'
import { toFormValidator } from '@vee-validate/zod';
import * as zod from 'zod';
import { useField, useForm } from 'vee-validate'

export default defineComponent({
    setup(props, { emit }) {
        const todoService = injectStrict(TODO)

        const validationSchema = toFormValidator(
            zod.object({
                name: zod.string({
                    required_error: 'Ce champ est requis',
                }).min(3, "Minimum 3 caractères"),
                categoryId: zod.number({
                    required_error: 'Ce champ est requis',
                }),
            })
        );

        const { handleSubmit, errors, resetForm } = useForm({
            validationSchema,
        });

        const { value: name } = useField<string>('name');
        const { value: categoryId } = useField<number>('categoryId');

        const onSubmit = handleSubmit(async () => {
            await mutateAsync()
            emit("todo-added")
            resetForm()
        });

        const addTodo = async () => {
            await todoService.addTodo({
                name: name.value,
                categoryId: categoryId.value,
            })
        }

        const { isError, error, isLoading, mutateAsync } = useMutation(addTodo);

        return {
            todoStore,
            name,
            categoryId,
            errors,
            validationSchema,
            isError,
            error,
            isLoading,
            onSubmit,
            addTodo,
        }
    }
})
</script>

<style scoped>

</style>