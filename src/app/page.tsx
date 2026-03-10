import { prisma } from "@/lib/prisma";
import FeaturedWorks from "@/components/FeaturedWorks";
import AllWorks from "@/components/AllWorks";

export default async function Home() {
  
  const works = await prisma.work.findMany({
    orderBy: {
      id: "desc",
    },
  });

  const featured = works.filter((work) => work.featured);

  return (
      <main className="max-w-6xl mx-auto px-4 py-8">
        <FeaturedWorks featured={featured} />
        <AllWorks works={works}/>
      </main>
    );
}