import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function HomePage() {
  useEffect(() => {
    document.title = `${personalInfo.name} — ${personalInfo.title}`;
  }, []);

  return (
    <section className="mx-auto flex max-w-5xl flex-col justify-center px-6 py-20 md:py-32">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {personalInfo.title}
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
          {personalInfo.name}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {personalInfo.summary}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Projects
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Get in Touch
          </Link>
        </div>
        <div className="mt-10 flex items-center gap-5">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
