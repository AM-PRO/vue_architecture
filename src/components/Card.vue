<template>
    <div class="rounded-lg shadow-lg bg-gray-200 w-[700px] mx-auto p-10 my-10 relative">
        <h2 class="text-center text-4xl mb-5">{{ title }}</h2>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        }
    },
    setup() {


        return {}
    }
})
</script>

<style scoped>

</style>