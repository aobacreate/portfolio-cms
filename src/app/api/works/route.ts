import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const works = await prisma.work.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(works);
  } catch (error) {
    console.error("GET /api/works failed:", error);

    return NextResponse.json(
      { error: "Failed to fetch works" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const created = await prisma.work.create({
      data: {
        title: body.title,
        category: body.category || null,
        thumbnail: body.thumbnail || null,
        techStack: body.techStack || null,
        summary: body.summary || null,
        siteUrl: body.siteUrl || null,
        githubUrl: body.githubUrl || null,
        detailUrl: body.detailUrl || null,
        featured: body.featured ?? false,
        isPublished: body.isPublished ?? true,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("POST /api/works failed:", error);

    return NextResponse.json(
      { error: "Failed to create work" },
      { status: 500 }
    );
  }
}