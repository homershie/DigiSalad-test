import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

export function useScrollNav(threshold = 80) {
  const { y } = useWindowScroll()
  const isScrolled = computed(() => y.value > threshold)
  return { isScrolled }
}
