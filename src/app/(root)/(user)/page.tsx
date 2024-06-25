import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <Hero />
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">
          What BGR.AI Can Do For You...
        </h1>
      </div>
    </main>
  );
}
