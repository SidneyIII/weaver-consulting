import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, gradeLevel, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Weaver Consulting <onboarding@resend.dev>",
    to: "sidney78910@gmail.com",
    subject: `New intro call request from ${name}`,
    html: `
      <h2>New message from Weaver Consulting site</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Grade Level:</strong> ${gradeLevel}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
