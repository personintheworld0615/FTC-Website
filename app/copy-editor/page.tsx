import { promises as fs } from "fs"
import path from "path"
import { CopyEditorDashboard } from "./copy-editor-dashboard"

export default async function CopyEditorPage() {
  const filePath = path.join(process.cwd(), "lib", "copy.json")
  const fileContent = await fs.readFile(filePath, "utf8")
  const initialCopy = JSON.parse(fileContent)

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#2B2421]">
      <CopyEditorDashboard initialCopy={initialCopy} />
    </div>
  )
}
