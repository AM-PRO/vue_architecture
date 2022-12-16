<template>
    <div>
        <Card title="Home page (publique)">
            <router-link class="text-blue-600 underline" to="/todo/list">Accéder à la todolist</router-link>
        </Card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {


        return {}
    }
})
</script>

<style scoped>

</style>