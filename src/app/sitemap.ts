import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://enes-efe-portfolio.vercel.app',
            lastModified: new Date(),
            priority: 1,
        },
    ];
}
