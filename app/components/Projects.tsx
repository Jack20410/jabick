"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Computers & Components",
    description:
      "Secure full-stack platform using Node.js, Express, and React with Google OAuth authentication. Real-time inventory updates via WebSockets, flexible MongoDB schema, and NGINX-based horizontal scaling for high availability.",
    image: "/projects/computer.jpg",
    tags: ["Node.js", "Express", "React", "MongoDB", "WebSockets", "NGINX"],
    github: "https://github.com/Jack20410/E-commerce-Computers-Selling",
    role: "Backend Developer",
    period: "Apr 2025 - Jun 2025",
  },
  {
    title: "Car Rental System Management",
    description:
      "Microservices ecosystem using Node.js and FastAPI with JWT cross-service authentication and WebSocket real-time communication. Integrated MOMO payment gateway, containerized with Docker and Docker Compose.",
    image: "/projects/car-rental.jpg",
    tags: ["Node.js", "FastAPI", "MongoDB", "Docker", "JWT", "WebSockets"],
    github: "https://github.com/Jack20410/Car-rental-system",
    role: "Backend Developer",
    period: "Mar 2025 - Apr 2025",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2
            className="mb-10 text-2xl font-bold text-foreground"
            style={{ textWrap: "balance" }}
          >
            Featured Projects
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * (i + 1) }}
              className="group"
            >
              {/* Project image */}
              <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-lg border border-border bg-surface">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  unoptimized
                  loading="lazy"
                />
              </div>

              {/* Project info */}
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-muted transition-colors duration-150 hover:text-foreground"
                  aria-label={`View ${project.title} source on GitHub`}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>

              <p className="mt-1 text-xs text-muted">
                {project.role} &middot; {project.period}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
