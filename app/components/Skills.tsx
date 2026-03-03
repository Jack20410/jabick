"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useTheme } from "./ThemeProvider";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "Python", icon: "py" },
      { name: "Dart", icon: "dart" },
      { name: "PHP", icon: "php" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: "react" },
      { name: "Express.js", icon: "express" },
      { name: "Node.js", icon: "nodejs" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Spring Boot", icon: "spring" },
      { name: "Flutter", icon: "flutter" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "Postman", icon: "postman" },
      { name: "NGINX", icon: "nginx" },
    ],
  },
];

function SkillIcon({
  name,
  icon,
  theme,
}: {
  name: string;
  icon: string;
  theme: "light" | "dark";
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <img
        src={`https://skillicons.dev/icons?i=${icon}&theme=${theme}`}
        alt={name}
        width={48}
        height={48}
        loading="lazy"
        className="rounded-lg"
      />
      <span className="text-xs text-muted">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();

  return (
    <section id="skills" className="px-6 py-24">
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
            Skills &amp; Expertise
          </h2>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * (i + 1) }}
            >
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <SkillIcon
                    key={skill.icon}
                    name={skill.name}
                    icon={skill.icon}
                    theme={theme}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
