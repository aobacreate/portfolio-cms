import Link from "next/link"
import { ReactNode } from "react"
import { Github, Twitter, BookOpen, ExternalLink } from "lucide-react"

type Props = {
  kind: "Demo" | "GitHub" | "X" | "note" | "English"
  href: string
  stopPropagation?: boolean
}

const baseStyle =
  "inline-flex items-center justify-center gap-1 rounded-full px-4 py-2 text-sm border transition-colors"

const styles = {
  Demo: "bg-orange-500 text-white border-orange-500 hover:bg-orange-600",
  GitHub: "bg-black text-white border-black hover:bg-neutral-800",
  X: "border-neutral-300 hover:bg-neutral-100",
  note: "border-neutral-300 hover:bg-neutral-100",
  English: "border-neutral-300 hover:bg-neutral-100",
}

const icons: Record<Props["kind"], ReactNode> = {
  Demo: <ExternalLink className="w-4 h-4" />,
  GitHub: <Github className="w-4 h-4" />,
  X: <Twitter className="w-4 h-4" />,
  note: <BookOpen className="w-4 h-4" />,
  English: <BookOpen className="w-4 h-4" />,
}

export default function LinkButton({ kind, href, stopPropagation }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${styles[kind]}`}
      onClick={stopPropagation ? (e) => e.stopPropagation() : undefined}
    >
      {icons[kind]}
      {kind}
    </Link>
  )
}

