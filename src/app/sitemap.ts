import type { MetadataRoute } from "next";
import {
  DESTINATIONS,
  DESTINATION_REGIONS,
} from "@/data/destinations";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/data/blogs";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  absoluteUrl,
  slugifyCategory,
} from "@/lib/seo";

const SITE_RELEASE_DATE = new Date("2026-11-25");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
    {
      url: `${SITE_URL}/destinations`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/disclaimer`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const regionRoutes: MetadataRoute.Sitemap = DESTINATION_REGIONS.map(
    (region) => {
      const heroImg = DESTINATIONS.find((d) => d.region === region)?.image;
      return {
        url: `${SITE_URL}/destinations/region/${slugifyCategory(region)}`,
        lastModified: SITE_RELEASE_DATE,
        changeFrequency: "monthly",
        priority: 0.8,
        ...(heroImg ? { images: [absoluteUrl(heroImg)] } : {}),
      };
    }
  );

  const categoryRoutes: MetadataRoute.Sitemap = BLOG_CATEGORIES.map(
    (category) => {
      const heroImg = BLOG_POSTS.find((p) => p.category === category)?.image;
      return {
        url: `${SITE_URL}/blog/category/${slugifyCategory(category)}`,
        lastModified: SITE_RELEASE_DATE,
        changeFrequency: "monthly",
        priority: 0.8,
        ...(heroImg ? { images: [absoluteUrl(heroImg)] } : {}),
      };
    }
  );

  const destinationRoutes: MetadataRoute.Sitemap = DESTINATIONS.map((dest) => ({
    url: `${SITE_URL}/destinations/${dest.slug}`,
    lastModified: new Date(dest.updatedAt),
    changeFrequency: "monthly",
    priority: 0.9,
    images: [absoluteUrl(dest.image)],
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.85,
    images: [absoluteUrl(post.image)],
  }));

  return [
    ...staticRoutes,
    ...regionRoutes,
    ...categoryRoutes,
    ...destinationRoutes,
    ...blogRoutes,
  ];
}
