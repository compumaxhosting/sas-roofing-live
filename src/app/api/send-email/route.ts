import { Resend } from "resend";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received request body:", body);

    const { name, email, phone, message, service } = body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!process.env.EMAIL_TO || !process.env.EMAIL_FROM) {
      console.error("Missing EMAIL_FROM or EMAIL_TO environment variables.");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing email environment variables",
        }),
        { status: 500 }
      );
    }

    const recipients = process.env.EMAIL_TO.split(",").map((e) => e.trim());

    const html = `
      <h2>New Service Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br />${message}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: recipients,
      subject: "New Quote Request from Website",
      html,
    });

    if (error) {
      console.error("Resend API error:", error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (err: unknown) {
    console.error("Unexpected error in send-email route:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Server error" }),
      { status: 500 }
    );
  }
}
