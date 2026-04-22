import React, { useEffect } from "react";
import { cn } from "./cn";

export function Modal({ open, onClose, title, children, className }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === "string" ? title : "Dialog"}
    >
      <div
        className={cn(
          "relative w-full max-w-xl rounded-[var(--radius-lg)] bg-white p-6 shadow-card",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-3 top-2 rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        {title ? (
          <div className="mb-3">
            <h2 className="text-xl font-extrabold text-slate-900">{title}</h2>
          </div>
        ) : null}
        <div className="text-slate-700">{children}</div>
      </div>
    </div>
  );
}

