# Typography System Documentation

## Overview

This project uses a comprehensive typography system based on the Invoo design tokens, with the Inter font family. The system provides consistent text styling across the application through Tailwind CSS utility classes and React components.

## Font Configuration

**Font Family:** Inter (400, 500, 600 weights + italics)

The font is configured in `src/app/[locale]/layout.tsx` using Next.js's `next/font/google`.

## Typography Scale

The typography system includes 11 size categories with multiple variants:

### Large Titles
- **text-large-title** - 34px, Regular (400)
- **text-large-title-emphasized** - 34px, Semi Bold (600)

### Titles
- **text-title1** - 28px, Regular (400)
- **text-title1-emphasized** - 28px, Semi Bold (600)
- **text-title2** - 22px, Regular (400)
- **text-title2-emphasized** - 22px, Semi Bold (600)
- **text-title3** - 19px, Regular (400)
- **text-title3-emphasized** - 19px, Semi Bold (600)

### Headlines
- **text-headline** - 17px, Medium (500)
- **text-headline-italic** - 17px, Semi Bold Italic (600)

### Body Text
- **text-body** - 17px, Regular (400)
- **text-body-emphasized** - 17px, Medium (500)
- **text-body-italic** - 17px, Italic (400)
- **text-body-emphasized-italic** - 17px, Semi Bold Italic (600)

### Callouts
- **text-callout** - 16px, Regular (400)
- **text-callout-emphasized** - 16px, Medium (500)
- **text-callout-italic** - 16px, Italic (400)
- **text-callout-emphasized-italic** - 16px, Semi Bold Italic (600)

### Subheadlines
- **text-subheadline** - 15px, Regular (400)
- **text-subheadline-emphasized** - 15px, Medium (500)
- **text-subheadline-italic** - 15px, Italic (400)
- **text-subheadline-emphasized-italic** - 15px, Semi Bold Italic (600)

### Footnotes
- **text-footnote** - 13px, Regular (400)
- **text-footnote-emphasized** - 13px, Medium (500)
- **text-footnote-italic** - 13px, Italic (400)
- **text-footnote-emphasized-italic** - 13px, Semi Bold Italic (600)

### Captions
- **text-caption1** - 12px, Regular (400)
- **text-caption1-emphasized** - 12px, Medium (500)
- **text-caption1-italic** - 12px, Italic (400)
- **text-caption1-emphasized-italic** - 12px, Semi Bold Italic (600)
- **text-caption2** - 11px, Regular (400)
- **text-caption2-emphasized** - 11px, Semi Bold (600)
- **text-caption2-italic** - 11px, Italic (400)
- **text-caption2-emphasized-italic** - 11px, Semi Bold Italic (600)

## Usage

### Option 1: Utility Classes (Recommended for flexibility)

Use Tailwind utility classes directly in your JSX:

```tsx
<h1 className="text-large-title-emphasized text-white">
  Welcome to Invoo
</h1>

<p className="text-body text-white/90">
  Create and send invoices in 30 seconds
</p>

<span className="text-caption1 text-white/60">
  © 2025 Invoo.es
</span>
```

### Option 2: Typography Components (Recommended for semantic HTML)

Use pre-built Typography components from `src/components/ui/Typography.tsx`:

```tsx
import { H1, H2, Body, Caption } from "@/components/ui/Typography";

<H1 className="text-white">Welcome to Invoo</H1>

<Body emphasized className="text-white/90">
  Create and send invoices in 30 seconds
</Body>

<Caption size={1} className="text-white/60">
  © 2025 Invoo.es
</Caption>
```

### Option 3: Custom Typography Component

For maximum flexibility:

```tsx
import { Typography } from "@/components/ui/Typography";

<Typography
  variant="title2-emphasized"
  as="h3"
  className="text-center text-white mb-4"
>
  Custom Heading
</Typography>
```

## Migration Pattern

When migrating from inline styles to the typography system:

**Before:**
```tsx
<h2 style={{
  fontSize: '28px',
  fontWeight: 600,
  color: 'white',
  marginBottom: '12px'
}}>
  Title
</h2>
```

**After:**
```tsx
<h2 className="text-title1-emphasized text-white mb-3">
  Title
</h2>
```

## Best Practices

1. **Use semantic HTML elements** - Combine typography classes with appropriate HTML elements (`h1`, `h2`, `p`, etc.)

2. **Prefer utility classes for simple cases** - Direct Tailwind utilities are more explicit and easier to scan

3. **Use Typography components for complex patterns** - When you need consistent semantics across the app

4. **Combine with Tailwind utilities** - The typography classes work seamlessly with other Tailwind utilities:
   ```tsx
   <p className="text-body text-white/80 max-w-2xl mx-auto">
     Content here
   </p>
   ```

5. **Override when necessary** - For one-off adjustments, inline styles can still be used alongside classes:
   ```tsx
   <h1 className="text-large-title-emphasized" style={{ fontSize: '48px' }}>
     Hero Title
   </h1>
   ```

## Responsive Typography

All typography classes include sensible line-heights for readability. For responsive sizing, combine with Tailwind's responsive prefixes:

```tsx
<h1 className="text-title2-emphasized md:text-title1-emphasized lg:text-large-title-emphasized">
  Responsive Heading
</h1>
```

## Color Combinations

Common color patterns used in the Invoo design:

- **Primary text:** `text-white` or `style={{ color: '#EFEFF5' }}`
- **Muted text:** `text-white/60` or `style={{ color: '#9F9F9FB2' }}`
- **Secondary text:** `text-white/90` or `text-white/80`

## Letter Spacing

All typography classes include optimized letter-spacing values converted from the Figma design tokens. These are automatically applied and don't need manual adjustment.

## Examples from the Codebase

### Hero Section
```tsx
<h1 className="hero-heading mb-12">
  {title}
</h1>
<p className="text-body mb-12 max-w-3xl mx-auto">
  {paragraph}
</p>
```

### Pricing Card
```tsx
<h3 className="text-title1-emphasized text-white mb-3">
  {title}
</h3>
<p className="text-footnote text-white/60 mb-6">
  {description}
</p>
```

### Footer
```tsx
<h3 className="text-headline mb-6">
  Invoo
</h3>
<a className="text-footnote no-underline" style={{ color: '#9F9F9FB2' }}>
  About Us
</a>
```

### Navigation
```tsx
<button className="text-subheadline-emphasized text-white/70 hover:text-white">
  Services
</button>
```

## Tools & Resources

- **Font:** [Inter on Google Fonts](https://fonts.google.com/specimen/Inter)
- **Design Tokens:** `/Users/abrahammarques/Downloads/textStyles.json`
- **Tailwind Config:** `src/app/globals.css` (search for "Typography System")
- **Components:** `src/components/ui/Typography.tsx`

## Future Enhancements

Consider these improvements for future iterations:

1. **Theme variants** - Dark/light mode support
2. **Fluid typography** - CSS clamp() for truly responsive text
3. **Accessibility** - Ensure WCAG AA contrast ratios
4. **Performance** - Font subsetting for faster loads
5. **Storybook** - Visual documentation of all variants
