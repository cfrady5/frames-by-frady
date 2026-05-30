import { NextRequest, NextResponse } from "next/server";

// TODO: Replace console.log with Supabase insert or email service (e.g. Resend) in Phase 6.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, company, currentUrl, budget, timeline, need, message } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }

    // Placeholder: log submission server-side
    console.log("[Contact Form Submission]", {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() ?? "",
      currentUrl: currentUrl?.trim() ?? "",
      budget: budget ?? "",
      timeline: timeline ?? "",
      need: need ?? "",
      message: message?.trim() ?? "",
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
