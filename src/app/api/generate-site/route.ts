import { NextRequest, NextResponse } from "next/server";
import { validateLauncherPayload, sanitizeProjectName } from "@/lib/validation";
import { sendReadyForReviewEmail, sendErrorEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  // Auth check must be first — before any expensive work
  const secret = req.headers.get("x-webhook-secret");
  if (!secret || secret !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  let rawBody: Record<string, unknown> = {};
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON." }, { status: 400 });
  }

  try {
    const result = validateLauncherPayload(rawBody);
    if ("error" in result) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    const { payload } = result;
    const submittedAt = typeof rawBody.submittedAt === "string" ? rawBody.submittedAt : new Date().toISOString();
    const projectName = sanitizeProjectName(payload.businessName);

    console.log("[generate-site] Received:", {
      businessName: payload.businessName,
      projectName,
      tone: payload.tone,
      websiteGoal: payload.websiteGoal,
      submittedAt,
    });

    // TODO: Implement the full generation pipeline:
    //   1. Call Claude API to generate website copy and structure
    //   2. Scaffold project files from template
    //   3. Create GitHub repo (projectName) and push files
    //   4. Trigger Vercel deployment and poll for URL
    //   Inputs available: payload.businessDescription, payload.services,
    //   payload.tone, payload.primaryColor, payload.secondaryColor,
    //   payload.accentColor, payload.websiteGoal, payload.tagline, etc.
    const deploymentUrl = "";
    const repoUrl = "";

    // Send "ready for review" email once deployment URL is known
    if (deploymentUrl) {
      try {
        await sendReadyForReviewEmail({
          businessName: payload.businessName,
          name: payload.name,
          email: payload.email,
          deploymentUrl,
          repoUrl,
          projectName,
          primaryColor: payload.primaryColor,
          secondaryColor: payload.secondaryColor,
          accentColor: payload.accentColor,
        });
      } catch (emailErr) {
        // Don't fail — site is already deployed even if the email bounces
        console.error("[generate-site] Ready-for-review email failed:", emailErr);
      }
    }

    return NextResponse.json({ success: true, deploymentUrl, repoUrl, projectName });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[generate-site] Unexpected error:", msg);
    try {
      await sendErrorEmail({
        businessName: String(rawBody.businessName ?? "Unknown"),
        name: String(rawBody.name ?? "Unknown"),
        email: String(rawBody.email ?? "Unknown"),
        stepFailed: "generate-site handler",
        errorMessage: msg,
        payload: rawBody,
        submittedAt: new Date().toISOString(),
      });
    } catch {
      // swallow
    }
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}
