<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const containerRef = ref<HTMLDivElement | null>(null)
const saladSvg = ref('')
let tl: gsap.core.Timeline | null = null

const loadSvg = async () => {
  const res = await fetch('/hero/Salad.svg')
  saladSvg.value = await res.text()
}

const onMouseEnter = () => {
  const el = containerRef.value
  if (!el) return

  const rightKnife = el.querySelector('#right-knife')
  const leftFork = el.querySelector('#left-fork')
  const vegetable = el.querySelector('#vegetable')
  const vegetablePaths = vegetable?.children

  tl = gsap.timeline()

  // 整體放大
  tl.to(el, {
    scale: 1.2,
    duration: 0.3,
    ease: 'power2.out',
  })

  // 右邊刀子順時針 30 度
  if (rightKnife) {
    tl.to(
      rightKnife,
      {
        rotation: 30,
        duration: 0.3,
        ease: 'power2.out',
        transformOrigin: 'center center',
      },
      '<',
    )
  }

  // 左邊叉子逆時針 30 度
  if (leftFork) {
    tl.to(
      leftFork,
      {
        rotation: -30,
        duration: 0.3,
        ease: 'power2.out',
        transformOrigin: 'center center',
      },
      '<',
    )
  }

  // 蔬菜元件隨機旋轉約 0.3 秒
  if (vegetablePaths?.length) {
    tl.to(
      vegetablePaths,
      {
        rotation: () => gsap.utils.random(-15, 15),
        duration: 0.3,
        stagger: 0.015,
        ease: 'power2.out',
        transformOrigin: 'center center',
      },
      '<',
    )
  }
}

const onMouseLeave = () => {
  const el = containerRef.value
  if (!el) return

  tl?.kill()

  const rightKnife = el.querySelector('#right-knife')
  const leftFork = el.querySelector('#left-fork')
  const vegetable = el.querySelector('#vegetable')
  const vegetablePaths = vegetable?.children

  gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' })

  if (rightKnife) {
    gsap.to(rightKnife, {
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out',
      transformOrigin: 'center center',
    })
  }
  if (leftFork) {
    gsap.to(leftFork, {
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out',
      transformOrigin: 'center center',
    })
  }
  if (vegetablePaths?.length) {
    gsap.to(vegetablePaths, {
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out',
      transformOrigin: 'center center',
    })
  }
}

onMounted(() => loadSvg())

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <div
    ref="containerRef"
    class="salad-icon inline-flex cursor-pointer select-none origin-center"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div
      v-if="saladSvg"
      class="w-full h-full [&>svg]:block [&>svg]:w-full [&>svg]:h-full"
      v-html="saladSvg"
    />
  </div>
</template>

<style scoped>
.salad-icon {
  width: 65px;
  height: 65px;
}
</style>
