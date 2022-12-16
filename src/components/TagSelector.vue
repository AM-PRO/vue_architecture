<template>
    <div class="flex items-center gap-4">
        <div :style="getTagStyle(tag)" class="border transition-colors cursor-pointer text-white px-5 py-2 rounded-full"
            @click="toggleTag(tag)" v-for="(tag, i) in tags" :key="i">
            {{ tag.value }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { Tag } from '../types/tag';

export default defineComponent({
    props: {
        tags: {
            type: Array as PropType<Tag[]>,
            required: true,
        },
        modelValue: {
            type: Object as PropType<Tag>
        },
        id: {
            type: [String, Number]
        }
    },
    setup(props, { emit }) {
        const selectedTag = ref<Tag | null | undefined>(null)

        watch(props, () => {
            console.log("watch")
            console.log(props)
            if (props.modelValue) {
                selectedTag.value = props.modelValue
            }
            else if (props.id) {
                selectedTag.value = props.tags.find(tag => tag.id === props.id)
            }
            else {
                selectedTag.value = null
            }
        })
        
        const isTagActive = (tag: Tag) => {
            return selectedTag.value?.id === tag.id
        }

        const toggleTag = (tag: Tag) => {
            if (isTagActive(tag)) {
                selectedTag.value = null
            }
            else {
                selectedTag.value = tag
            }
            emit('update:modelValue', selectedTag.value)
            emit('update:id', selectedTag.value?.id)
        }

        const getTagStyle = (tag: Tag) => {
            return {
                borderColor: tag.color,
                color: isTagActive(tag) ? "white" : tag.color,
                backgroundColor: isTagActive(tag) ? tag.color : "transparent"
            }
        }

        return {
            selectedTag,
            toggleTag,
            isTagActive,
            getTagStyle
        }
    }
})
</script>

<style scoped>

</style>