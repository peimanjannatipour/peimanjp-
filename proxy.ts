import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  if (hostname === "loopproof.peimanjp.com" && request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/loopproof", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
