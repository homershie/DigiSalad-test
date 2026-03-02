<script setup lang="ts">
import ScrollSmoother from 'gsap/ScrollSmoother'
import { useMenu } from '@/composables/useMenu'
import { resolvePublicPath } from '@/composables/useBaseUrl'

const { isMenuOpen, closeMenu } = useMenu()
const baseUrl = import.meta.env.BASE_URL

interface NavItem {
  id: string
  subtitle: string
  title: string
  width: string
  height: string
  bgColor: string
  bgImage: string | null
  dot: string
  food: string | null
  layout: 'row' | 'col' // row: 文字與食物橫向 | col: 文字與食物縱向
}

const navItems: NavItem[] = [
  {
    id: 'about',
    subtitle: 'EMPOWERING BRANDS',
    title: 'ABOUT US',
    width: 'w-[380px]',
    height: 'h-[210px]',
    bgColor: 'bg-[rgb(38,198,208)]',
    bgImage: '/menu/menu-bg-about.png',
    dot: 'bg-[rgba(238,108,138,1)]',
    food: '/menu/food-vege.png',
    layout: 'row',
  },
  {
    id: 'careers',
    subtitle: 'BE COOL WITH US',
    title: 'CAREERS',
    width: 'w-[290px]',
    height: 'h-[430px]',
    bgColor: 'bg-[rgb(230,169,78)]',
    bgImage: '/menu/menu-bg-careers.png',
    dot: 'bg-[rgba(238,108,138,1)]',
    food: '/menu/food-cheese.png',
    layout: 'col',
  },
  {
    id: 'services',
    subtitle: 'AREAS OF EXPERTISE',
    title: 'SERVICES',
    width: 'w-[380px]',
    height: 'h-[320px]',
    bgColor: 'bg-[rgb(88,88,128)]',
    bgImage: '/menu/menu-bg-services.png',
    dot: 'bg-[rgba(238,108,138,1)]',
    food: '/menu/food-carrot.png',
    layout: 'col',
  },
  {
    id: 'showcase',
    subtitle: 'CASE STUDIES',
    title: 'WORKS',
    width: 'w-[380px]',
    height: 'h-[320px]',
    bgColor: 'bg-[rgba(238,108,138,0.8)]',
    bgImage: '/menu/menu-bg-works.png',
    dot: 'bg-brand-teal',
    food: '/menu/food-tomato.png',
    layout: 'row',
  },
  {
    id: 'insights',
    subtitle: 'OUR STRATEGIES',
    title: 'INSIGHTS',
    width: 'w-[290px]',
    height: 'h-[282px]',
    bgColor: 'bg-[rgb(38,208,168)]',
    bgImage: '/menu/menu-bg-insights.png',
    dot: 'bg-[rgba(238,108,138,1)]',
    food: '/menu/food-cucumber.png',
    layout: 'col',
  },
  {
    id: 'contact',
    subtitle: 'START YOUR JOURNEY WITH US',
    title: 'CONTACT',
    width: 'w-[380px]',
    height: 'h-[210px]',
    bgColor: 'bg-white',
    bgImage: null,
    dot: 'bg-[rgba(238,108,138,1)]',
    food: null,
    layout: 'col',
  },
]

