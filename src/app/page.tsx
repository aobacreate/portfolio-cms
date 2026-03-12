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
      <>
        <Background />
        <main className="relative z-10 max-w-6xl mx-auto px-4 py-8 flex flex-col gap-12 md:gap-20">
          <Top />
          <FeaturedWorks featured={featured} />
          <AllWorks works={other}/>
      </main>
      </>
    );
}

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f7f7fb]">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#fff7f7,#f7f7fb)]" />

      <div className="absolute top-[-8%] left-[8%] h-[32rem] w-[32rem] rounded-full bg-rose-300/50 blur-3xl" />
      <div className="absolute top-[8%] right-[6%] h-[30rem] w-[30rem] rounded-full bg-sky-300/45 blur-3xl" />
      <div className="absolute bottom-[-12%] left-[28%] h-[34rem] w-[34rem] rounded-full bg-amber-200/45 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
