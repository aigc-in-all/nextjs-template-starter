import { Metadata } from "next";
import { generatePrivacyPageMetadata } from "@/config/metadata";
import PageContent from "@/components/PageContent";

export async function generateMetadata(): Promise<Metadata> {
    return await generatePrivacyPageMetadata();
}

export default function PrivacyPage() {
    return (
        <div className="flex flex-col space-y-8 py-8">
            <PageContent name="privacy" />
        </div>
    );
}