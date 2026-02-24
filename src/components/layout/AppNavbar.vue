<script setup lang="ts">
import { useMenu } from '@/composables/useMenu'
import { useScrollNav } from '@/composables/useScrollNav'

const { toggleMenu } = useMenu()
const { isScrolled } = useScrollNav()
</script>

<template>
  <header
    class="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white shadow-md' : 'bg-transparent'"
  >
    <nav class="flex items-center justify-between px-6 min-h-[100px] md:px-[60px] py-4">
      <a
        href="/"
        class="block transition-all duration-300 hover:brightness-110 mt-[9px] md:ms-5"
        :class="isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        aria-label="DigiSalad Home"
      >
        <img src="/Logo-C.svg" alt="DigiSalad" class="w-[120px] h-auto" />
      </a>

      <div class="flex items-center gap-3 md:gap-6">
        <a
          href="#contact"
          class="hidden md:inline-flex items-center px-4 pt-3 pb-2 rounded-full text-sm font-bold text-white bg-gradient-brand-teal hover:opacity-90 transition-opacity"
        >
          START YOUR PROJECT
        </a>
        <button
          type="button"
          class="p-2 -mr-2 rounded-lg hover:bg-black/5 transition-colors"
          :class="isScrolled ? 'text-brand-dark' : 'text-white'"
          aria-label="Open menu"
          @click="toggleMenu"
        >
          <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>
