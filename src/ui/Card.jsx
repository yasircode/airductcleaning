import React from "react";
import { cn } from "./cn";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] bg-white shadow-soft border border-[var(--border)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

