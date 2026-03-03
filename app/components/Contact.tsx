"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2
            className="mb-3 text-2xl font-bold text-foreground"
            style={{ textWrap: "balance" }}
          >
            Get In Touch
          </h2>
          <p className="mb-10 max-w-md text-base text-muted">
            Open to internships, collaborations, and full-time roles. Feel free
            to reach out.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="space-y-5"
          >
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <a
                href="mailto:giabao.le1024@gmail.com"
                className="text-sm text-accent transition-colors duration-150 hover:text-accent-light"
              >
                giabao.le1024@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Phone</p>
              <a
                href="tel:+13209108717"
                className="text-sm text-accent transition-colors duration-150 hover:text-accent-light"
              >
                +1 (320) 910-8717
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Location</p>
              <p className="text-sm text-muted">Sartell, MN 56377</p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Availability
              </p>
              <p className="text-sm text-muted">
                Open to internships &amp; full-time
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors duration-150 placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Your name..."
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                spellCheck={false}
                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors duration-150 placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                autoComplete="off"
                className="w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors duration-150 placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
