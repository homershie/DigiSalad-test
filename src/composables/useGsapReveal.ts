import { onMounted, onUnmounted, type Ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealOptions {
  from?: gsap.TweenVars
  stagger?: number
  duration?: number
  scrollTrigger?: Partial<ScrollTrigger.Vars>
}

export function useGsapReveal(target: Ref<Element | null>, options: RevealOptions = {}) {
  let ctx: gsap.Context

  onMounted(() => {
    if (!target.value) return
    ctx = gsap.context(() => {
      gsap.from(target.value!, {
        opacity: 0,
        y: 40,
        duration: options.duration ?? 0.8,
        stagger: options.stagger ?? 0,
        ease: 'power3.out',
        ...options.from,
        scrollTrigger: {
          trigger: target.value!,
          start: 'top 80%',
          once: true,
          ...options.scrollTrigger,
        },
      })
    })
  })

  onUnmounted(() => ctx?.revert())
}
