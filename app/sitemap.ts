import { MetadataRoute } from "next";
import { config } from "@/config/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const base: MetadataRoute.Sitemap = [
        {
            url: `${config.baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${config.baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${config.baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ];

    return [...base];
}