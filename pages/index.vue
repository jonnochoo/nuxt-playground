<template>
    <div>
        <h1>Hello</h1>

        <InputText type="text" v-model="loginInput.userName" />
        <Password v-model="loginInput.password" :feedback="false" />
        <Button label="Submit" @click="login" />
    </div>
</template>

<script setup>
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'

const loginInput = reactive({
    userName: '',
    password: '',
})

async function login() {
    try {
        await $fetch('/api/login', {
            method: 'POST',
            body: loginInput,
        })
        await navigateTo('/products')
    } catch (error) {}
}

const data = { a: 'b' }
</script>
