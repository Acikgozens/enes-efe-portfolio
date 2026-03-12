import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://enes-efe-portfolio.vercel.app/',
            lastModified: new Date(),
            priority: 1.0,
        },
        {
            url: 'https://enes-efe-portfolio.vercel.app/tr',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://enes-efe-portfolio.vercel.app/en',
            lastModified: new Date(),
            priority: 0.8,
        },
    ];
}
