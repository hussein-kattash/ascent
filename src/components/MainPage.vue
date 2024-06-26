<template>
  <div class="h-full md:px-20 px-10 py-10 w-full">
    <Header/>
    <main class="w-full flex md:flex-row flex-col-reverse justify-between xl:mt-0 lg:mt-10 md:mt-20 md:mb-0 mb-32">
      <div class="lg:w-1/2 md:w-8/12 w-full flex flex-col justify-center items-start">
        <h2 class="text-dark text-lg font-bold md:hidden block mb-2">
          Discover Balance with the Wheel of Life
        </h2>
        <p class="text-justify text-secondary_color text-base font-normal leading-[120%]">
          Achieving balance in life can feel elusive, but with the right tools,
          clarity emerges. The Wheel of Life is more than just a personal
          development tool—it's a compass guiding you to areas of your life that
          need attention and celebration. By visually mapping out your current
          state in key areas, you gain a holistic view of your well-being,
          aspirations, and areas of growth. Dive in, and unveil insights that
          pave the way for transformative change.
        </p>
        <router-link to="/range">
          <button
            class="btn bg-primary_color text-light border-0 sm:text-xl text-base mt-10 rounded-3xl sm:px-8 px-4 hover:bg-primary_color hover:opacity-75">
            Explore Your Wheel of Life
            <img class="ml-0 sm:w-8 w-6" src="../assets/icons/arrow.svg" />
          </button>
        </router-link>
      </div>
      <div class="xl:w-1/2 md:w-4/12 w-full flex justify-center md:mb-0 mb-8">
        <img src="../assets/images/Frame.svg" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
</script>

<style lang="scss"></style>