import type { MDXComponents } from 'mdx/types';

function Callout({ children, type = 'note' }: { children: React.ReactNode; type?: 'note' | 'warning' | 'tip' }) {
  const styles = {
    note: 'border-neutral-300 bg-neutral-50 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-100',
    warning: 'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-200',
    tip: 'border-green-300 bg-green-50 text-green-900 dark:border-green-700 dark:bg-green-900/20 dark:text-green-200',
  };
  const labels = { note: 'Note', warning: 'Warning', tip: 'Tip' };

  return (
    <aside className={`border-l-4 rounded-r-lg p-4 my-6 text-sm ${styles[type]}`}>
      <p className="font-semibold mb-1">{labels[type]}</p>
      <div>{children}</div>
    </aside>
  );
}

function heading(level: 1 | 2 | 3 | 4) {
  const Tag = `h${level}` as const;
  return function HeadingWithAnchor({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    const id =
      typeof children === 'string'
        ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        : undefined;
    return (
      <Tag id={id} {...props}>
        {id && (
          <a
            href={`#${id}`}
            className="no-underline opacity-0 hover:opacity-100 transition-opacity mr-1 before:content-['#']"
            aria-label="Link to section"
          />
        )}
        {children}
      </Tag>
    );
  };
}

export const mdxComponents: MDXComponents = {
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  Callout,
};
