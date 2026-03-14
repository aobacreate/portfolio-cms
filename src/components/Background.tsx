'use client'

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const smoothY = useSpring(backgroundY, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ y: smoothY }} 
      className="fixed top-0 left-0 w-full h-[120%] -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeIn" }}
    >
      <Image
        src="/hero.webp"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
    </motion.div>
  )
}


function Background() {
  const { scrollY } = useScroll();


  return (
<>
  <motion.div
    className="fixed left-0 top-0 h-[300vh] w-screen overflow-hidden z-0 opacity-75 blur-[40px]"
    style={{
     y: scrollY, 
     backgroundImage: `
      radial-gradient(circle at 20% 30%, rgba(120,160,255,0.45), transparent 35%),
      radial-gradient(circle at 80% 20%, rgba(255,180,120,0.45), transparent 35%),
      radial-gradient(circle at 40% 75%, rgba(180,120,255,0.40), transparent 38%),
      radial-gradient(circle at 70% 65%, rgba(120,220,200,0.40), transparent 38%)
    `,
    backgroundColor: "white"
  }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, ease: "easeIn" }}
  />

  <div className="relative z-10">
    <h1>Scroll Down</h1>
  </div>
</>    
  )
}