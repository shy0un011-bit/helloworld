import { useEffect } from "react";
import { education, awards, personalInfo } from "@/data/portfolio";

export function AboutPage() {
  useEffect(() => {
    document.title = `About — ${personalInfo.name}`;
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        About
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {personalInfo.summary}
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Education</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {education.map((entry) => (
            <div
              key={entry.school + entry.degree}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-card-foreground">{entry.school}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {entry.degree} — {entry.field}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {entry.start} – {entry.end}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Awards</h2>
        <ul className="mt-6 space-y-4">
          {awards.map((award) => (
            <li
              key={award.title}
              className="flex flex-col justify-between gap-2 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center"
            >
              <div>
                <h3 className="font-semibold text-card-foreground">{award.title}</h3>
                <p className="text-sm text-muted-foreground">{award.issuer}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {award.description}
                </p>
              </div>
              <span className="shrink-0 text-sm font-medium text-muted-foreground">
                {award.year}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
