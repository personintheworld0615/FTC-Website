"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function sendContactEmail(formData: {
  name: string
  email: string
  subject: string
  message: string
}) {
  try {
    const validation = contactSchema.safeParse(formData)
    
    if (!validation.success) {
      console.error("[server] Contact form validation failed:", validation.error.flatten())
      return { success: false, error: "Invalid form data provided. Please check your inputs." }
    }

    const { name, email, subject, message } = validation.data

    const { data, error } = await resend.emails.send({
      from: "Rust in Piece Contact Form <onboarding@resend.dev>",
      to: "aaravg.0615@gmail.com", // Using verified email for testing mode
      replyTo: email,
      subject: `[Rust in Piece Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF8C00; border-bottom: 2px solid #FF8C00; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #888;">
            This email was sent from the Rust in Piece FTC Team website contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return { success: false, error: error.message }
    }

    console.log("[v0] Email sent successfully:", data)
    return { success: true, data }
  } catch (error) {
    console.error("[v0] Failed to send email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
