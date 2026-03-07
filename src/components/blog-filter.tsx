'use client';

import { useSearchParams } from 'next/navigation';
import { ArticleCard } from './article-card';
import { TagBadge } from './tag-badge';

type Post = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  permalink: string;
  slug: string;
};

export function BlogFilter({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');

  const filtered = tag ? posts.filter((p) => p.tags.includes(tag)) : posts;
  const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort();

  return (
    <>
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <TagBadge tag="all" active={!tag} />
          {allTags.map((t) => (
            <TagBadge key={t} tag={t} active={tag === t} />
          ))}
        </div>
      )}

      <div className="space-y-10">
        {filtered.length === 0 && (
          <p className="text-neutral-500 dark:text-neutral-500">
            No articles found{tag ? ` for tag "${tag}"` : ''}.
          </p>
        )}
        {filtered.map((post) => (
          <ArticleCard
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            tags={post.tags}
            permalink={post.permalink}
          />
        ))}
      </div>
    </>
  );
}
