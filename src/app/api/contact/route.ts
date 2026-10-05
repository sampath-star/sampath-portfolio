import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Create transporter with Gmail - Uses App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sampathhebbar07@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD, // You will add this in .env
      },
    });

    // Email to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <sampathhebbar07@gmail.com>`,
      to: "sampathhebbar07@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message: ${subject || "No Subject"} - from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 12px;">
          <h2 style="color:#0091D5;">New Message from Portfolio</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Subject:</b> ${subject}</p>
          <p><b>Message:</b></p>
          <p style="background:#f5f5f5; padding:15px; border-radius:8px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
