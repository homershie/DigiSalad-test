## Hero 區塊標題與裝飾 RWD 版面說明

- **設計稿重點**
  - 左上：品牌 Logo 上方導覽列（Navbar），初始時只保留 CTA 與漢堡選單，Logo 不顯示。
  - Hero 文字：「WE CREATE / AMAZING / DIGITAL EXPERIENCES」置於畫面偏左中段。
  - 左側有一行垂直文字「DIGITAL AGENCY」與長直線。
  - 底部中央有沙拉 Icon 加文字「TASTE US NOW!」，並有一條垂直線往下延伸到下一個 section。

- **版面實作概覽**
  - 外層內容容器：
    - 類別為：`flex flex-col justify-center min-h-screen items-center lg:items-start lg:pl-[226px]`。
    - 手機與小螢幕：內容置中顯示，避免文字太貼邊。
    - `lg` 以上：改為靠左並加上 `pl-[226px]`，讓主標題群組在 Desktop 上接近設計稿的視覺位置（偏左中段）。
  - 標題區塊：
    - `h1` 類別為：`text-white text-center relative -translate-y-32 md:text-left`。
    - base：字群向上微移（`-translate-y-32`），模擬設計稿中標題略高於垂直中心的位置。
    - `md` 以上：改為靠左對齊，搭配外層 padding 達成 Desktop 構圖。

- **左側垂直「DIGITAL AGENCY」與直線**
  - 僅在 `md` 以上顯示，以避免在窄螢幕上擠壓正文：
    - 容器類別：`hidden md:flex flex-col items-center gap-8 absolute left-[4%] top-[400px] -translate-y-1/2 text-white`。
    - 文字：
      - 使用 `[writing-mode:vertical-rl] + rotate-180` 做直排效果。
      - 類別：`text-base font-bold tracking-[0.3em] uppercase`，對應設計稿的粗體字距。
    - 直線：
      - 類別：`h-[113px] w-0.5 bg-white`，長度依照設計稿實際量測微調。

- **底部沙拉 Icon +「TASTE US NOW!」+ 垂直線**
  - 位置：固定在 Hero 區塊底部中央，作為視覺焦點與下一區的銜接。
  - 實作重點：
    - Icon 區塊：
      - 使用 `/Salad.svg`，置於 `w-[80px] h-[80px]` 的容器中，並以 `w-[65px] h-[65px]` 呈現圖示。
      - 下方文字類別：`text-sm font-bold tracking-[0.3em] uppercase text-white`，對應設計稿字級與字距。
    - 垂直線：
      - 類別：`mt-3 h-[44px] w-0.5 bg-linear-to-b bg-white`。
      - 作為第一個 section 與下一個 section 的視覺導線；未來若有更精準的設計規格，可依實際畫面再調整高度。

- **GSAP 動畫與結構關係**
  - `heroTitleRef` 仍掛在 `h1` 上，動畫僅作用在標題內部各子元素（Logo + 三行文字），與左側/底部裝飾區塊相互獨立。
  - 左側「DIGITAL AGENCY」與底部沙拉 Icon 僅為靜態裝飾（目前未綁定動畫或互動），不影響原本的進場動效。

- **RWD 設計取捨說明**
  - 優先確保：
    - 手機／平板上的文字可讀性與排版穩定。
    - Desktop 上整體構圖與設計稿的對齊感（位置、字距、裝飾元素）。
  - 權衡後的結果：
    - 沒有逐像素完全重現單一解析度的絕對座標，而是透過 flex + padding + translate 的方式，取得 **多解析度下外觀一致性** 與 **後續維護性** 的平衡。

---

## Hero 區背景 YouTube 影片說明

- **YouTube 內建 UI 限制**
  - 目前 YouTube 已經不再支援完全關閉開頭覆蓋的資訊區塊（影片標題、分享按鈕等）。
  - `showinfo=0` 已被官方廢棄；即使搭配 `controls=0`、`modestbranding=1` 等參數，也**無法完全移除**初次載入時出現的資訊層。

- **目前使用的參數（概念說明）**
  - `controls=0`：隱藏底部控制列，讓畫面更接近背景影片效果。
  - `modestbranding=1`：降低 YouTube Logo 的曝光。
  - `rel=0`：影片結束後僅推薦同頻道影片，避免跳出過多無關推薦。
  - `autoplay=1&mute=1&loop=1&playlist={videoId}`：自動播放、靜音循環，模擬背景動態視覺。

- **視覺行為預期與替代方案**
  - 初次載入頁面時，**短暫出現** YouTube 預設的資訊區塊屬於預期行為，無法完全關閉。
  - 若未來有更高的視覺純淨需求，建議改用：
    - 將影片匯出為 MP4，改用 `<video autoplay muted loop playsinline>` 播放，本地或 CDN 承載，完全移除 YouTube UI。
    - 或在前端以 CSS 疊加遮罩（黑色／漸層）覆蓋 iframe 前幾秒，再淡出處理，只保留背景動態效果。