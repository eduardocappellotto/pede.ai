<template>
    <div class="flex flex-col items-center justify-center w-full ">
        <Transition appear>
            <div class="p-6 max-w-lg w-full bg-white shadow-md rounded-md">
                <div class="flex justify-center items-center">
                    <span class="text-gray-700 font-semibold text-base">Faça o Login</span>
                </div>

                <hr class="my-6 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />

                <form @submit="handleSubmit" class="mt-4">
                    <CustomInput label="Email" type="email" id="email" placeholder="johndoe@email.com" v-model="email" />
                    <CustomInput label="Senha" type="password" id="password" placeholder="********" v-model="password" />
                    <CustomInput label="Nome" type="text" id="name" placeholder="John Doe" v-model="nome" />

                    <div class="flex justify-end items-center mt-4">
                        <button id="submit" type="submit"
                            class="py-2 px-4 bg-primary text-white text-base rounded-md hover:opacity-80">Login</button>

                    </div>

                </form>
                <hr class="my-6 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
                <span class="text-gray-700 font-semibold text-base mb-8"> Não possui uma conta?
                    <CustomButton id="backtoregister" class="text-base bg-transparent text-black rounded-none underline"
                        label="Registro" @click="push('/register')" />
                </span>

                <div class="flex justify-center items-center flex-col mt-4">

                    <CustomButton class="px-4 py-2 bg-google-btn text-base text-white  " label="Sign in with Google"
                        color="google" icon iconName="ion:logo-googleplus" :on-click="googleSignIn" />
                    <CustomButton class="px-4 py-2 mt-4 text-base bg-facebook-blue text-white" label="Sign in with Facebook"
                        color="google" icon iconName="mdi-facebook" :on-click="googleSignIn" />
                </div>
            </div>
        </Transition>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue'
import useAuth from '~/composables/useFirebaseAuth'
import useRouting from '~/composables/useRouting'
export default defineComponent({
    setup() {
        const { registerUser, googleSignIn } = useAuth()
        const { push } = useRouting();
        const email = ref('')
        const password = ref('')
        const nome = ref('')

        const handleSubmit = async (e: Event) => {
            e.preventDefault()
            const success = await registerUser(email.value, password.value)
            if (success) {
                // login succeeded, redirect or update UI as needed
            } else {
                // handle login failure, show error message, etc.
            }
        }

        return { email, password, nome, handleSubmit, googleSignIn, push }
    }
})
</script>
