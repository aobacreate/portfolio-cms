import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const password = formData.get("password")

  if (typeof password !== "string") {
    return NextResponse.redirect(new URL("/admin/login", req.url))
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.redirect(new URL("/admin/login?error=1", req.url))
  }

  const response = NextResponse.redirect(new URL("/admin", req.url))

  response.cookies.set("admin_session", process.env.ADMIN_SESSION_TOKEN ?? "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  })

  return response
}