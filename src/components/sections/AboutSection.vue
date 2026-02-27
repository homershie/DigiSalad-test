<script setup lang="ts">
import { ref } from 'vue'
import WaveLineSvg from '@/components/WaveLineSvg.vue'

const showVideo = ref(false)
const YOUTUBE_VIDEO_ID = 'IeIRJ9jZ5Ro'
</script>

<template>
  <section id="about" class="about-section pb-28 md:pb-24 lg:pb-40">
    <div class="mx-auto h-[5.375rem] w-0.5 bg-[#808080]" />
    <div class="mx-auto mt-10 flex max-w-6xl flex-col gap-12 px-4 md:px-8 items-center">
      <!-- 左側：插圖 + 影片播放按鈕 / 內嵌 YouTube 影片 -->
      <header class="space-y-3">
        <h2
          class="enhance-wave-teal relative inline-block text-3xl font-bold leading-snug text-text-body"
        >
          ABOUT DIGISALAD
          <span
            class="absolute left-0 top-[calc(90%)] h-6 w-[calc(100%+36px)] md:w-[calc(100%+72px)] -translate-x-4 md:-translate-x-6 -z-10"
            aria-hidden="true"
          >
            <WaveLineSvg :amplitude="8" :wavelength="27" :frequency="1" />
          </span>
        </h2>
      </header>

      <div
        class="about-section__media relative mx-auto w-full max-w-[60rem] overflow-hidden bg-slate-200"
      >
        <!-- 16:9 比例盒 -->
        <div class="relative pb-[56.25%]">
          <!-- 預設顯示：縮圖 + 播放按鈕 -->
          <template v-if="!showVideo">
            <img
              src="/about/snapshot.png"
              alt="About DigiSalad video cover"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="group absolute inset-0">
              <div
                class="absolute inset-0 bg-transparent transition-colors duration-200 group-hover:bg-black/20"
                aria-hidden="true"
              />
              <button
                type="button"
                class="about-section__play-button absolute left-1/2 top-1/2 h-20 w-20 md:h-28 md:w-28 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition hover:scale-105 hover:brightness-105"
                aria-label="Play DigiSalad intro video"
                @click="showVideo = true"
              >
                <img
                  src="/about/media-play-symbol.svg"
                  alt=""
                  class="h-full w-full"
                  aria-hidden="true"
                />
              </button>
            </div>
          </template>

          <!-- 點擊後顯示：YouTube 內嵌影片 -->
          <iframe
            v-else
            class="absolute inset-0 h-full w-full"
            :src="`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`"
            title="DigiSalad intro video"
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
        </div>
      </div>

      <!-- 右側：標題 + 文字 -->
      <div class="about-section__content w-full max-w-[62.9375rem] space-y-6 lg:space-y-8">
        <p
          class="about-section__description text-center text-base font-normal leading-7 tracking-[0.0625rem] text-text-body"
        >
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
          bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
          Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae
          sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis
          facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam
          consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec
          lacus. Cras lobortis molestie faucibus.
        </p>
      </div>
      <!-- CTA -->
      <div>
        <a
          href="#"
          class="inline-flex items-center gap-3 rounded-xs bg-brand-teal px-6 py-8 font-bold tracking-[0.13888rem] text-white transition hover:opacity-90"
          style="
            font-size: 1rem;
            line-height: normal;
            font-family: 'Proxima Nova', var(--font-sans);
          "
        >
          <span>VIEW MORE</span>
          <span class="h-0.5 w-12 shrink-0 bg-white" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
