<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollSmoother from 'gsap/ScrollSmoother'
import SaladIcon from '@/components/SaladIcon.vue'
import { resolvePublicPath } from '@/composables/useBaseUrl'

const logoUrl = resolvePublicPath('Logo.svg')

function scrollToAbout() {
  const smoother = ScrollSmoother.get()
  if (smoother) {
    smoother.scrollTo('#about', true, 'top top')
  } else {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const heroTitleRef = ref<HTMLElement | null>(null)
const playButtonRef = ref<HTMLElement | null>(null)
const scrollHintRef = ref<HTMLElement | null>(null)
const verticalLabelRef = ref<HTMLElement | null>(null)
const verticalLabelLineRef = ref<HTMLElement | null>(null)

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

    // 左側垂直標籤動畫：文字 + 速度線
    if (verticalLabelRef.value && verticalLabelLineRef.value) {
      const LINE_HEIGHT = 113
      const LINE_COME_BACK_HEIGHT = 240

      const tl = gsap.timeline({ repeat: -1 })
      // 0~0.5s：向上飛出畫面
      tl.to(verticalLabelRef.value, {
        y: -350,
        duration: 0.5,
        ease: 'power2.in',
      })
        .to(
          verticalLabelLineRef.value,
          {
            scaleY: LINE_COME_BACK_HEIGHT / LINE_HEIGHT,
            transformOrigin: 'top',
            duration: 0.5,
            ease: 'power2.in',
          },
          '<',
        )
        // 0.5~1.25s：從下方回到預設位置（immediateRender: false 避免 from 值在建立時被套用）
        .fromTo(
          verticalLabelRef.value,
          { y: 350 },
          {
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            immediateRender: false,
          },
          0.5,
        )
        .fromTo(
          verticalLabelLineRef.value,
          { scaleY: LINE_COME_BACK_HEIGHT / LINE_HEIGHT },
          {
            scaleY: 1,
            transformOrigin: 'top',
            duration: 0.75,
            ease: 'power2.out',
            immediateRender: false,
          },
          0.5,
        )
        // 1.25~3s：停在預設位置後重新 loop
        .to({}, { duration: 1.75 }, 1.25)
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
        ref="verticalLabelRef"
        class="hidden md:flex flex-col items-center gap-8 absolute left-[4%] top-[400px] -translate-y-1/2 text-white"
        aria-hidden="true"
      >
        <span
          class="text-base font-bold tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180"
        >
          Digital Agency
        </span>
        <div ref="verticalLabelLineRef" class="h-[113px] w-0.5 bg-white origin-top" />
      </div>

      <h1 ref="heroTitleRef" class="text-white text-center relative -translate-y-32 md:text-left">
        <img
          :src="logoUrl"
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
          class="enhance-text-hero block text-2xl/[50px] md:text-[38px]/[70px] font-bold tracking-[0.3em] text-white uppercase"
        >
          DIGITAL EXPERIENCES
        </span>
      </h1>

      <!-- 底部沙拉 Icon + 垂直延伸線 -->
      <div class="absolute inset-x-0 bottom-0 flex justify-center" aria-hidden="true">
        <div class="flex flex-col items-center gap-4">
          <div class="flex flex-col items-center gap-1">
            <button
              type="button"
              class="flex items-center justify-center w-[80px] h-[80px]"
              aria-label="Scroll to About"
              @click="scrollToAbout"
            >
              <SaladIcon />
            </button>
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
