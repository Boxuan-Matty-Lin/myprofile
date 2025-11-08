import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiFramer,
  SiReacthookform,
  SiZod,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiSpring,
  SiOpenjdk,
  SiSwagger,
  SiMysql,
  SiRedis,
  SiApachekafka,
  SiKnexdotjs,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiAmazonwebservices,
  SiVercel,
  SiVitest,
  SiJunit5,
} from "react-icons/si";



type Skill = {
  label: string;
  icon?: IconType;
  imageSrc?: string;
  abbr?: string;
};
type SkillKey =
  | "frontend"
  | "backend"
  | "data"
  | "devops"
  | "quality";

const SKILLS: Record<SkillKey, { title: string; items: Skill[] }> = {
  frontend: {
    title: "Frontend / UI",
    items: [
      { label: "React", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "MUI", icon: SiMui },
      { label: "Ant Design", icon: SiAntdesign },
      { label: "Framer Motion", icon: SiFramer },
      { label: "React Hook Form", icon: SiReacthookform },
      { label: "Zod", icon: SiZod },
    ],
  },
  backend: {
    title: "Backend / API",
    items: [
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Express", icon: SiExpress },
      { label: "Python Flask", icon: SiFlask },
      { label: "Spring", icon: SiSpring },
      { label: "OpenJDK (Java)", icon: SiOpenjdk },
      { label: "REST", icon: SiSwagger },
    ],
  },
  data: {
    title: "Data / Caching / Scalability",
    items: [
      { label: "MySQL", icon: SiMysql },
      { label: "Microsoft SQL Server", abbr: "MSSQL" },
      { label: "Redis", icon: SiRedis },
      { label: "Apache Kafka", icon: SiApachekafka },
      { label: "Knex.js", icon: SiKnexdotjs },
    ],
  },
  devops: {
    title: "DevOps / Delivery",
    items: [
      { label: "Docker", icon: SiDocker },
      { label: "Nginx", icon: SiNginx },
      { label: "GitHub Actions", icon: SiGithubactions },
      { label: "AWS", icon: SiAmazonwebservices },
      { label: "Vercel", icon: SiVercel },
    ],
  },
  quality: {
    title: "Quality & Process",
    items: [
      { label: "Vitest", icon: SiVitest },
      { label: "Playwright", imageSrc: "/icons/playwright.svg" },
      { label: "JUnit 5", icon: SiJunit5 },
    ],
  },
};

const SKILL_ENTRIES = Object.entries(SKILLS) as [
  SkillKey,
  (typeof SKILLS)[SkillKey]
][];

const DEFAULT_TAB = SKILL_ENTRIES[0]?.[0] ?? "frontend";

type GlyphVariant = "grid" | "table";

function SkillGlyph({ skill, variant }: { skill: Skill; variant: GlyphVariant }) {
  const textClass = variant === "grid" ? "text-xs" : "text-base";
  const imageClass =
    variant === "grid" ? "h-8 w-8" : "h-10 w-10 md:h-12 md:w-12";

  if (skill.icon) {
    const Icon = skill.icon;
    return <Icon aria-hidden="true" />;
  }

  if (skill.imageSrc) {
    return (
      <Image
        src={skill.imageSrc}
        alt={`${skill.label} logo`}
        width={48}
        height={48}
        className={[imageClass, "object-contain"].join(" ")}
      />
    );
  }

  const fallback = (skill.abbr ?? skill.label).toUpperCase();
  return (
    <span className={["font-semibold tracking-tight", textClass].join(" ")}>
      {fallback}
    </span>
  );
}

function SkillGrid({ items }: { items: Skill[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((skill) => (
        <Card key={skill.label}>
          <CardContent className="flex items-center gap-3 py-4">
            <span className="flex size-10 items-center justify-center rounded-md bg-muted text-2xl text-foreground/80">
              <SkillGlyph skill={skill} variant="grid" />
            </span>
            <span className="font-medium">{skill.label}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function SkillIcons({ items }: { items: Skill[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((skill) => (
        <Tooltip key={skill.label} delayDuration={100}>
          <TooltipTrigger asChild>
            <span className="flex size-14 items-center justify-center rounded-xl border border-border/70 bg-background text-3xl text-foreground/90 shadow-sm transition hover:-translate-y-0.5 hover:bg-muted hover:text-foreground">
              <SkillGlyph skill={skill} variant="table" />
            </span>
          </TooltipTrigger>
          <TooltipContent>{skill.label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

function DesktopSkillTable() {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="hidden md:block overflow-hidden rounded-2xl border border-border/60 bg-card/40 shadow-sm">
        {SKILL_ENTRIES.map(([key, section], index) => (
          <div
            key={key}
            className={[
              "grid grid-cols-12 items-center",
              index !== 0 ? "border-t border-border/60" : "",
            ].join(" ")}
          >
            <div className="col-span-3 border-r border-border/60 px-5 py-6">
              <p className="text-2xl font-semibold uppercase tracking-tight">
                {section.title}
              </p>
            </div>
            <div className="col-span-9 px-5 py-6">
              <SkillIcons items={section.items} />
            </div>
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
}

export function SkillsList() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">SKILLS</h2>
        <p className="text-muted-foreground">
          Frontend, backend, and cloud stacks I use day to day.
        </p>
      </div>

      <DesktopSkillTable />

      <div className="md:hidden">
        <Tabs defaultValue={DEFAULT_TAB} className="space-y-6">
          <TabsList className="flex w-full flex-wrap gap-2">
            {SKILL_ENTRIES.map(([key, section]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex-1 min-w-[45%]"
              >
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {SKILL_ENTRIES.map(([key, section]) => (
            <TabsContent key={key} value={key}>
              <SkillGrid items={section.items} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
