import { prisma } from "@/lib/prisma";
import FeaturedWorks from "@/components/FeaturedWorks";
import AllWorks from "@/components/AllWorks";
import LinkButton from "@/components/LinkButton";

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

function Top() { 
  const buttonCss =
  "inline-flex items-center gap-1.5 border border-neutral-300 rounded-full px-3 py-1.5 hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400"
  
  return (
    <section className="max-w-lg mx-auto mt-8 md:mt-16">
      <div className="flex flex-col gap-4 md:gap-6 text-center">

        <h1 className="text-3xl md:text-4xl font-semibold">
          えみ
        </h1>

        <p className="text-neutral-500">
          Programmer
        </p>

        <div className="flex flex-col gap-2 text-neutral-600 leading-relaxed">
          <p>制作したWebサイトやアプリを紹介しています。</p>
          <p>制作過程はnoteで公開しています。</p>
        </div>

        <div className="flex justify-center gap-3 md:gap-4 text-sm mt-4 md:mt-6">
          <LinkButton kind={"GitHub"} href="https://github.com/aobacreate"/>
          <LinkButton kind={"X"} href="https://x.com/emi_create"/>          
          <LinkButton kind={"note"} href="https://note.com/emi_create"/>
        </div>
      </div>
    </section>
  )
}