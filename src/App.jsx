import React from "react";

const projects = [
  {
    number: "01",
    title: "Finora",
    category: "Finance / SaaS",
    description:
      "A refined financial dashboard that turns complex spending data into clear, actionable insights.",
    tech: ["React", "Tailwind", "API"],
    color: "from-violet-500/30 via-indigo-500/10 to-transparent",
  },
  {
    number: "02",
    title: "Taskly",
    category: "Productivity",
    description:
      "A focused productivity experience designed around simplicity, momentum, and distraction-free work.",
    tech: ["React", "Firebase"],
    color: "from-cyan-400/25 via-blue-500/10 to-transparent",
  },
  {
    number: "03",
    title: "Studio",
    category: "Creative / Portfolio",
    description:
      "A minimal digital home for a creative studio, combining expressive typography with elegant interactions.",
    tech: ["React", "Tailwind"],
    color: "from-rose-400/25 via-orange-400/10 to-transparent",
  },
];

const experience = [
  {
    year: "2024 — Present",
    role: "Frontend Developer",
    company: "Tech Company",
    description:
      "Building modern interfaces and scalable frontend systems for digital products.",
  },
  {
    year: "2022 — 2024",
    role: "Junior Developer",
    company: "Creative Studio",
    description:
      "Worked across branding, websites, and interactive experiences for growing businesses.",
  },
];

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Git",
];

