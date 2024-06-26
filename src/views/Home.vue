<template>
  <div class="md:h-screen min-h-screen relative">
    <MainPage />
    <div class="absolute bottom-0 w-full">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import MainPage from "../components/MainPage.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
</style>