import { NextResponse } from "next/server";

// Developer note: wire this to your CRM, email service, or Slack webhook.
export async function POST(request: Request) {
  const body = await request.json();
  console.log("[Fís contact]", body);
  return NextResponse.json({ ok: true });
}
