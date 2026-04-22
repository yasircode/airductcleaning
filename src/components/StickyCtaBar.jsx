import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const PHONE_TEL = "tel:+12549983484";

export default function StickyCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[2500] border-t border-[var(--border)] bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-3 py-3">
        <Button
          as="a"
          href={PHONE_TEL}
          className="h-11 flex-1"
          aria-label="Call now"
        >
          Call Now
        </Button>
        <Button
          as={Link}
          to="/contact#estimate"
          variant="secondary"
          className="h-11 flex-1"
        >
          Free Estimate
        </Button>
      </div>
    </div>
  );
}

