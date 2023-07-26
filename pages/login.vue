<template>
    <div class="flex items-center justify-center text-2xl mt-20">

        <LoginForm />

    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from '~/components/LoginForm.vue'  // Update with the path to your LoginForm component

export default defineComponent({
    components: {
        LoginForm
    },
    setup() {
        // Logic using Composition API goes here
        return {}
    },
})
</script>
 