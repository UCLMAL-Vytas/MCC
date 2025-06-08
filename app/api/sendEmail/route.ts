import { NextResponse } from "next/server";
import * as sgMail from "@sendgrid/mail";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json(); // Parse the JSON body
    if (!message) {
      return NextResponse.json(
        { message: "Text is required" },
        { status: 400 },
      );
    }

    if (!process.env.SENDGRID_API_KEY) {
      throw new Error("SENDGRID_API_KEY is not defined");
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "info@moroccancannabis.co",
      from: "info@moroccancannabis.co",
      subject: "Your Inquiry on MoroccanCannabis.co",
      replyTo: { email },
      text: message,
      html: `<p>${name} </p><p>email:${email}</p><p>wrote the following message on MoroccanCannabis.co</p><br/><p>${message}</p>`,
      trackingSettings: {
        clickTracking: {
          enable: true,
          enableText: true,
        },
        openTracking: {
          enable: true,
        },
      },
    };

    await sgMail.send(msg);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", error: `${error}` },
      { status: 500 },
    );
  }
}
