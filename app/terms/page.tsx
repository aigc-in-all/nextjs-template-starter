import { Metadata } from "next";
import { generateTermsPageMetadata } from "@/config/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateTermsPageMetadata();
}

export default function TermsPage() {
    return (
        <div>Terms</div>
    );
}