<template>
    <div class="min-h-screen bg-red-50">
        <header class="sticky top-0 shadow py-5 bg-primary text-white">
            <div class="flex justify-between mx-20 text-2xl font-bold">
                {{ AppName }}
                <button class="text-base">Sobre</button>
            </div>
        </header>
        <NuxtPage />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const AppName = ref('Pede.ai')
        // Logic using Composition API goes here
        return { AppName }
    },
})
</script>