# DigiSalad Landing Page

以 Vue 3 + Vite 開發的 Landing Page，作為 DigiSalad（沙拉互動）的前端程式測試。
目標是忠實還原提供的 Figma 設計稿，包含動畫、過場效果與響應式版面。

## 技術選型

- **Vue 3**（Composition API + `<script setup>`）
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**（透過 `@tailwindcss/vite`）
- **GSAP + ScrollTrigger + ScrollSmoother** — 全站動畫，包含捲動觸發顯示與頁面平滑捲動
- **VueUse** — 捲動偵測，驅動 Navbar 樣式切換

## 專案結構

```
src/
├── assets/styles/
│   └── main.css                # Tailwind v4 入口 + 品牌設計變數
├── composables/
│   ├── useMenu.ts              # 全域側邊選單開關狀態
│   ├── useScrollNav.ts         # 捲動偵測 → Navbar 樣式切換
│   ├── useScrollSmoother.ts    # GSAP ScrollSmoother 初始化
│   ├── useGsapReveal.ts        # 可複用的 GSAP ScrollTrigger 顯示動畫
│   └── useBaseUrl.ts           # 解析 public 資源路徑（本地 / GitHub Pages）
├── components/
│   ├── SaladIcon.vue           # 沙拉 SVG 圖示元件，含 GSAP Hover 互動動畫
│   ├── WaveLineSvg.vue         # 可複用波浪線 SVG 元件（GSAP polyline 動畫）
│   ├── layout/
│   │   ├── AppNavbar.vue       # 固定導覽列（透明 → 白底捲動切換，選單開啟時隱藏）
│   │   └── SideMenu.vue        # 全頁覆蓋側邊選單（桌面 Bento Grid / 手機響應式 Grid）
│   └── sections/
│       ├── HeroSection.vue     # 影片背景 + 主標題 + GSAP 進場與循環動畫
│       ├── AboutSection.vue    # 關於 DigiSalad + 插圖
│       ├── AwardsSection.vue   # 合作夥伴 Logo
│       ├── IngredientsSection.vue  # Our Ingredients（青色背景 + 圖示格）
│       ├── TestimonialSection.vue  # 引言區塊（深色背景）
│       ├── BrandsSection.vue   # 品牌合作 Logo 格
│       └── AppShowcaseSection.vue  # 行動 App 作品集，含分頁切換動畫
├── App.vue
└── main.ts
```

## 主要功能說明

### 動畫與互動

- **GSAP ScrollSmoother** — 全頁慣性平滑捲動（`smooth: 1`、`smoothTouch: 0.1`），在 `App.vue` 透過 `useScrollSmoother` 初始化。
- **Hero 進場動畫** — 主標題子元素依序從下方淡入；左側垂直標籤循環執行飛出 / 回位動畫；底部沙拉 Icon 提示淡入顯示。
- **SaladIcon Hover** — 滑鼠移入時整體放大，並以 GSAP 驅動 SVG 內部元素（`#right-knife` 順轉、`#left-fork` 逆轉、`#vegetable` 各子路徑隨機旋轉）；移出後復位。
- **`useGsapReveal`** — 可複用的捲動觸發顯示 Composable，各 Section 共用，支援自訂 `from` 狀態、stagger 與 ScrollTrigger 參數。
- **WaveLineSvg** — 波浪線 SVG 元件，以 GSAP 驅動 polyline 點位動畫；提供 `amplitude`、`wavelength`、`frequency`、`color` props，並尊重 `prefers-reduced-motion` 設定。
- **按鈕 Hover 互動** — CTA 按鈕使用 Tailwind 過渡工具類別（`hover:scale-110`、`group-hover` 色彩切換、底線寬度動畫）。

### 版面與響應式

- **Navbar** — Hero 區為透明背景，捲動後切換為白底加陰影；側邊選單開啟時整個 Navbar 隱藏。
- **SideMenu** — 桌面（`xl+`）：三欄 Bento Grid，卡片尺寸依設計稿；平板 / 手機（`<xl`）：響應式單欄 Grid。點擊導覽卡片會透過 ScrollSmoother 捲動至對應 Section 並關閉選單。
- **AppShowcaseSection 作品集** — 四頁輪播，以 `Transition`（`out-in` 模式）實作方向性滑動切換；頁碼指示器以青色斜線分隔當前頁 / 總頁數。

### 資源路徑解析

- 所有 public 資料夾的資源統一透過 `resolvePublicPath()`（來自 `useBaseUrl.ts`）處理，無需改動程式碼即可同時支援本地開發（`/`）與 GitHub Pages（`/DigiSalad-test/`）部署路徑。

## 開始使用

```sh
npm install
npm run dev
```

## 建置

```sh
npm run build
```

## 程式碼檢查與格式化

```sh
npm run lint
npm run format
```
