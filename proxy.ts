import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  const pathname = request.nextUrl.pathname;

  if (hostname === "loopproof.peimanjp.com" && pathname === "/") {
    return NextResponse.rewrite(new URL("/loopproof", request.url));
  }

  if ((hostname === "peimanjp.com" || hostname === "www.peimanjp.com") && pathname === "/loopproof") {
    return NextResponse.redirect("https://loopproof.peimanjp.com/", 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/loopproof"],
};
