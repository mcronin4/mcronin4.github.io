import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../../data/projects';
import { categoryLabels } from '../../../types';
import { ProjectMedia } from '../../../components/ProjectCard';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

function getYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function getLoomEmbed(url: string): string | null {
  const m = url.match(/loom\.com\/share\/([a-f0-9]+)(\?.*)?/);
  return m ? `https://www.loom.com/embed/${m[1]}${m[2] ?? ''}` : null;
}

function embedFor(url?: string): { src: string; kind: 'youtube' | 'loom' } | null {
  if (!url) return null;
  const yt = getYouTubeId(url);
  if (yt) return { src: `https://www.youtube.com/embed/${yt}`, kind: 'youtube' };
  const loom = getLoomEmbed(url);
  if (loom) return { src: loom, kind: 'loom' };
  return null;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const embed = embedFor(project.demoUrl);
  const paragraphs = project.longDescription
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const links = [
    project.liveUrl && { label: 'Live', href: project.liveUrl },
    project.githubUrl && { label: 'Code', href: project.githubUrl },
    project.demoUrl && { label: 'Demo video', href: project.demoUrl },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <article>
      <header className="wrap pt-12 pb-10 sm:pt-20 sm:pb-12">
        <Link href="/projects" className="eyebrow rise hover:text-ink transition-colors">
          ← Projects
        </Link>
        <h1 className="display rise rise-1 mt-6 text-5xl sm:text-6xl">
          {project.title}
          {project.tagline && (
            <span className="mt-2 block text-[0.6em] italic text-muted">{project.tagline}</span>
          )}
        </h1>
        <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
          {project.description}
        </p>

        <dl className="rise rise-3 mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <div>
            <dt className="eyebrow">Year</dt>
            <dd className="mt-1 text-sm text-ink">{project.year}</dd>
          </div>
          <div>
            <dt className="eyebrow">Category</dt>
            <dd className="mt-1 text-sm text-ink">{categoryLabels[project.category]}</dd>
          </div>
          {project.recognition && (
            <div>
              <dt className="eyebrow">Recognition</dt>
              <dd className="mt-1 text-sm text-ink">{project.recognition}</dd>
            </div>
          )}
          {links.length > 0 && (
            <div>
              <dt className="eyebrow">Links</dt>
              <dd className="mt-1 flex flex-wrap gap-x-4 text-sm">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link inline-flex items-center gap-0.5"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                ))}
              </dd>
            </div>
          )}
        </dl>
      </header>

      <div className="wrap rise rise-4">
        {embed ? (
          <div className="card-media aspect-video">
            <iframe
              className="h-full w-full"
              src={embed.src}
              title={`${project.title} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ) : (
          <ProjectMedia project={project} />
        )}
      </div>

      <div className="wrap mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-20">
        <div className="body-copy max-w-2xl text-[1.0625rem]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-6 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <aside className="lg:pt-1">
          <p className="eyebrow">Stack</p>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-2">
            {project.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </aside>
      </div>

      <nav className="wrap mt-24" aria-label="Next project">
        <Link href={`/projects/${next.id}`} className="group rule block pt-8">
          <p className="eyebrow">Next project</p>
          <p className="mt-2 font-serif text-3xl text-ink group-hover:text-accent transition-colors">
            {next.title}
            {next.tagline && <span className="text-muted"> · {next.tagline}</span>}
          </p>
        </Link>
      </nav>
    </article>
  );
}
