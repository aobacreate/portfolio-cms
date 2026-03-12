"use client"

import LinkButton from "@/components/LinkButton";

export default function Top() {
  return (
    <section className="max-w-lg mx-auto mt-8 md:mt-16">
      <div className="flex flex-col gap-4 md:gap-6 text-center">

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

        <div className="flex justify-center gap-3 md:gap-4 text-sm mt-4 md:mt-6">
          <LinkButton kind={"GitHub"} href="https://github.com/aobacreate"/>
          <LinkButton kind={"X"} href="https://x.com/emi_create"/>          
          <LinkButton kind={"note"} href="https://note.com/emi_create"/>
        </div>
      </div>
    </section>
  )
}
