// RSS feed for the Writing section (@astrojs/rss — handoff 6 spec).
// Drafts are always excluded, in every environment.
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const entries = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );

  return rss({
    title: 'Writing — Every Day Future',
    description:
      'Essays on conscious change, leadership, and the practice of working with what comes.',
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.dek,
      pubDate: entry.data.publishDate,
      link: `/writing/${entry.slug}/`,
    })),
  });
}
