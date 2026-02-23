<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const heroTitleRef = ref<HTMLElement | null>(null)
const playButtonRef = ref<HTMLElement | null>(null)
const scrollHintRef = ref<HTMLElement | null>(null)

/** 替換為實際的 YouTube 影片 ID，例如城市夜景 timelapse */
const youtubeVideoId = 'IeIRJ9jZ5Ro'
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
  <section class="relative min-h-screen overflow-hidden bg-brand-dark">
    <!-- YouTube 背景影片 -->
    <div class="absolute inset-0">
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
      class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20"
    >
      <h1 ref="heroTitleRef" class="text-center text-white">
        <img
          src="/Logo.svg"
          alt="DigiSalad"
          class="h-16 md:h-24 lg:h-28 w-auto mx-auto mb-6"
        >
        <span
          class="block text-lg md:text-xl lg:text-2xl font-semibold tracking-[0.4em] text-white/90 uppercase"
        >
          WE CREATE AMAZING DIGITAL EXPERIENCES
        </span>
      </h1>

      <!-- 播放按鈕 (可連結至完整影片) -->
      <a
        ref="playButtonRef"
        :href="`https://www.youtube.com/watch?v=${youtubeVideoId}`"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-12 flex flex-col items-center gap-2 group"
        aria-label="Watch video"
      >
        <span
          class="flex items-center justify-center w-20 h-20 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20 group-hover:scale-110"
        >
          <svg
            class="w-8 h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span class="text-sm font-medium tracking-wider text-white/90"> WATCH VIDEO </span>
      </a>

      <!-- 捲動指示 -->
      <a
        ref="scrollHintRef"
        href="#about"
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span class="text-xs tracking-widest uppercase">Scroll</span>
        <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </div>

    <!-- 底部圓角 -->
    <div class="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-4xl" aria-hidden="true" />
  </section>
</template>
