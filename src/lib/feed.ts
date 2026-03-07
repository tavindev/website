import { Feed } from 'feed';
import { posts } from '#site/content';
import { writeFileSync } from 'fs';

export function generateRssFeed(): void {
  const siteUrl = 'https://tavin.dev';

  const feed = new Feed({
    title: 'Gustavo — tavin.dev',
    description:
      'Deep technical articles on DDD, CQRS, hexagonal architecture, and TypeScript backend patterns.',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    copyright: `${new Date().getFullYear()} Gustavo`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
    author: {
      name: 'Gustavo',
      link: siteUrl,
    },
  });

  const published = posts
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  for (const post of published) {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}${post.permalink}`,
      link: `${siteUrl}${post.permalink}`,
      description: post.description,
      date: new Date(post.date),
    });
  }

  writeFileSync('public/feed.xml', feed.rss2());
}
