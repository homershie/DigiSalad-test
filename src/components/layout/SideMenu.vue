<script setup lang="ts">
import { useMenu } from '@/composables/useMenu'

const { isMenuOpen, closeMenu } = useMenu()
</script>

<template>
  <Transition name="side-menu">
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-[100] bg-brand-dark"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <!-- TODO: side menu 內容 (logo + close button + 5 cards) -->
      <button class="absolute top-6 right-8" aria-label="Close menu" @click="closeMenu">
        <!-- TODO: X icon -->
      </button>
    </div>
  </Transition>
</template>

<style scoped>
/* TODO: Side Menu Effect 動畫 */
.side-menu-enter-active,
.side-menu-leave-active {
  transition: opacity 0.4s ease;
}
.side-menu-enter-from,
.side-menu-leave-to {
  opacity: 0;
}
</style>
