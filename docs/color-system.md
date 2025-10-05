# Color System Documentation

## Overview

This project uses a comprehensive design system with 44 color variables sourced from Figma, all with built-in Light/Dark mode support.

## File Structure

```
src/
├── styles/
│   └── colors.css          # All color definitions (44 colors)
├── app/
│   └── globals.css         # Imports colors, exposes to Tailwind
└── components/
    └── ui/
        └── button.tsx      # Updated to use color system
```

## Color Categories

### 🎨 Accent Colors

**Purple Variants:**
- `--accent-purple-main` / `bg-accent-purple-main`
- `--accent-purple-light` / `bg-accent-purple-light`
- `--accent-purple-lighter` / `bg-accent-purple-lighter`

**Blue Variants:**
- `--accent-blue-main` / `bg-accent-blue-main`
- `--accent-blue-light` / `bg-accent-blue-light`
- `--accent-blue-lighter` / `bg-accent-blue-lighter`

**Other Accents:**
- Orange: `--accent-orange-main`, `--accent-orange-light`
- Yellow: `--accent-yellow-main`, `--accent-yellow-light`
- Pink: `--accent-pink-main`, `--accent-pink-darker`
- Red: `--accent-red-main`, `--accent-red-light`, `--accent-red-darker`
- Green: `--accent-green-main`, `--accent-green-darker`

### 🏢 Brand Colors

- `--brand-blue` / `bg-brand-blue`
- `--brand-purple` / `bg-brand-purple`

### 📄 Background Colors

- `--background-primary` / `bg-bg-primary` - Main page background
- `--background-secondary` / `bg-bg-secondary` - Card backgrounds
- `--background-tertiary` / `bg-bg-tertiary` - Subtle backgrounds
- `--background-inverted` / `bg-bg-inverted` - Inverted background (dark/light)

### ✏️ Label/Text Colors

- `--label-primary` / `text-label-primary` - Primary text
- `--label-secondary` / `text-label-secondary` - Secondary text (60-70% opacity)
- `--label-tertiary` / `text-label-tertiary` - Tertiary text (30% opacity)
- `--label-inverted` / `text-label-inverted` - Inverted text
- `--label-inverted-secondary` / `text-label-inverted-secondary` - Inverted secondary

### 🎭 Fill Colors

- `--fills-primary` / `bg-fills-primary` - Primary fill (42% opacity light, 20% dark)
- `--fills-secondary` / `bg-fills-secondary` - Secondary fill (38% / 14%)
- `--fills-tertiary` / `bg-fills-tertiary` - Tertiary fill (34% / 8%)
- `--fills-quaternary` / `bg-fills-quaternary` - Quaternary fill (30% / 6%)
- `--fills-solid` / `bg-fills-solid` - Solid fill

### 🖼️ Stroke/Border Colors

- `--strokes-primary` / `border-strokes-primary` - Primary borders
- `--strokes-secondary` / `border-strokes-secondary` - Secondary borders

### ⚙️ System Colors

- `--system-grey100` to `--system-grey900` - Grey scale
- `--system-overlay` / `bg-system-overlay` - Overlay backgrounds

## Semantic Color Tokens

For better readability and maintainability, use semantic tokens:

```css
/* Text */
--color-text-primary
--color-text-secondary
--color-text-tertiary
--color-text-inverted

/* Backgrounds */
--color-bg-primary
--color-bg-secondary
--color-bg-tertiary
--color-bg-inverted

/* Borders */
--color-border-primary
--color-border-secondary

/* Interactive */
--color-interactive-primary
--color-interactive-secondary
--color-interactive-hover

/* Status */
--color-success
--color-warning
--color-error
--color-info
```

## Usage Examples

### In CSS/Tailwind Classes

```tsx
// Background colors
<div className="bg-bg-primary">         // Main background
<div className="bg-bg-secondary">       // Card background
<div className="bg-accent-blue-main">   // Accent background

// Text colors
<span className="text-label-primary">   // Primary text
<span className="text-label-secondary"> // Secondary text
<span className="text-accent-blue-main">// Accent text

// Border colors
<div className="border border-strokes-primary">
<div className="border-accent-purple-main">

// Hover states
<button className="bg-accent-blue-main hover:bg-accent-blue-light">
```

### In Inline Styles (CSS Variables)

```tsx
<div style={{
  backgroundColor: 'var(--background-primary)',
  color: 'var(--label-primary)',
  borderColor: 'var(--strokes-primary)'
}} />
```

