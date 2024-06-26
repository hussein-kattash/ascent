<template>
  <div class="h-full py-10 w-full">
    <div class="px-20">
      <Header />
    </div>
    <div class="w-3/4 mx-auto">
      <Chart />
    </div>
    <div class="sm:!flex hidden flex-col justify-center items-center mt-20">
      <a href="#details">
        <label class="scroll_">
          <span class="slider"></span>
        </label>
      </a>
      <span class="text-primary_color mt-4 text-2xl font-bold"
        >Scroll to See the Detailed Result</span
      >
    </div>
    <div id="details" class="mt-24 mb-32 w-full sm:!px-20 px-10 2xl:!px-32">
      <h2 class="sm:!text-4xl text-2xl text-dark font-bold">Detailed Result</h2>
      <div class="sm:mt-24 mt-10 w-full grid grid-cols-12 gap-8 place-content-center">
        <div class="lg:col-span-4 md:col-span-6 col-span-12 flex items-center justify-center" v-for="(item,index) in Details" :key="index">
          <DetailsCard :border-color="item.borderColor" :color="item.color" :title="item.title" :text="item.text" :results="item.result"/>
        </div>
      </div>
      <div
        class="mt-16 sm:!flex hidden md:!flex-row flex-col items-center justify-center w-full"
      >
        <button
          class="mr-4 btn btn-outline border-primary_color text-primary_color text-xl rounded-3xl px-8"
        >
          Send To Your Whatsapp
          <img class="ml-2" src="../assets/icons/whatsappgreen.svg" />
        </button>
        <button
          class="md:!ml-4 ml-0 md:!mt-0 mt-4 btn border-none bg-primary_color text-light text-xl rounded-3xl px-8 hover:bg-primary_color hover:opacity-75"
        >
          Send To Your Email
          <img class="ml-2" src="../assets/icons/sendEmail.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import DetailsCard from "./DetailsCard.vue";
import Chart from "./Chart.vue";
import Header from "./Header.vue";
 
const arr1 = ref<string[]>([]);
const arr2 = ref<string[]>([]);
const arr3 = ref<string[]>([]);

const slides = ref<string | null>(localStorage.getItem("slides"));
const items = ref<{ [key: string]: number }>(slides.value && JSON.parse(slides.value));

interface Details {
  title: string;
  text: string;
  color: string;
  borderColor:string,
  result: String[];
}

const Details = ref<Details[]>([
  {
    title: "Celebrate & Refine!",
    text: "Congratulations on achieving high satisfaction in this area! While celebration is in order, never stop refining. Explore ways to maintain this momentum and perhaps even push the boundaries to further optimize your experience in this sector.",
    color: "text-primary_color",
    borderColor:"border-primary_color",
    result: arr1.value,
  },
  {
    title: "Time for Enhancement!", 
    text: "While there are elements in this area that are working for you, there's significant room for growth and enhancement. Reflect on what shifts can be made to elevate your satisfaction level. Whether it's tweaking current practices or introducing new strategies, it's within your grasp to elevate this score.",
    color: "text-dark",
    borderColor:"border-dark",
    result: arr2.value,
  },
  {
    title: "Immediate Action Needed!",
    text: "Your fulfillment in this area is critically low. It's time to prioritize and address the challenges you face. Consider seeking guidance, setting clear goals, or perhaps even adopting a fresh perspective. Change begins with recognizing the need for it.",
    color: "text-danger",
    borderColor:"border-danger",
    result: arr3.value,
  }  
]);

onMounted(() => {
      slides.value = localStorage.getItem("slides");
      items.value = slides.value !== null ? JSON.parse(slides.value) : null;
    });

 
const entries = Object.entries(items.value);
 

const getAllResults = ()=>{
   entries.map((item:[string, number])=>{
    if(item[1] <= 3){
      arr3.value.push(item[0])
    }
    else if(item[1] > 3 && item[1] <= 7 ){
      arr2.value.push(item[0])
    }
    else{
      arr1.value.push(item[0])
    }
   })
}
getAllResults();
 
</script>

<style scoped lang="scss">
.scroll_ {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 35px;
  height: 70px;
  .slider {
    position: absolute;
    inset: 0;
    background: none;
    border: 1px solid var(--primary);
    border-radius: 50px;
    cursor: pointer;

    &::before {
      position: absolute;
      content: "";
      height: 1.4em;
      width: 1.4em;
      right: 4.2px;
      top: 0.3em;
      background-color: var(--danger);
      border-radius: 50px;
      animation: move 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite alternate;
    }
  }

  @keyframes move {
    0% {
      transform: translateY(0em) rotate(0deg);
    }

    100% {
      transform: translateY(2em) rotate(270deg);
    }
  }
}
</style>