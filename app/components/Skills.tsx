"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "Dart", "PHP"],
  },
  {
    title: "Frameworks",
    skills: [
      "React",
      "Express.js",
      "Node.js",
      "FastAPI",
      "Spring Boot",
      "Flutter",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Postman",
      "NGINX",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="px-6 py-32">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">02.</h2>
          <h3 className="mb-12 text-3xl font-bold text-foreground">
            Skills & Expertise
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h4 className="mb-4 text-lg font-semibold text-foreground">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-surface-light px-3 py-1.5 text-sm text-muted transition-colors hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
