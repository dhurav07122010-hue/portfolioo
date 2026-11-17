import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiting map (IP -> timestamp array)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

// Sanitize HTML input to prevent injection in email clients
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown-ip";

    // Rate limiting check
    if (clientIp !== "unknown-ip" && isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many inquiries sent in a short period. Please wait a minute before trying again or reach out directly on WhatsApp.",
        },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    const {
      fullName = "",
      businessName = "",
      email = "",
      phone = "",
      serviceRequired = "",
      description = "",
      honeypot = "",
    } = body;

    // Honeypot check for spam bots
    if (honeypot) {
      // Return benign success to fool bots without executing email dispatch
      return NextResponse.json(
        { success: true, message: "Inquiry received" },
        { status: 200 }
      );
    }

    // Server-side validation
    const trimmedName = String(fullName).trim();
    const trimmedEmail = String(email).trim().toLowerCase();
    const trimmedPhone = String(phone).trim();
    const trimmedService = String(serviceRequired).trim();
    const trimmedDesc = String(description).trim();
    const trimmedBiz = String(businessName).trim();

    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!trimmedPhone || trimmedPhone.length < 8) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid phone or WhatsApp number." },
        { status: 400 }
      );
    }

    if (!trimmedDesc || trimmedDesc.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a project description of at least 10 characters." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_TO_EMAIL || "ds.studio.buissness@gmail.com";
    const senderEmail = process.env.CONTACT_FROM_EMAIL || "DS Studios <onboarding@resend.dev>";
    const resendApiKey = process.env.RESEND_API_KEY;
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Check if at least one email provider is configured
    if (!resendApiKey && !smtpHost && !smtpPass) {
      // In local dev without credentials, provide clear diagnostic error
      return NextResponse.json(
        {
          success: false,
          error: "Email provider not configured on server. Please set RESEND_API_KEY or SMTP credentials in environment variables.",
          diagnostics: {
            resendConfigured: Boolean(resendApiKey),
            smtpConfigured: Boolean(smtpHost && smtpPass),
            targetRecipient: recipientEmail,
          },
        },
        { status: 503 }
      );
    }

    // Clean Indian Phone formatted link
    const cleanPhoneDigits = trimmedPhone.replace(/[^0-9]/g, "");
    const whatsappLink = `https://wa.me/${cleanPhoneDigits.length === 10 ? `91${cleanPhoneDigits}` : cleanPhoneDigits}`;

    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    }).format(new Date());

    // Generate formatted HTML email
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f7f7; margin: 0; padding: 24px; color: #111111; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden; }
    .header { background: #0A0A0A; color: #ffffff; padding: 28px 32px; border-bottom: 2px solid #222222; }
    .brand { font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #888888; font-family: monospace; }
    .title { font-size: 24px; font-weight: 700; margin: 6px 0 0 0; color: #ffffff; }
    .body { padding: 32px; }
    .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .meta-table td { padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; }
    .meta-table td.label { width: 140px; color: #777777; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
    .meta-table td.val { color: #111111; font-weight: 600; }
    .message-box { background: #fafafa; border: 1px solid #e5e5e5; border-left: 3px solid #111111; padding: 20px; margin-top: 16px; border-radius: 4px; }
    .message-box h4 { margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #777777; font-family: monospace; }
    .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #222222; white-space: pre-wrap; }
    .actions { margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e5e5; display: flex; gap: 12px; }
    .btn { display: inline-block; padding: 10px 18px; font-size: 12px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; border-radius: 4px; }
    .btn-primary { background: #111111; color: #ffffff !important; }
    .btn-wa { background: #25D366; color: #ffffff !important; }
    .footer { background: #fafafa; padding: 20px 32px; border-top: 1px solid #e5e5e5; font-size: 11px; color: #888888; font-family: monospace; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="brand">DS® STUDIOS &bull; INCOMING CLIENT INQUIRY</div>
      <h1 class="title">${escapeHtml(trimmedName)}</h1>
    </div>
    <div class="body">
      <table class="meta-table">
        <tr>
          <td class="label">CLIENT NAME</td>
          <td class="val">${escapeHtml(trimmedName)}</td>
        </tr>
        ${trimmedBiz ? `<tr><td class="label">ORGANIZATION</td><td class="val">${escapeHtml(trimmedBiz)}</td></tr>` : ""}
        <tr>
          <td class="label">EMAIL ADDRESS</td>
          <td class="val"><a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #111111;">${escapeHtml(trimmedEmail)}</a></td>
        </tr>
        <tr>
          <td class="label">PHONE / WHATSAPP</td>
          <td class="val"><a href="tel:${escapeHtml(trimmedPhone)}" style="color: #111111;">${escapeHtml(trimmedPhone)}</a> &nbsp;&bull;&nbsp; <a href="${whatsappLink}" style="color: #25D366; font-weight: normal; text-decoration: none;">Chat on WhatsApp &rarr;</a></td>
        </tr>
        <tr>
          <td class="label">SERVICE REQUIRED</td>
          <td class="val">${escapeHtml(trimmedService || "General Web Development")}</td>
        </tr>
        <tr>
          <td class="label">SUBMITTED AT</td>
          <td class="val" style="font-weight: normal; font-size: 13px;">${formattedDate} (IST)</td>
        </tr>
      </table>

      <div class="message-box">
        <h4>Project Requirements &amp; Scope:</h4>
        <p>${escapeHtml(trimmedDesc)}</p>
      </div>

      <div class="actions">
        <a href="mailto:${escapeHtml(trimmedEmail)}?subject=Re:%20DS%20Studios%20Inquiry%20-%20${encodeURIComponent(trimmedService)}" class="btn btn-primary">Reply by Email</a>
        <a href="${whatsappLink}" class="btn btn-wa">Open WhatsApp Chat</a>
      </div>
    </div>
    <div class="footer">
      DS Studios Client Intake System &bull; Direct inquiry forwarded to ${escapeHtml(recipientEmail)}
    </div>
  </div>
</body>
</html>
    `.trim();

    const plainText = `
DS® STUDIOS — NEW CLIENT INQUIRY
================================
Client Name: ${trimmedName}
${trimmedBiz ? `Business: ${trimmedBiz}\n` : ""}Email: ${trimmedEmail}
Phone / WhatsApp: ${trimmedPhone}
Service: ${trimmedService}
Submitted At: ${formattedDate} (IST)

PROJECT REQUIREMENTS & SCOPE:
-----------------------------
${trimmedDesc}

-----------------------------
Reply directly to this email to contact ${trimmedName} (${trimmedEmail}).
Or WhatsApp directly: ${whatsappLink}
    `.trim();

    // 1. Send via Resend REST API if RESEND_API_KEY is present
    if (resendApiKey) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [recipientEmail],
          reply_to: trimmedEmail,
          subject: `New Inquiry from ${trimmedName}: ${trimmedService}`,
          html: emailHtml,
          text: plainText,
        }),
      });

      const resendData = await resendResponse.json().catch(() => ({}));

      if (!resendResponse.ok) {
        console.error("Resend API delivery error:", resendResponse.status, resendData?.message || "Unknown error");
        return NextResponse.json(
          {
            success: false,
            error: resendData?.message || "Email dispatch failed at provider. Please try again or reach out on WhatsApp.",
          },
          { status: resendResponse.status }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Your inquiry has been successfully delivered to DS Studios.",
        id: resendData?.id,
      });
    }

    // 2. Fallback to SMTP if configured
    if (smtpHost && smtpPass) {
      // Lazy load nodemailer to avoid overhead when using Resend
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: smtpUser || recipientEmail,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: senderEmail,
        to: recipientEmail,
        replyTo: trimmedEmail,
        subject: `New Inquiry from ${trimmedName}: ${trimmedService}`,
        html: emailHtml,
        text: plainText,
      });

      return NextResponse.json({
        success: true,
        message: "Your inquiry has been successfully delivered to DS Studios.",
        messageId: info.messageId,
      });
    }

    return NextResponse.json(
      { success: false, error: "Email configuration incomplete." },
      { status: 500 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    console.error("Contact API unexpected error:", message);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please reach us directly via WhatsApp or phone.",
      },
      { status: 500 }
    );
  }
}
