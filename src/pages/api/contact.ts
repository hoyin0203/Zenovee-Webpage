import type { APIRoute } from "astro";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  company: z.string().max(200).optional().or(z.literal("")),
  topic: z
    .enum(["zenmerch-demo", "zenmerch-support", "services", "partnership", "other"])
    .optional()
    .or(z.literal("")),
  message: z.string().min(5).max(5000),
  website: z.string().optional().or(z.literal("")),
});

function isFormContentType(ct: string | null) {
  if (!ct) return false;
  return ct.includes("application/x-www-form-urlencoded") || ct.includes("multipart/form-data");
}

async function parseBody(request: Request) {
  const ct = request.headers.get("content-type");

  if (ct?.includes("application/json")) {
    return (await request.json()) as unknown;
  }

  if (isFormContentType(ct)) {
    const form = await request.formData();
    return Object.fromEntries(form.entries());
  }

  // fallback: try text
  return { message: await request.text() };
}

async function sendViaResend(input: z.infer<typeof schema>) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Zenovee <no-reply@zenovee.com>";
  if (!key || !to) return { ok: false as const, reason: "missing_config" as const };

  const subject = `[Zenovee Contact] ${input.topic || "message"} — ${input.name}`;
  const html = `
    <div style="font-family: ui-sans-serif, system-ui; line-height: 1.5">
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(input.company || "-")}</p>
      <p><strong>Topic:</strong> ${escapeHtml(input.topic || "-")}</p>
      <hr />
      <pre style="white-space: pre-wrap">${escapeHtml(input.message)}</pre>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("Resend error:", res.status, text);
    return { ok: false as const, reason: "provider_error" as const };
  }

  return { ok: true as const };
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const raw = await parseBody(request);
    const input = schema.parse(raw);

    // basic bot check
    if (input.website && input.website.trim().length > 0) {
      return new Response(null, { status: 204 });
    }

    const resend = await sendViaResend(input);
    if (!resend.ok) {
      // If not configured, we still redirect to a success message to avoid a broken UX during early setup.
      // In production, set RESEND_API_KEY + CONTACT_TO_EMAIL to receive the messages.
      console.warn("Contact provider not configured or failed:", resend.reason);
    }

    return Response.redirect(new URL("/contact?sent=1", request.url), 303);
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
};

