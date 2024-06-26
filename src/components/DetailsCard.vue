
<template>
  <div
    class="mb-0  card bg-light border-8 sm:!w-[384px] w-[320px] flex flex-col items-start justify-start p-6 sm:!pt-10 pt-6"
    :class="props.borderColor"
  >
    <div>
      <h3 class="sm:!text-2xl text-xl font-bold" :class="props.color">{{ props.title }}</h3>
      <p class="text-base text-secondary_color leading-[120%] mt-2">{{ props.text }}</p>
    </div>
    <div class="sm:!mt-14 mt-8">
      <h3 :class="props.color" class="sm:!text-2xl text-xl font-bold">Influenced Divisions:</h3>
      <ul class="mt-2 mb-0">
         <li class="text-base text-secondary_color" v-for="(item, index) in props.results" :key="index">{{ obj[getString(item)] }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
const props = defineProps({
  title:String,
  text:String,
  results:Array,
  color:String,
  borderColor:String
});

const obj = ref<any>({
  slide1:"Physical Health",
  slide2:"Personal Growth",
  slide3:"Career",
  slide4:"Finances",
  slide5:"Relationships",
  slide6:"Spirituality",
  slide7:"Fun & Recreation",
  slide8:"Environment",
});

function getString(input:any)
{

  return String(input);
}
</script>

<style scoped>
.card {
  height: 100%;
  border-radius: 47px;
  position: relative;
}
</style>

















<!-- <template>
  <div
   :class="cardClasses"
    class="mb-24 card border-8 flex flex-col items-center justify-center p-6"
  >
    <p class="result">{{ props.result }}</p>
    <h3 class="my-4 text-dark text-2xl font-bold">{{ props.title }}</h3>
    <span class="text-danger text-base font-bold">{{ props.subtitle }}</span>
    <p class="mt-0 text-center text-base text-secondary_color font-normal leading-[120%]">
      {{ props.text }}
    </p>
  </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  title: String,
  subtitle: String,
  text: String,
  cardClasses: String,
  result: Number
});

</script>


<style scoped lang="scss">
.card {
  width: 319px;
  height: 350px;
  border-radius: 47px;
  position: relative;

  .result{
    position: absolute;
    top: -50px;
    color: var(--light);
    font-size: 40px;
    font-weight: 700;
  }
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100px;
    height: 100px;
    top: -70px;
    border-top-right-radius: 90px;
    border-bottom-left-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style> -->