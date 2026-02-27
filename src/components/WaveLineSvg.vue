<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const props = withDefaults(
  defineProps<{
    /** 振幅：每個點上下移動的距離（viewBox 單位） */
    amplitude?: number
    /** 波長：整條線上的波峰數量 */
    wavelength?: number
    /** 頻率：每秒震盪次數（Hz），影響動畫速度 */
    frequency?: number
    /** 線條顏色，支援 CSS 色值或變數（如 var(--color-enhance-teal)） */
    color?: string
  }>(),
  { amplitude: 8, wavelength: 4, frequency: 1, color: 'var(--color-enhance-teal)' },
)

const svgRef = ref<SVGSVGElement | null>(null)
const polylineRef = ref<SVGPolylineElement | null>(null)

// 線條 x1=5 x2=415，stroke-linecap:round 會在端點外延伸，viewBox 須預留空間
const LINE = { x1: 5, y1: 13, x2: 415, y2: 13 }
const NUM_POINTS = 120

let ctx: gsap.Context

onMounted(() => {
  const svg = svgRef.value
  const polyline = polylineRef.value

  if (!svg || !polyline) return

  const centerY = LINE.y1
  const points: { x: number; y: number }[] = []
  for (let i = 0; i < NUM_POINTS; i++) {
    const t = i / (NUM_POINTS - 1)
    points.push({
      x: LINE.x1 + t * (LINE.x2 - LINE.x1),
      y: centerY,
    })
  }

  for (const pt of points) {
    const p = svg.createSVGPoint()
    p.x = pt.x
    p.y = pt.y
    polyline.points.appendItem(p)
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReducedMotion) {
    const duration = 0.5 / props.frequency
    const pointsPerCycle = NUM_POINTS / props.wavelength
    const staggerEach = duration / pointsPerCycle

    ctx = gsap.context(() => {
      const tl = gsap.to(polyline.points, {
        y: `+=${props.amplitude}`,
        duration,
        stagger: { each: staggerEach, repeat: -1, yoyo: true },
        ease: 'sine.inOut',
      })
      // 跳到約四分之一週期，使畫面一開始即為波形（非直線）
      tl.seek((duration + staggerEach * NUM_POINTS) * 1)
    }, svg)
  }
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <svg
    ref="svgRef"
    class="block h-full w-full"
    viewBox="-5 0 428 26"
    preserveAspectRatio="none"
    shape-rendering="geometricPrecision"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <polyline
      ref="polylineRef"
      fill="none"
      :stroke="props.color"
      stroke-width="6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
    />
  </svg>
</template>
