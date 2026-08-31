import { createFileRoute } from "@tanstack/react-router";
import { experiences, personalInfo } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: `Experience — ${personalInfo.name}` },
      {
        name: "description",
        content: `Work experience and professional history of ${personalInfo.name}.`,
      },
      { property: "og:title", content: `Experience — ${personalInfo.name}` },
      {
        property: "og:description",
        content: `Work experience and professional history of ${personalInfo.name}.`,
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        Experience
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        A summary of my professional roles and contributions.
      </p>

      <div className="mt-12 space-y-8">
        {experiences.map((job) => (
          <article
            key={job.company + job.role}
            className="rounded-lg border border-border bg-card p-6 md:p-8"
          >
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
              <div>
                <h2 className="text-xl font-semibold text-card-foreground">{job.role}</h2>
                <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
              </div>
              <div className="text-right md:text-right">
                <p className="text-sm font-medium text-muted-foreground">
                  {job.start} – {job.end}
                </p>
                <p className="text-sm text-muted-foreground">{job.location}</p>
              </div>
            </div>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {job.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
