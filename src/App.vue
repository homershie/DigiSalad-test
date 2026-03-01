<script setup lang="ts">
import { nextTick, watch } from 'vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import SideMenu from '@/components/layout/SideMenu.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import AwardsSection from '@/components/sections/AwardsSection.vue'
import IngredientsSection from '@/components/sections/IngredientsSection.vue'
import TestimonialSection from '@/components/sections/TestimonialSection.vue'
import BrandsSection from '@/components/sections/BrandsSection.vue'
import AppShowcaseSection from '@/components/sections/AppShowcaseSection.vue'
import { useScrollSmoother } from '@/composables/useScrollSmoother'
import ScrollTrigger from 'gsap/ScrollTrigger'

const { isReady: smoothReady } = useScrollSmoother({
  smooth: 1,
  smoothTouch: 0.1,
  effects: true,
  normalizeScroll: true,
})

watch(smoothReady, async (ready) => {
  if (ready) {
    await nextTick()
    ScrollTrigger.refresh()
  }
})
</script>

<template>
  <AppNavbar />
  <SideMenu />
  <div id="smooth-wrapper" class="smooth-scroll-wrapper">
    <div id="smooth-content" class="smooth-scroll-content">
      <main v-if="smoothReady">
        <HeroSection />
        <AboutSection />
        <AwardsSection />
        <IngredientsSection />
        <TestimonialSection />
        <BrandsSection />
        <AppShowcaseSection />
      </main>
    </div>
  </div>
</template>

<style>
.smooth-scroll-wrapper {
  overflow: hidden;
  height: 100vh;
}

.smooth-scroll-content {
  min-height: 100%;
}
</style>
