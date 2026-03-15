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

        {/* 日本語 */}
        <p className="text-base text-gray-600">
          {work.summary}
        </p>

        {/* 英語 */}
        {work.enSummary &&
          work.enSummary
            .split(/\.(?:\s|\n)+/)
            .filter(Boolean)
            .map((line, i, arr) => (
              <p key={i} className={`text-sm text-gray-500 italic ${i === 0 ? "mt-2" : ""}`}>
                 {line}{i < arr.length - 1 ? "." : ""}
              </p>
            ))}
      </div>

      <div className="mt-auto">
        <p className="mt-8 text-xs text-neutral-500">{work.techStack}</p>
        <div className="mt-4 text-sm grid grid-cols-2 gap-2 md:flex md:items-center">
          <LinkButton kind="Demo" href={work.siteUrl ?? "#"} stopPropagation={true} />
          <LinkButton kind="GitHub" href={work.githubUrl ?? "#"} stopPropagation={true} />
          <LinkButton kind="note" href={work.detailUrl ?? "#"} stopPropagation={true} />
          { work.enUrl &&
            <LinkButton kind="English" href={work.enUrl ?? "#"} stopPropagation={true} />
          }
        </div>
      </div>
    </>
  )
}