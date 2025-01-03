import { Metadata } from 'next';
import { config } from './config';

const siteTitle = "Example App";
const siteDescription = "Example App Description";

export async function generateBaseMetadata(): Promise<Metadata> {
    return {
        title: siteTitle,
        description: siteDescription,
        openGraph: {
            title: siteTitle,
            description: siteDescription,
            images: [
                {
                    url: `${config.baseUrl}/logo.png`,
                    width: 1200,
                    height: 630,
                },
            ],
            type: 'website',
        },
    };
}

export async function generateHomePageMetadata(): Promise<Metadata> {
    const canonical = `${config.baseUrl}/`;
    return {
        alternates: {
            canonical: canonical,
        },
    };
}

export async function generateTermsPageMetadata(): Promise<Metadata> {
    const title = "Terms of Service";
    const description = "Terms of service for Example App website. Information about this music creation game, intellectual property rights, and website usage guidelines.";
    const canonical = `${config.baseUrl}/terms`;
    return {
        title: title,
        description: description,
        alternates: {
            canonical: canonical,
        },
    };
}

export async function generatePrivacyPageMetadata(): Promise<Metadata> {
    const title = "Privacy Policy";
    const description = "Privacy policy for Example App website. We respect your privacy - no personal data collection, no cookies, no tracking. Learn about our commitment to user privacy.";
    const canonical = `${config.baseUrl}/privacy`;
    return {
        title: title,
        description: description,
        alternates: {
            canonical: canonical,
        },
    };
}