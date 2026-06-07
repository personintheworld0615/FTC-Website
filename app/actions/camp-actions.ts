"use server"

import { z } from "zod"
import { createClient } from "@/lib/supabase/server"

const campRegistrationSchema = z.object({
  childName: z.string().min(2, "Student's name must be at least 2 characters"),
  gradeLevel: z.string().min(1, "Grade level is required"),
  parentName: z.string().min(2, "Parent/Guardian name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  notes: z.string().optional(),
})

export async function registerCamp(formData: {
  childName: string
  gradeLevel: string
  parentName: string
  email: string
  phone: string
  notes?: string
}) {
  try {
    const validation = campRegistrationSchema.safeParse(formData)

    if (!validation.success) {
      console.error("[server] Camp registration validation failed:", validation.error.flatten())
      return { success: false, error: "Invalid form data provided. Please check all fields." }
    }

    const data = validation.data

    // Check if Supabase keys exist in process.env
    const hasSupabase = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!hasSupabase) {
      console.warn("[server] Supabase keys missing. Simulating registration successfully (development mode).")
      // Wait 1 second to simulate database roundtrip delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return { success: true, mock: true }
    }

    const supabase = await createClient()

    const { error } = await supabase.from("camp_registrations").insert([
      {
        child_name: data.childName,
        grade_level: data.gradeLevel,
        parent_name: data.parentName,
        email: data.email,
        phone: data.phone,
        notes: data.notes || "",
      },
    ])

    if (error) {
      console.error("[server] Supabase insert error:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("[server] Registration action crash:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}
