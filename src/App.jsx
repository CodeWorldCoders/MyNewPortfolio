import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern shopping platform with product management, cart functionality, and a clean user experience.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for organizing tasks, tracking progress, and managing projects efficiently.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A responsive dashboard featuring statistics, charts, and data visualization.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    link: "#",
  },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Tech Company",
    period: "2024 — Present",
    description:
      "Building responsive web applications and reusable UI components using React and modern frontend technologies.",
  },
  {
    role: "Junior Web Developer",
    company: "Creative Studio",
    period: "2022 — 2024",
    description:
      "Developed websites and web applications while collaborating with designers and backend developers.",
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

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold">
            Alex<span className="text-indigo-400">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-indigo-400"
          >
            Let's Talk
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-24 pt-40">
          <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">
                Frontend Developer
              </p>

              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                Building digital experiences that{" "}
                <span className="text-indigo-400">feel effortless.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                I'm Alex, a frontend developer focused on creating clean,
                accessible, and high-performance web experiences with React and
                modern technologies.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-indigo-500 px-6 py-3 font-medium transition hover:bg-indigo-400"
                >
                  View My Work →
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/10 px-6 py-3 font-medium transition hover:border-white/30 hover:bg-white/5"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 flex gap-6 text-sm text-slate-400">
                <a href="#" className="hover:text-white">
                  GitHub
                </a>

                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>

                <a href="mailto:hello@example.com" className="hover:text-white">
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-sm uppercase tracking-widest text-indigo-400">
                About Me
              </p>

              <h2 className="mt-3 text-3xl font-bold">A little about me</h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-400">
                I enjoy turning ideas into intuitive digital products. My
                approach combines thoughtful design with maintainable, scalable
                code.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                When I'm not coding, I enjoy learning new technologies,
                experimenting with side projects, and exploring better ways to
                build for the web.
              </p>

              <div className="mt-8 text-slate-300">📍 Islamabad, Pakistan</div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-slate-300 transition hover:border-indigo-400/40 hover:bg-indigo-400/5"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="border-t border-white/10 px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-widest text-indigo-400">
                Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold">Where I've worked</h2>
            </div>

            <div className="space-y-10">
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="grid gap-4 border-l border-indigo-400/30 pl-6 md:grid-cols-[180px_1fr]"
                >
                  <div className="text-sm text-slate-500">{item.period}</div>

                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>

                    <p className="mt-1 text-indigo-400">{item.company}</p>

                    <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-widest text-indigo-400">
                Selected Work
              </p>

              <h2 className="mt-3 text-3xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.05]"
                >
                  <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-xl text-indigo-400">
                    {"</>"}
                  </div>

                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="mt-4 min-h-[100px] leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="mt-7 inline-block text-sm font-medium text-white transition group-hover:text-indigo-400"
                  >
                    View Project →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-14">
            <p className="text-sm uppercase tracking-widest text-indigo-400">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Let's build something great.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
              Have a project in mind or want to work together? I'd love to hear
              from you.
            </p>

            <a
              href="mailto:hello@example.com"
              className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-indigo-400"
            >
              ✉ hello@example.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Alex. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              GitHub
            </a>

            <a href="#" className="hover:text-white">
              LinkedIn
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
