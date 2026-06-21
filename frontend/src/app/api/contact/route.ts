// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your secret API key safely stored on the server environment
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation check
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required form field values." },
        { status: 400 }
      );
    }

    // Trigger the email sending sequence via Resend
    const data = await resend.emails.send({
      from: "URM Contact Form <onboarding@resend.dev>", // Resend gives you this default domain for testing
      to: ["mugeshsamraj@gmail.com"], // Your target destination email
      subject: `[URM Enquiry] ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; rounded: 8px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Website Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="white-space: pre-wrap;"><strong>Message Details:</strong><br/><br/>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("Internal Resend API Server Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to dispatch outgoing message email routing." },
      { status: 500 }
    );
  }
}