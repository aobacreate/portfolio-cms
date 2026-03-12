"use client"

import LinkButton from "@/components/LinkButton";
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export default function Top() {
  const { scrollY } = useScroll()

  const bgY = useTransform(scrollY, [0, 600], [0, -80])
  const textY = useTransform(scrollY, [0, 600], [0, -30])

  const smoothBgY = useSpring(bgY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  })

  const smoothTextY = useSpring(textY, {
    stiffness: 100,
    damping: 24,
    mass: 0.6,
  })

  return (
    <section className="relative overflow-hidden max-w-lg mx-auto mt-10 sm:mt-16">
      <motion.div
        style={{ y: smoothBgY }}
        className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-orange-100/70 to-transparent"
      />

      <motion.div
        style={{ y: smoothTextY }}
        className="flex flex-col gap-4 sm:gap-6 text-center py-12 sm:py-16"
      >
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

        <div className="flex justify-center gap-3 sm:gap-4 text-sm mt-4 sm:mt-6">
          <LinkButton kind={"GitHub"} href="https://github.com/aobacreate"/>
          <LinkButton kind={"X"} href="https://x.com/emi_create"/>          
          <LinkButton kind={"note"} href="https://note.com/emi_create"/>
        </div>
      </motion.div>
    </section>
  )
}