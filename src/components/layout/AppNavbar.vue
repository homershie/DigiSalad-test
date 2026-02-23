<script setup lang="ts">
import { useMenu } from '@/composables/useMenu'
import { useScrollNav } from '@/composables/useScrollNav'

const { toggleMenu } = useMenu()
const { isScrolled } = useScrollNav()
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white shadow-md' : 'bg-transparent'"
  >
    <!-- TODO: navbar 內容 -->
    <nav class="flex items-center justify-between px-8 py-4">
      <a href="/" aria-label="DigiSalad Home">
        <!-- TODO: logo -->
      </a>
      <div class="flex items-center gap-4">
        <!-- TODO: CTA button -->
        <button aria-label="Open menu" @click="toggleMenu">
          <!-- TODO: hamburger icon -->
        </button>
      </div>
    </nav>
  </header>
</template>
