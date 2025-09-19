# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page with internationalization support (English and Spanish) built with TypeScript, Tailwind CSS, and deployed as a static site. The project uses the App Router architecture and includes integration with Radix UI components and Framer Motion for animations.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Run Playwright tests
npm run test

# Run Playwright tests with UI
npm run test:ui

# Show Playwright test report
npm run playwright:show
```

## Architecture & Structure

### Routing and Internationalization
- Uses Next.js App Router with dynamic `[locale]` segments for i18n
- Supported locales: `en` and `es` (configured in `src/i18n.ts`)
- Translation files located in `messages/` directory
- Pages structure: `src/app/[locale]/[page]/page.tsx`
- Static export configuration with trailing slashes enabled

### Component Architecture
- UI components in `src/components/ui/` following a design system pattern
- Button component has specific variants: primary, secondary, outline, and gradient (fixed dimensions: 193×47px)
- Utility functions like `cn()` for className merging using clsx and tailwind-merge
- Component imports use the `@/` alias for src directory

### Key Configuration
- TypeScript strict mode enabled with bundler module resolution
- ESLint configured for Next.js and TypeScript
- Tailwind CSS v4 with PostCSS
- Static site generation with `output: "export"` in next.config.ts
- Asset prefix configured for GitHub Pages deployment when in production

### Testing
- Playwright configured for E2E testing
- Test directory: `./tests`
- Base URL: `http://localhost:3000`
- Runs dev server automatically during tests

### Styling Conventions
- Tailwind CSS for styling with custom animations via tw-animate-css
- Gradient buttons use inline styles with specific linear gradient patterns
- Consistent rounded corners: `rounded-full` for standard buttons, `rounded-[12px]` for gradient buttons