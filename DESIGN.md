# Design System: FTC Team 19772 "Rust in Piece" Website

## 1. Visual Theme & Atmosphere
A warm, spacious, high-performance interface that bridges a competitive engineering lab and an elegant editorial portfolio. Drawing inspiration from Apple and Stripe, the layout balances clean asymmetric spacing with polished, fluid motion. The atmosphere is professional yet welcoming, built entirely in a refined, warm light mode to foster community connection.

## 2. Color Palette & Roles
- **Canvas Cream** (`#FCFAF7` / `oklch(0.99 0.01 85)`) — Primary background surface. Warm, soft off-white to prevent screen glare and feel organic.
- **Pure Surface** (`#FAF6F0` / `oklch(0.98 0.02 80)`) — Card and container fill. Offers subtle contrast against Canvas Cream.
- **Charcoal Ink** (`#2B2421` / `oklch(0.15 0.02 25)`) — Primary text and display headings. Deep warm chocolate-charcoal to avoid the harshness of pure black.
- **Muted Warmth** (`#766A65` / `oklch(0.45 0.05 35)`) — Secondary body text, descriptions, and metadata.
- **Whisper Border** (`#EAE3DB` / `oklch(0.9 0.05 70)`) — Card borders, dividers, and structural lines.
- **Terracotta Primary** (`#C85A32` / `oklch(0.68 0.22 55)`) — Single brand accent color. Used for primary CTAs, active highlights, logos, and critical interaction focus rings.

## 3. Typography Rules
- **Display/Headlines:** `Plus Jakarta Sans` or `Outfit` — Track-tight (`tracking-tighter`), bold, all-caps. Communicates structural strength and engineering precision.
- **Editorial/Drama Accents:** `Instrument Serif` (Italic) — Used sparingly for single-word emphasis or large artistic headers. Softens the rigid layout with warmth and human touch.
- **Body:** `Plus Jakarta Sans` — Large, readable scale, set to a max-width of `65ch` to ensure natural line wraps.
- **Mono:** `Space Mono` — Used for numbers, stats labels, timestamps, and mechanical details to reinforce the high-tech/robotic theme.
- **Banned Typography:**
  - `Inter` (banned to avoid generic AI-default styling).
  - `Syne` (strictly banned as a generic "distinctive" AI tell).
  - Mixing uppercase sans-serif and lowercase serif italic fonts within the same text/heading element.
  - Large uppercase outline/pill badges directly above section titles.

## 4. Component Stylings
- **Buttons:**
  - Primary: Terracotta Primary background with Canvas Cream text. Subtle `scale(1.03)` magnetic lift on hover with high-performance ease-out-quart deceleration. Tap target must be at least `44px` (`h-11`).
  - Secondary/Outline: Whisper Border stroke with Terracotta Primary text. Faint background tint transition on hover.
- **Cards:**
  - Generously rounded corners (`rounded-[2.5rem]` / `32px` radius).
  - Border width of 1px in Whisper Border. No custom box shadows or outer glows.
  - Banned: Colored side-stripe borders (e.g. `border-left: 4px solid var(--primary)`) are strictly forbidden.
- **Inputs:**
  - Text labels positioned strictly above inputs. No floating labels.
  - Active state highlights input border in Terracotta Primary with a soft ring glow.
- **Loaders:**
  - Skeletal loaders mimicking exact layout dimensions. No generic loading spinners or progress bars.

## 5. Layout Principles
- **Asymmetry & Composition:** Avoid grid monotony. Section layouts should favor asymmetric columns (e.g. 5-column description next to a 7-column stats grid).
- **Whitespace & Rhythm:** Generous vertical padding (`py-24`). Space out sections with distinct visual boundaries.
- **Structural Safety:** All full-bleed containers use `min-h-[100dvh]` instead of `h-screen` to prevent iOS viewport resize jumps.
- **Mobile First:** All grids and multi-column panels collapse into a single-column layout below `768px`.
- **Text Safety:** Line lengths for paragraphs are capped to `max-w-2xl` to ensure optimal readability.

## 6. Motion & Interaction
- **Scroll-Driven Narrative:** Integrate a custom horizontal robot divider animation between key sections that scrolls across the horizontal border in relation to the viewport scroll position.
- **Spring Physics:** All hover transforms, card scale lifts, and button actions use spring-based physics (`stiffness: 200, damping: 15`) instead of linear or simple ease animations.
- **Hardware Acceleration:** Only animate properties that do not trigger layout recalculations (`transform` and `opacity`).
- **Interactive Easter Eggs:** Keep micro-interactions delightful yet restrained (e.g. click counts triggering temporary custom-drawn SVG modals instead of basic text alerts).

## 7. Anti-Patterns (Banned)
- No emojis anywhere in UI text or content (use custom inline SVGs instead).
- No dark mode options or toggles (the system remains locked to the warm light mode).
- No neon cyan, purple, or glowing blue elements (the "AI developer" style).
- No fake numbers, generic names (e.g., "John Doe"), or boilerplate text.
- No AI copy constructs: "unleash," "seamless," "next-gen," "elevate," or "empower."
- No decorative arrow icons or bouncing chevrons indicating scroll direction.
