import { posts } from '#site/content';
import { mdxComponents } from '@/components/mdx-components';
import { TagBadge } from '@/components/tag-badge';
import { notFound } from 'next/navigation';
import * as runtime from 'react/jsx-runtime';
import type { Metadata } from 'next';

function getMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

export function generateStaticParams() {
  return posts.filter((p) => !p.draft).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://tavin.dev/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const MDXContent = getMDXComponent(post.body);

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <article>
        <header className="mb-10 space-y-4">
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <div className="flex gap-1.5">
              {post.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{post.title}</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">{post.description}</p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXContent components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
