import React from "react";
import { cn } from "./cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 " +
  "disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-gradient-to-br from-brand-700 to-brand-500 text-white shadow-soft hover:from-brand-800 hover:to-brand-600 active:translate-y-[1px]",
  secondary:
    "bg-white text-brand-800 border border-[var(--border)] shadow-sm hover:bg-[var(--surface-2)] active:translate-y-[1px]",
  ghost: "text-brand-800 hover:bg-[var(--surface-2)]",
};

const sizes = {
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-12 px-8 text-[1rem]",
};

export function Button({
  as: Comp = "button",
  variant = "primary",
  size = "lg",
  className,
  ...props
}) {
  return (
    <Comp
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

