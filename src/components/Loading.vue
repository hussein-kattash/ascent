<template>
  <div class="flex flex-col items-center justify-center loading_ h-5/6">
    <div>
      <img
        src="../assets/images/loaderImage.png"
        alt="Loading"
        class="lg:w-96 lg:h-96 w-60 h-60 animate-spin"
      />
    </div>
    <div class="loader mt-8 md:!w-8/12 sm:!w-10/12 w-11/12"></div>
    <p class="mt-8 text-dark lg:!text-5xl sm:!text-2xl text-xl font-bold">
      Analyzing your answers
      <span id="dot1" class="dot">.</span>
      <span id="dot2" class="dot">.</span>
      <span id="dot3" class="dot">.</span>
    </p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.loading_ {
  .loader {
    --load-time: 5s;
    /* border: 1px solid var(--dark); */
    outline-offset: 5px;
    position: relative;
    overflow: hidden;
    border-radius: 5rem;
    height: 18px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25) inset;
  }

  .loader::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dark);
    z-index: 2;
    animation: loading var(--load-time) ease-in-out infinite;
  }
  .dot {
    opacity: 0;
    animation: dotFadeInOut 2.5s infinite;
  }
}
@keyframes dotFadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

#dot1 {
  animation-delay: 0.5s;
}

#dot2 {
  animation-delay: 1s;
}

#dot3 {
  animation-delay: 1.5s;
}

@keyframes loading {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}
</style>