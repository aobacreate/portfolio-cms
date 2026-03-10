
import { Work } from "@/generated/prisma/client";
import WorkCard from "./WorkCard";

type Props = {
  featured: Work[]
};

export default function FeaturedWorks({featured}: Props) {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight mb-12 text-center">Featured Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {featured.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}