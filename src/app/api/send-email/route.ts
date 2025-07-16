import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Define Zod schema for validation
const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
  service: z.string(),
});

// Initialize Resend API
const resend = new Resend("re_S3QztK3z_M8GCkKrwAoQ1zAC51gPrj2ba");

export async function POST(req: Request) {
  // Parse request body
  const body = await req.json();
  const result = schema.safeParse(body);

  // Return validation error if schema fails
  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.flatten() },
      { status: 400 }
    );
  }

  // Destructure validated data
  const { name, email, phone, message, service } = result.data;

  try {
    // Send email with Resend
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "wassay@compumaxllc.com", // Replace with your email
      replyTo: email,
      subject: `New Quote Request: ${service}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
