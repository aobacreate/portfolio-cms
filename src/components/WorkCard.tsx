"use client"

import { Work } from "@/generated/prisma/client";
import WorkCardContent from "./WorkCardContent";

export default function WorkCard({ work }: { work: Work }) {
  return (
    <div 
      onClick={() => {
        if (work.siteUrl) window.open(work.siteUrl, "_blank")
      }}
      className="min-h-[280px] cursor-pointer flex flex-col justify-between rounded-2xl overflow-hidden
      border border-neutral-300 p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-neutral-50"
    >
      <WorkCardContent work={work} />
    </div>
  )
}

