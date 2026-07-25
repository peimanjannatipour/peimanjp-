import Image from "next/image";
import type { Project } from "@/data/projects";
import { LinkButton } from "./LinkButton";
import { StatusBadge } from "./StatusBadge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-950/5">
      {project.image ? (
        <figure className="mb-5 overflow-hidden rounded-md border border-slate-200 bg-slate-50">
          <Image
            alt={project.image.alt}
            className="aspect-[4/3] w-full object-cover"
            height={720}
            src={project.image.src}
            width={960}
          />
          <figcaption className="border-t border-slate-200 px-3 py-2 text-xs leading-5 text-slate-500">
            {project.image.caption}
          </figcaption>
        </figure>
      ) : null}
      <StatusBadge status={project.status} />
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
        {project.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
        {project.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      {project.href ? (
        <div className="mt-6">
          <LinkButton href={project.href} variant="secondary">
            View project
          </LinkButton>
        </div>
      ) : null}
    </article>
  );
}