### With color-mix() for Opacity

```tsx
<div className="bg-[color-mix(in_srgb,var(--accent-blue-main)_20%,transparent)]">
  20% opacity blue
</div>
```

Or in CSS:

```css
.my-component {
  background: color-mix(in srgb, var(--accent-purple-main) 30%, transparent);
}
```

## Dark Mode

Dark mode is automatically handled via the `.dark` class on a parent element:

```tsx
<html className="dark">
  {/* All colors automatically switch to dark variants */}
</html>
```

Colors that should change in dark mode:
- Background colors invert (light → dark, dark → light)
- Text colors invert
- Some accent colors get slightly brighter/lighter

## Migration Guide

### Replace Hardcoded Colors

| Old | New |
|-----|-----|
| `bg-black` | `bg-bg-inverted` |
| `bg-white` | `bg-bg-secondary` |
| `text-white` | `text-label-inverted` |
| `text-white/70` | `text-label-inverted-secondary` |
| `border-white/5` | `border-strokes-primary/50` |
| `bg-blue-500` | `bg-accent-blue-main` |
| `hover:bg-blue-600` | `hover:bg-accent-blue-light` |

### Replace Hex Colors

| Old Hex | New Variable |
|---------|--------------|
| `#257DFF` | `var(--accent-blue-main)` |
| `#925AFF` | `var(--accent-purple-main)` |
| `#EE7AC4` | `var(--accent-pink-main)` |
| `#EFEFF5` | `var(--label-inverted)` or `var(--system-grey200)` |

### Replace RGBA Colors

```tsx
// OLD
backgroundColor: 'rgba(20, 20, 20, 0.98)'
border: '1px solid rgba(255, 255, 255, 0.08)'

// NEW
backgroundColor: 'var(--background-inverted)'
border: '1px solid var(--strokes-primary)'

// OR with opacity
backgroundColor: 'color-mix(in srgb, var(--background-inverted) 98%, transparent)'
```

## Common Patterns

### Glass/Frosted Effect

```css
.glass-card {
  background: var(--fills-secondary);
  border: 1px solid var(--strokes-primary);
  backdrop-filter: blur(20px);
}
```

### Gradient Buttons

```css
.gradient-button {
  background: linear-gradient(
    135deg,
    var(--accent-purple-main),
    var(--accent-blue-main)
  );
  color: var(--label-inverted);
}
```

### Hover Effects

```tsx
<button className="bg-accent-blue-main hover:bg-accent-blue-light text-label-inverted">
  Click me
</button>
```

## Best Practices

1. **Use semantic tokens** when possible (`--color-text-primary` instead of `--label-primary`)
2. **Prefer Tailwind classes** over inline styles for consistency
3. **Use color-mix()** for custom opacity instead of hardcoded RGBA
4. **Test both light and dark modes** when implementing new components
5. **Avoid hardcoded hex colors** - always use the design system variables

## Component Examples

### Button Component

```tsx
// Primary button
<button className="bg-accent-blue-main hover:bg-accent-blue-light text-label-inverted">

// Secondary button
<button className="bg-fills-secondary hover:bg-fills-primary text-label-inverted">

// Outline button
<button className="bg-transparent border border-accent-blue-main text-accent-blue-main hover:bg-fills-tertiary">
```

### Card Component

```tsx
<div className="bg-bg-secondary border border-strokes-primary rounded-lg p-6">
  <h3 className="text-label-primary">Card Title</h3>
  <p className="text-label-secondary">Card description</p>
</div>
```

### Navigation Bar

```tsx
<nav className="bg-bg-inverted/80 backdrop-blur-xl border-b border-strokes-primary/50">
  <a className="text-label-inverted-secondary hover:text-label-inverted">
    Link
  </a>
</nav>
```

## Testing

Always test your components in both light and dark modes:

```tsx
// Toggle dark mode for testing
document.documentElement.classList.toggle('dark');
```

## Resources

- **Figma Variables**: `lazy-variables.json` (Mobile collection)
- **Color Definitions**: `src/styles/colors.css`
- **Tailwind Integration**: `src/app/globals.css` (@theme inline section)
- **Example Component**: `src/components/ui/button.tsx`

## Support

For questions or issues with the color system, refer to:
1. This documentation
2. The `colors.css` file for all available colors
3. The Button component for implementation examples
