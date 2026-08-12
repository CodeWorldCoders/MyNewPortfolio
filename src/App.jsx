import React from "react";

const projects = [
  {
    title: "Finora",
    description:
      "A clean finance dashboard for tracking spending and insights.",
    tech: ["React", "Tailwind", "API"],
  },
  {
    title: "Taskly",
    description: "A simple productivity app designed for focused work.",
    tech: ["React", "Firebase"],
  },
  {
    title: "Studio",
    description: "A minimal portfolio website for a creative studio.",
    tech: ["React", "Tailwind"],
  },
];

const experience = [
  {
    year: "2024 — Present",
    role: "Frontend Developer",
    company: "Tech Company",
  },
  {
    year: "2022 — 2024",
    role: "Junior Developer",
    company: "Creative Studio",
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
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Alex<span className="text-indigo-400">.</span>
          </a>

          <div className="hidden gap-7 text-sm text-gray-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-white/40"
          >
            Let's talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-sm font-medium text-indigo-400">
            Frontend Developer
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            I build clean, modern
            <br />
            digital experiences.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-gray-400">
            I'm Alex, a frontend developer specializing in React and modern web
            technologies. I care about simple design, good UX, and quality code.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="#projects"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              View projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-white/40"
            >
              Contact me
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-sm text-gray-500">
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
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm text-indigo-400">01</p>
            <h2 className="mt-2 text-2xl font-semibold">About</h2>
          </div>

          <div className="md:col-span-2">
            <p className="max-w-2xl text-lg leading-8 text-gray-400">
              I enjoy transforming ideas into useful, intuitive products. My
              work focuses on thoughtful interfaces, responsive layouts,
              accessibility, and maintainable code.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Based in Islamabad, Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-sm text-indigo-400">02</p>
              <h2 className="mt-2 text-2xl font-semibold">Experience</h2>
            </div>

            <div className="space-y-8 md:col-span-2">
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="flex flex-col gap-1 border-b border-white/10 pb-8 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div>
                    <h3 className="font-medium">{item.role}</h3>
                    <p className="mt-1 text-sm text-gray-500">{item.company}</p>
                  </div>

                  <span className="text-sm text-gray-500">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <p className="text-sm text-indigo-400">03</p>
            <h2 className="mt-2 text-2xl font-semibold">Selected projects</h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {projects.map((project) => (
              <a
                href="#"
                key={project.title}
                className="group bg-[#0a0a0a] p-6 transition hover:bg-[#111111]"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-medium">{project.title}</h3>

                  <span className="text-gray-600 transition group-hover:text-indigo-400">
                    ↗
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="text-sm text-indigo-400">04</p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let's work together.
            </h2>

            <p className="mt-5 text-gray-500">
              Have a project in mind? I'd love to hear about it.
            </p>

            <a
              href="mailto:hello@example.com"
              className="mt-8 inline-block border-b border-white pb-1 text-sm transition hover:border-indigo-400 hover:text-indigo-400"
            >
              hello@example.com →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-7">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-3 text-xs text-gray-600 sm:flex-row">
          <span>© 2026 Alex</span>
          <span>Designed & built with React</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
