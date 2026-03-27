"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: {
  name: string
  email: string
  subject: string
  message: string
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Rust in Piece Contact Form <onboarding@resend.dev>",
      to: "aaravg.0615@gmail.com", // Using verified email for testing mode
      replyTo: formData.email,
      subject: `[Rust in Piece Contact] ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF8C00; border-bottom: 2px solid #FF8C00; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${formData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${formData.subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${formData.message.replace(/\n/g, "<br>")}</p>
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
