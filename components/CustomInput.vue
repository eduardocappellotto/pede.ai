<template>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" :for="id">
            {{ label }}
        </label>
        <input
            class="appearance-none text-base border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :type="type" :placeholder="placeholder" :id="id" v-model="modelValue" required>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false
        },
        modelValue: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    },
    setup(props, { emit }) {
        const modelValue = computed({
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value)
        })
        return {
            modelValue
        }
    }
})
</script>