import "dotenv/config"
import fs from "fs"
import path from "path"
import { prisma } from "../src/lib/prisma"

function escapeCsv(value: unknown): string {
  if (value == null) return ""

  const str = String(value)

  if (str.includes('"') || str.includes(",") || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`
  }

  return str
}

async function main() {
  const works = await prisma.work.findMany({
    orderBy: { id: "asc" },
  })

  const headers = [
    "title",
    "category",
    "thumbnail",
    "techStack",
    "summary",
    "siteUrl",
    "githubUrl",
    "detailUrl",
    "enUrl",
    "enSummary",
    "featured",
    "isPublished",
  ]

  const rows = works.map((work) => [
    work.title,
    work.category,
    work.thumbnail,
    work.techStack,
    work.summary,
    work.siteUrl,
    work.githubUrl,
    work.detailUrl,
    work.enUrl,
    work.enSummary,
    String(work.featured),
    String(work.isPublished),
  ])

  const csvLines = [
    headers.map(escapeCsv).join(","),
    ...rows.map((row) => row.map(escapeCsv).join(",")),
  ]

  const csv = csvLines.join("\n")

  const outputPath = path.resolve("works-export.csv")
  fs.writeFileSync(outputPath, csv, "utf-8")

  console.log(`Exported ${works.length} works to ${outputPath}`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })