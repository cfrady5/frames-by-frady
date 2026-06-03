const HEX_RE = /^#[0-9A-Fa-f]{6}$/;

export type LauncherPayload = {
  name: string;
  email: string;
  businessName: string;
  currentWebsite: string;
  businessDescription: string;
  services: string;
  tone: string;
  tagline: string;
  websiteContactInfo: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  budgetRange: string;
  timeline: string;
  websiteGoal: string;
  extraNotes: string;
};

export function validateLauncherPayload(
  body: Record<string, unknown>
): { error: string } | { payload: LauncherPayload } {
  const required: [unknown, string][] = [
    [body.name, "Name is required."],
    [body.email, "Valid email is required."],
    [body.businessName, "Business name is required."],
    [body.businessDescription, "Business description is required."],
    [body.services, "Services / offerings are required."],
    [body.tone, "Preferred tone is required."],
    [body.websiteGoal, "Website goal is required."],
    [body.primaryColor, "Primary color is required."],
    [body.secondaryColor, "Secondary color is required."],
    [body.accentColor, "Accent color is required."],
  ];

  for (const [value, message] of required) {
    if (!value || typeof value !== "string" || value.trim().length === 0) {
      return { error: message };
    }
  }

  if (!String(body.email).includes("@")) {
    return { error: "Valid email is required." };
  }

  for (const key of ["primaryColor", "secondaryColor", "accentColor"] as const) {
    if (!HEX_RE.test(String(body[key]))) {
      return { error: `${key.replace("Color", " color")} must be a valid hex code (e.g. #2563eb).` };
    }
  }

  return {
    payload: {
      name: String(body.name).trim(),
      email: String(body.email).trim().toLowerCase(),
      businessName: String(body.businessName).trim(),
      currentWebsite: String(body.currentWebsite ?? "").trim(),
      businessDescription: String(body.businessDescription).trim().slice(0, 5000),
      services: String(body.services).trim().slice(0, 2000),
      tone: String(body.tone).trim(),
      tagline: String(body.tagline ?? "").trim().slice(0, 500),
      websiteContactInfo: String(body.websiteContactInfo ?? "").trim().slice(0, 1000),
      primaryColor: String(body.primaryColor).trim().toLowerCase(),
      secondaryColor: String(body.secondaryColor).trim().toLowerCase(),
      accentColor: String(body.accentColor).trim().toLowerCase(),
      budgetRange: String(body.budgetRange ?? "").trim(),
      timeline: String(body.timeline ?? "").trim(),
      websiteGoal: String(body.websiteGoal).trim(),
      extraNotes: String(body.extraNotes ?? "").trim().slice(0, 2000),
    },
  };
}

export function sanitizeProjectName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50);
}
