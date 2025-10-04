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
      to: "rustinpieceftc@gmail.com",
      replyTo: formData.email,
      subject: `Contact Form: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
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
