export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 mt-16">
      <div className="max-w-3xl mx-auto px-5 text-sm text-neutral-500 dark:text-neutral-500 flex flex-col sm:flex-row justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} Gustavo</p>
        <div className="flex gap-4">
          <a
            href="https://x.com/tavindev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            X / Twitter
          </a>
          <a
            href="https://github.com/tavindev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            GitHub
          </a>
          <a href="/feed.xml" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
}
