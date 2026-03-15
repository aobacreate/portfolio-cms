import { prisma } from "@/lib/prisma";
import FeaturedWorks from "@/components/FeaturedWorks";
import AllWorks from "@/components/AllWorks";
import Top from "@/components/Top";
import Hero from "@/components/Background";
import Clouds from "@/components/Clouds";
import Footer from "@/components/Footer";

export default async function Home() {
  
  const works = await prisma.work.findMany({
    orderBy: {
      id: "desc",
    },
  });

  const featured = works.filter((work) => work.featured);
  const other = works.filter((work) => !work.featured);

  return (
    <>
      <Hero />
      <div className="hidden md:block">
        <Clouds />
      </div>
      <main className="relative z-20 max-w-6xl mx-auto px-4 py-8 flex flex-col gap-12 md:gap-20">
        <Top />
        <FeaturedWorks featured={featured} />
        <AllWorks works={other}/>
        <footer className="text-center text-sm text-neutral-700 py-6 md:py-10">
            © {new Date().getFullYear()} Emi
        </footer>
      </main>
    </>
  )
}

