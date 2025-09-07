# Design System Documentation

## Button Components

Our application uses a standardized button system to ensure consistency across all UI elements.

### Button Variants

#### 1. Primary Button (`variant="primary"`)
**Use case**: Secondary actions, alternative CTAs
- **Background**: `bg-blue-500` with `hover:bg-blue-600`
- **Text**: White with `font-semibold`
- **Shape**: Fully rounded (`rounded-full`)
- **Border**: Matching blue border for definition
- **Shadow**: Subtle blue shadow on hover
- **Sizes**: sm, md, lg

```tsx
<Button variant="primary" showArrow>
  Click me
</Button>
```

#### 2. Gradient Button (`variant="gradient"`) ⭐ **Main CTA Style**
**Use case**: Primary call-to-action buttons (like "Join the waiting list")
- **Background**: Linear gradient `linear-gradient(94.28deg, #257DFF 3.12%, #925AFF 95.84%)`
- **Text**: White with `font-semibold`
- **Shape**: Rounded corners (12px)
- **Dimensions**: Fixed 193px × 47px
- **Padding**: 12px 16px
- **Gap**: 8px between text and icon

```tsx
<Button variant="gradient" showArrow>
  Join the waiting list
</Button>
```

#### 3. Secondary Button (`variant="secondary"`)
**Use case**: Secondary actions on dark backgrounds
- **Background**: Semi-transparent white (`bg-white/10`)
- **Text**: White
- **Border**: Semi-transparent white border

#### 4. Outline Button (`variant="outline"`)
**Use case**: Tertiary actions, alternative options
- **Background**: Transparent with blue outline
- **Text**: Blue with hover color change
- **Border**: Blue border

### Usage Guidelines

1. **Primary CTAs**: Always use `variant="gradient"` for main call-to-action buttons
2. **Secondary Actions**: Use `variant="primary"` for important but secondary actions
3. **Alternative Actions**: Use `variant="secondary"` or `variant="outline"`
4. **Arrows**: Use `showArrow={true}` for navigation or action-oriented buttons
5. **Consistency**: Always use the Button component instead of custom styled links

### Implementation

Import the Button component:
```tsx
import Button from './components/ui/Button';
```

Example usage:
```tsx
// Main CTA (matches design system)
<Button href="#signup" variant="gradient" showArrow>
  Get Started
</Button>

// Secondary action
<Button onClick={handleClick} variant="primary">
  Learn More
</Button>

// Tertiary action
<Button variant="outline" size="sm">
  Cancel
</Button>
```

### Design Tokens

- **Primary Blue**: `#257DFF`
- **Secondary Purple**: `#925AFF`
- **Gradient**: `94.28deg, #257DFF 3.12%, #925AFF 95.84%`
- **Border Radius**: 12px (gradient), full (other variants)
- **Font Weight**: semibold
- **Transition**: 200ms all

---

## Notes for Developers

- **Consistency**: Always use the Button component for interactive elements
- **Accessibility**: All buttons include proper hover states and disabled states
- **Responsive**: Button component handles responsive behavior automatically
- **Performance**: Uses Next.js Link component for navigation when href is provided

## Future Considerations

- Consider adding loading states
- Consider adding icon-only button variants
- Consider adding button groups for multiple related actions