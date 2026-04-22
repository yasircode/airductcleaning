import React from "react";
import { cn } from "./cn";

export function Section({ className, children, ...props }) {
  return (
    <section className={cn("section-pad", className)} {...props}>
      {children}
    </section>
  );
}

export function Container({ className, children, ...props }) {
  return (
    <div className={cn("site-container", className)} {...props}>
      {children}
    </div>
  );
}

