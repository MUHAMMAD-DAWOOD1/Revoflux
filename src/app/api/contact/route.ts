import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message, type = "contact", honeypot } = body;

    // Silent honeypot check for spam bots
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Message processed" }, { status: 200 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (type === "contact" && (!name || !message)) {
      return NextResponse.json(
        { success: false, error: "Name and message are required fields." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "4e1a676b-313f-4ae0-ae4b-9394fedd4404";

    const subject = type === "newsletter"
      ? `Revoflux Newsletter Subscription: ${email}`
      : `Revoflux Project Inquiry from ${name} (${company || "No Company Specified"})`;

    const payload = {
      access_key: accessKey,
      subject,
      from_name: "Revoflux Website Portal",
      email,
      name: name || "Subscriber",
      company: company || "N/A",
      service: service || "General Inquiry",
      message: message || `Newsletter subscription signup for email: ${email}`,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: "Submission successful" });
    } else {
      console.error("Web3Forms submission failed:", data);
      return NextResponse.json(
        { success: false, error: data.message || "Failed to submit message." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