// Bento layout: col1(about,works) | col2(careers,insights) | col3(services,contact)
const bentoColumns: NavItem[][] = [
  [navItems[0]!, navItems[3]!], // ABOUT, WORKS
  [navItems[1]!, navItems[4]!], // CAREERS, INSIGHTS
  [navItems[2]!, navItems[5]!], // SERVICES, CONTACT
]

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
      <div class="h-full min-h-0 flex flex-col xl:px-10 xl:py-15 p-0 mt-8 overflow-hidden">
        <!-- Header: Logo + Close -->
        <div class="flex items-center justify-between px-8">
          <a href="/" class="block" @click="closeMenu">
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

        <!-- Navigation Cards Bento Grid；手機版可捲動、內容從頂對齊，防止捲動傳遞到背景頁 -->
        <nav
          class="nav-scroll-area flex-1 min-h-0 flex items-start justify-center p-8 overflow-y-auto overflow-x-hidden overscroll-contain xl:items-center xl:overflow-hidden"
          @wheel.stop
        >
          <!-- Desktop (xl+): Bento layout with design sizes -->
          <div class="nav-bento hidden xl:flex gap-6 max-w-[1100px] w-full justify-center">
            <div
              v-for="(column, colIdx) in bentoColumns"
              :key="colIdx"
              class="flex flex-col gap-6"
              :class="colIdx === 0 ? 'w-[380px]' : colIdx === 1 ? 'w-[290px]' : 'w-[380px]'"
            >
              <button
                v-for="item in column"
                :key="item.id"
                type="button"
                class="nav-card group relative flex text-left px-10.5 py-12.5 rounded-4xl transition-transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden shrink-0"
                :class="[
                  item.width,
                  item.height,
                  item.layout === 'row' && item.id === 'about'
                    ? 'flex-row items-center justify-between'
                    : item.layout === 'row' && item.id === 'showcase'
                      ? 'flex-col justify-end'
                      : item.id === 'contact'
                        ? 'flex-col justify-center'
                        : 'flex-col justify-end',
                  item.bgColor,
                  item.id === 'contact' ? 'text-brand-teal' : 'text-white',
                  item.id === 'about' || item.id === 'services' ? 'xl:mt-15' : '',
                ]"
                :style="
                  item.bgImage
                    ? {
                        backgroundImage: `url(${resolvePublicPath(item.bgImage)})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : undefined
                "
                @click="scrollToAndClose(item.id)"
              >
                <!-- WORKS: 外層 flex-col justify-end，內層 flex-row items-center 讓圖片+文字置中後一起靠底 -->
                <div
                  v-if="item.layout === 'row' && item.id === 'showcase'"
                  class="flex flex-row items-center justify-between w-full"
                >
                  <img
                    v-if="item.food"
                    :src="resolvePublicPath(item.food)"
                    :alt="item.title"
                    class="relative z-1 w-auto h-auto max-w-[92px] max-h-[92px] object-contain pointer-events-none shrink-0 mr-3"
                  />
                  <div class="relative z-1 flex flex-col justify-center min-w-0 flex-1">
                    <p class="text-base tracking-[1.8px] opacity-90">
                      {{ item.subtitle }}
                    </p>
                    <div class="flex items-center gap-2">
                      <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">
                        {{ item.title }}
                      </h3>
                      <span class="w-2.5 h-2.5 rounded-full shrink-0 mt-3" :class="item.dot" />
                    </div>
                  </div>
                </div>
                <!-- 其他項目：維持原本結構 -->
                <template v-else>
                  <img
                    v-if="item.food"
                    :src="resolvePublicPath(item.food)"
                    :alt="item.title"
                    class="relative z-1 w-auto h-auto max-w-[92px] max-h-[92px] object-contain pointer-events-none shrink-0"
                    :class="item.layout === 'row' ? 'mr-3' : 'mb-4 self-start'"
                  />
                  <div
                    class="relative z-1 flex flex-col justify-center min-w-0"
                    :class="item.layout === 'row' ? 'flex-1' : 'w-full'"
                  >
                    <p
                      class="text-base tracking-[1.8px]"
                      :class="item.id === 'contact' ? 'text-brand-dark opacity-80' : 'opacity-90'"
                    >
                      {{ item.subtitle }}
                    </p>
                    <div class="flex items-center gap-2">
                      <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">
                        {{ item.title }}
                      </h3>
                      <span class="w-2.5 h-2.5 rounded-full shrink-0 mt-3" :class="item.dot" />
                    </div>
                  </div>
                </template>
              </button>
            </div>
          </div>

          <!-- Tablet / Mobile (<xl): 手機統一 flex-row 置中，平板維持原樣 -->
          <div class="nav-grid grid grid-cols-1 xl:hidden gap-4 md:gap-5 w-full max-w-2xl px-2">
            <template v-for="item in navItems" :key="item.id">
              <button
                v-if="item"
                type="button"
                class="nav-card group relative cursor-pointer flex text-left p-4 md:py-5 px-10 rounded-4xl transition-transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden min-h-[110px] md:min-h-[160px]"
                :class="[
                  'flex-row items-center',
                  item.food ? 'justify-between' : 'justify-center',
                  item.layout === 'row' && item.id === 'about'
                    ? 'md:flex-row md:items-center md:justify-between'
                    : item.layout === 'row' && item.id === 'showcase'
                      ? 'md:flex-col md:justify-end'
                      : item.id === 'contact'
                        ? 'md:flex-col md:justify-center'
                        : 'md:flex-col md:justify-end',
                  item.bgColor,
                  item.id === 'about' ? 'md:col-span-2 md:min-h-[180px]' : '',
                  item.id === 'contact' ? 'text-brand-teal' : 'text-white',
                  item.id === 'careers' ? 'md:col-span-2 md:min-h-[180px]' : '',
                ]"
                :style="
                  item.bgImage
                    ? {
                        backgroundImage: `url(${resolvePublicPath(item.bgImage)})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : undefined
                "
                @click="scrollToAndClose(item.id)"
              >
                <!-- 平板 WORKS: 需要 wrapper 讓圖片+文字置中後一起靠底；手機：文字左、圖片右、space-between -->
                <div
                  v-if="item.layout === 'row' && item.id === 'showcase'"
                  class="flex flex-row items-center justify-between w-full"
                >
                  <img
                    v-if="item.food"
                    :src="resolvePublicPath(item.food)"
                    :alt="item.title"
                    class="relative z-1 w-14 h-14 md:w-auto md:h-auto md:max-w-[64px] md:max-h-[64px] object-contain opacity-90 pointer-events-none shrink-0 order-2 ml-2 md:order-0 md:ml-0 md:mr-3"
                  />
                  <div
                    class="relative z-1 flex flex-col justify-center min-w-0 flex-1 order-1 md:order-0"
                  >
                    <p class="text-base tracking-[1.8px] opacity-90">
                      {{ item.subtitle }}
                    </p>
                    <div class="flex items-center gap-2">
                      <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">
                        {{ item.title }}
                      </h3>
                      <span class="w-2 h-2 rounded-full shrink-0 mt-1 md:mt-3" :class="item.dot" />
                    </div>
                  </div>
                </div>
                <!-- 其他項目；手機：文字左、圖片右、space-between -->
                <template v-else>
                  <img
                    v-if="item.food"
                    :src="resolvePublicPath(item.food)"
                    :alt="item.title"
                    class="relative z-1 w-14 h-14 md:w-auto md:h-auto md:max-w-[64px] md:max-h-[64px] object-contain opacity-90 pointer-events-none shrink-0 order-2 ml-2 md:order-0 md:ml-0"
                    :class="item.layout === 'col' ? 'md:mr-0 md:mb-4 md:self-start' : 'md:mr-3'"
                  />
                  <div
                    class="relative z-1 flex flex-col justify-center min-w-0 flex-1 order-1 md:order-0"
                    :class="item.layout === 'row' ? 'md:flex-1' : 'md:w-full'"
                  >
                    <p
                      class="text-base tracking-[1.8px]"
                      :class="item.id === 'contact' ? 'text-brand-dark opacity-80' : 'opacity-90'"
                    >
                      {{ item.subtitle }}
                    </p>
                    <div class="flex items-center gap-2">
                      <h3 class="text-xl md:text-[32px] font-bold tracking-[3.636px]">
                        {{ item.title }}
                      </h3>
                      <span class="w-2 h-2 rounded-full shrink-0 mt-1 md:mt-3" :class="item.dot" />
                    </div>
                  </div>
                </template>
              </button>
            </template>
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
