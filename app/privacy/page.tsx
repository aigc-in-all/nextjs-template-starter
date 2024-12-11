import { Metadata } from "next";
import { generatePrivacyPageMetadata } from "@/config/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generatePrivacyPageMetadata();
}

export default function PrivacyPage() {
    return (
        <div>Privacy</div>
    );
}