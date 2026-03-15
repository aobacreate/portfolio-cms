'use client'

import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const springConfig = {
  type: 'spring',
  stiffness: 950,
  damping: 600,
  mass: 25,
  restDelta: 0.001,
}

export default function Clouds() {
  const { scrollYProgress } = useScroll()

  const baseY = useSpring(scrollYProgress, springConfig)
  const xClouds1 = useTransform(baseY, [0, 1], ['0vw', '100vw'])
  const xClouds2 = useTransform(baseY, [0, 1], ['100vw', '0vw'])

  return (
    <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute left-0 top-1/4 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          x: xClouds1,
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(120,160,255,1), transparent 90%)",
        }}
      />
      <motion.div
        className="absolute left-0 top-3/4 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          x: xClouds2,
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(120,220,200,1), transparent 90%)",
        }}
      />
    </div>
  )
}

