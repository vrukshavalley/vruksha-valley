import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vrukshavalley.com'
  
  const blogSlugs = [
    'soormane-falls-guide',
    'kalasa-trekking-guide',
    'malnad-itinerary'
  ]

  const blogPosts = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
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
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.7,
  }))

  return [...routes, ...blogPosts]
}