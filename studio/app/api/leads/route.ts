import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Stub: wire up email/CRM here. For now, log the qualified lead.
    console.log("[Fís lead]", {
      email: body?.email,
      recommendation: body?.recommendation,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
