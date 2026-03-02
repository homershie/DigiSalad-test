<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGsapReveal } from '@/composables/useGsapReveal'

const currentPage = ref(1)
const totalPages = 4
const direction = ref<'prev' | 'next'>('next')

const pageLabel = computed(() => String(currentPage.value).padStart(2, '0'))

const imageRef = ref<Element | null>(null)
const subtitleRef = ref<Element | null>(null)
const titleRef = ref<Element | null>(null)
const descriptionRef = ref<Element | null>(null)
const ctaRef = ref<Element | null>(null)
const pageNumberRef = ref<Element | null>(null)
const leftBtnRef = ref<Element | null>(null)
const rightBtnRef = ref<Element | null>(null)

useGsapReveal(imageRef, { from: { y: 30 } })
useGsapReveal(subtitleRef, { stagger: 0.2, from: { x: 100, opacity: 0 } })
useGsapReveal(titleRef, { stagger: 0.4, from: { x: 100, opacity: 0 } })
useGsapReveal(descriptionRef, { stagger: 0.6, from: { x: 100, opacity: 0 } })
useGsapReveal(ctaRef, { stagger: 0.8, from: { y: 40 } })
useGsapReveal(pageNumberRef, { stagger: 1, from: { opacity: 0 } })
useGsapReveal(leftBtnRef, { stagger: 1, from: { opacity: 0 } })
useGsapReveal(rightBtnRef, { stagger: 1, from: { opacity: 0 } })
// 依方向切換動畫：next=向左滑，prev=向右滑
const transitionClasses = computed(() => {
  if (direction.value === 'next') {
    return {
      enterFrom: 'opacity-0 translate-x-4',
      leaveTo: 'opacity-0 -translate-x-4',
    }
  }
  return {
    enterFrom: 'opacity-0 -translate-x-4',
    leaveTo: 'opacity-0 translate-x-4',
  }
})

function goPrev() {
  direction.value = 'prev'
  currentPage.value = currentPage.value <= 1 ? totalPages : currentPage.value - 1
}

function goNext() {
  direction.value = 'next'
  currentPage.value = currentPage.value >= totalPages ? 1 : currentPage.value + 1
}
</script>

