import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap pt-24 pb-16 sm:pt-32">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display text-5xl sm:text-6xl">
        Nothing <em>here</em>.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-2">
        That page does not exist, or it moved when the site was rebuilt.
      </p>
      <p className="mt-8">
        <Link href="/" className="link text-sm">
          Back to the front page →
        </Link>
      </p>
    </div>
  );
}
