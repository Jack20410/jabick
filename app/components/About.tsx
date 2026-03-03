"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="px-6 py-32">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-accent">01.</h2>
          <h3 className="mb-12 text-3xl font-bold text-foreground">
            About Me
          </h3>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="leading-relaxed text-muted">
              Hello! I&apos;m Bao Gia Le, a Software Engineering student
              specializing in the intersection of{" "}
              <span className="text-foreground">Full-Stack development</span>{" "}
              and{" "}
              <span className="text-foreground">Artificial Intelligence</span>.
              I&apos;m passionate about building scalable, high-performance
              applications that leverage modern web technologies and AI-driven
              solutions.
            </p>
            <p className="leading-relaxed text-muted">
              I have experience building applications using{" "}
              <span className="text-foreground">React</span>,{" "}
              <span className="text-foreground">Node.js</span>, and{" "}
              <span className="text-foreground">FastAPI</span>, with a focus on
              integrating machine learning models and containerized
              microservices via Docker. My goal is to develop solutions that
              optimize system efficiency and user experience.
            </p>
            <p className="leading-relaxed text-muted">
              Currently pursuing my B.S. in Software Engineering at St Cloud
              State University (transferred from Ton Duc Thang University), I&apos;m
              always looking for opportunities to grow and contribute to
              meaningful projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Education cards */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="text-lg font-bold text-accent">SCSU</p>
              <p className="mt-1 text-sm text-foreground">
                B.S. Software Engineering
              </p>
              <p className="mt-0.5 text-xs text-muted">
                Jan 2026 &ndash; Oct 2028 (expected)
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="text-lg font-bold text-accent">TDTU</p>
              <p className="mt-1 text-sm text-foreground">
                B.S. Software Engineering
              </p>
              <p className="mt-0.5 text-xs text-muted">
                Oct 2022 &ndash; Oct 2025 &middot; GPA: 3.1
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="text-3xl font-bold text-accent">2+</p>
              <p className="mt-1 text-sm text-muted">Projects Shipped</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