<template>
  <section
    id="showcase"
    class="py-62 px-4 relative rounded-bl-[49px] rounded-br-[49px] overflow-hidden"
  >
    <!-- 背景圖片 -->
    <div
      class="absolute inset-0 bg-[url('/app-showcase/bg.png')] bg-cover bg-bottom bg-no-repeat blur-md"
      aria-hidden="true"
    />
    <!-- 背景黑色遮罩 -->
    <div
      class="absolute inset-0 bg-black/75 bg-blend-multiply pointer-events-none"
      aria-hidden="true"
    />

    <!-- 內容區 -->
    <div class="relative z-10 text-white flex items-center justify-center gap-8 max-w-7xl mx-auto">
      <div ref="leftBtnRef" class="app-showcase__left-btn-container shrink-0">
        <button
          type="button"
          class="app-showcase__left-btn flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300"
          aria-label="上一頁"
          @click="goPrev"
        >
          <img
            src="/app-showcase/btn-left.svg"
            alt="previous"
            class="lg:w-[56px] lg:h-[56px] w-10 h-10 pointer-events-none"
          />
        </button>
      </div>
      <div
        class="app-showcase__mockup relative flex flex-col items-center justify-center gap-16 lg:flex-row"
      >
        <Transition
          mode="out-in"
          enter-active-class="transition-all duration-300 ease-out"
          :enter-from-class="transitionClasses.enterFrom"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 translate-x-0"
          :leave-to-class="transitionClasses.leaveTo"
        >
          <div
            :key="currentPage"
            class="flex flex-col items-center justify-center gap-16 lg:flex-row w-full"
          >
            <div class="app-showcase__image flex-1 relative">
              <img
                ref="imageRef"
                src="/app-showcase/case-01.png"
                alt="LP Club Mobile App"
                class="w-full h-auto"
              />
              <!-- 手機/平板：數字標籤在圖片右上 -->
              <div
                ref="pageNumberRef"
                class="absolute w-14 h-12 -top-16 -right-16 z-20 text-white tracking-[2.222px] font-semibold lg:hidden"
              >
                <span class="absolute top-0 left-0">{{ pageLabel }}</span>
                <span
                  class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] block bg-brand-teal -rotate-45 w-12 h-0.25"
                ></span>
                <span class="absolute bottom-0 right-0">{{
                  String(totalPages).padStart(2, '0')
                }}</span>
              </div>
              <!-- 桌面版本 CTA（僅 lg 以上顯示） -->
              <div ref="ctaRef" class="group">
                <a
                  href="#"
                  class="hidden lg:inline-flex absolute -bottom-20 -right-12 2xl:-right-20 items-center rounded-xs bg-brand-teal px-8 py-15 font-bold tracking-[0.13888rem] text-white transition group-hover:text-brand-teal group-hover:bg-white z-20"
                >
                  <span>VIEW PROJECT</span>
                  <span
                    class="ml-3 h-0.5 w-12 shrink-0 bg-white group-hover:bg-brand-teal group-hover:w-0 transition-all duration-300 group-hover:ml-0"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            <div
              class="app-showcase__content relative text-center lg:text-left flex flex-col gap-6 flex-1"
            >
              <!-- 桌機版數字標籤（僅 lg 以上顯示） -->
              <div
                ref="pageNumberRef"
                class="absolute w-14 h-12 -top-20 -right-20 z-20 text-white tracking-[2.222px] font-semibold hidden lg:block"
              >
                <span class="absolute top-0 left-0">{{ pageLabel }}</span>
                <span
                  class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] block bg-brand-teal -rotate-45 w-12 h-0.25"
                ></span>
                <span class="absolute bottom-0 right-0">{{
                  String(totalPages).padStart(2, '0')
                }}</span>
              </div>
              <!-- 副標題 -->
              <span
                ref="subtitleRef"
                class="app-showcase__subtitle text-base font-bold tracking-[2.222px] uppercase"
                >HIGHLIGHTED SHOWCASE</span
              >
              <!-- 標題 -->
              <header ref="titleRef" class="app-showcase__header mb-4">
                <h2
                  class="enhance-text-showcase block text-xl sm:text-3xl font-bold tracking-[3.636px] text-white uppercase"
                >
                  LP CLUB MOBILE APP
                </h2>
              </header>
              <!-- 描述 -->
              <p
                ref="descriptionRef"
                class="app-showcase__description text-base/normal font-light tracking-[1px]"
              >
                Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper
                bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae
                ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at
                condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante,
                eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia
                sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor
                lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
              </p>
              <!-- 手機/平板版 CTA（在 description 下方，僅 lg 以下顯示） -->
              <div ref="ctaRef" class="group">
                <a
                  href="#"
                  class="group inline-flex lg:hidden w-fit mx-auto lg:mx-0 items-center rounded-xs bg-brand-teal px-8 py-15 font-bold tracking-[0.13888rem] text-white transition hover:text-brand-teal hover:bg-white"
                >
                  <span>VIEW PROJECT</span>
                  <span
                    class="ml-3 h-0.5 w-12 shrink-0 bg-white group-hover:bg-brand-teal group-hover:w-0 transition-all duration-300 group-hover:ml-0"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <div ref="rightBtnRef" class="app-showcase__right-btn-container shrink-0">
        <button
          type="button"
          class="app-showcase__right-btn flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300"
          aria-label="下一頁"
          @click="goNext"
        >
          <img
            src="/app-showcase/btn-right.svg"
            alt="next"
            class="lg:w-[56px] lg:h-[56px] w-10 h-10 pointer-events-none"
          />
        </button>
      </div>
    </div>
  </section>
</template>
