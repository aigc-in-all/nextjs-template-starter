import { Metadata } from "next";
import { generateHomePageMetadata } from "@/config/metadata";
import GamePlayer from "@/components/GamePlayer";
import About from "@/components/About";
import KeyFeatures from "@/components/KeyFeatures";
import UserReviews from "@/components/UserReviews";
import FAQ from "@/components/FAQ";
import Gameplay from "@/components/Gameplay";
import HowToUse from "@/components/HowToUse";

export async function generateMetadata(): Promise<Metadata> {
  return await generateHomePageMetadata();
}

export default function HomePage() {
  return (
    <div className="py-12 space-y-12">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">
          Example App
        </h1>
        <p className="text-lg">
          xxx
        </p>
      </section>

      <section>
        <GamePlayer img="/logo.png" url="https://www.baidu.com" />
      </section>

      <section>
        <About />
      </section>

      <section>
        <KeyFeatures />
      </section>

      <section>
        <Gameplay />
      </section>

      <section>
        <HowToUse />
      </section>

      <section>
        <UserReviews />
      </section>

      <section>
        <FAQ />
      </section>
    </div>
  );
}
