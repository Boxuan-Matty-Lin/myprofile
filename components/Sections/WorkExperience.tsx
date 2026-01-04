import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  logoSrc?: string;
  logoAlt?: string;
  summary?: string;
  highlights: string[];
  tech?: string[];
  logoFallback?: string;
};

const EXPERIENCES: Experience[] = [
  {
    id: "ciilock-engineering",
    company: "CiiLOCK Engineering",
    role: "Full Stack Developer Intern",
    location: "Melbourne",
    period: "Jul 2025 - Oct 2025",
    logoSrc: "/icons/ciilock_engineering_logo.jpeg",
    logoAlt: "CiiLOCK Engineering logo",
    summary:
      "Co-built ChatCiiLOCK and a Toyota Business Practices-inspired Kaizen ticketing system to boost productivity and first-time ticket quality.",
    highlights: [
      "Frontend UX: Implemented responsive UI with Ant Design and SSE streaming in ChatCiiLOCK; built Kaizen UI with React/MUI, plus React Hook Form + Zod for real-time validation and live calculations.",
      "Cross-app integration: Embedded ChatCiiLOCK into Kaizen via iframe + JWT and used AI-driven 5-Whys prompts to guide root-cause analysis with structured answers.",
      "Backend & data: Delivered Next.js App Router (SSE/REST, Kinde OIDC sessions, API-level RBAC) for ChatCiiLOCK and Python FastAPI REST for Kaizen; designed core data models for availability and isolation.",
      "Quality & delivery: Wrote Vitest tests for Kaizen calculations, added GitHub Actions checks, authored a Dockerfile, and partnered with DevOps on AWS rollout.",
    ],
    tech: [
      "TypeScript",
      "Python",
      "React",
      "SQL",
      "Next.js",
      "Ant Design",
      "MUI",
      "AWS",
      "Docker",
      "Kinde (OIDC)",
      "JWT",
    ],
  },
  {
    id: "basf-digital-hub",
    company: "BASF Digital Hub",
    role: "Application Tester & Developer Intern",
    location: "Nanjing, China",
    period: "Nov 2024 - Feb 2025",
    logoSrc: "/icons/basf_digital_solutions_logo.jpeg",
    logoAlt: "BASF Digital Hub logo",
    summary:
      "Performed QA testing for manufacturing paint line/coating operations software to ensure stable end-to-end workflows.",
    highlights: [
      "Designed and executed manual test cases, logged defects in Azure DevOps, and partnered with developers, DevOps, and product owners to drive fixes.",
      "Worked in a fast-paced Agile/Scrum environment, collaborating with international teams to adapt testing priorities to shifting requirements.",
      "Built a SQL + Python cross-database validation tool to verify backend changes and reduce test effort.",
    ],
    tech: ["SQL", "Python", "Azure DevOps", "Agile/Scrum"],
  },
];

function getLogoFallback(company: string, logoFallback?: string) {
  if (logoFallback) {
    return logoFallback;
  }
  const initials = company
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return initials || company.slice(0, 2).toUpperCase();
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const fallback = getLogoFallback(experience.company, experience.logoFallback);

  return (
    <AccordionItem value={experience.id} className="border-0">
      <Card className="gap-0 overflow-hidden border-border/60 bg-card/40 py-0">
        <AccordionTrigger className="px-6 py-6 hover:no-underline">
          <div className="flex w-full flex-col gap-4 text-left sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-background">
                {experience.logoSrc ? (
                  <Image
                    src={experience.logoSrc}
                    alt={experience.logoAlt ?? `${experience.company} logo`}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xs font-semibold text-muted-foreground">
                    {fallback}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-base font-semibold leading-tight">
                  {experience.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {experience.company}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground sm:ml-auto sm:justify-end">
              <span>{experience.location}</span>
              <span className="hidden sm:inline">|</span>
              <span>{experience.period}</span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6">
          <div className="space-y-3 text-sm text-muted-foreground">
            {experience.summary ? (
              <p className="text-foreground/80">{experience.summary}</p>
            ) : null}
            <ul className="list-disc space-y-2 pl-5">
              {experience.highlights.map((item, index) => (
                <li key={`${experience.id}-highlight-${index}`}>{item}</li>
              ))}
            </ul>
            {experience.tech?.length ? (
              <div className="flex flex-wrap gap-2 pt-2">
                {experience.tech.map((item) => (
                  <span
                    key={`${experience.id}-tech-${item}`}
                    className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}

export function WorkExperience() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          WORK EXPERIENCE
        </h2>
        <p className="text-muted-foreground">
          Roles, impact, and results delivered across teams.
        </p>
      </div>

      <Accordion type="multiple" className="space-y-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </Accordion>
    </section>
  );
}
