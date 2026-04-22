export function cn(...values) {
  return values
    .flatMap((v) => {
      if (!v) return [];
      if (typeof v === "string") return [v];
      if (Array.isArray(v)) return v.filter(Boolean);
      if (typeof v === "object") {
        return Object.entries(v)
          .filter(([, enabled]) => Boolean(enabled))
          .map(([klass]) => klass);
      }
      return [];
    })
    .join(" ");
}

