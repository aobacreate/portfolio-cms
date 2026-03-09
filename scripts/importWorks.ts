import "dotenv/config"
import fs from "fs"
import { parse } from "csv-parse/sync"
import { prisma } from "../src/lib/prisma"

type WorkCsvRow = {
  title: string
  category?: string
  thumbnail?: string
  techStack?: string
  summary?: string
  siteUrl?: string
  githubUrl?: string
  detailUrl?: string
  featured?: string
  isPublished?: string
}

const csv = fs.readFileSync("data.csv", "utf-8")

const records = parse(csv, {
  columns: true,
  skip_empty_lines: true,
}) as WorkCsvRow[]

function toBool(value?: string, defaultValue = false) {
  if (value == null || value.trim() === "") return defaultValue
  return value.trim().toLowerCase() === "true"
}

function toNullableString(value?: string) {
  if (value == null) return null
  const trimmed = value.trim()
  return trimmed === "" ? null : trimmed
}

async function main() {
  for (const r of records) {
    const title = r.title.trim()

    const exists = await prisma.work.findFirst({
      where: { title },
    })

    if (exists) {
      console.log(`skip: ${title}`)
      continue
    }

    await prisma.work.create({
      data: {
        title,
        category: toNullableString(r.category),
        thumbnail: toNullableString(r.thumbnail),
        techStack: toNullableString(r.techStack),
        summary: toNullableString(r.summary),
        siteUrl: toNullableString(r.siteUrl),
        githubUrl: toNullableString(r.githubUrl),
        detailUrl: toNullableString(r.detailUrl),
        featured: toBool(r.featured, false),
        isPublished: toBool(r.isPublished, true),
      },
    })

    console.log(`created: ${title}`)
  }
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })