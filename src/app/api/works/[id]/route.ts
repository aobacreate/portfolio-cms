import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(
  _req: Request,
  { params }: Props
) {
  const { id } = await params;

  await prisma.work.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ success: true });
}

export async function GET(_req: Request, { params }: Props) {
  try {
    const { id } = await params;
    const workId = Number(id);

    if (Number.isNaN(workId)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const work = await prisma.work.findUnique({
      where: { id: workId },
    });

    if (!work) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(work);
  } catch (error) {
    console.error("GET /api/works/[id] failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch work" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, { params }: Props) {
  try {
    const { id } = await params;
    const workId = Number(id);

    if (Number.isNaN(workId)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const body = await req.json();

    const updated = await prisma.work.update({
      where: { id: workId },
      data: {
        title: body.title,
        category: body.category || null,
        summary: body.summary || null,
        techStack: body.techStack || null,
        siteUrl: body.siteUrl || null,
        githubUrl: body.githubUrl || null,
        detailUrl: body.detailUrl || null,
        enUrl: body.enUrl || null,
        enSummary: body.enSummary || null,
        featured: body.featured,
        isPublished: body.isPublished,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PATCH /api/works/[id] failed:", error);
    return NextResponse.json(
      { error: "Failed to update work" },
      { status: 500 }
    );
  }
}
