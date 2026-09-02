'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { navigationItems } from '../../data/navigation';

function normalize(path: string) {
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
}

export default function Navbar() {
  const pathname = normalize(usePathname() ?? '/');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="wrap flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-[1.35rem] leading-none tracking-tight text-ink hover:text-accent transition-colors"
        >
          Michael Cronin
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {navigationItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            if (item.external) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-[0.8125rem] text-muted hover:text-ink transition-colors"
                >
                  {item.name}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`text-[0.8125rem] transition-colors ${
                  active ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden -mr-2 p-2 text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-current transition-opacity duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-px w-5 bg-current transition-transform duration-300 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden absolute inset-x-0 top-full grid border-b border-line bg-paper shadow-[0_24px_40px_-24px_rgba(0,0,0,0.35)] transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 border-b-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <nav className="wrap flex flex-col py-3" aria-label="Mobile">
            {navigationItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              const cls = `py-3 text-base ${active ? 'text-ink' : 'text-muted'}`;
              return item.external ? (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {item.name} ↗
                </a>
              ) : (
                <Link key={item.name} href={item.href} className={cls}>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
