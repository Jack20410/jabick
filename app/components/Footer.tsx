export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="font-mono text-sm text-muted">
          &copy; {new Date().getFullYear()} Bao Gia Le. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/Jack20410"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jackle1024"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="mailto:giabao.le1024@gmail.com"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
