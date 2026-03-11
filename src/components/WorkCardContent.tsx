"use client"

import Link from "next/link"
import { Work } from "@/generated/prisma/client";
import CategoryTag from "./CategoryTag";

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
        <div className="mt-6 mb-4 flex items-center gap-4">
          <Link
            href={work.siteUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
          >
            Demo
          </Link>
          <Link
            href={work.githubUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm transition hover:bg-neutral-100"
          >
            Github
          </Link>
          <Link
            href={work.detailUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-blue-600 hover:underline"
          >
            → 詳細
          </Link>
        </div>

        <p className="text-xs text-neutral-500">{work.techStack}</p>
      </div>
    </>
  )
}