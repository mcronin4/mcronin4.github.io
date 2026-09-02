import { personalInfo } from '../../data/personal';

const links = [
  { label: 'Email', href: `mailto:${personalInfo.email}` },
  { label: 'GitHub', href: `https://github.com/${personalInfo.github}` },
  { label: 'LinkedIn', href: `https://www.linkedin.com/in/${personalInfo.linkedin}` },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl leading-none text-ink">Michael Cronin</p>
          <p className="mt-2 text-sm text-muted">
            {personalInfo.title} · {personalInfo.location}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="link text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap pb-8">
        <p className="eyebrow">© {new Date().getFullYear()} · michael-cronin.com</p>
      </div>
    </footer>
  );
}
