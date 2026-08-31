import { useEffect } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function ContactPage() {
  useEffect(() => {
    document.title = `Contact — ${personalInfo.name}`;
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Contact</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        I'm open to opportunities, collaborations, and interesting conversations. Reach out through
        any of the channels below.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <a
          href={`mailto:${personalInfo.email}`}
          className="group flex items-center gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:bg-accent"
        >
          <Mail className="shrink-0 text-muted-foreground group-hover:text-foreground" size={24} />
          <div>
            <h2 className="font-semibold text-card-foreground">Email</h2>
            <p className="text-sm text-muted-foreground">{personalInfo.email}</p>
          </div>
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:bg-accent"
        >
          <Linkedin
            className="shrink-0 text-muted-foreground group-hover:text-foreground"
            size={24}
          />
          <div>
            <h2 className="font-semibold text-card-foreground">LinkedIn</h2>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </div>
        </a>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:bg-accent"
        >
          <Github
            className="shrink-0 text-muted-foreground group-hover:text-foreground"
            size={24}
          />
          <div>
            <h2 className="font-semibold text-card-foreground">GitHub</h2>
            <p className="text-sm text-muted-foreground">See my code</p>
          </div>
        </a>

        <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-6">
          <MapPin className="shrink-0 text-muted-foreground" size={24} />
          <div>
            <h2 className="font-semibold text-card-foreground">Location</h2>
            <p className="text-sm text-muted-foreground">{personalInfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
