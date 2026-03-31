import { NextResponse } from "next/server"
import { z } from "zod"

const contactApiSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().optional(),
  inquiry: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = contactApiSchema.safeParse(body)

    if (!validation.success) {
      console.error("[api] Validation failed:", validation.error.flatten())
      return NextResponse.json({ 
        success: false, 
        message: "Invalid Request: Validation failed", 
        errors: validation.error.flatten().fieldErrors 
      }, { status: 400 })
    }

    const { firstName, lastName, email, phone, inquiry, message } = validation.data

    const emailContent = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Inquiry Type: ${inquiry || "General"}

Message:
${message}
    `.trim()

    // For now, we'll log it and return success
    console.log("[v0] Contact form submission (Zod Verified):", emailContent)

    return NextResponse.json({ success: true, message: "Your message has been sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Failed to send message. Please try again." }, { status: 500 })
  }
}
