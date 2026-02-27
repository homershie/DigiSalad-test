<script setup lang="ts">
import WaveLineSvg from '@/components/WaveLineSvg.vue'
</script>

<template>
  <section id="awards" class="awards-section relative z-10 -mt-8 lg:-mt-24">
    <div class="relative w-full px-4 md:px-8">
      <!-- 右側背景卡片（在內容下面） -->
      <div
        class="awards-card-bg pointer-events-none absolute inset-y-0 right-0 w-full xl:w-[calc(95%+36px)] 2xl:w-[calc(85%+72px)] rounded-[40px] rounded-tr-[0px] bg-white -z-10"
        aria-hidden="true"
      ></div>

      <!-- 內容保持置中 / 左文右圖 -->
      <div
        class="awards-card max-w-[70rem] mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 py-16"
      >
        <div class="lg:max-w-md">
          <header class="awards-card__header mb-16 md:mb-8 text-center md:text-left">
            <h2
              class="enhance-wave-teal relative inline-block text-3xl font-bold leading-snug text-text-body md:ms-5"
            >
              AWARDS
              <span
                class="absolute left-0 top-[calc(90%)] h-6 w-[calc(100%+36px)] md:w-[150%] -translate-x-4 md:-translate-x-6 -z-10"
                aria-hidden="true"
              >
                <WaveLineSvg :amplitude="8" :wavelength="16" :frequency="1" />
              </span>
            </h2>
          </header>

          <p
            class="awards-card__description text-text-body text-base/relaxed tracking-wide font-normal"
          >
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
            bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel
            ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl,
            vitae sagittis orci. Donec id dignissim nunc.
          </p>
        </div>

        <div class="awards-card__grid mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:mt-10 md:gap-8">
          <div v-for="index in 4" :key="index" class="flex items-center justify-center">
            <img
              src="/awards/template-01.png"
              alt="Award template"
              class="max-h-24 min-w-[283px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
