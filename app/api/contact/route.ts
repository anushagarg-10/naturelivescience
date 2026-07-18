import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  let body: {
    name?: string;
    contact?: string;
    type?: string;
    message?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, contact, type, message } = body;

  if (!name || !contact) {
    return NextResponse.json(
      { error: "Name and contact are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not configured yet — fail clearly so the front-end shows an error,
    // and log a hint for the developer.
    console.error("RESEND_API_KEY is not set. Add it to your environment.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || "enquiries@naturelifescience.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    "Nature Life Science <onboarding@resend.dev>";

  const looksLikeEmail = /\S+@\S+\.\S+/.test(contact);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: looksLikeEmail ? contact : undefined,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Contact: ${contact}`,
        `Type: ${type ?? "—"}`,
        "",
        "Message:",
        message || "—",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
