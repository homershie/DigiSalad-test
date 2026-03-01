<script setup lang="ts">
import { ref } from 'vue'
import WaveLineSvg from '@/components/WaveLineSvg.vue'
import { useGsapReveal } from '@/composables/useGsapReveal'

const sectionRef = ref<Element | null>(null)

useGsapReveal(sectionRef, { from: { x: 500, scale: 0.5, opacity: 0 } })
</script>

<template>
  <section ref="sectionRef" id="awards" class="awards-section relative z-10 -mt-8 lg:-mt-24">
    <div
      class="relative w-full px-16 md:ms-[5%] xl:ms-[12%] 2xl:ms-[20%] md:w-[95%] xl:w-[88%] 2xl:w-[80%]"
    >
      <!-- 右側背景卡片（在內容下面） -->
      <div
        class="awards-card-bg pointer-events-none absolute inset-y-0 right-0 w-full rounded-[40px] rounded-tr-none bg-white -z-10"
        aria-hidden="true"
      ></div>

      <!-- 內容保持置中 / 左文右圖 -->
      <div class="awards-card max-w-280 flex flex-col lg:flex-row lg:items-start gap-4 py-17">
        <div class="lg:max-w-sm">
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
          <div v-for="index in 4" :key="index" class="flex min-w-0 items-center justify-center">
            <img
              src="/awards/template-01.png"
              alt="Award template"
              class="h-auto w-[283px] max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
