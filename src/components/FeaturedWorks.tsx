"use client"

import Link from "next/link"
import { Work } from "@/generated/prisma/client";

type Props = {
  featured: Work[]
};

export default function FeaturedWorks({featured}: Props) {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight mb-12 text-center">Featured Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {featured.map((work) => (
          <div key={work.id}
              onClick={() => {if (work.siteUrl) window.open(work.siteUrl, "_blank")}} 
              className="min-h-[280px] cursor-pointer flex flex-col justify-between rounded-2xl border border-neutral-300 p-8
                                        transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div>                              
              <h2 className="text-base font-semibold mb-4">{work.title}</h2>
              <p className="text-gray-600 text-base">{work.summary}</p>
            </div> 
            <div className="mt-auto">
            <div className="flex items-center gap-4 mb-4">
              <Link
                href={work.siteUrl ?? "#"}
                target="_blank"
                rel="noopener noreferer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 transition"
              >
                Demo
              </Link>
              <Link
                href={work.githubUrl ?? "#"}
                target="_blank"
                rel="noopener noreferer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm hover:bg-neutral-100 transition"
              >
                Github
              </Link>
              <Link
                href={work.detailUrl ?? "#"}
                target="_blank"
                rel="noopener noreferer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs text-blue-600 hover:underline"
              >
                → 詳細
              </Link>
            </div>
            <p className="text-neutral-500 text-xs">{work.techStack}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}