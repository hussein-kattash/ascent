<template>
  <div class="min-h-screen relative">
    <Result/>
    <div class="absolute bottom-0 w-full">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Result from "@/components/Result.vue"
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
</style>