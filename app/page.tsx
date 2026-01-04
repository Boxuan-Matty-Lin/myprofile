// app/page.tsx
import { RightToc, About, SkillsList, WorkExperience, Certifications } from "@/components/Sections"; // ← 如果你的文件名是 About.tsx 用这个大小写

// import About from "@/components/about"; // ← 只有当文件名真的是 about.tsx 才用这个

export default function Home() {
  return (
    <main className="min-h-dvh bg-[--color-background] text-[--color-foreground] selection:bg-black selection:text-white">
      {/* === 首屏（保持不变） === */}
      <section className="relative min-h-dvh isolate">
        <div className="sticky top-0 h-dvh w-full z-10">
          <div className="pointer-events-none absolute inset-0 px-5 sm:px-10 py-5 sm:py-10">
            <div className="flex h-full flex-col">
              <div className="pointer-events-auto flex items-center justify-between">
                <a
                  href="#about"
                  className="text-[13px] sm:text-sm uppercase tracking-[0.06em] opacity-90 hover:opacity-100"
                >
                  ABOUT
                </a>
                <a
                  href="#contact"
                  className="text-[13px] sm:text-sm uppercase tracking-[0.06em] opacity-90 hover:opacity-100"
                >
                  CONTACT
                </a>
              </div>
              <div className="flex-1" />
              <div className="pointer-events-auto flex items-end justify-between">
                <a
                  href="https://github.com/Boxuan-Matty-Lin"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] sm:text-sm uppercase tracking-[0.06em] opacity-90 hover:opacity-100"
                >
                  GITHUB
                </a>
                <a
                  href="mailto:you@example.com"
                  className="text-[13px] sm:text-sm uppercase tracking-[0.06em] opacity-90 hover:opacity-100"
                >
                  EMAIL
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-20">
          <div className="mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center px-6 text-center">
            <h1 className="font-sans text-5xl sm:text-7xl font-extrabold uppercase tracking-[0.08em] leading-[0.95]">
              MATTHEW LIN
            </h1>
            <p className="mt-4 font-serif text-base sm:text-xl opacity-75">
              FULL-STACK ENGINEER
            </p>

            <nav
              className="mt-10 text-sm sm:text-base font-medium
                flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
            >
              <a href="#about" className="underline-offset-4 hover:underline">
                ABOUT
              </a>
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <a href="#skills" className="underline-offset-4 hover:underline">
                SKILLS
              </a>
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <a href="#work" className="underline-offset-4 hover:underline">
                WORK EXPERIENCE
              </a>{" "}
              {/* ← 去掉 &nbsp; */}
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <a
                href="#projects"
                className="underline-offset-4 hover:underline"
              >
                PROJECTS
              </a>
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <a href="#certs" className="underline-offset-4 hover:underline">
                CERTIFICATION
              </a>
            </nav>
          </div>
        </div>
      </section>

      <RightToc />
      {/* 用组件替换空占位 */}
      <About />
      <SkillsList />
      <WorkExperience />

      {/* 其他区块占位 */}
      <section id="projects" className="min-h-[40svh]" />
      <Certifications />
      <section id="contact" className="min-h-[40svh]" />
    </main>
  );
}
