import { posts } from '#site/content';
import { BlogFilter } from '@/components/blog-filter';
import { Suspense } from 'react';

export default function Home() {
  const published = posts
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-3xl mx-auto px-5 py-16 space-y-10">
      <Suspense>
        <BlogFilter posts={published} />
      </Suspense>
    </div>
  );
}
