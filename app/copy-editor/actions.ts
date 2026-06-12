"use server"

import { promises as fs } from "fs"
import path from "path"
import { revalidatePath } from "next/cache"

export async function saveCopyAction(formData: FormData) {
  try {
    const rawData = formData.get("copyData")
    if (!rawData) {
      return { success: false, error: "No data provided" }
    }
    const data = JSON.parse(rawData as string)
    const filePath = path.join(process.cwd(), "lib", "copy.json")
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8")
    
    // Clear next.js cache for the home page and copy editor
    revalidatePath("/")
    revalidatePath("/copy-editor")
    
    return { success: true }
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to save data" }
  }
}
