import Link from 'next/link';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  /** Larger media and heading, for the home page grid. */
  size?: 'default' | 'large';
}

export function ProjectMedia({ project, className = '' }: { project: Project; className?: string }) {
  if (project.heroImageUrl) {
    return (
      <div className={`card-media aspect-[16/10] ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroImageUrl}
          alt=""
          loading="lazy"
          className="cover h-full w-full object-cover object-top"
        />
      </div>
    );
  }
  if (project.imageUrl) {
    return (
      <div className={`card-media aspect-[16/10] flex items-center justify-center ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.imageUrl}
          alt=""
          loading="lazy"
          className="h-[54%] w-auto max-w-[60%] rounded-lg object-contain"
        />
      </div>
    );
  }
  return (
    <div className={`card-media aspect-[16/10] flex items-center justify-center ${className}`}>
      <span className="placeholder-mark" aria-hidden>
        {project.title.charAt(0)}
      </span>
    </div>
  );
}

export default function ProjectCard({ project, size = 'default' }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <ProjectMedia project={project} />
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3
          className={`font-medium text-ink group-hover:text-accent transition-colors ${
            size === 'large' ? 'text-lg' : 'text-base'
          }`}
        >
          {project.title}
        </h3>
        <span className="eyebrow shrink-0">{project.year}</span>
      </div>
      {project.tagline && <p className="mt-0.5 text-sm text-muted">{project.tagline}</p>}
      <p className="mt-2 text-sm leading-relaxed text-ink-2">{project.description}</p>
      {project.recognition && (
        <p className="eyebrow mt-3 normal-case tracking-normal">{project.recognition}</p>
      )}
    </Link>
  );
}
