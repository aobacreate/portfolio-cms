import { prisma } from "@/lib/prisma";
import FeaturedWorks from "@/components/FeaturedWorks";
import AllWorks from "@/components/AllWorks";
import Top from "@/components/Top";

export default async function Home() {
  
  const works = await prisma.work.findMany({
    orderBy: {
      id: "desc",
    },
  });

  const featured = works.filter((work) => work.featured);
  const other = works.filter((work) => !work.featured);

  return (
      <main className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-12 md:gap-20">
        <Top />
        <FeaturedWorks featured={featured} />
        <AllWorks works={other}/>
      </main>
    );
}

