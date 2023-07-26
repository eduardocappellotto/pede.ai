<template>
    <button class="hover:opacity-80 rounded transition ease-in-out duration-200" @click="$emit('click')">
        <slot v-if="iconName" name="icon">
            <Icon :name="iconName" :size="iconSize" :color="iconColor" />
        </slot>
        <span class="mx-2">{{ label }}</span>
    </button>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: 'md'
        },

        iconName: {
            type: String,
            default: null
        },
        iconSize: {
            type: String,
            default: '1rem'
        },
        iconColor: {
            type: String,
            default: 'white'
        },
        onClick: {
            type: Function,
            required: true
        }
    },

})
</script>
  