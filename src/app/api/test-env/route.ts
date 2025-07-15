export async function GET() {
  return new Response(
    JSON.stringify({
      key: process.env.RESEND_API_KEY || "not found",
    }),
    { status: 200 }
  );
}
