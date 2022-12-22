<template>
    <div class="flex gap-4 items-center justify-center bg-purple-700 shadow-lg py-4">
        <router-link class="link" to="/">Accueil</router-link>
        <router-link class="link" to="/todo/list">Todo list</router-link>
        <router-link v-if="isAuthenticated" class="link logout-link" to="/logout">({{user?.fullname}}) Déconnexion</router-link>
        <router-link v-else="isAuthenticated" class="link" to="/login">Se connecter</router-link>
    </div>
</template>

<script lang="ts">
import { User } from '@/core/entities/user';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        user: {
            type: Object as PropType<User>
        },
        isAuthenticated: {
            type: Boolean,
            required: true
        }
    },
    setup() {

        return {
           
        }
    }
})
</script>

<style scoped lang="scss">
.link {
    @apply text-gray-300 p-2 text-lg font-bold;
    &.router-link-active, &:hover {
        @apply text-white;
    }
}
</style>