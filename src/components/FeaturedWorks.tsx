
import { Work } from "@/generated/prisma/client";
import WorkCard from "./WorkCard";

type Props = {
  featured: Work[]
};

export default function FeaturedWorks({featured}: Props) {
  return (
    <section className="bg-white/70 backdrop-blur py-6 md:p-12 rounded-xl">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 md:mb-12 text-center">Featured Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
        {featured.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}