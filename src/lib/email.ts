import { Resend } from "resend";
import type { LauncherPayload } from "./validation";

const resend = new Resend(process.env.RESEND_API_KEY!);
const FROM = process.env.FROM_EMAIL ?? "Frames by Frady <no-reply@framesbyfrady.com>";
const OWNER = process.env.OWNER_EMAIL ?? "contact@framesbyfrady.com";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function swatch(hex: string): string {
  return `<span style="display:inline-block;width:14px;height:14px;background:${esc(hex)};border:1px solid #d1d5db;border-radius:3px;vertical-align:middle;margin-right:6px;"></span>`;
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:5px 14px 5px 0;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top;font-weight:500;">${label}</td>
    <td style="padding:5px 0;color:#111827;font-size:13px;word-break:break-word;">${value}</td>
  </tr>`;
}

function section(title: string, rows: string): string {
  if (!rows.trim()) return "";
  return `
    <div style="margin-bottom:24px;">
      <div style="font-size:11px;font-weight:700;color:#2563eb;text-transform:uppercase;letter-spacing:0.08em;padding-bottom:6px;border-bottom:1px solid #e5e7eb;margin-bottom:10px;">${title}</div>
      <table style="border-collapse:collapse;width:100%;">${rows}</table>
    </div>`;
}

// ─── Intake email ────────────────────────────────────────────────────────────

export async function sendIntakeEmail(
  payload: LauncherPayload & { submittedAt: string }
): Promise<void> {
  const {
    name, email, businessName, currentWebsite,
    businessDescription, services, tone, websiteGoal, tagline,
    primaryColor, secondaryColor, accentColor,
    budgetRange, timeline, websiteContactInfo, extraNotes, submittedAt,
  } = payload;

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f3f4f6;margin:0;padding:24px;">
<div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">
  <div style="background:#0a0f1c;padding:24px 28px;">
    <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Frames by Frady</div>
    <div style="font-size:18px;font-weight:700;color:#ffffff;">New Website Launcher Request</div>
    <div style="font-size:12px;color:#6b7280;margin-top:4px;">${esc(submittedAt)}</div>
  </div>
  <div style="padding:28px;">
    ${section("Client Info", [
      row("Name", esc(name)),
      row("Email", `<a href="mailto:${esc(email)}" style="color:#2563eb;">${esc(email)}</a>`),
      row("Business", esc(businessName)),
      currentWebsite ? row("Current Site", `<a href="${esc(currentWebsite)}" style="color:#2563eb;">${esc(currentWebsite)}</a>`) : "",
    ].join(""))}
    ${section("Website Direction", [
      row("Description", esc(businessDescription).replace(/\n/g, "<br>")),
      row("Services", esc(services).replace(/\n/g, "<br>")),
      row("Tone", esc(tone)),
      row("Goal", esc(websiteGoal)),
      tagline ? row("Tagline", esc(tagline)) : "",
    ].join(""))}
    ${section("Brand Colors", [
      row("Primary", `${swatch(primaryColor)}<code style="font-size:12px;color:#374151;">${esc(primaryColor)}</code>`),
      row("Secondary", `${swatch(secondaryColor)}<code style="font-size:12px;color:#374151;">${esc(secondaryColor)}</code>`),
      row("Accent", `${swatch(accentColor)}<code style="font-size:12px;color:#374151;">${esc(accentColor)}</code>`),
    ].join(""))}
    ${section("Project Details", [
      budgetRange ? row("Budget", esc(budgetRange)) : "",
      timeline ? row("Timeline", esc(timeline)) : "",
      websiteContactInfo ? row("Contact Info", esc(websiteContactInfo).replace(/\n/g, "<br>")) : "",
      extraNotes ? row("Notes", esc(extraNotes).replace(/\n/g, "<br>")) : "",
    ].join(""))}
  </div>
</div>
</body>
</html>`;

  await resend.emails.send({
    from: FROM,
    to: OWNER,
    subject: `New Website Launcher Request: ${businessName}`,
    html,
  });
}

// ─── Ready-for-review email ───────────────────────────────────────────────────

export type ReviewData = {
  businessName: string;
  name: string;
  email: string;
  deploymentUrl: string;
  repoUrl: string;
  projectName: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
};

