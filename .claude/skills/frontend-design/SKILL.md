---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when building web components, pages, or applications.
---

# Frontend Design Skill

This skill guides the creation of distinctive, production-grade frontend interfaces that avoid generic "AI aesthetic" patterns. It emphasizes intentionality, spatial composition, and refined visual craft.

## Design Philosophy

Before writing code, commit to a **BOLD** aesthetic direction based on the core purpose of the interface.

- **Aesthetic Direction**: Identify a specific design movement (e.g., brutally minimal, Swiss-style, luxury/high-fashion, organic/biophilic, retro-futuristic).
- **Differentiation**: Identify one unique physical or visual element that makes the interface stand out (e.g., an unusual grid, a specific grain texture, an oversized typographic element).

## Implementation Directives

### 1. Typography as Identity
- **Selection**: Avoid generic system stacks (Inter/Roboto/Open Sans). Choose distinctive, character-full fonts from Google Fonts or similar.
- **Scale Contrast**: Use dramatic differences in font size and weight to create hierarchy. Massive headings (9xl) paired with small, wide-spaced metadata (xs) is a classic high-end pattern.
- **Character**: Use serif italics or mono-spaced accents to break the monotony of sans-serif interfaces.

### 2. Motion & Interaction Gravity
- **Staggered Entrances**: Always stagger the loading of UI elements (cards, text, buttons) to create a sense of revelation.
- **Physics**: Use spring-based easings (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for micro-interactions to make components feel weighted and "physical."
- **Magnetic UI**: Interactive elements should feel like they respond to the user's presence (subtle hover lifts, scaling, or color morphs).

### 3. Spatial Composition
- **Negative Space**: Treat white space as a first-class citizen. Don't crowd the interface; let elements breathe.
- **Asymmetry**: Use intentional asymmetry or "off-grid" placements to create visual interest and break from the "standard dashboard" look.
- **Asymmetric Grid**: Instead of a standard 12-column grid, try a 3-column or 5-column layout for a more editorial feel.

### 4. Visual Atmosphere
- **Texture & Grain**: Apply subtle noise overlays (SVG turbulence) to eliminate flat digital gradients and give the screen "tooth."
- **Layering & Depth**: Use glassmorphism (backdrop-blur), layered transparencies, and subtle shadows to create a multi-dimensional Z-axis space.
- **Gradient Meshes**: Use multi-color, blurred gradient shapes in the background for a modern, fluid atmosphere.

### 5. Code Standards
- **CSS Variables**: Use a strict design token system for colors and spacing.
- **Framer Motion**: Default to Framer Motion for React-based animations.
- **Utility Precision**: Use Tailwind for layout, but custom CSS for complex filters and animations.

---

**CRITICAL RULE**: Do not build a "website." Build a **digital instrument**. Every interaction should feel intentional and every visual should feel crafted.
