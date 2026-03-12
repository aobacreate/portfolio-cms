"use client"

import { Work } from "@/generated/prisma/client";
import WorkCardContent from "./WorkCardContent";
import { motion } from "framer-motion"

export default function WorkCard({ work }: { work: Work }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="h-full min-h-[280px] flex flex-col justify-between rounded-2xl overflow-hidden
      border border-neutral-300 p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-neutral-50"
    >
      <WorkCardContent work={work} />
    </motion.div>
  )
}

