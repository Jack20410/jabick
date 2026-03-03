"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Computers & Components",
    description:
      "Engineered a secure full-stack platform using Node.js, Express, and React, integrating Google OAuth for seamless authentication. Optimized data performance with WebSockets for real-time inventory updates and designed a flexible MongoDB schema. Architected scalable infrastructure using NGINX for horizontal scaling and load balancing.",
    image: "/projects/ecommerce.jpg",
    tags: ["Node.js", "Express", "React", "MongoDB", "WebSockets", "NGINX"],
    github: "https://github.com/Jack20410",
    role: "Backend Developer",
    period: "Apr 2025 - Jun 2025",
  },
  {
    title: "Car Rental System Management",
    description:
      "Architected a microservices ecosystem using Node.js and FastAPI, decoupling core services for maintainability and scalability. Implemented JWT for cross-service authentication and WebSockets for real-time owner-customer communication. Integrated MOMO payment gateway and containerized all services with Docker and Docker Compose.",
    image: "/projects/taskapp.jpg",
    tags: ["Node.js", "FastAPI", "MongoDB", "Docker", "JWT", "WebSockets"],
    github: "https://github.com/Jack20410",
    role: "Backend Developer",
    period: "Mar 2025 - Apr 2025",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="px-6 py-32">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">03.</h2>
          <h3 className="mb-12 text-3xl font-bold text-foreground">
            Featured Projects
          </h3>
        </motion.div>

        <div className="flex flex-col gap-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
              className="group grid gap-6 md:grid-cols-[1fr_1fr] md:items-center"
            >
              {/* Project image */}
              <div
                className={`relative aspect-video overflow-hidden rounded-xl border border-border bg-surface ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-accent/10 transition-opacity group-hover:opacity-0" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Project info */}
              <div
                className={`${i % 2 === 1 ? "md:order-1 md:text-right" : ""}`}
              >
                <p className="mb-1 font-mono text-sm text-accent">
                  {project.role}
                </p>
                <p className="mb-2 font-mono text-xs text-muted">
                  {project.period}
                </p>
                <h4 className="mb-3 text-2xl font-bold text-foreground">
                  {project.title}
                </h4>
                <div className="mb-4 rounded-xl border border-border bg-surface p-5">
                  <p className="text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
                <div
                  className={`mb-4 flex flex-wrap gap-2 ${
                    i % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-light px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex gap-4 ${
                    i % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-accent"
                    aria-label="View source code"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
