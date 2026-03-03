"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="px-6 py-24">
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
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="space-y-4"
          >
            <p className="text-base leading-relaxed text-muted">
              I&apos;m a Software Engineering student specializing in the
              intersection of{" "}
              <span className="text-foreground">Full-Stack development</span>{" "}
              and{" "}
              <span className="text-foreground">Artificial Intelligence</span>.
              I build scalable, high-performance applications that leverage
              modern web technologies and AI-driven solutions.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Experienced with{" "}
              <span className="text-foreground">React</span>,{" "}
              <span className="text-foreground">Node.js</span>, and{" "}
              <span className="text-foreground">FastAPI</span>, I focus on
              integrating machine learning models and containerized
              microservices via Docker to optimize system efficiency and user
              experience.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Currently pursuing my B.S. in Software Engineering at St Cloud
              State University, transferred from Ton Duc Thang University.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-lg border border-border p-5">
              <p className="text-sm font-semibold text-foreground">
                St Cloud State University
              </p>
              <p className="mt-1 text-sm text-muted">
                B.S. Software Engineering
              </p>
              <p className="mt-0.5 text-xs text-muted">
                Jan 2026 &ndash; Oct 2028 (expected)
              </p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <p className="text-sm font-semibold text-foreground">
                Ton Duc Thang University
              </p>
              <p className="mt-1 text-sm text-muted">
                B.S. Software Engineering
              </p>
              <p className="mt-0.5 text-xs text-muted">
                Oct 2022 &ndash; Oct 2025 &middot; GPA: 3.1
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
