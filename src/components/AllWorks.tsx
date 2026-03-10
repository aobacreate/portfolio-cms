'use client'

import { useState } from "react";
import { Work } from "@/generated/prisma/client";
import { ChevronDown } from "lucide-react"
import WorkCardContent from "./WorkCardContent";

type Props = {
  works: Work[]
};

export default function AllWorks({works}: Props) {
  
  const [openId, setOpenId] = useState(-1);
  const toggleWork = (id: number) => {
    setOpenId(prev => prev === id ? -1 : id)
  }

  return (
    <section className="max-w-4xl mx-auto mt-16">
      <h1 className="text-3xl font-bold tracking-tight mb-12 text-center">All Works</h1>
      <ul className="flex flex-col gap-8">
        {works.map((work) => (
          <WorkItem
            key={work.id}
            work={work}
            isOpen={openId === work.id}
            toggleWork={toggleWork}
          />          
        ))}
      </ul>
    </section>
  )
}

function WorkItem({work, isOpen, toggleWork}: {work: Work, isOpen: boolean, toggleWork: (id: number) => void}) {
  return (
    <div>
    <li
      onClick={() => toggleWork(work.id)}
      className={`cursor-pointer rounded-xl border border-neutral-300 px-6 py-4
                  ${isOpen ? "bg-neutral-50" : "hover:bg-neutral-100"} 
      `}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold">{work.title}</h2>
        <div className="flex items-center gap-4">
          <span className="text-neutral-500 text-xs">{work.category}</span>
          <ChevronDown 
            className={`w-5 h-5 text-neutral-400 transition-transform duration-200 
              ${isOpen ? "rotate-180 text-neutral-600" : ""}`}
          />
        </div>
      </div>
      
      {isOpen &&
        <div className="border-t border-neutral-300 mt-2 p-6"> 
          <WorkDetailCard work={work} />
        </div>
      }
    </li>

    </div>
  )
}

function WorkDetailCard({ work }: { work: Work }) {
  return (
    <div>
      <WorkCardContent work={work} noTitle />
    </div>
  )
}