<script setup lang="ts">
import { computed } from 'vue'
import { resolvePublicPath } from '@/composables/useBaseUrl'

const props = defineProps<{
  bgColorClass: string
  bgImage?: string | null
  onClick: () => void
}>()

const bgStyle = computed(() =>
  props.bgImage
    ? {
        backgroundImage: `url(${resolvePublicPath(props.bgImage)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined,
)
</script>

<template>
  <button
    type="button"
    class="nav-card group relative flex text-left overflow-hidden shrink-0 cursor-pointer rounded-4xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
    :class="bgColorClass"
    :style="bgStyle"
    @click="onClick"
  >
    <slot />
  </button>
</template>
