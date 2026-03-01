import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export function useScrollSmoother(options: {
  smooth?: number
  smoothTouch?: number | boolean
  effects?: boolean
  normalizeScroll?: boolean
} = {}) {
  const isReady = ref(false)

  onMounted(() => {
    const wrapper = document.getElementById('smooth-wrapper')
    const content = document.getElementById('smooth-content')

    if (!wrapper || !content) {
      console.warn('[useScrollSmoother] smooth-wrapper or smooth-content not found')
      isReady.value = true
      return
    }

    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: options.smooth ?? 1,
      smoothTouch: options.smoothTouch ?? 0.1,
      effects: options.effects ?? true,
      normalizeScroll: options.normalizeScroll ?? true,
      ...options,
    })

    isReady.value = true
  })

  onUnmounted(() => {
    ScrollSmoother.get()?.kill()
  })

  return { isReady }
}
