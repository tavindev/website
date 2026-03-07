import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Nav() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          tavin.dev
        </Link>
        <div className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="/feed.xml" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            RSS
          </a>
          <a
            href="https://x.com/tavindev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            X
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
