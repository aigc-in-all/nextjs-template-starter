import { Metadata } from "next";
import { generateTermsPageMetadata } from "@/config/metadata";
import PageContent from "@/components/PageContent";

export async function generateMetadata(): Promise<Metadata> {
    return await generateTermsPageMetadata();
}

export default function TermsPage() {
    return (
        <div className="flex flex-col space-y-8 py-8">
            <PageContent name="terms" />
        </div>
    );
}