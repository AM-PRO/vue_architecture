<template>
    <div
        class="bg-purple-700 hover:bg-purple-800 transition-colors px-5 py-2 text-white inline-block w-min relative rounded overflow-hidden shadow">
        <div v-if="loading" class="absolute inset-0 z-10 grid place-items-center">
            Loading...
        </div>
        <div :class="loading ? 'invisible' : 'visible'">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup() {


        return {}
    }
})
</script>

<style scoped>

</style>