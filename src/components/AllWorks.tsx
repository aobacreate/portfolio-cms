'use client'

import { useState } from "react";
import { Work } from "@/generated/prisma/client";
import { ChevronDown } from "lucide-react"
import WorkCardContent from "./WorkCardContent";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import CategoryTag from "./CategoryTag";

type Props = {
  works: Work[]
}

const CATEGORIES = ["All", "Next.js", "WordPress"] as const

export default function AllWorks({ works }: Props) {
  const [openId, setOpenId] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  type Category = typeof CATEGORIES[number]

  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory)

  const toggleWork = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category)
    setOpenId(null)
  }

  return (
    <section className="max-w-4xl mx-auto w-full bg-white/70 backdrop-blur py-6 md:p-12 rounded-xl">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 md:mb-6 text-center">
        Other Works
      </h1>
      <div className="flex justify-center py-4 md:py-6">
        <div className="inline-flex gap-1 rounded-full border border-neutral-300 bg-neutral-50 p-1">
          {CATEGORIES.map((category) => {
            const isActive = category === selectedCategory

            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-200
                  ${
                    isActive
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-neutral-500 hover:bg-white hover:text-neutral-900"
                  }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>
      <LayoutGroup>
        <motion.ul
          layout
          className="relative flex flex-col border border-neutral-300 rounded-xl overflow-hidden"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredWorks.map((work) => (
              <WorkItem
                key={work.id}
                work={work}
                isOpen={openId === work.id}
                toggleWork={toggleWork}
              />
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </section>
  )
}

function WorkItem({
  work,
  isOpen,
  toggleWork,
}: {
  work: Work
  isOpen: boolean
  toggleWork: (id: number) => void
}) {

  return (
    <motion.li
      layout
      exit={{ opacity: 0, y: -8 }}
      transition={{
        layout: { duration: 0.25 },
        opacity: { duration: 0.18 },
        y: { duration: 0.18 },
      }}
      onClick={() => toggleWork(work.id)}
      className={`cursor-pointer border-b border-neutral-300 last:border-none px-6 
        transition-colors duration-200 active:bg-neutral-100
        ${isOpen ? "bg-neutral-50" : "hover:bg-neutral-50"}`}
    >
      <div
        className={`py-5 transition-colors duration-200 ${
          isOpen ? "-mx-6 px-6 bg-neutral-100" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-base font-medium flex-1">{work.title}</h2>

          <div className="flex items-center gap-6">
            <CategoryTag category={work.category} />
            <ChevronDown
              className={`h-5 w-5 transition-transform transition-colors duration-200 ${
                isOpen ? "rotate-180 text-neutral-600" : "text-neutral-400"
              }`}
            />
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: 0.25 },
              opacity: { duration: 0.2 },
            }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-5">
              <WorkDetailCard work={work} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

function WorkDetailCard({ work }: { work: Work }) {
  return (
    <div>
      <WorkCardContent work={work} noTitle />
    </div>
  )
}

