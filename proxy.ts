import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, hasLocale, type Locale } from "./app/_i18n/config";

function getLocale(request: NextRequest): Locale {
    const header = request.headers.get("accept-language") ?? "";
    const preferred = header
        .split(",")
        .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
    return preferred.find(hasLocale) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
    return NextResponse.redirect(new URL(`/${getLocale(request)}`, request.url));
}

export const config = {
  matcher: "/",
};