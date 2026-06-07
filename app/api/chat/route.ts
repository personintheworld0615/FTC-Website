import { NextResponse } from "next/server"

// Simple in-memory sliding window rate limiter
// Key: IP, Value: Array of timestamps
const rateLimitMap = new Map<string, number[]>()
const LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS = 6 // Max 6 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) || []

  // Filter timestamps to only keep those within the window
  const validTimestamps = timestamps.filter((timestamp) => now - timestamp < LIMIT_WINDOW_MS)

  if (validTimestamps.length >= MAX_REQUESTS) {
    return true
  }

  validTimestamps.push(now)
  rateLimitMap.set(ip, validTimestamps)
  return false
}

const SYSTEM_PROMPT = `
You are the official AI assistant for FTC Team 19772 "Rust in Piece" from the Princeton STEM Academy.
Your goal is to represent the team professionally, dynamically, and warmly to potential sponsors, parents, students, mentors, and FIRST judges.

Guidelines for your personality and content:
1. Tone: High-performance, highly technical, friendly, precise, and premium.
2. Formatting: Use clean markdown, short paragraphs, bold text for emphasis, and organized lists.
3. CRITICAL RULE: Do NOT use any emojis under any circumstances to maintain a premium, clean, editorial Stripe/Apple-like feel.
4. Keep answers concise, helpful, and direct. Limit responses to 2-3 short paragraphs (maximum 150 words) to ensure they fit comfortably in our visual chat container without being truncated.

Team Context & Facts:
- Team Name: FTC Team 19772 "Rust in Piece"
- School: Princeton STEM Academy (Plainsboro, NJ)
- Founded: 2023
- Members: 17 dedicated high school and middle school students.
- Leadership:
  * Rohin K (Captain, 11th Grade): Leadership, Strategy, Team Management.
  * Chinmay C (Co-Captain, 9th Grade): Leadership, CAD, Design.
  * Krish S (Programming Lead, 10th Grade): Java programming, Autonomous period, Control Systems.
  * Aarav G (Business Lead, 9th Grade): Outreach, Sponsorships, Marketing.
  * Srihaan B (Mechanical Lead, 10th Grade): CAD, Assembly, Engineering.
  * Ishana M (Outreach Captain, 11th Grade): Community engagement, social media, events.
- Departments: Programming, Mechanical/CAD, and Business/Outreach.
- Mentors:
  * Dr. Rogers: Founder of Princeton STEM Academy. Focuses on outreach, fundraising, and organizational development.
  * Dr. Slemmons: Biomedical Engineer at Johnson & Johnson. Mentors in robot assembly, mechanical fabrication, and design validation.
  * Mr. Levy: Industry Professional. Mentors in physics calculations, automation programming, and hands-on fabrication.
  * Plus various technical/strategy advisors from NJIT (Ed Chan), Onshape (Prashant Gupta), Coinbase (Aarush Sharma), RIMOWA (Siddharth Reddy), Knowlify (Ritam Rana), and BNY Mellon (James Percardo, Amitra Mahapatro, Abhay Navale, Lavana Stalin).
- Robot Design & Engineering:
  * CAD Platform: Solid part modeling and virtual assemblies designed in Onshape.
  * Subsystems: Custom shooter, wide intake mechanism, and vertical linear slide system.
  * Odometry & Control: Uses odometry (ODO) tracking in both autonomous and teleoperated modes. Features heading lock controls, feedback loops, waypoint navigation, and autonomous loop-time optimizations.
  * Subsystem engineering reviews completed by FIRST Alumni advisors.
- Community Outreach:
  * FLL Mentorship: Weekly mentoring for 66 students across Dragoneers #60791 and TechNoLogic #66295, leading both FLL teams to the State Championships. Also established a new FLL Explore team for grades 1-3.
  * CS & AI Summer Camp: Scheduled for July 20 - July 24 at Princeton STEM Academy (grades K-7). Curriculum includes Scratch, Python, computer vision models, and sensor-guided automation.
  * Summer Battlebots Camp: Week-long camp introducing elementary students (grades 1-3) to structural mechanics and autonomous logic using LEGO EV3 kits.
  * Girl Scouts of America: Hosted hands-on tutorials with Troop #71924 on LEGO EV3 structures and code to help them earn Programming Badges.
  * Quakerbridge Mall Demo: Full-field demonstration event reaching 200+ public visitors, allowing kids and adults to drive the robot.
  * Trunk or Treat STEM Fest: Partnered with West Windsor Historical Society, presenting robot subassemblies and meeting local policymakers to advocate for school district STEM funding.
  * RIP Roundtable Series: An international roundtable connecting global FTC teams (including Netherlands, Romania, Mexico, Germany) to share CAD libraries, autonomous strategies, and game piece detection code.
  * BNY Mellon Corporate Visit: Engaged 12 corporate engineering experts to review robot code performance, intake geometry, and slides.
  * GMC Precision Learning: Collaborated with auto-fabrication specialists to study parts tolerance, CNC routing, and belt-tension math for our custom slide systems.
- Sponsorships & Funding:
  * Supported by BNY Mellon, Coinbase, J&J, RIMOWA, NJIT, and Onshape.
  * Tiered sponsorship packages are available (Bronze, Silver, Gold, Platinum). Funds go directly toward competition registration, parts fabrication, camp supplies, and outreach.
`.trim()

export async function POST(request: Request) {
  // Get IP address for rate limiting
  const ip = request.headers.get("x-forwarded-for") || "127.0.0.1"

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        error: "Too many requests. Please slow down and try again in a minute.",
      },
      { status: 429 }
    )
  }

  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request payload. Expected an array of messages." },
        { status: 400 }
      )
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not defined in the environment variables.")
      return NextResponse.json(
        { error: "Gemini API key is not configured on the server." },
        { status: 500 }
      )
    }

    // Map the conversation history format to Gemini API format
    // Gemini roles: "user" or "model"
    const contents = messages.map((msg: any) => {
      const role = msg.role === "assistant" ? "model" : "user"
      return {
        role,
        parts: [{ text: msg.content }],
      }
    })

    // Inject system instructions into the first user message for 100% stable compatibility
    const firstUserMsg = contents.find((msg: any) => msg.role === "user")
    if (firstUserMsg) {
      firstUserMsg.parts[0].text = `[System Instructions: ${SYSTEM_PROMPT}]\n\nUser Question: ${firstUserMsg.parts[0].text}`
    }

    const payload = {
      contents,
      generationConfig: {
        temperature: 0.5,
        maxOutputTokens: 1000,
        topP: 0.9,
      },
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Gemini API returned error code ${response.status}: ${errorText}`)
      return NextResponse.json(
        { error: "Gemini API error. Please try again later." },
        { status: 502 }
      )
    }

    const data = await response.json()
    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!textContent) {
      return NextResponse.json(
        { error: "Received an empty response from the AI backend." },
        { status: 502 }
      )
    }

    return NextResponse.json({ content: textContent })
  } catch (error) {
    console.error("Error in AI chatbot api route:", error)
    return NextResponse.json({ error: "Internal server error." }, { status: 500 })
  }
}
