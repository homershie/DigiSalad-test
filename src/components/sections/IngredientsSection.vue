<script setup lang="ts">
import { ref } from 'vue'
import WaveLineSvg from '@/components/WaveLineSvg.vue'
import { useGsapReveal } from '@/composables/useGsapReveal'

const headerRef = ref<Element | null>(null)
const gridRef = ref<Element | null>(null)

useGsapReveal(headerRef, { from: { y: 30 } })
useGsapReveal(gridRef, { stagger: 0.1, from: { y: 40 } })

const ingredientsItems = [
  { title: 'ux design', href: '#' },
  { title: 'ui design', href: '#' },
  { title: 'website development', href: '#' },
  { title: 'mobile app development', href: '#' },
  { title: 'ecommerce', href: '#' },
  { title: 'customer loyalty', href: '#' },
  { title: 'digital transformation', href: '#' },
  { title: 'digital marketing', href: '#' },
  { title: 'branding', href: '#' },
]
</script>

<template>
  <section
    id="services"
    class="ingredients-section bg-brand-teal z-0 pb-120 pt-100 lg:pt-80 -mt-72 lg:-mt-48"
  >
    <div class="relative mx-auto max-w-7xl px-4 text-center text-white md:px-8">
      <header ref="headerRef" class="space-y-12">
        <h2
          class="enhance-wave-teal relative inline-block text-3xl font-bold leading-snug text-white md:ms-5"
        >
          OUR INGRADIENTS
          <span
            class="absolute left-0 top-[calc(90%)] h-6 w-[calc(100%+36px)] md:w-[140%] -translate-x-4 md:-translate-x-12 z-10"
            aria-hidden="true"
          >
            <WaveLineSvg
              :amplitude="8"
              :wavelength="27"
              :frequency="1"
              :color="'var(--color-brand-dark)'"
            />
          </span>
        </h2>
        <p
          class="ingredients-section__description mx-auto max-w-6xl text-white text-base/[28px] tracking-[1px] font-light"
        >
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
          bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
          Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae
          sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis
          facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam
          consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec
          lacus. Cras lobortis molestie faucibus.
        </p>
        <div class="group">
          <a
            class="inline-flex items-center rounded-xs bg-brand-dark px-6 py-8 font-bold tracking-[0.13888rem] text-white transition group-hover:brightness-110"
            href="#"
          >
            <span>OUR SERVICES</span>
            <span
              class="ml-3 h-0.5 w-12 shrink-0 bg-white group-hover:w-0 transition-all duration-300 group-hover:ml-0"
              aria-hidden="true"
            />
          </a>
        </div>
      </header>

      <!-- 服務九宮格 -->
      <div
        ref="gridRef"
        class="ingredients-section__grid mx-auto mt-10 grid gap-8 md:mt-20 md:grid-cols-2 md:gap-10 lg:grid-cols-3"
      >
        <article
          v-for="(item, index) in ingredientsItems"
          :key="item.title"
          class="group flex flex-col items-center gap-2 p-6 rounded-[32px] text-left"
        >
          <!-- 圓形 icon 區（對應 public/ingredients 裡的圖片，可之後依 index 改成真實路徑） -->
          <div
            class="mb-5 flex h-27 w-27 items-center justify-center rounded-full bg-white text-brand-teal"
          >
            <img
              :src="`/ingredients/Ingredients-0${index + 1}.png`"
              :alt="item.title"
              class="h-16 w-16 object-contain"
            />
          </div>
          <div class="mb-2 max-w-3xs h-10 flex items-center justify-center">
            <h3 class="text-center text-xl tracking-[2px] font-bold uppercase">
              {{ item.title }}
            </h3>
          </div>
          <p class="text-center text-white text-base/relaxed tracking-widest font-light">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
            bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel
            ornare.
          </p>

          <a
            :href="item.href"
            class="mt-5 inline-flex items-center rounded-full border-2 border-white px-10 py-5 text-sm font-bold uppercase tracking-[2.22px] text-white transition hover:bg-white hover:text-brand-teal"
          >
            VIEW MORE
          </a>
        </article>
      </div>

      <!-- 底部 CTA 文案，可依需求保留 -->

      <p class="enhance-text-yellow mt-24">VIEW MORE DIGISALAD’S INGRADIENTS</p>
    </div>
  </section>
</template>
