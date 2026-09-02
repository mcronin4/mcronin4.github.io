'use client';

import { useMemo, useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';
import { ProjectCategory, categoryLabels } from '../../types';

type Filter = 'all' | ProjectCategory;

const order: Filter[] = ['all', 'ml', 'web', 'research', 'other'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('all');

  const counts = useMemo(() => {
    const c: Record<Filter, number> = { all: projects.length, ml: 0, web: 0, research: 0, other: 0 };
    for (const p of projects) c[p.category] += 1;
    return c;
  }, []);

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <header className="wrap pt-16 pb-10 sm:pt-24 sm:pb-12">
        <h1 className="display rise rise-1 text-5xl sm:text-6xl">Projects</h1>
        <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
          Hackathon builds, research, competition entries, and a few tools I wanted to exist.
        </p>
      </header>

      <div className="wrap rise rise-3">
        <div className="rule flex flex-wrap gap-x-5 gap-y-2 py-4" role="tablist" aria-label="Filter projects">
          {order.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                className={`text-sm transition-colors ${
                  active ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {f === 'all' ? 'All' : categoryLabels[f]}
                <span className="eyebrow ml-1.5 align-middle">{counts[f]}</span>
              </button>
            );
          })}
        </div>
      </div>

      <section className="wrap pt-10">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
