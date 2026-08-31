import { useEffect } from "react";
import { skills, personalInfo } from "@/data/portfolio";

export function SkillsPage() {
  useEffect(() => {
    document.title = `Skills — ${personalInfo.name}`;
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Skills</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Tools, languages, and technologies I use regularly.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <section key={group.category} className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {group.category}
            </h2>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm font-medium text-card-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
