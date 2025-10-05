import React from "react";
import { cn } from "@/lib/utils";

/**
 * Typography component based on Invoo Design System
 * Provides semantic text components with predefined styles
 */

export type TextVariant =
  | "large-title"
  | "large-title-emphasized"
  | "title1"
  | "title1-emphasized"
  | "title2"
  | "title2-emphasized"
  | "title3"
  | "title3-emphasized"
  | "headline"
  | "headline-italic"
  | "body"
  | "body-emphasized"
  | "body-italic"
  | "body-emphasized-italic"
  | "callout"
  | "callout-emphasized"
  | "callout-italic"
  | "callout-emphasized-italic"
  | "subheadline"
  | "subheadline-emphasized"
  | "subheadline-italic"
  | "subheadline-emphasized-italic"
  | "footnote"
  | "footnote-emphasized"
  | "footnote-italic"
  | "footnote-emphasized-italic"
  | "caption1"
  | "caption1-emphasized"
  | "caption1-italic"
  | "caption1-emphasized-italic"
  | "caption2"
  | "caption2-emphasized"
  | "caption2-italic"
  | "caption2-emphasized-italic";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label";
  children: React.ReactNode;
}

/**
 * Base Typography component
 * Usage: <Typography variant="title1" as="h1">Hello World</Typography>
 */
export function Typography({
  variant = "body",
  as = "p",
  className,
  children,
  ...props
}: TypographyProps) {
  const Component = as;
  const variantClass = `text-${variant}`;

  return (
    <Component className={cn(variantClass, className)} {...props}>
      {children}
    </Component>
  );
}

/**
 * Semantic heading components
 */
export function H1({
  className,
  children,
  ...props
}: Omit<TypographyProps, "as" | "variant">) {
  return (
    <Typography as="h1" variant="large-title-emphasized" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function H2({
  className,
  children,
  ...props
}: Omit<TypographyProps, "as" | "variant">) {
  return (
    <Typography as="h2" variant="title1-emphasized" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function H3({
  className,
  children,
  ...props
}: Omit<TypographyProps, "as" | "variant">) {
  return (
    <Typography as="h3" variant="title2-emphasized" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function H4({
  className,
  children,
  ...props
}: Omit<TypographyProps, "as" | "variant">) {
  return (
    <Typography as="h4" variant="title3-emphasized" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function H5({
  className,
  children,
  ...props
}: Omit<TypographyProps, "as" | "variant">) {
  return (
    <Typography as="h5" variant="headline" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function H6({
  className,
  children,
  ...props
}: Omit<TypographyProps, "as" | "variant">) {
  return (
    <Typography as="h6" variant="callout-emphasized" className={className} {...props}>
      {children}
    </Typography>
  );
}

/**
 * Body text component
 */
export function Body({
  emphasized = false,
  className,
  children,
  ...props
}: Omit<TypographyProps, "as" | "variant"> & { emphasized?: boolean }) {
  return (
    <Typography
      as="p"
      variant={emphasized ? "body-emphasized" : "body"}
      className={className}
      {...props}
    >
      {children}
    </Typography>
  );
}

/**
 * Caption component
 */
export function Caption({
  size = 1,
  emphasized = false,
  className,
  children,
  ...props
}: Omit<TypographyProps, "as" | "variant"> & {
  size?: 1 | 2;
  emphasized?: boolean;
}) {
  const variant = emphasized
    ? (`caption${size}-emphasized` as TextVariant)
    : (`caption${size}` as TextVariant);

  return (
    <Typography as="span" variant={variant} className={className} {...props}>
      {children}
    </Typography>
  );
}

/**
 * Label component for form inputs
 */
export function Label({
  className,
  children,
  ...props
}: Omit<TypographyProps, "as" | "variant">) {
  return (
    <Typography as="label" variant="callout-emphasized" className={className} {...props}>
      {children}
    </Typography>
  );
}

/**
 * Muted text component (commonly used for secondary text)
 */
export function Muted({
  className,
  children,
  ...props
}: Omit<TypographyProps, "as" | "variant">) {
  return (
    <Typography
      as="p"
      variant="body"
      className={cn("text-muted", className)}
      {...props}
    >
      {children}
    </Typography>
  );
}
