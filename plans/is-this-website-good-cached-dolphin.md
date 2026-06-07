# GSAP visual effects menu for the portfolio

## Context
You asked what *visualistic* GSAP animations are possible for your portfolio. The current site already uses GSAP for entrance timelines, scroll reveals, staggered tech grid, floating stars, and project card hover lift — these are correct but conservative. This plan lists higher-impact GSAP visual effects you can layer on, ordered by **wow-factor ÷ effort**, all wired into the existing `useGSAP` block in `src/app/App.tsx`. Pick any combination; nothing here requires new dependencies (GSAP + ScrollTrigger are already installed).

---

## The effects menu (in recommended order)

### 1. Split-text hero reveal — `★★★★★` impact
The name "Vignesh Dandu" animates **letter-by-letter**: each glyph drops in with a stagger, the yellow swipe behind "Vignesh" then sweeps left→right via `scaleX`, and the star pops with `back.out`. Single most cinematic addition. Implement with manual `<span>` splitting (no SplitText plugin needed — that's paid).

### 2. ScrollTrigger pinned project showcase — `★★★★★` impact
Pin the **Projects** section while user scrolls; each project card slides in horizontally and the previous one parallax-scales down behind. Feels like an interactive deck. Uses `ScrollTrigger.create({ pin: true, scrub: true })` on the project list container.

### 3. Magnetic cursor on CTAs — `★★★★`
Resume button, "Let's Chat", and project View Code buttons gently follow the cursor when nearby (up to ~30px pull). On `mousemove` within a radius, `gsap.to(btn, { x, y, duration: 0.4 })`; on `mouseleave`, snap back with elastic ease. Looks expensive, takes ~25 lines.

### 4. Marquee tech strip — `★★★★`
Convert the static "Working With" grid into an **infinite horizontal marquee** of tech icons (two duplicated rows scrolling opposite directions). `gsap.to(row, { xPercent: -50, duration: 30, repeat: -1, ease: "none" })`. Pauses on hover.

### 5. Scroll-scrubbed photo parallax — `★★★`
The hero photo subtly translates up as you scroll past, while the yellow swipe behind your name expands. `scrollTrigger: { scrub: 1 }` on the photo's `y` and the swipe's `scaleX`. Adds depth without being flashy.

### 6. Star burst on section enter — `★★★`
When each section scrolls into view, the small `★` next to its label *bursts* — scales from 0 → 1.4 → 1 with rotation, while 3-4 tiny ghost stars fan out and fade. Reuses the existing `Star` component with cloned siblings.

### 7. Text wipe-mask reveals — `★★★`
Section headlines reveal via a **clip-path wipe** (left→right) instead of fade-up. `gsap.fromTo(el, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power4.out" })`. Editorial, very Jon Rodz.

### 8. Project card 3D tilt on cursor — `★★★`
On `mousemove` over a project card, tilt the card with `rotateX/rotateY` based on cursor position relative to card center. Subtle gloss highlight follows the cursor. Combine with the existing `y: -8` hover lift.

### 9. Numbers counting up — `★★`
The Stat boxes ("8.43", "2027") count up from 0 when scrolled into view. `gsap.to({ val: 0 }, { val: 8.43, onUpdate: ... })`. Small but satisfying.

### 10. Contact section curtain — `★★`
The black contact panel "rises" from the bottom of the viewport as you scroll, with the yellow "idea" word lighting up last via a glow filter. ScrollTrigger scrubs the panel's `y` and the inner element's `text-shadow`.

### 11. Cursor-following yellow blob — `★★`
A soft yellow circle blurred at 80px follows the cursor across the whole page (mix-blend-mode: multiply, opacity 0.4). GSAP `quickTo` for buttery 60fps tracking. Adds ambient personality.

### 12. Smooth scroll with Lenis — `★`
Pair GSAP with `Lenis` (lightweight, free) so the whole page scrolls with momentum/inertia. Makes every other scroll-trigger feel smoother. Tiny lift.

---

## What I'd ship as v1
If you want the biggest visual upgrade fast, pick these four together — they layer well, take maybe an hour of work total, and they collectively transform the feel:

1. **#1 Split-text hero reveal** (the first thing visitors see)
2. **#4 Infinite marquee tech strip** (replaces a static grid)
3. **#3 Magnetic CTAs** (every button feels alive)
4. **#7 Wipe-mask section headlines** (gives the whole scroll cohesion)

Optional add-on if you want one "showstopper": **#2 pinned project showcase**.

---

## Files affected (when you decide to implement)
- `src/app/App.tsx` — primary file. Extend the existing `useGSAP(() => { ... }, { scope: root })` block with the new timelines. Hero markup needs per-letter `<span>` splitting for #1. Projects container needs a wrapper ref for #2. Stat boxes need a small `Counter` component for #9.
- No new dependencies for #1–#11. **#12 only** needs `pnpm add lenis`.

## Verification
1. Open dev preview, hard-refresh, and confirm hero letters cascade in on load.
2. Scroll the page — section headlines wipe in, marquee scrolls continuously, projects pin & scrub.
3. Hover every CTA — magnetic pull should be subtle (don't crank the radius above ~80px).
4. Test mobile width: marquee should still scroll, but disable magnetic cursor and 3D tilt on touch devices (`window.matchMedia("(hover: hover)").matches`).
5. Throttle CPU to 4× in DevTools to make sure nothing chugs.
