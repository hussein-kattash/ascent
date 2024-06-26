<template>
  <div class="h-full py-10 w-full">
    <div class="px-20">
      <Header />
    </div>
    <div class="w-full md:!hidden flex justify-center">
      <span class="text-dark text-2xl font-normal"
        ><span class="text-primary_color font-bold text-center">{{
          SlideCounter + 1
        }}</span
        >/8</span
      >
    </div>
    <main
      class="lg:px-52 sm:px-20 px-10 w-full flex flex-col items-center justify-center"
    >
      <RangeSlider :obj="SliderData[SlideCounter]" />
      <div ref="container" class="w-full my-24 flex items-center range-slider">
        <input
          v-model="slides[`slide` + (SlideCounter + 1)]"
          @input="customSlider()"
          type="range"
          min="0"
          max="10"
          value="1"
          class="slider_"
        />
        <div ref="thumb" class="slider-thumb">
          <div ref="tooltip" class="tooltip_"></div>
        </div>
        <div ref="progress" class="progress_"></div>
      </div>
      <div
        class="w-full mb-40 flex items-center md:!justify-between justify-center"
      >
        <span class="text-dark text-2xl font-normal md:!flex hidden"
          ><span class="text-primary_color font-bold">{{
            SlideCounter + 1
          }}</span
          >/8</span
        >
        <div class="flex items-center">
          <button
            @click="back"
            class="btn btn-link text-danger text-xl font-bold mr-4"
          >
            Back
          </button>
          <button
            @click="next"
            class="btn bg-primary_color text-light text-xl rounded-3xl px-8 hover:bg-primary_color hover:opacity-75"
          >
            Next
            <img class="ml-0" src="../assets/icons/arrow.svg" />
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch, onMounted } from "vue";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import Header from "./Header.vue";
import RangeSlider from "./RangeSlider.vue";
 
import heart from "../assets/json/wired-outline-20-love-heart (1).json";
import chart from "../assets/json/wired-outline-153-bar-chart (1).json";
import suitcase from "../assets/json/wired-outline-187-suitcase (1).json";
import coins from "../assets/json/wired-outline-298-coins (1).json";
import herbs from "../assets/json/wired-outline-585-herbs (1).json";
import chandelier from "../assets/json/wired-outline-981-consultation.json";
import simulator from "../assets/json/wired-outline-1771-ski-simulator (1).json";
import pushups from "../assets/json/wired-outline-1764-pushups (1).json";

const container: Ref<HTMLDivElement | null> = ref(null);
const slides = ref<any>({
  slide1:1,
  slide2:1,
  slide3:1,
  slide4:1,
  slide5:1,
  slide6:1,
  slide7:1,
  slide8:1
});
 
const thumb: Ref<HTMLDivElement | null> = ref(null);
const tooltip: Ref<HTMLDivElement | null> = ref(null);
const progress: Ref<HTMLDivElement | null> = ref(null);

const customSlider = () => {
  if (!slides.value[`slide` + (SlideCounter.value + 1)] || !thumb.value || !tooltip.value || !progress.value)
    return;

  const maxValue = 10;
  const value = (slides.value[`slide` + (SlideCounter.value + 1)] / maxValue) * 100 + "%";

  tooltip.value.innerHTML = String(slides.value[`slide` + (SlideCounter.value + 1)]);
  progress.value.style.width = value;
  thumb.value.style.left = value;
};

const router = useRouter();

