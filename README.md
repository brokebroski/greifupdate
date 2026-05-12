# Greif СНГ Design System

## Company Overview

**Greif / Грайф СНГ** is the world's #1 manufacturer of industrial packaging. The CIS (СНГ — Commonwealth of Independent States) division serves Russia and neighbouring CIS markets with a full portfolio of industrial containers.

**Tagline:** *Packaging Success Together* / *Упаковка для вашего успеха*

**Website:** [www.greif.com](https://www.greif.com)

### Products
- **Стальные бочки** — Steel drums (open-head and tight-head)
- **Пластиковые барабаны** — Plastic drums
- **Канистры** — Jerrycans / small plastic containers
- **Кубовые ёмкости (IBC)** — Intermediate Bulk Containers, up to 1000L
- **Восстановление тары** — Container reconditioning/recycling service

### Markets Served
Chemical industry · Oil & gas · Food & beverage · Pharmaceuticals · Automotive

---

## Sources

- `uploads/BrandMark_One Pager.pdf` — Official Greif brand guidelines one-pager. Contains: Brandmark rules (BRANDMARK, BRANDMARK LONG, BLOCKMARK ON PICTURE, SAFE AREA), color palette (Pantone + CMYK + RGB + HEX), typography (Roboto, Roboto Condensed, Arial), stationery, pictogram, digital communication.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Professional and confident** — Greif is #1 in the world; tone reflects authority without arrogance
- **Partnership-focused** — "Together" is core to the tagline; copy uses "we" and "our" to emphasise collaboration
- **Direct and functional** — B2B context, no flowery language; clear benefit statements
- **Safety-first** — UN standards and safety compliance feature prominently in product copy
- **Bilingual context** — CIS division uses Russian as primary language; global brand uses English

### Casing
- Headlines: Title Case (English) / Sentence case (Russian)
- CTAs: ALL CAPS or Title Case (e.g. "REQUEST A QUOTE", "Узнать больше")
- Product names: Title Case (Steel Drums, IBC, Jerrycans)

### Copy Examples (from brand docs)
- "Packaging Success Together"
- "Производитель промышленной упаковки №1 в мире"
- "Стандарты безопасности UN"
- "Восстановление тары"
- Contact format: Name | Title | Division | Address | Phone | Email | Website

### Emoji Usage
**None.** Greif is a B2B industrial brand. No emoji anywhere in official communications.

### Vibe
Industrial strength meets reliability. Warm (orange-led palette), trustworthy, no-nonsense. Think: hard hat culture translated into design — bold but grounded.

---

## VISUAL FOUNDATIONS

### Colors
**Primary:** Orange `#f28900` (Pantone 144 C) — the core brand color. Used for the logo, primary CTAs, key highlights.  
**Secondary Orange:** `#ef7521` (Pantone 158 C) — slightly darker/warmer orange, used for variation.  
**Accent Yellow:** `#fce200` / `#ffdc00` — bright golden yellow, energy and optimism  
**Blues:** `#3e8ede` (279C), `#0070cd` (285C), `#008fbe` (313C), `#00adc8` (3125C) — range from sky to deep ocean  
**Purples:** `#7e55c3` (2665C), `#62269e` (267C) — used for category differentiation  
**Green:** `#337761` (341U) — muted forest green, sustainability contexts  
**Neutral Gray:** `#545458` (Cool Gray 11C)  
**Black:** `#000000`

The palette is divided into **primary** (orange/yellow) and **category colors** for product line differentiation. Orange is always dominant.

### Typography
- **Primary:** Roboto (Google Fonts) — all weights; supports Latin, Cyrillic, Greek
- **Condensed:** Roboto Condensed — for tight spaces, labels, callouts
- **Fallback/Office:** Arial — used in office documents, email signatures
- **Scale:** Large display headings in Roboto Bold/Black; body copy in Roboto Regular 400; UI labels in Roboto Condensed

### Backgrounds
- **White** is default background for documents and digital
- **Black** is used for premium/dark contexts (stationery, dark slides)
- **Orange fill** for hero sections and callout panels
- No complex gradients; solid fills are preferred
- Photography: industrial/product photography (drums, IBC, factories), cool-to-neutral color grade

### Imagery
- Full-bleed product photography on key screens
- Industrial setting: warehouses, manufacturing, logistics
- No hand-drawn illustrations; no patterns/textures
- Color treatment: natural, slightly cool-to-neutral, high contrast

### Animation
- Not specified in brand docs — conservative approach assumed
- Subtle fade-ins and slide transitions; no bounces
- Industrial brand = measured, purposeful motion

### Hover States
- Primary buttons: darker orange (darken 10%)
- Text links: color change to primary orange
- Cards: subtle shadow elevation or border highlight

### Press / Active States
- Slight scale-down (0.97) + darken on press for interactive elements

### Borders & Corners
- **Corner radius:** Minimal — 2–4px for cards, 0px for industrial/document contexts
- Borders: `1px solid` in light gray (`#e5e5e5`) or orange accent
- No heavy shadow systems; subtle `box-shadow: 0 2px 8px rgba(0,0,0,0.1)` for cards

### Cards
- White background, 2–4px border radius, 1px `#e0e0e0` border, light drop shadow
- Compact density reflecting B2B utility

### Spacing System
- Base unit: 8px
- Scale: 4, 8, 16, 24, 32, 48, 64, 96px

### Iconography
- **Pictogram system** built into brand guidelines (industrial icons for product categories)
- Clean, geometric line icons; no fill/emoji
- See ICONOGRAPHY section

### Transparency / Blur
- Not part of the brand aesthetic — clarity and directness preferred
- No frosted glass / backdrop filters

---

## ICONOGRAPHY

Greif's brand guidelines include a **PICTOGRAM** system — geometric, monochromatic icons for industrial product categories (drums, IBC, canisters, etc.). These are likely SVG/vector-based.

**Approach:**
- Geometric, bold, single-color (usually black, white, or orange)
- No outline/stroke icon library (e.g., Heroicons) — pictograms are custom
- No emoji, no Unicode character icons
- Where Greif's proprietary pictograms are unavailable, use **Lucide Icons** (CDN) as a stand-in — same geometric weight, clean lines
- Icons are always used at consistent sizes: 24px (UI), 48px (feature), 96px (hero)

**Assets in `assets/`:**
- `assets/logo-greif-orange.svg` — Primary wordmark (orange)
- `assets/logo-greif-black.svg` — Wordmark on white (black)
- `assets/logo-greif-white.svg` — Reversed wordmark (white on dark)

*Note: Actual proprietary pictogram files were not included in the provided brand one-pager. SVG logos above are reconstructed from brand data. Please supply the original Greif brandmark/pictogram vector files for pixel-perfect reproduction.*

---

## FILE INDEX

```
README.md                    ← This file (design system overview)
SKILL.md                     ← Agent skill descriptor
colors_and_type.css          ← CSS custom properties (colors, type, spacing)
assets/
  logo-greif-orange.svg      ← Primary logo (orange on transparent)
  logo-greif-black.svg       ← Black variant
  logo-greif-white.svg       ← White variant (for dark bg)
preview/
  colors-primary.html        ← Primary brand colors
  colors-secondary.html      ← Secondary/category colors
  colors-semantic.html       ← Semantic color tokens
  type-scale.html            ← Typography scale specimen
  type-roboto.html           ← Roboto family specimen
  spacing-tokens.html        ← Spacing + radius tokens
  components-buttons.html    ← Button states
  components-forms.html      ← Form inputs
  components-cards.html      ← Card patterns
  components-badges.html     ← Badges / labels
  brand-logo.html            ← Logo variants & safe area
  brand-tagline.html         ← Tagline & voice
ui_kits/
  website/
    index.html               ← Corporate website UI kit
    Header.jsx               ← Site header + nav
    Hero.jsx                 ← Hero unit
    ProductCard.jsx          ← Product card
    Footer.jsx               ← Site footer
```
