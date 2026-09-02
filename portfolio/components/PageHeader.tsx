interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}

export default function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <header className="wrap pt-16 pb-12 sm:pt-24 sm:pb-16">
      {eyebrow && <p className="eyebrow rise mb-4">{eyebrow}</p>}
      <h1 className="display rise rise-1 text-5xl sm:text-6xl">{title}</h1>
      {lead && (
        <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{lead}</p>
      )}
    </header>
  );
}
