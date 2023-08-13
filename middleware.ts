// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/",
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host");

  if (
    host?.includes(".localhost:3000") ??
    host?.includes(`.${process.env.VERCEL_URL}`)
  ) {
    const subdomain = host.split(".")[0];

    return NextResponse.rewrite(new URL(`/project/${subdomain}`, url));
  }

  return NextResponse.next();
}
