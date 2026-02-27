<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const heroTitleRef = ref<HTMLElement | null>(null)
const playButtonRef = ref<HTMLElement | null>(null)
const scrollHintRef = ref<HTMLElement | null>(null)

/** 替換為實際的 YouTube 影片 ID，例如城市夜景 timelapse */
const youtubeVideoId = '8_4JRK4QkqU'
const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1`

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    if (heroTitleRef.value) {
      gsap.from(heroTitleRef.value.children, {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.4,
      })
    }
    if (playButtonRef.value) {
      gsap.from(playButtonRef.value, {
        opacity: 0,
        scale: 0.6,
        duration: 0.8,
        ease: 'back.out(1.4)',
        delay: 1,
      })
    }
    if (scrollHintRef.value) {
      gsap.from(scrollHintRef.value, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        delay: 1.4,
      })
    }
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <section class="relative min-h-screen overflow-hidden">
    <!-- YouTube 背景影片 -->
    <div class="absolute inset-0 overflow-hidden rounded-b-[60px]" aria-hidden="true">
      <iframe
        :src="youtubeEmbedUrl"
        title="Hero background video"
        class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style="aspect-ratio: 16/9; width: 177.78vh; min-width: 100%; min-height: 56.25vw"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        allowfullscreen
      />
      <!-- 暗色疊層增加可讀性 -->
      <div
        class="absolute inset-0 bg-linear-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark/80"
        aria-hidden="true"
      />
    </div>

    <!-- 內容區 -->
    <div
      class="relative z-10 flex flex-col justify-center min-h-screen items-center lg:items-start lg:pl-[226px]"
    >
      <!-- 左側垂直標籤：DIGITAL AGENCY -->
      <div
        class="hidden md:flex flex-col items-center gap-8 absolute left-[4%] top-[400px] -translate-y-1/2 text-white"
        aria-hidden="true"
      >
        <span
          class="text-base font-bold tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180"
        >
          Digital Agency
        </span>
        <div class="h-[113px] w-0.5 bg-white" />
      </div>

      <h1 ref="heroTitleRef" class="text-white text-center relative -translate-y-32 md:text-left">
        <img
          src="/Logo.svg"
          alt="DigiSalad"
          class="mx-auto md:mx-0 h-[88px] w-auto mb-[17px] md:mb-[34px]"
        />
        <span
          class="block text-2xl/[50px] md:text-[38px]/[70px] font-bold tracking-[0.3em] text-white uppercase"
        >
          WE CREATE
        </span>
        <span
          class="block text-2xl/[50px] md:text-[38px]/[70px] font-bold tracking-[0.3em] text-white uppercase"
        >
          AMAZING
        </span>
        <span
          class="enhance-text-teal block text-2xl/[50px] md:text-[38px]/[70px] font-bold tracking-[0.3em] text-white uppercase"
        >
          DIGITAL EXPERIENCES
        </span>
      </h1>

      <!-- 底部沙拉 Icon + 垂直延伸線 -->
      <div class="absolute inset-x-0 bottom-0 flex justify-center" aria-hidden="true">
        <div class="flex flex-col items-center gap-4">
          <div class="flex flex-col items-center gap-1">
            <div class="flex items-center justify-center w-[80px] h-[80px]">
              <img src="/hero/Salad.svg" alt="Salad" class="w-[65px] h-[65px]" />
            </div>
            <span class="text-sm font-bold tracking-[0.3em] uppercase text-white">
              Taste us now!
            </span>
          </div>
          <div class="mt-3 h-[44px] w-0.5 bg-white" />
        </div>
      </div>
    </div>
  </section>
</template>
