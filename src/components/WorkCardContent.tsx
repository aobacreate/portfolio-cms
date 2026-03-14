"use client"

import { Work } from "@/generated/prisma/client";
import CategoryTag from "./CategoryTag";
import LinkButton from "./LinkButton";

export default function WorkCardContent({ work, noTitle = false }: { work: Work; noTitle?: boolean }) {
  return (
    <>
      <div>
        {!noTitle && (
          <div className="-mx-8 -mt-8 px-8 py-4 mb-4 bg-neutral-100 flex items-center justify-between">
            <h2 className="text-base font-semibold">{work.title}</h2>
            <CategoryTag category={work.category} />
          </div>
        )}
        <p className="text-base text-gray-600">{work.summary}</p>
      </div>

      <div className="mt-auto">
        <p className="mt-8 text-xs text-neutral-500">{work.techStack}</p>
        <div className="mt-4 text-sm flex items-center gap-2 md:gap-4">
          <LinkButton kind="Demo" href={work.siteUrl ?? "#"} stopPropagation={true} />
          <LinkButton kind="GitHub" href={work.githubUrl ?? "#"} stopPropagation={true} />
          <LinkButton kind="note" href={work.detailUrl ?? "#"} stopPropagation={true} />
        </div>
      </div>
    </>
  )
}