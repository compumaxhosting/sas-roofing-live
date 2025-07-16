import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Accepts all fields from the ContactForm payload
const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  phone: z.string().optional(),
  service: z.string().optional(),
});

const resend = new Resend("re_S3QztK3z_M8GCkKrwAoQ1zAC51gPrj2ba");

export async function POST(req: Request) {
  const body = await req.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, message, phone, service } = result.data;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mohdabrar41111@gmail.com",
      replyTo: email,
      subject: `Contact Form: ${service || "General Inquiry"}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
