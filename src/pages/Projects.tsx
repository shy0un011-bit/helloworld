import { useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects, personalInfo } from "@/data/portfolio";

export function ProjectsPage() {
  useEffect(() => {
    document.title = `Projects — ${personalInfo.name}`;
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        Projects
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        A selection of projects I've worked on. Each one includes a link to the source code when
        available.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-sm"
          >
            <h2 className="text-lg font-semibold text-card-foreground">{project.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
                >
                  <ExternalLink size={14} />
                  Live
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
                >
                  <Github size={14} />
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
