import Link from 'next/link';

type ArticleCardProps = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  permalink: string;
};

export function ArticleCard({ title, description, date, tags, permalink }: ArticleCardProps) {
  return (
    <article className="group">
      <Link href={permalink} className="block space-y-2">
        <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-500">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <div className="flex gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs px-2 py-0.5 rounded-full border text-neutral-500 border-neutral-300 dark:border-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="text-lg font-semibold group-hover:underline transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{description}</p>
      </Link>
    </article>
  );
}
