import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from 'astro/zod';
import { parseStringPromise } from "xml2js";

const locale = "fr-FR";

const dateOptions = {
  weekday: "long" as const,
  year: "numeric" as const,
  month: "long" as const,
  day: "numeric" as const,
};

const findLinks = (description: string): string => {
  const regex = /https?:\/\/[^\s]+/g;
  const _description = Array.isArray(description) ? description[0] : description;

  const matches = _description.match(regex);
  let descriptionUpdated = _description;
  if (matches) {
    for (const match of matches) {
      descriptionUpdated = _description.replace(
        match,
        `<a href="${match}" target="_blank">${match}</a>`,
      );
    }
  }
  return descriptionUpdated;
};

const podcasts = defineCollection({
  loader: async () => {
    const response = await fetch("https://double-slash.dev/podcast-rss-feed.xml");
    const content = await response.text();
    const data = await parseStringPromise(content);

    // keep only items
    const itemsFormated: {
      id: string[];
      pubDate: string;
      title: string[];
      description: string;
      link: string[];
    }[] = data.rss.channel[0].item;

    return itemsFormated.map((item) => {
      return {
      // @ts-ignore
        id: item["itunes:episode"][0],
        pubDate: new Date(item.pubDate[0]).toLocaleDateString(locale, dateOptions),
        date: new Date(item.pubDate[0]),
        title: item.title[0],
        description: findLinks(item.description[0]),
        link: item.link[0],
      };
    });
  },
  schema: z.object({
    id: z.string(),
    pubDate: z.string(),
    date: z.date(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
  }),
});

const cities = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/cities" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    metaTitle: z.string().optional(),
    description: z.string(),
    showToc: z.boolean().optional(),
  }),
});

export const collections = {
  podcasts,
  cities,
};
