import Link from 'next/link';

export function TagBadge({ tag, active = false }: { tag: string; active?: boolean }) {
  const href = tag === 'all' ? '/' : `/?tag=${tag}`;
  return (
    <Link
      href={href}
      className={`inline-block text-xs px-2 py-0.5 rounded-full border transition-colors ${
        active
          ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white'
          : 'text-neutral-500 border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 hover:text-neutral-900 dark:hover:border-white dark:hover:text-white'
      }`}
    >
      {tag}
    </Link>
  );
}
