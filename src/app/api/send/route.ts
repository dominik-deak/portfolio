import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "../../../../emails/ContactFormEmail";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields: name, email, or message." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "dominik.deak@protonmail.com",
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({ name, email, message }),
      replyTo: email,
    });

    if (error) {
      console.error("Resend Error:", error);
      if (
        error.name === "validation_error" &&
        error.message?.includes("reply_to")
      ) {
        return NextResponse.json(
          {
            message:
              "Please enter a valid email address (e.g., email@example.com).",
          },
          { status: 400 },
        );
      }
      return NextResponse.json(
        { message: "Failed to send email.", error },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully!", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error." },
      { status: 500 },
    );
  }
}
