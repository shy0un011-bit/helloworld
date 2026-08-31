import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/Home";
import { AboutPage } from "@/pages/About";
import { ExperiencePage } from "@/pages/Experience";
import { ProjectsPage } from "@/pages/Projects";
import { SkillsPage } from "@/pages/Skills";
import { ContactPage } from "@/pages/Contact";
import { NotFoundPage } from "@/pages/NotFound";

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL ?? "/"}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
