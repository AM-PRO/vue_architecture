<template>
    <div @click="toggleCheckbox" :class="modelValue ? 'bg-purple-600 text-white hover:bg-purple-400' : 'bg-white hover:bg-purple-300'"
        class="w-6 h-6   transition-colors rounded-full cursor-pointer grid place-items-center p-px">
        {{ modelValue ? '✓' : '' }}
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const isChecked = ref(props.modelValue)

        const toggleCheckbox = () => {
            isChecked.value = !isChecked.value
            emit('update:modelValue', isChecked.value)
        }

        return {
            toggleCheckbox
        }
    }
})
</script>

<style scoped>

</style>