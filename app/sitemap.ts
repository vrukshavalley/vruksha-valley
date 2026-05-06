import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vrukshavalley.com'

  const blogSlugs = [
    'soormane-falls-guide',
    'kalasa-trekking-guide',
    'malnad-itinerary',
    'top-places-in-kalasa',
    'best-time-to-visit-chikmagalur',
  ]

  const blogPosts = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const seoPages = [
    '/resort-in-kalasa',
    '/stay-near-soormane-falls',
    '/chikmagalur-luxury-resort',
    '/coffee-estate-stay',
    '/homestay-near-netravati-peak',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const routes = [
    '',
    '/about',
    '/gallery',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes, ...seoPages, ...blogPosts]
}