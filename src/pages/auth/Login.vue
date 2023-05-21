

<template>
    <div class="page-title-pro">
        <h1 class="page-title">Login</h1>
    </div>
    <div class="container-fluid">
        <div class="login-contianer">
            <div class="d-flex flex-column gap-2">
                <label for="username">Username or E-mail</label>
                <InputText id="username" v-model="value" aria-describedby="username-help" />
            </div>
            <div class="d-flex flex-column gap-2 my-4">
                <label for="username">Password</label>
                <InputText type="password" id="username" v-model="value" aria-describedby="username-help" />
            </div>
            <div class="mt-5">
                <label class="um-field-checkbox">
                    <input type="checkbox" name="rememberme" value="1" class="me-2">
                    <span class="um-field-checkbox-option"> Keep me signed in</span>
                </label>
            </div>
            <div class="login-register-btn mt-2">
                <Button label="Login" class="login-btn" />
                <Button label="Register" class="register-btn" raised />
            </div>
            <div class="forget-password mt-4">
                <a href="#" class="forget-password-link">
                    Forgot your password? </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import "../../assets/auth.css";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
</script>