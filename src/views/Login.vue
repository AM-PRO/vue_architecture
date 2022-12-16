<template>
    <div>
        <Card title="Connexion">
            <form @submit.prevent="login()" class="flex flex-col gap-5 items-center">
                <input v-model="loginForm.email" class="input" type="email" placeholder="Adresse email" />
                <input v-model="loginForm.password" class="input" type="password" placeholder="Mot de passe" />
                <Btn :loading="isLoading">
                    <button type="submit"> Connexion</button>
                </Btn>
                <ErrorText v-if="isError">{{ error }}</ErrorText>
            </form>
        </Card>
        <Card title="Informations">
            <ul class="list-disc">
                <li>
                    Vous pouvez vous connecter avec "jhon.doe@gmail.com" et "password" pour avoir accès à la todolist
                </li>
                <li>
                    Il n'y a pas de page register mais cela fonctionnerait de la même manière
                </li>
                <li>
                    Je n'ai pas implémenté de vrai service d'authentification étant donné que le serveur ne propose pas de route
                </li>
            </ul>
        </Card>
    </div>
</template>

<script lang="ts">
import { injectStrict } from '@/composables/injectStrict'
import { LoginDTO } from '@/core/services/auth/auth.interface'
import { AUTH, PERSISTENCE } from '@/core/services/keys'
import { authStore } from '@/stores/auth'
import { defineComponent, ref } from 'vue'
import { useMutation } from 'vue-query'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const authService = injectStrict(AUTH)
        const router = useRouter()
        const persistenceService = injectStrict(PERSISTENCE)
        const loginForm = ref<LoginDTO>({
            email: null,
            password: null,
        })

        const loginMutation = async () => {
            return await authService?.login(loginForm.value)
        }

        const { isError, error, mutate: login, isLoading } = useMutation(loginMutation, {
            onSuccess: (data) => {
                authStore.state.user = persistenceService.getUser()
                router.push("/todo/list")
            },
        });
        return {
            login,
            isError,
            error,
            isLoading,
            loginForm
        }
    }
})
</script>

<style scoped>

</style>