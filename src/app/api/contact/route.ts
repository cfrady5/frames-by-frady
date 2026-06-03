import { NextRequest, NextResponse } from "next/server";

// TODO: Replace console.log with Supabase insert or email service (e.g. Resend) in Phase 6.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      businessName,
      currentWebsite,
      businessDescription,
      services,
      tone,
      tagline,
      websiteContactInfo,
      primaryColor,
      secondaryColor,
      accentColor,
      budgetRange,
      timeline,
      websiteGoal,
      extraNotes,
    } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!businessName || typeof businessName !== "string" || businessName.trim().length === 0) {
      return NextResponse.json({ error: "Business name is required." }, { status: 400 });
    }
    if (!businessDescription || typeof businessDescription !== "string" || businessDescription.trim().length === 0) {
      return NextResponse.json({ error: "Business description is required." }, { status: 400 });
    }
    if (!services || typeof services !== "string" || services.trim().length === 0) {
      return NextResponse.json({ error: "Services / offerings are required." }, { status: 400 });
    }

    console.log("[Contact Form Submission]", {
      name: name.trim(),
      email: email.trim(),
      businessName: businessName.trim(),
      currentWebsite: currentWebsite?.trim() ?? "",
      businessDescription: businessDescription.trim(),
      services: services.trim(),
      tone: tone ?? "",
      tagline: tagline?.trim() ?? "",
      websiteContactInfo: websiteContactInfo?.trim() ?? "",
      primaryColor: primaryColor ?? "#2563eb",
      secondaryColor: secondaryColor ?? "#111827",
      accentColor: accentColor ?? "#f8fafc",
      budgetRange: budgetRange ?? "",
      timeline: timeline ?? "",
      websiteGoal: websiteGoal ?? "",
      extraNotes: extraNotes?.trim() ?? "",
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