const SliderData = [
  {
    title: "Physical Health",
    text: "In the Wheel of Life, physical health is the foundational segment that drives your energy and capability. Nourish and maintain your body to enrich your life with vitality and longevity, enabling you to actively engage in every other sphere of your life. For instance, this could involve regular exercise routines, balanced diets, and yearly check-ups.",
    jsonFile: pushups,
  },
  {
    title: "Personal Growth",
    text: "Personal growth is the compass needle on your Wheel of Life, pointing you toward evolving horizons. Navigate life with purpose by continuously acquiring skills and expanding your horizons, ensuring that you're adapting and thriving amidst life's challenges. This might mean taking up a new hobby, attending workshops, or reading enlightening literature.",
    jsonFile: chart,
  },
  {
    title: "Career",
    text: "Your career sector in the Wheel of Life mirrors your professional trajectory and sense of purpose. Align your professional endeavors with personal satisfaction and broader life goals to find meaning and progression in your daily tasks. This can be seen in seeking promotions, networking, or even pursuing a completely new career path.",
    jsonFile: suitcase,
  },
  {
    title: "Finances",
    text: "The finance segment of the Wheel of Life represents both your current financial security and future aspirations. Achieve financial security and freedom through sound planning and management, ensuring peace of mind and the means to realize your dreams. Examples include setting up a savings plan, investing wisely, or creating a monthly budget.",
    jsonFile: coins,
  },
  {
    title: "Relationships",
    text: "The relationships quadrant in your Wheel of Life reflects the bonds you form and their impact on your well-being. Forge deep, meaningful connections for a fulfilled emotional and social well-being, recognizing that the quality of your connections profoundly influences your overall life satisfaction. This might involve regular family dinners, weekly catch-ups with friends, or attending couples therapy.",
    jsonFile: heart,
  },
  {
    title: "Spirituality",
    text: "Wheel of Life, spirituality provides depth, anchoring your experiences to broader existential understandings. Anchor your life with a sense of purpose by connecting to something greater than yourself, grounding your decisions and feelings in a broader context. This could manifest in meditation practices, religious observances, or nature retreats.",
    jsonFile: herbs,
  },
  {
    title: "Fun & Recreation",
    text: "Fun & Recreation is the spark in your Wheel of Life, reinvigorating your spirit and passion. Recharge and find balance through moments of joy and leisurely passions, ensuring that amidst life's responsibilities, you find time to celebrate and enjoy. Examples include traveling to a new destination, attending concerts, or picking up a new sport.",
    jsonFile: simulator,
  },
  {
    title: "Environment",
    text: "Your environment, as depicted on the Wheel of Life, shapes your daily experiences and overall mindset. Foster well-being by cultivating a harmonious and sustainable personal and community space, understanding that your surroundings play a crucial role in your mental and emotional state. This might be seen in decorating your home to reflect your tastes, participating in community clean-ups, or advocating for local green initiatives.",
    jsonFile: chandelier
  },
];
const SlideCounter = ref(0);

const next = () => {
  if (SlideCounter.value < 7) {
    SlideCounter.value++;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    router.push("/form");
    localStorage.setItem("slides",JSON.stringify({...slides.value}))
  }
};

const back = () => {
  if (SlideCounter.value > 0) {
    SlideCounter.value--;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    router.push("/");
  }
};

 
onMounted(()=>{
  customSlider();
})

watch(SlideCounter,(newVal)=>{
  if(newVal !== null){
    customSlider();
  }
})
</script>

<style scoped lang="scss">
.range-slider {
  width: 100%;
  position: relative;
  display: flex;

  .slider_ {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    height: 18px;
    border-radius: 20px;
    background-color: #f3f3f9;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25) inset;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 40px;
      height: 40px;
      cursor: pointer;
      z-index: 3;
      position: relative;
    }

    &::-moz-range-thumb {
      -moz-appearance: none;
      width: 40px;
      height: 40px;
      cursor: pointer;
      z-index: 3;
      position: relative;
      right:0px;
      border-top-right-radius: 60px;
      border-bottom-left-radius: 60px;
      border-top-left-radius: 0px;
      border-bottom-right-radius: 0px;
      border:0px;
      background: var(--danger);
      filter: drop-shadow(-4px 0px 4px rgba(0, 0, 0, 0.25));
      &::before{
        content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #f3f3f9;
      width: 1px;
      height: 16px;
      }
 
    }
  }

  .slider-thumb {
    opacity: 0;
    position: absolute;
    width: 40px;
    height: 40px;
    background: var(--danger);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    border-top-right-radius: 60px;
    border-bottom-left-radius: 60px;
    filter: drop-shadow(-4px 0px 4px rgba(0, 0, 0, 0.25));

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #f3f3f9;
      width: 1px;
      height: 16px;
    }

    .tooltip_ {
      position: absolute;
      width: 56px;
      height: 30px;
      border-radius: 7px;
      background-color: var(--dark);
      color: var(--light);
      top: -2em;
      left: 20%;
      transform: translate(-50%, -50%);
      text-align: center;

      &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 10px solid var(--dark);
        bottom: -0.7em;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
  .progress_ {
    width: 50%;
    height: 18px;
    background: var(--danger);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    border-radius: 20px;
    pointer-events: none;
  }
}
</style>
