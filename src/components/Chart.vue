<template>
  <div class="flex justify-center items-center chart relative">
      <PolarArea :data="chartData" :options="chartOptions" class="area" />
      <div class="absolute">
        <p class="left-28 md:bottom-32 sm:bottom-20 bottom-14">Physical Health</p>
        <p class="md:left-64 sm:left-52 left-36 bottom-8">Personal Growth</p>
        <p class="md:bottom-40 sm:bottom-28 bottom-20 sm:right-28 right-20">Environment</p>
        <p class="md:right-64 sm:right-52 right-40 bottom-12">Fun & Recreation</p>
        <p class="md:right-56 sm:right-40 right-28 sm:top-16 top-12">Spirituality</p>
        <p class="md:left-60 sm:left-48 left-36 sm:top-16 top-10">Career</p>
        <p class="md:top-36 sm:top-24 top-20 sm:left-28 left-20">Finances</p>
        <p class="md:top-32 sm:top-20 top-16 sm:right-24 right-16">Relationships</p>
      </div>
  </div>
</template>
  
  <script lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
} from "chart.js";
import { PolarArea } from "vue-chartjs";
import { onMounted, ref } from "vue";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip);

export default {
  name: "App",
  components: {
    PolarArea,
  },
  setup() {
    const slides = ref<string | null>(localStorage.getItem("slides"));
    const items = ref(slides.value && JSON.parse(slides.value));

    const data = {
      datasets: [
        {
          data: [
            items.value.slide1,
            items.value.slide2,
            items.value.slide3,
            items.value.slide4,
            items.value.slide5,
            items.value.slide6,
            items.value.slide7,
            items.value.slide8,
          ],
          backgroundColor: [
            "#051C2C",
            "#F26D69",
            "#006975",
            "#EF4351",
            "#051C2C",
            "#F26D69",
            "#006975",
            "#EF4351",
          ],
          label: "The result",
        },
      ],
      labels: [
        "Physical Health",
        "Personal Growth",
        "Career",
        "Finances",
        "Relationships",
        "Spirituality",
        "Fun & Recreation",
        "Environment",
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      diplay: false,
      scales:{
        r:{
          ticks:{
            display:false
          }
        }
      }
    };

    const chartData = data;
    const chartOptions = options;

    onMounted(() => {
      slides.value = localStorage.getItem("slides");
      items.value = slides.value !== null ? JSON.parse(slides.value) : null;
    });

    return { chartData, chartOptions };
  },
};
</script>

<style lang="scss" scoped>
.chart {
  .area {
    width: 350px;
  }
  p{
    position: relative;
    color: var(--primary);
    font-size: 16px;
    font-weight: 800;
    font-style: normal;
    line-height: 120%;
  }
}
@media only screen and (max-width:768px){
  .chart{
    .area{
      width: 300px;
    }
  }
}

@media only screen and (max-width:640px){
  .chart{
    .area{
      width: 230px;
    }
    p{
 
    font-size: 10px;
    font-weight: 400;
 
  }
  }
}
</style>
