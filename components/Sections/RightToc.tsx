// components/RightToc.tsx
"use client";

import * as React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SectionItem = { id: string; label: string };

const DEFAULT_SECTIONS: SectionItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "certs", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export function RightToc({
  sections = DEFAULT_SECTIONS,
  showFromId = "about",
}: {
  sections?: SectionItem[];
  showFromId?: string;
}) {
  const [active, setActive] = React.useState<string>(sections[0]?.id ?? "");
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const center = window.innerHeight / 2;
        let best: { id: string; diff: number } | null = null;
        for (const entry of entries) {
          const rect = entry.target.getBoundingClientRect();
          const mid = rect.top + rect.height / 2;
          const diff = Math.abs(mid - center);
          const id = (entry.target as HTMLElement).id;
          if (!best || diff < best.diff) {
            best = { id, diff };
          }
        }
        if (best) setActive(best.id);
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
    );

    targets.forEach((target) => io.observe(target));
    return () => io.disconnect();
  }, [sections]);

  React.useEffect(() => {
    const element = document.getElementById(showFromId);
    if (!element) return;

    const IDLE_HIDE_MS = 1400;
    let rafId: number | null = null;
    let idleTimer: number | null = null;

    const clearIdleTimer = () => {
      if (idleTimer !== null) {
        window.clearTimeout(idleTimer);
        idleTimer = null;
      }
    };

    const scheduleHide = () => {
      clearIdleTimer();
      idleTimer = window.setTimeout(() => setVisible(false), IDLE_HIDE_MS);
    };

    const updateVisibility = () => {
      const rect = element.getBoundingClientRect();
      const isPastSection = rect.bottom <= 0;

      if (!isPastSection) {
        clearIdleTimer();
        setVisible(false);
        return;
      }

      setVisible(true);
      scheduleHide();
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        updateVisibility();
        rafId = null;
      });
    };

    updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearIdleTimer();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [showFromId]);

  const onJump = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={[
        "pointer-events-none fixed right-5 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden md:block",
        "transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      aria-hidden={!visible}
    >
      <TooltipProvider delayDuration={150}>
        <nav className="pointer-events-auto flex flex-col items-center gap-3">
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <Tooltip key={section.id}>
                <TooltipTrigger asChild>
                  <button
                    aria-label={section.label}
                    onClick={onJump(section.id)}
                    className={[
                      "h-3.5 w-3.5 rounded-full transition-all",
                      "border border-black/10 dark:border-white/15",
                      isActive
                        ? "scale-125 bg-black/80 dark:bg-white"
                        : "bg-black/30 dark:bg-white/30 hover:bg-black/60 dark:hover:bg-white/60",
                    ].join(" ")}
                  />
                </TooltipTrigger>
                <TooltipContent side="left" className="select-none">
                  {section.label}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </nav>
      </TooltipProvider>
    </div>
  );
}

export default RightToc;
