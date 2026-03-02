<script setup lang="ts">
import ScrollSmoother from 'gsap/ScrollSmoother'
import { useMenu } from '@/composables/useMenu'
import { resolvePublicPath } from '@/composables/useBaseUrl'
import NavCard from './NavCard.vue'

const { isMenuOpen, closeMenu } = useMenu()
const baseUrl = import.meta.env.BASE_URL

function scrollToAndClose(id: string) {
  closeMenu()
  const smoother = ScrollSmoother.get()
  if (smoother) {
    smoother.scrollTo(`#${id}`, true, 'top top')
  } else {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
      <div class="h-full min-h-0 flex flex-col xl:px-10 xl:py-15 p-0 mt-8 xl:mt-0 overflow-hidden">
        <!-- Header: Logo + Close -->
        <div class="flex items-center justify-between px-8">
          <a :href="baseUrl" class="block" @click="closeMenu">
            <img :src="baseUrl + 'Logo.svg'" alt="DigiSalad" class="w-35 h-auto" />
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

        <!-- Navigation Cards；手機版可捲動、內容從頂對齊，防止捲動傳遞到背景頁 -->
        <nav
          class="nav-scroll-area flex-1 min-h-0 flex items-start justify-center p-8 md:p-0 overflow-y-auto overflow-x-hidden overscroll-contain xl:items-center xl:overflow-hidden"
          @wheel.stop
        >
          <!-- Desktop (xl+): Bento flex layout -->
          <div class="nav-bento hidden xl:flex gap-6 max-w-[1100px] w-full justify-center">
            <!-- Column 1: ABOUT + WORKS -->
            <div class="flex flex-col gap-6 w-[380px]">
              <NavCard
                bg-color-class="bg-[rgb(38,198,208)]"
                bg-image="/menu/menu-bg-about.png"
                :on-click="() => scrollToAndClose('about')"
                class="w-[380px] h-[210px] xl:mt-15 flex-row items-center justify-between px-10.5 py-12.5 text-white"
              >
                <img
                  :src="resolvePublicPath('/menu/food-vege.png')"
                  alt="ABOUT US"
                  class="relative z-1 w-auto h-auto max-w-[92px] max-h-[92px] object-contain pointer-events-none shrink-0 mr-3"
                />
                <div class="relative z-1 flex flex-col justify-center min-w-0 flex-1">
                  <p class="text-base tracking-[1.8px] opacity-90">EMPOWERING BRANDS</p>
                  <div class="flex items-center gap-2">
                    <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">ABOUT US</h3>
                    <span class="w-2.5 h-2.5 rounded-full shrink-0 mt-3 bg-enhance-red" />
                  </div>
                </div>
              </NavCard>

              <NavCard
                bg-color-class="bg-[rgba(238,108,138,0.8)]"
                bg-image="/menu/menu-bg-works.png"
                :on-click="() => scrollToAndClose('showcase')"
                class="w-[380px] h-[320px] flex-col justify-end px-10.5 py-12.5 text-white"
              >
                <div class="flex flex-row items-center justify-between w-full">
                  <img
                    :src="resolvePublicPath('/menu/food-tomato.png')"
                    alt="WORKS"
                    class="relative z-1 w-auto h-auto max-w-[92px] max-h-[92px] object-contain pointer-events-none shrink-0 mr-3"
                  />
                  <div class="relative z-1 flex flex-col justify-center min-w-0 flex-1">
                    <p class="text-base tracking-[1.8px] opacity-90">CASE STUDIES</p>
                    <div class="flex items-center gap-2">
                      <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">WORKS</h3>
                      <span class="w-2.5 h-2.5 rounded-full shrink-0 mt-3 bg-brand-teal" />
                    </div>
                  </div>
                </div>
              </NavCard>
            </div>

            <!-- Column 2: CAREERS + INSIGHTS -->
            <div class="flex flex-col gap-6 w-[290px]">
              <NavCard
                bg-color-class="bg-[rgb(230,169,78)]"
                bg-image="/menu/menu-bg-careers.png"
                :on-click="() => scrollToAndClose('careers')"
                class="w-[290px] h-[430px] flex-col justify-end px-10.5 py-12.5 text-white"
              >
                <img
                  :src="resolvePublicPath('/menu/food-cheese.png')"
                  alt="CAREERS"
                  class="relative z-1 w-auto h-auto max-w-[92px] max-h-[92px] object-contain pointer-events-none shrink-0 mb-4 self-start"
                />
                <div class="relative z-1 flex flex-col justify-center min-w-0 w-full">
                  <p class="text-base tracking-[1.8px] opacity-90">BE COOL WITH US</p>
                  <div class="flex items-center gap-2">
                    <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">CAREERS</h3>
                    <span class="w-2.5 h-2.5 rounded-full shrink-0 mt-3 bg-enhance-red" />
                  </div>
                </div>
              </NavCard>

              <NavCard
                bg-color-class="bg-[rgb(38,208,168)]"
                bg-image="/menu/menu-bg-insights.png"
                :on-click="() => scrollToAndClose('insights')"
                class="w-[290px] h-[282px] flex-col justify-end px-10.5 py-12.5 text-white"
              >
                <img
                  :src="resolvePublicPath('/menu/food-cucumber.png')"
                  alt="INSIGHTS"
                  class="relative z-1 w-auto h-auto max-w-[92px] max-h-[92px] object-contain pointer-events-none shrink-0 mb-4 self-start"
                />
                <div class="relative z-1 flex flex-col justify-center min-w-0 w-full">
                  <p class="text-base tracking-[1.8px] opacity-90">OUR STRATEGIES</p>
                  <div class="flex items-center gap-2">
                    <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">INSIGHTS</h3>
                    <span class="w-2.5 h-2.5 rounded-full shrink-0 mt-3 bg-enhance-red" />
                  </div>
                </div>
              </NavCard>
            </div>

            <!-- Column 3: SERVICES + CONTACT -->
            <div class="flex flex-col gap-6 w-[380px]">
              <NavCard
                bg-color-class="bg-[rgb(88,88,128)]"
                bg-image="/menu/menu-bg-services.png"
                :on-click="() => scrollToAndClose('services')"
                class="w-[380px] h-[320px] xl:mt-15 flex-col justify-end px-10.5 py-12.5 text-white"
              >
                <img
                  :src="resolvePublicPath('/menu/food-carrot.png')"
                  alt="SERVICES"
                  class="relative z-1 w-auto h-auto max-w-[92px] max-h-[92px] object-contain pointer-events-none shrink-0 mb-4 self-start"
                />
                <div class="relative z-1 flex flex-col justify-center min-w-0 w-full">
                  <p class="text-base tracking-[1.8px] opacity-90">AREAS OF EXPERTISE</p>
                  <div class="flex items-center gap-2">
                    <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">SERVICES</h3>
                    <span class="w-2.5 h-2.5 rounded-full shrink-0 mt-3 bg-enhance-red" />
                  </div>
                </div>
              </NavCard>

              <NavCard
                bg-color-class="bg-white"
                :bg-image="null"
                :on-click="() => scrollToAndClose('contact')"
                class="w-[380px] h-[210px] flex-col justify-center px-10.5 py-12.5 text-brand-teal"
              >
                <div class="relative z-1 flex flex-col justify-center min-w-0 w-full">
                  <p class="text-base tracking-[1.8px] text-brand-dark opacity-80">
                    START YOUR JOURNEY WITH US
                  </p>
                  <div class="flex items-center gap-2">
                    <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">CONTACT</h3>
                    <span class="w-2.5 h-2.5 rounded-full shrink-0 mt-3 bg-enhance-red" />
                  </div>
                </div>
              </NavCard>
            </div>
          </div>

          <!-- Mobile / Tablet (< xl): 手機 1 欄、平板 2 欄 -->
          <div class="nav-grid grid grid-cols-1 md:grid-cols-2 xl:hidden gap-4 md:gap-5 w-full max-w-2xl px-2">
            <!-- ABOUT: 平板佔滿 2 欄，保持 flex-row -->
            <NavCard
              bg-color-class="bg-[rgb(38,198,208)]"
              bg-image="/menu/menu-bg-about.png"
              :on-click="() => scrollToAndClose('about')"
              class="flex-row items-center justify-between p-4 md:py-5 px-10 min-h-[110px] md:min-h-[180px] md:col-span-2 text-white"
            >
              <div class="relative z-1 flex flex-col justify-center min-w-0 flex-1 order-1">
                <p class="text-base tracking-[1.8px] opacity-90">EMPOWERING BRANDS</p>
                <div class="flex items-center gap-2">
                  <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">ABOUT US</h3>
                  <span class="w-2 h-2 rounded-full shrink-0 mt-1 md:mt-3 bg-enhance-red" />
                </div>
              </div>
              <img
                :src="resolvePublicPath('/menu/food-vege.png')"
                alt="ABOUT US"
                class="relative z-1 w-14 h-14 md:w-auto md:h-auto md:max-w-[64px] md:max-h-[64px] object-contain opacity-90 pointer-events-none shrink-0 order-2 ml-2 md:ml-0 md:mr-3"
              />
            </NavCard>

            <!-- CAREERS: 平板佔滿 2 欄，平板 flex-col justify-end（同 desktop） -->
            <NavCard
              bg-color-class="bg-[rgb(230,169,78)]"
              bg-image="/menu/menu-bg-careers.png"
              :on-click="() => scrollToAndClose('careers')"
              class="flex-row items-center justify-between md:flex-col md:justify-end p-4 md:py-5 px-10 min-h-[110px] md:min-h-[180px] md:col-span-2 text-white"
            >
              <div class="relative z-1 flex flex-col justify-center min-w-0 flex-1 order-1 md:w-full">
                <p class="text-base tracking-[1.8px] opacity-90">BE COOL WITH US</p>
                <div class="flex items-center gap-2">
                  <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">CAREERS</h3>
                  <span class="w-2 h-2 rounded-full shrink-0 mt-1 md:mt-3 bg-enhance-red" />
                </div>
              </div>
              <img
                :src="resolvePublicPath('/menu/food-cheese.png')"
                alt="CAREERS"
                class="relative z-1 w-14 h-14 md:w-auto md:h-auto md:max-w-[64px] md:max-h-[64px] object-contain opacity-90 pointer-events-none shrink-0 order-2 ml-2 md:order-0 md:ml-0 md:mb-4 md:self-start"
              />
            </NavCard>

            <!-- SERVICES: 平板 50%，flex-col justify-end（同 desktop） -->
            <NavCard
              bg-color-class="bg-[rgb(88,88,128)]"
              bg-image="/menu/menu-bg-services.png"
              :on-click="() => scrollToAndClose('services')"
              class="flex-row items-center justify-between md:flex-col md:justify-end p-4 md:py-5 px-10 min-h-[110px] text-white"
            >
              <div class="relative z-1 flex flex-col justify-center min-w-0 flex-1 order-1 md:w-full">
                <p class="text-base tracking-[1.8px] opacity-90">AREAS OF EXPERTISE</p>
                <div class="flex items-center gap-2">
                  <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">SERVICES</h3>
                  <span class="w-2 h-2 rounded-full shrink-0 mt-1 md:mt-3 bg-enhance-red" />
                </div>
              </div>
              <img
                :src="resolvePublicPath('/menu/food-carrot.png')"
                alt="SERVICES"
                class="relative z-1 w-14 h-14 md:w-auto md:h-auto md:max-w-[64px] md:max-h-[64px] object-contain opacity-90 pointer-events-none shrink-0 order-2 ml-2 md:order-0 md:ml-0 md:mb-4 md:self-start"
              />
            </NavCard>

            <!-- WORKS: 平板 50%，flex-col justify-end + 內層 flex-row（同 desktop） -->
            <NavCard
              bg-color-class="bg-[rgba(238,108,138,0.8)]"
              bg-image="/menu/menu-bg-works.png"
              :on-click="() => scrollToAndClose('showcase')"
              class="flex-col justify-center md:justify-end p-4 md:py-5 px-10 min-h-[110px] text-white"
            >
              <div class="flex flex-row items-center justify-between w-full">
                <div class="relative z-1 flex flex-col justify-center min-w-0 flex-1">
                  <p class="text-base tracking-[1.8px] opacity-90">CASE STUDIES</p>
                  <div class="flex items-center gap-2">
                    <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">WORKS</h3>
                    <span class="w-2 h-2 rounded-full shrink-0 mt-1 md:mt-3 bg-brand-teal" />
                  </div>
                </div>
                <img
                  :src="resolvePublicPath('/menu/food-tomato.png')"
                  alt="WORKS"
                  class="relative z-1 w-14 h-14 md:w-auto md:h-auto md:max-w-[64px] md:max-h-[64px] object-contain opacity-90 pointer-events-none shrink-0 ml-2 md:ml-0 md:mr-3"
                />
              </div>
            </NavCard>

            <!-- INSIGHTS: 平板 50%，flex-col justify-end（同 desktop） -->
            <NavCard
              bg-color-class="bg-[rgb(38,208,168)]"
              bg-image="/menu/menu-bg-insights.png"
              :on-click="() => scrollToAndClose('insights')"
              class="flex-row items-center justify-between md:flex-col md:justify-end p-4 md:py-5 px-10 min-h-[110px] text-white"
            >
              <div class="relative z-1 flex flex-col justify-center min-w-0 flex-1 order-1 md:w-full">
                <p class="text-base tracking-[1.8px] opacity-90">OUR STRATEGIES</p>
                <div class="flex items-center gap-2">
                  <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">INSIGHTS</h3>
                  <span class="w-2 h-2 rounded-full shrink-0 mt-1 md:mt-3 bg-enhance-red" />
                </div>
              </div>
              <img
                :src="resolvePublicPath('/menu/food-cucumber.png')"
                alt="INSIGHTS"
                class="relative z-1 w-14 h-14 md:w-auto md:h-auto md:max-w-[64px] md:max-h-[64px] object-contain opacity-90 pointer-events-none shrink-0 order-2 ml-2 md:order-0 md:ml-0 md:mb-4 md:self-start"
              />
            </NavCard>

            <!-- CONTACT: 平板 50%，flex-col justify-center（同 desktop）；手機靠左 -->
            <NavCard
              bg-color-class="bg-white"
              :bg-image="null"
              :on-click="() => scrollToAndClose('contact')"
              class="flex-row items-center justify-start md:flex-col md:justify-center p-4 md:py-5 px-10 min-h-[110px] text-brand-teal"
            >
              <div class="relative z-1 flex flex-col justify-center min-w-0 md:w-full">
                <p class="text-base tracking-[1.8px] text-brand-dark opacity-80">
                  START YOUR JOURNEY WITH US
                </p>
                <div class="flex items-center gap-2">
                  <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">CONTACT</h3>
                  <span class="w-2 h-2 rounded-full shrink-0 mt-1 md:mt-3 bg-enhance-red" />
                </div>
              </div>
            </NavCard>
          </div>
        </nav>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.nav-scroll-area {
  -webkit-overflow-scrolling: touch; /* iOS 慣性捲動 */
}

.side-menu-enter-active,
.side-menu-leave-active {
  transition: opacity 0.3s ease;
}
.side-menu-enter-active .nav-bento,
.side-menu-enter-active .nav-grid,
.side-menu-leave-active .nav-bento,
.side-menu-leave-active .nav-grid {
  transition: transform 0.3s ease;
}
.side-menu-enter-from,
.side-menu-leave-to {
  opacity: 0;
}
.side-menu-enter-from .nav-bento,
.side-menu-enter-from .nav-grid,
.side-menu-leave-to .nav-bento,
.side-menu-leave-to .nav-grid {
  transform: translateX(20px);
}
</style>
