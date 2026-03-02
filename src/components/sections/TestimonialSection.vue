<script setup lang="ts">
import { ref } from 'vue'
import { useGsapReveal } from '@/composables/useGsapReveal'

const sectionRef = ref<Element | null>(null)

useGsapReveal(sectionRef, {
  from: { x: -500, scale: 0.5, opacity: 0, ease: 'power1.inOut' },
  scrollTrigger: { start: 'top 90%' },
})
</script>

<template>
  <section ref="sectionRef" id="insights" class="testimonial-section relative z-20 -mt-72">
    <div
      class="relative flex items-center justify-center px-8 py-16 w-full md:w-[95%] xl:w-[88%] 2xl:w-[83.33%]"
    >
      <!-- 深色背景卡片 -->
      <div
        class="testimonial-card-bg pointer-events-none absolute inset-y-0 left-0 w-full rounded-[40px] rounded-tl-none bg-brand-dark -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <!-- 背景圖片層（模糊） -->
        <div
          class="absolute inset-0 bg-[url('/testimonial/bg.jpg')] bg-cover bg-center bg-no-repeat blur-xs grayscale-50"
          aria-hidden="true"
        />
        <!-- 漸層覆蓋層 -->
        <div
          class="absolute inset-0 bg-linear-to-t from-brand-dark/80 to-brand-dark/80"
          aria-hidden="true"
        />
      </div>

      <!-- 內容保持置中 / 左文右圖 -->
      <div class="testimonial-card max-w-280 flex flex-col md:flex-row gap-12 mb-12">
        <div class="flex flex-col items-center justify-center gap-8 flex-1">
          <img src="/testimonial/Tony.png" alt="Tony" class="w-52 h-52 object-cover rounded-full" />
          <div class="text-center">
            <p
              class="testimonial-card__name text-white text-xl/normal font-bold tracking-[2px] uppercase"
            >
              Tony Ng
            </p>
            <p
              class="testimonial-card__title text-white text-base/normal font-light italic tracking-[2px]"
            >
              Founder & Creative Director
            </p>
          </div>
        </div>

        <div class="testimonial-card__content flex flex-col items-center gap-3 flex-2">
          <img src="/testimonial/left-quote 1.svg" alt="Quote" class="w-23 h-auto" />
          <p
            class="testimonial-card__text text-white text-lg/loose md:text-[22px]/[48px] font-light tracking-[2px]"
          >
            A great digital work isn’t about designing beautiful pages purely. It is about context -
            how do we deliver the
            <span class="text-enhance-yellow font-bold"
              >right experience to the right person at the right time</span
            >. The most important thing is that your work can engage customers at anytime, anywhere
            and let users experience an entire amazing digital journey.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
