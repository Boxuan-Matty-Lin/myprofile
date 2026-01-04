import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  summary?: string;
  logoSrc?: string;
  logoAlt?: string;
};

const CERTIFICATIONS: Certificate[] = [
  {
    id: "cert-1",
    title: "Certification Title One",
    issuer: "Issuing Organization",
    date: "2025",
    logoSrc: "/icons/playwright.svg",
  },
  {
    id: "cert-2",
    title: "Certification Title Two",
    issuer: "Platform or Institution",
    date: "2024",
  },
  {
    id: "cert-3",
    title: "Certification Title Three",
    issuer: "Professional Association",
    date: "2023",
  },
];

function getInitials(text: string) {
  return text
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Certifications() {
  return (
    <section id="certs" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          CERTIFICATIONS
        </h2>
        <p className="text-muted-foreground">
          Professional credentials and completed training.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-border/60 sm:block" />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="relative flex flex-col items-start sm:w-full sm:max-w-xs sm:items-center"
            >
              <p className="text-[11px] uppercase tracking-[0.08em] text-muted-foreground sm:text-center">
                {cert.date}
              </p>
              <span className="relative z-10 mt-2 flex size-3 items-center justify-center rounded-full border border-border bg-background text-foreground">
                <span className="size-1.5 rounded-full bg-current" />
              </span>
              <Card className="mt-3 w-full border-border/60 bg-card/40 py-0 sm:max-w-[260px]">
                <CardContent className="flex items-center gap-3 py-3">
                  <div className="flex size-12 items-center justify-center overflow-hidden rounded-lg border border-border/70 bg-background">
                    {cert.logoSrc ? (
                      <Image
                        src={cert.logoSrc}
                        alt={cert.logoAlt ?? `${cert.issuer} logo`}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-xs font-semibold text-muted-foreground">
                        {getInitials(cert.issuer)}
                      </span>
                    )}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold leading-tight">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
