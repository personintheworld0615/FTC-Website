import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, inquiry, message } = body

    const emailContent = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Inquiry Type: ${inquiry}

Message:
${message}
    `.trim()

    // For now, we'll log it and return success
    console.log("[v0] Contact form submission:", emailContent)

    return NextResponse.json({ success: true, message: "Your message has been sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Failed to send message. Please try again." }, { status: 500 })
  }
}