export async function sendReadyForReviewEmail(data: ReviewData): Promise<void> {
  const {
    businessName, name, email,
    deploymentUrl, repoUrl, projectName,
    primaryColor, secondaryColor, accentColor,
  } = data;

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f3f4f6;margin:0;padding:24px;">
<div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">
  <div style="background:#064e3b;padding:24px 28px;">
    <div style="font-size:11px;color:#6ee7b7;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Frames by Frady</div>
    <div style="font-size:18px;font-weight:700;color:#ffffff;">Website Ready for Review</div>
  </div>
  <div style="padding:28px;">
    ${section("Business", [row("Name", esc(businessName))].join(""))}
    ${section("Client", [
      row("Name", esc(name)),
      row("Email", `<a href="mailto:${esc(email)}" style="color:#2563eb;">${esc(email)}</a>`),
    ].join(""))}
    ${section("Deployment", [
      deploymentUrl ? row("Preview URL", `<a href="${esc(deploymentUrl)}" style="color:#2563eb;">${esc(deploymentUrl)}</a>`) : "",
      repoUrl ? row("GitHub Repo", `<a href="${esc(repoUrl)}" style="color:#2563eb;">${esc(repoUrl)}</a>`) : "",
      projectName ? row("Project Name", `<code style="font-size:12px;color:#374151;">${esc(projectName)}</code>`) : "",
    ].join(""))}
    ${section("Brand Colors", [
      row("Primary", `${swatch(primaryColor)}<code style="font-size:12px;color:#374151;">${esc(primaryColor)}</code>`),
      row("Secondary", `${swatch(secondaryColor)}<code style="font-size:12px;color:#374151;">${esc(secondaryColor)}</code>`),
      row("Accent", `${swatch(accentColor)}<code style="font-size:12px;color:#374151;">${esc(accentColor)}</code>`),
    ].join(""))}
    <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin-top:8px;">
      <div style="font-size:11px;font-weight:700;color:#065f46;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">Next Steps</div>
      <ul style="margin:0;padding-left:18px;color:#065f46;font-size:13px;line-height:1.9;">
        <li>Review the generated website at the preview URL above</li>
        <li>Check copy, layout, colors, and mobile responsiveness</li>
        <li>Make manual edits before sending to the client</li>
      </ul>
    </div>
  </div>
</div>
</body>
</html>`;

  await resend.emails.send({
    from: FROM,
    to: OWNER,
    subject: `Website Ready for Review: ${businessName}`,
    html,
  });
}

// ─── Error notification email ─────────────────────────────────────────────────

export type ErrorEmailData = {
  businessName: string;
  name: string;
  email: string;
  stepFailed: string;
  errorMessage: string;
  payload: Record<string, unknown>;
  submittedAt: string;
};

export async function sendErrorEmail(data: ErrorEmailData): Promise<void> {
  const { businessName, name, email, stepFailed, errorMessage, payload, submittedAt } = data;

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f3f4f6;margin:0;padding:24px;">
<div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">
  <div style="background:#7f1d1d;padding:24px 28px;">
    <div style="font-size:11px;color:#fca5a5;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Frames by Frady — Error</div>
    <div style="font-size:18px;font-weight:700;color:#ffffff;">Website Launcher Error</div>
  </div>
  <div style="padding:28px;">
    ${section("Request", [
      row("Business", esc(businessName)),
      row("Client", esc(name)),
      row("Email", `<a href="mailto:${esc(email)}" style="color:#2563eb;">${esc(email)}</a>`),
      row("Submitted", esc(submittedAt)),
    ].join(""))}
    ${section("Error Details", [
      row("Step Failed", esc(stepFailed)),
      row("Error", `<code style="background:#fef2f2;padding:2px 6px;border-radius:4px;color:#dc2626;font-size:12px;">${esc(errorMessage)}</code>`),
    ].join(""))}
    <div style="margin-top:8px;">
      <div style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">Submitted Payload</div>
      <pre style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;padding:12px;font-size:11px;overflow:auto;white-space:pre-wrap;color:#374151;">${esc(JSON.stringify(payload, null, 2))}</pre>
    </div>
  </div>
</div>
</body>
</html>`;

  await resend.emails.send({
    from: FROM,
    to: OWNER,
    subject: `Website Launcher Error: ${businessName}`,
    html,
  });
}
