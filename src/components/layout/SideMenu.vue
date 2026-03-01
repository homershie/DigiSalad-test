<script setup lang="ts">
import ScrollSmoother from 'gsap/ScrollSmoother'
import { useMenu } from '@/composables/useMenu'

const { isMenuOpen, closeMenu } = useMenu()

const navItems = [
  {
    id: 'about',
    subtitle: 'EMPOWERING BRANDS',
    title: 'ABOUT US',
    color: 'bg-teal-400',
    dot: 'bg-red-400',
  },
  {
    id: 'careers',
    subtitle: 'BE COOL WITH US',
    title: 'CAREERS',
    color: 'bg-amber-400',
    dot: 'bg-orange-500',
  },
  {
    id: 'services',
    subtitle: 'AREAS OF EXPERTISE',
    title: 'SERVICES',
    color: 'bg-indigo-600',
    dot: 'bg-pink-400',
  },
  {
    id: 'works',
    subtitle: 'CASE STUDIES',
    title: 'WORKS',
    color: 'bg-rose-400',
    dot: 'bg-sky-400',
  },
  {
    id: 'insights',
    subtitle: 'OUR STRATEGIES',
    title: 'INSIGHTS',
    color: 'bg-emerald-300',
    dot: 'bg-red-400',
  },
  {
    id: 'contact',
    subtitle: 'START YOUR JOURNEY WITH US',
    title: 'CONTACT',
    color: 'bg-white',
    dot: 'bg-red-400',
  },
]

function scrollToAndClose(id: string) {
  closeMenu()
  const smoother = ScrollSmoother.get()
  if (smoother) {
    smoother.scrollTo(`#${id}`, true, 'top center')
  } else {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <Transition name="side-menu">
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-100 from-brand-dark/90 to-brand-teal/90 bg-linear-to-b backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div class="h-full flex flex-col px-10 py-15 md:p-10">
        <!-- Header: Logo + Close -->
        <div class="flex items-center justify-between">
          <a href="/" class="block" @click="closeMenu">
            <img src="/Logo.svg" alt="DigiSalad" class="w-35 h-auto" />
          </a>
          <button
            type="button"
            class="w-15 h-15 flex items-center justify-center cursor-pointer rounded-full text-white hover:bg-white/10 transition-colors duration-300"
            aria-label="Close menu"
            @click="closeMenu"
          >
            <svg
              version="1.1"
              id="&#x5716;&#x5C64;_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="25"
              height="25"
              x="0px"
              y="0px"
              viewBox="0 0 25 25"
              style="enable-background: new 0 0 25 25"
              xml:space="preserve"
            >
              <path
                style="
                  fill: none;
                  stroke: #ffffff;
                  stroke-width: 3;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                d="M23.5,1.5l-22,22"
              />
              <path
                style="
                  fill: none;
                  stroke: #ffffff;
                  stroke-width: 3;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                d="M23.5,23.5l-22-22"
              />
            </svg>
          </button>
        </div>

        <!-- Navigation Cards Grid -->
        <nav class="flex-1 flex items-center justify-center py-8">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full">
            <button
              v-for="item in navItems"
              :key="item.id"
              type="button"
              class="group text-left p-6 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
              :class="[item.color, item.id === 'contact' ? 'text-brand-teal' : 'text-brand-dark']"
              @click="scrollToAndClose(item.id)"
            >
              <p class="text-xs font-semibold tracking-wider opacity-80 mb-1">
                {{ item.subtitle }}
              </p>
              <div class="flex items-center gap-2">
                <h3 class="text-xl md:text-2xl font-bold">
                  {{ item.title }}
                </h3>
                <span class="w-2 h-2 rounded-full shrink-0" :class="item.dot" />
              </div>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.side-menu-enter-active,
.side-menu-leave-active {
  transition: opacity 0.3s ease;
}
.side-menu-enter-active .grid,
.side-menu-leave-active .grid {
  transition: transform 0.3s ease;
}
.side-menu-enter-from,
.side-menu-leave-to {
  opacity: 0;
}
.side-menu-enter-from .grid,
.side-menu-leave-to .grid {
  transform: translateX(20px);
}
</style>
