import rehypePrettyCode from 'rehype-pretty-code';
import { defineConfig, s } from 'velite';

export default defineConfig({
  root: 'src/content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: {
    posts: {
      name: 'Post',
      pattern: 'blog/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(120),
          slug: s.slug('posts'),
          description: s.string().max(300),
          date: s.isodate(),
          tags: s.array(s.string()),
          draft: s.boolean().default(false),
          body: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/blog/${data.slug}`,
        })),
    },
  },
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode as any,
        {
          theme: 'catppuccin-mocha',
          keepBackground: true,
        },
      ],
    ],
  },
});
