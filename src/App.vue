<script setup lang="ts">
import AppNavbar from '@/components/layout/AppNavbar.vue'
import SideMenu from '@/components/layout/SideMenu.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import AwardsSection from '@/components/sections/AwardsSection.vue'
import IngredientsSection from '@/components/sections/IngredientsSection.vue'
import TestimonialSection from '@/components/sections/TestimonialSection.vue'
import BrandsSection from '@/components/sections/BrandsSection.vue'
import AppShowcaseSection from '@/components/sections/AppShowcaseSection.vue'
</script>

<template>
  <AppNavbar />
  <SideMenu />
  <main>
    <HeroSection />
    <AboutSection />
    <AwardsSection />
    <IngredientsSection />
    <TestimonialSection />
    <BrandsSection />
    <AppShowcaseSection />
  </main>
</template>
