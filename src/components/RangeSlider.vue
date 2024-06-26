<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div
      class="flex md:flex-row flex-col-reverse items-center md:justify-between justify-center"
    >
      <div class="md:!w-1/2 w-full">
        <h2 class="text-dark sm:text-4xl text-xl font-bold">{{ obj.title }}</h2>
        <p
          class="text-secondary_color text-justify sm:text-lg text-base font-normal mt-4 leading-[120%]"
        >
          {{ obj.text }}
        </p>
      </div>
      <div class="md:!w-1/2 w-full flex md:!justify-end justify-center">
        <LottieAnimation
          :animation-data="obj.jsonFile"
          :auto-play="true"
          :loop="true"
          :speed="1"
          ref="anim"
          :key="obj.jsonFile"
        />
      </div>
    </div>
    <div class="w-full mt-10">
      <p class="text-dark sm:text-2xl text-base font-normal">
        On a scale of 0 to 10, with 0 being
        <span class="text-danger font-bold">not satisfied at all</span> and 10
        being
        <span class="font-bold text-primary_color">completely satisfied</span>,
        how would you rate your current satisfaction and fulfillment in the
        following categories?
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, watch, inject } from "vue";
import { LottieAnimation } from "lottie-web-vue";

interface SliderProps {
  obj: {
    title: string;
    text: string;
    jsonFile: any;
  };
}

const { obj } = defineProps<SliderProps>();

let anim = ref();

onMounted(() => {
  setTimeout(() => {
    anim.value;
  }, 1000);
});
</script>


<style scoped lang="scss">
</style>