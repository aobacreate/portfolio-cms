"use client"

import LinkButton from "@/components/LinkButton";


export default function Top() {
  return (
    <section className="flex items-center justify-center md:h-[50vh]">
    <div className="max-w-xl mx-auto mt-8 md:mt-16 bg-white/70 backdrop-blur rounded-xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
      <div className="flex flex-col gap-4 md:gap-6 text-center">

        <h1 className="text-3xl md:text-4xl font-semibold">
          Emi
        </h1>

        <p className="text-neutral-500">
          Programmer
        </p>

        <div className="flex flex-col gap-1 text-neutral-600 leading-relaxed">
          <p>制作したWebサイトやアプリを紹介しています。</p>
          <p>制作過程はnoteで公開しています。</p>
          <p className="mt-4">Web applications I built.</p>
          <p>Development notes on my blog.</p>
        </div>

        <div className="grid grid-cols-2 md:flex md:justify-center gap-2 text-sm mt-4 md:mt-6">
          <LinkButton kind={"GitHub"} href="https://github.com/aobacreate"/>
          <LinkButton kind={"X"} href="https://x.com/emi_create"/>          
          <LinkButton kind={"note"} href="https://note.com/emi_create"/>
          <LinkButton kind={"English"} href="https://aobacreate.net/en"/>
        </div>
      </div>
    </div>
    </section>
  )
}
