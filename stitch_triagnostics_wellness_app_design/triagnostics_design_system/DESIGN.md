---
name: TriAgnostics Design System
colors:
  surface: '#f7fafb'
  surface-dim: '#d7dadc'
  surface-bright: '#f7fafb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f5'
  surface-container: '#ebeef0'
  surface-container-high: '#e5e9ea'
  surface-container-highest: '#e0e3e4'
  on-surface: '#181c1d'
  on-surface-variant: '#3e484b'
  inverse-surface: '#2d3132'
  inverse-on-surface: '#eef1f2'
  outline: '#6e797c'
  outline-variant: '#bec8cb'
  surface-tint: '#006878'
  primary: '#00606e'
  on-primary: '#ffffff'
  primary-container: '#0b7a8c'
  on-primary-container: '#def8ff'
  inverse-primary: '#7dd3e7'
  secondary: '#b80840'
  on-secondary: '#ffffff'
  secondary-container: '#db2d56'
  on-secondary-container: '#fffbff'
  tertiary: '#7f4a0c'
  on-tertiary: '#ffffff'
  tertiary-container: '#9c6224'
  on-tertiary-container: '#fff1e8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a6eeff'
  primary-fixed-dim: '#7dd3e7'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5b'
  secondary-fixed: '#ffd9dc'
  secondary-fixed-dim: '#ffb2b9'
  on-secondary-fixed: '#400010'
  on-secondary-fixed-variant: '#91002f'
  tertiary-fixed: '#ffdcbf'
  tertiary-fixed-dim: '#ffb874'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6a3b00'
  background: '#f7fafb'
  on-background: '#181c1d'
  surface-variant: '#e0e3e4'
typography:
  headline-xl:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Quicksand
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Quicksand
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Quicksand
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  margin-mobile: 20px
  gutter-mobile: 16px
---

## Brand & Style
The design system is built on the intersection of rigorous clinical science and approachable nature-inspired wellness. It targets individuals seeking personalized gut health insights through a "Science-meets-Nature" lens. The brand personality is authoritative yet empathetic—providing the reassurance of a medical professional with the warmth of a lifestyle coach.

The visual style follows a **Modern Minimalist** approach with subtle **Organic influences**. We prioritize high whitespace to reduce cognitive load, suggesting clarity and cleanliness. The interface should feel breathable and precise, utilizing high-quality typography and a limited but punchy color palette to guide the user through complex health data without overwhelm.

## Colors
This design system utilizes a high-contrast palette to distinguish between clinical data and lifestyle guidance. 

- **Primary Accent Gradient:** A transition from Deep Teal to Coral/Pink represents the biological shift from data (Teal) to vitality (Coral). This gradient is reserved for high-impact moments: progress bars, primary CTA backgrounds, and active state indicators.
- **Backgrounds:** Pure White (#FFFFFF) is the standard for the base layer to ensure a sterile, clinical feel.
- **Neutrals:** Used for secondary surfaces, borders, and disabled states. Soft grays prevent the UI from feeling "sharp" or "harsh."
- **Typography:** Deep charcoal is used for all body and heading text to maintain AA/AAA accessibility standards against white backgrounds.

## Typography
We use **Quicksand** across all levels to reinforce the "friendly clinical" narrative. Its rounded terminals soften the medical nature of the content, making data visualization feel more approachable.

- **Headlines:** Use Bold (700) or SemiBold (600) weights. Larger headlines use slight negative letter spacing to maintain visual tension.
- **Body:** Standardized at 16px for optimal mobile readability. We prioritize generous line heights (1.5x) to facilitate scanning of health reports.
- **Labels:** Used for navigation, chips, and micro-copy. These should be set in Medium or SemiBold to ensure they don't disappear against the white background.

## Layout & Spacing
The layout model is **Mobile-First**, designed specifically for a 375x812 viewport. We utilize a **4pt spacing system** to ensure mathematical consistency.

- **Margins:** A standard 20px lateral margin is applied to all screens to keep content centered and clear of bezel edges.
- **Grid:** Use a 4-column fluid grid for mobile.
- **Vertical Rhythm:** Content blocks (cards) are separated by 24px (lg) to maintain the "High Whitespace" philosophy. Related elements within cards use 8px or 12px spacing.
- **Safe Areas:** Ensure interactive elements (buttons/pills) are placed within the bottom safe area for easy thumb reach.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Ambient Shadows**, avoiding heavy skeuomorphism.

- **Level 0 (Base):** Pure White (#FFFFFF).
- **Level 1 (Cards):** Pure White with a soft, diffused shadow (Blur: 20px, Y: 4px, Color: #212529 at 5% opacity).
- **Level 2 (Interactive/Floating):** Use a slightly more pronounced shadow (Blur: 30px, Y: 8px, Color: #212529 at 8% opacity) to indicate "tappability" or active status.
- **Borders:** Use a 1px solid border in Neutral Light (#F8F9FA) for cards to provide definition without relying solely on shadows.

## Shapes
The shape language is defined by a consistent **16px radius (rounded-lg)** for all major UI components. This radius is applied to cards, primary buttons, and input containers.

- **Pills:** Used for tags and filters. These use a full-round (32px+) radius to contrast against the 16px cards.
- **Icons:** Use a 1.5pt or 2pt stroke weight with rounded caps and joins to match the typography.
- **Progress Bars:** Use a 6px height with fully rounded ends (caps) to maintain a sleek, non-intrusive appearance.

## Components

### Buttons & Inputs
- **Primary Button:** Uses the Teal-to-Coral gradient. Text is White, Bold, 16px. 16px corner radius.
- **Secondary Button:** Ghost style with a 1px Teal border or Neutral Light background.
- **Input Fields:** 1px Neutral Medium border, 16px corner radius. Focus state uses a 1px Teal border.

### Interactive Elements
- **Chips/Pills:** Used for selecting symptoms or dietary habits. Inactive: Neutral Light background. Active: Primary Teal background with white text.
- **Cards:** White background, 16px radius, soft shadow. Used to wrap health "Insights" or "Daily Tasks."

### Feedback & Progress
- **Progress Bars:** Thin (6px), using the accent gradient for the "fill" and Neutral Light for the "track."
- **Icons:** Minimalist line icons. Use Teal for active navigation/action items and Neutral Dark for inactive states.
- **Selection Cards:** When a card is selected, it receives a 2px Teal border stroke to provide immediate visual confirmation.

### Specialized Components
- **Data Visuals:** Use the gradient for positive trends and Coral for areas requiring attention (e.g., inflammation spikes).
- **Empty States:** Utilize large whitespace and a single minimalist icon in Neutral Medium to maintain the clean aesthetic.