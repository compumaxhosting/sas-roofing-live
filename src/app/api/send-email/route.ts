import { Resend } from "resend";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("🔄 Received a POST request to /api/send-email");

    console.log("🧪 RESEND_API_KEY:", process.env.RESEND_API_KEY);
    console.log("📤 EMAIL_FROM:", process.env.EMAIL_FROM);
    console.log("📥 EMAIL_TO:", process.env.EMAIL_TO);

    const body = await req.json();
    console.log("📝 Request Body:", body);

    const { name, email, phone, message, service } = body;

    const resend = new Resend(process.env.RESEND_API_KEY);

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
      to: process.env.EMAIL_TO!.split(",").map((e) => e.trim()),
      subject: "New Quote Request from Website",
      html,
    });

    if (error) {
      console.error("❌ Resend API Error:", error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500 }
      );
    }

    console.log("✅ Email sent successfully");
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (err) {
    console.error("❗ Unexpected error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Server error" }),
      { status: 500 }
    );
  }
}
