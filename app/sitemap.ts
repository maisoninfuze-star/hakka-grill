import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { LOCALES } from '@/lib/copy';

const ROUTES = ['', '/menu', '/story', '/experience', '/visit'];

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    ROUTES.map((r) => ({
      url: `${SITE.url}/${locale}${r}`,
      changeFrequency: (r === '/menu' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: r === '' ? 1 : r === '/menu' ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l === 'en' ? 'en-CA' : 'fr-CA', `${SITE.url}/${l}${r}`])),
      },
    })),
  );
}
