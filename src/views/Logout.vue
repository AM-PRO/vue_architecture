<template>
    <div>

    </div>
</template>

<script lang="ts">
import { injectStrict } from '@/composables/injectStrict'
import { AUTH } from '@/core/services/keys'
import { authStore } from '@/stores/auth'
import { defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup () {
        const authService = injectStrict(AUTH)
        const router = useRouter()
        
        onMounted(() => {
            authService.logout()
            authStore.state.user = null;
            router.push('/login')
        })

        return {}
    }
})
</script>

<style scoped>

</style>