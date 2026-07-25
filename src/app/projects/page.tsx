import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projectCategories, projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Projects - Peiman Jannatipour",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main id="main">
      <Section
        description="Projects are grouped by evidence type, with computational neuroscience articles first and exploratory theoretical modelling lower on the page."
        eyebrow="Projects"
        title="Computational neuroscience articles and research systems"
      >
        <div className="grid gap-10">
          {projectCategories.map((category) => {
            const categoryProjects = projects.filter(
              (project) => project.category === category,
            );

            return categoryProjects.length > 0 ? (
              <section key={category}>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {category}
                </h2>
                <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </section>
            ) : null;
          })}
        </div>
      </Section>
    </main>
  );
}
