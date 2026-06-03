import { NextRequest, NextResponse } from "next/server";
import { validateLauncherPayload } from "@/lib/validation";
import { sendIntakeEmail, sendErrorEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = validateLauncherPayload(body);
    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const { payload } = result;
    const submittedAt = new Date().toISOString();

    // Send intake email — non-fatal if it fails
    let emailWarning: string | undefined;
    try {
      await sendIntakeEmail({ ...payload, submittedAt });
    } catch (err) {
      console.error("[contact] Intake email failed:", err);
      emailWarning = "Intake email could not be sent.";
    }

    // Forward to website builder webhook
    const webhookUrl = process.env.WEBSITE_LAUNCHER_WEBHOOK_URL;
    if (!webhookUrl) {
      console.warn("[contact] WEBSITE_LAUNCHER_WEBHOOK_URL is not configured.");
      return NextResponse.json({
        success: true,
        ...(emailWarning ? { warning: emailWarning } : {}),
      });
    }

    const webhookPayload = {
      source: "framesbyfrady-website-launcher",
      submittedAt,
      ...payload,
    };

    let webhookRes: Response;
    try {
      webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-webhook-secret": process.env.WEBHOOK_SECRET ?? "",
        },
        body: JSON.stringify(webhookPayload),
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[contact] Webhook request failed:", msg);
      try {
        await sendErrorEmail({
          businessName: payload.businessName,
          name: payload.name,
          email: payload.email,
          stepFailed: "Website builder webhook request",
          errorMessage: msg,
          payload: webhookPayload,
          submittedAt,
        });
      } catch (e) {
        console.error("[contact] Error email failed:", e);
      }
      return NextResponse.json(
        { error: "Website builder is unavailable. Please try again later." },
        { status: 502 }
      );
    }

    if (!webhookRes.ok) {
      const text = await webhookRes.text().catch(() => webhookRes.statusText);
      console.error(`[contact] Webhook returned ${webhookRes.status}:`, text);
      try {
        await sendErrorEmail({
          businessName: payload.businessName,
          name: payload.name,
          email: payload.email,
          stepFailed: `Website builder responded with HTTP ${webhookRes.status}`,
          errorMessage: text,
          payload: webhookPayload,
          submittedAt,
        });
      } catch {
        // swallow secondary failure
      }
      return NextResponse.json(
        { error: "Website builder returned an error. Our team has been notified." },
        { status: 502 }
      );
    }

    let builderData: { success?: boolean; deploymentUrl?: string; repoUrl?: string; projectName?: string } = {};
    try {
      builderData = await webhookRes.json();
    } catch {
      // builder returned non-JSON — treat as success with no URL
    }

    return NextResponse.json({
      success: true,
      ...(emailWarning ? { warning: emailWarning } : {}),
      ...(builderData.deploymentUrl ? { deploymentUrl: builderData.deploymentUrl } : {}),
    });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
