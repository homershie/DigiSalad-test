<script setup lang="ts">
import { ref } from 'vue'
import WaveLineSvg from '@/components/WaveLineSvg.vue'
import { useGsapReveal } from '@/composables/useGsapReveal'
import { resolvePublicPath } from '@/composables/useBaseUrl'

const titleRef = ref<Element | null>(null)
const contentRef = ref<Element | null>(null)
const imageRef = ref<Element | null>(null)

useGsapReveal(titleRef, { from: { y: 30 } })
useGsapReveal(contentRef, { stagger: 0.1, from: { y: 30 } })
useGsapReveal(imageRef, { stagger: 0.1, from: { y: 50 } })
</script>

<template>
  <section id="careers" class="py-16 px-4">
    <div class="mx-auto mt-10 flex max-w-5xl flex-col gap-16 items-center">
      <!-- 左側：插圖 + 影片播放按鈕 / 內嵌 YouTube 影片 -->
      <header ref="titleRef" class="space-y-3">
        <h2
          class="enhance-wave-teal relative inline-block text-[28px] font-bold tracking-[3.636px] text-text-body"
        >
          OUR BRAND EXPERIENCE
          <span
            class="absolute left-0 top-[calc(90%)] h-6 w-[calc(100%+36px)] md:w-[calc(100%+72px)] -translate-x-4 md:-translate-x-6 -z-10"
            aria-hidden="true"
          >
            <WaveLineSvg :amplitude="8" :wavelength="27" :frequency="1" />
          </span>
        </h2>
      </header>
      <div ref="contentRef" class="brands-section__content space-y-12">
        <p
          class="brands-section__description text-center text-base font-normal leading-7 tracking-[1px] text-text-body"
        >
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
          bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
          Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae
          sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis
          facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam
          consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec
          lacus. Cras lobortis molestie faucibus.
        </p>
        <img
          ref="imageRef"
          :src="resolvePublicPath('brands/DigiSalad-Client-List-20210512.png')"
          alt="Brands"
          class="w-full h-auto"
        />
      </div>
    </div>
  </section>
</template>