function ArrowUpRight({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-violet-500/30">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute right-[-200px] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.06] blur-[130px]" />
        <div className="absolute left-[-200px] top-[70%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/[0.04] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/[0.08] bg-black/60 px-5 py-3.5 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-black transition group-hover:rotate-12">
              A
            </span>
            <span>
              Alex<span className="text-violet-400">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1 text-xs text-white/50 md:flex">
            {[
              ["About", "#about"],
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-4 py-2 transition hover:bg-white/[0.07] hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-violet-100"
          >
            Let's talk
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <main>
        <section className="relative px-6 pb-32 pt-44 sm:pt-52">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-end gap-14 lg:grid-cols-[1fr_300px]">
              <div>
                <div className="mb-8 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                    Available for select projects
                  </span>
                </div>

                <h1 className="max-w-5xl text-[clamp(3.5rem,8vw,7.8rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                  Digital products
                  <br />
                  <span className="bg-gradient-to-r from-white via-white to-white/30 bg-clip-text text-transparent">
                    with purpose.
                  </span>
                </h1>

                <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-lg text-base leading-7 text-white/45 sm:text-lg">
                    I'm Alex — a frontend developer creating thoughtful,
                    high-performance interfaces with React, modern technology,
                    and a strong eye for detail.
                  </p>

                  <a
                    href="#projects"
                    className="group flex w-fit shrink-0 items-center gap-3 text-sm font-medium"
                  >
                    <span className="border-b border-white/30 pb-1 transition group-hover:border-white">
                      Explore my work
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="border-l border-white/10 pl-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Based in
                  </p>

                  <p className="mt-3 text-sm text-white/70">
                    Islamabad, Pakistan
                  </p>

                  <div className="mt-8 h-px w-full bg-white/10" />

                  <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/30">
                    Focus
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Product design
                    <br />
                    Frontend development
                    <br />
                    Digital experiences
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-20 flex items-center gap-6 border-t border-white/[0.08] pt-6">
              <span className="text-xs text-white/25">Find me on</span>

              <a
                href="#"
                className="text-xs text-white/45 transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="#"
                className="text-xs text-white/45 transition hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:hello@example.com"
                className="text-xs text-white/45 transition hover:text-white"
              >
                Email ↗
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-t border-white/[0.08] px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-[250px_1fr]">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-violet-400">
                  <span>01</span>
                  <span className="h-px w-8 bg-violet-400/50" />
                  About
                </div>
              </div>

              <div>
                <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white/90 sm:text-5xl">
                  I believe the best digital experiences feel{" "}
                  <span className="text-white/35">
                    simple, intentional, and almost effortless.
                  </span>
                </h2>

                <div className="mt-12 grid gap-10 sm:grid-cols-2">
                  <p className="text-sm leading-7 text-white/40">
                    I enjoy transforming ideas into useful, intuitive products.
                    My work sits at the intersection of thoughtful design and
                    well-engineered frontend systems.
                  </p>

                  <p className="text-sm leading-7 text-white/40">
                    From responsive layouts to accessible interactions, I care
                    about the details that make a product feel polished without
                    getting in the way.
                  </p>
                </div>

                {/* SKILLS */}
                <div className="mt-14 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2.5 text-xs text-white/50 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="border-t border-white/[0.08] px-6 py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-[250px_1fr]">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-violet-400">
                  <span>02</span>
                  <span className="h-px w-8 bg-violet-400/50" />
                  Experience
                </div>
              </div>

              <div>
                {experience.map((item, index) => (
                  <div
                    key={item.role}
                    className={`group grid gap-6 py-8 sm:grid-cols-[150px_1fr] ${
                      index !== experience.length - 1
                        ? "border-b border-white/[0.08]"
                        : ""
                    }`}
                  >
                    <span className="text-xs text-white/25">{item.year}</span>

                    <div>
                      <div className="flex flex-col justify-between gap-2 sm:flex-row">
                        <h3 className="text-xl font-medium tracking-tight">
                          {item.role}
                        </h3>

                        <span className="text-xs text-white/30">
                          {item.company}
                        </span>
                      </div>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/35">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-violet-400">
                  <span>03</span>
                  <span className="h-px w-8 bg-violet-400/50" />
                  Selected work
                </div>

                <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
                  Things I've built.
                </h2>
              </div>

              <p className="max-w-xs text-sm leading-6 text-white/30">
                A selection of projects exploring design, technology, and
                product thinking.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <a
                  href="#"
                  key={project.title}
                  className="group relative min-h-[440px] overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b0b0b] transition duration-500 hover:-translate-y-2 hover:border-white/[0.15]"
                >
                  {/* CARD GLOW */}
                  <div
                    className={`absolute inset-x-0 top-0 h-64 bg-gradient-to-br ${project.color} opacity-60 blur-2xl transition duration-500 group-hover:scale-125 group-hover:opacity-100`}
                  />

                  {/* ABSTRACT VISUAL */}
                  <div className="absolute left-1/2 top-12 h-40 w-40 -translate-x-1/2">
                    <div className="absolute inset-0 rotate-12 rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-sm transition duration-700 group-hover:rotate-6 group-hover:scale-110" />

                    <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md transition duration-700 group-hover:scale-125" />

                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_8px_rgba(255,255,255,0.25)]" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs text-white/25">
                        {project.number}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300/70">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-medium tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/35">
                      {project.description}
                    </p>

                    <div className="mt-6 flex gap-3">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-[10px] text-white/25">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="border-t border-white/[0.08] px-6 py-32"
        >
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] px-7 py-16 sm:px-14 sm:py-20">
              <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />
              <div className="absolute -bottom-32 -left-20 h-60 w-60 rounded-full bg-blue-600/10 blur-[100px]" />

              <div className="relative">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-violet-400">
                  <span>04</span>
                  <span className="h-px w-8 bg-violet-400/50" />
                  Contact
                </div>

                <h2 className="mt-7 max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-7xl">
                  Have an idea?
                  <br />
                  <span className="text-white/30">Let's make it real.</span>
                </h2>

                <p className="mt-8 max-w-md text-sm leading-7 text-white/35">
                  Whether you're building a product from scratch or improving an
                  existing experience, I'd love to hear what you're working on.
                </p>

                <a
                  href="mailto:hello@example.com"
                  className="group mt-10 inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-violet-100"
                >
                  hello@example.com
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-xs text-white/25 sm:flex-row">
          <span>© 2026 Alex</span>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              GitHub
            </a>
            <a href="#" className="transition hover:text-white">
              LinkedIn
            </a>
            <span>Designed & built with React</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
