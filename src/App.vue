<script setup>
import Navbar from './pages/partials/Navbar.vue';
import Footer from './pages/partials/Footer.vue';
</script>

<template>
  <Navbar v-if="$route.name != 'AdminDashboard'"/>
  <router-view :key="$route.path" />
  <Footer v-if="$route.name != 'AdminDashboard'"></Footer>
</template>

<style scoped></style>
