import { Metadata } from "next";
import { generateHomePageMetadata } from "@/config/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return await generateHomePageMetadata();
}

export default function HomePage() {
  return (
    <div>xx</div>
  );
}
