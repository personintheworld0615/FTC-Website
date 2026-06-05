# Product Specification: FTC Team 19772 "Rust in Piece" Website

## 1. Product Goals
Create a premium, high-fidelity web presence that showcases FTC Team 19772 "Rust in Piece" from the Princeton STEM Academy. The website serves as:
1. **Outreach & Inspiration Platform:** Showcasing our mentoring of FLL teams and annual youth STEM camps to inspire students.
2. **Sponsorship Acquisition:** Providing an elegant portal for potential corporate and community sponsors to register, view tiered packages, and support the team.
3. **Team & Community Portfolio:** Documenting our members, mentors, resources, and engineering achievements across competition seasons.

## 2. Target Audience
- **Sponsors:** Tech companies, local businesses, and individual donors looking for clean, professional investment returns and positive community impact.
- **Students & Parents:** Looking to join the team, participate in camps, or learn about robotics.
- **Mentors & Advisors:** High-caliber engineers and educators checking our curriculum and design capabilities.
- **FIRST Community:** FTC judges and peer teams looking at our resources and design portfolio.

## 3. Site Structure & Pages
- **`/` (Home Page):** High-impact hero section ("We Build Robots."), asymmetric statistics panels, core mission statement, recent competition achievements cards, and direct sponsorship call-to-actions.
- **`/team`:** Complete profile directory of the 18 team members, divided by sub-teams (Mechanical, Programming, CAD, Business).
- **`/mentors`:** Profile page highlighting our adult mentors and engineering advisors.
- **`/community`:** Detailed page about our outreach efforts, FLL mentoring, and STEM camps.
- **`/sponsors`:** List of current sponsors, registration form, and detailed sponsor packet tier details.
- **`/contact`:** Standard contact form for inquiries, collaborations, or sponsorships.

## 4. Key Engineering Tasks
- [x] **Home Page Overhaul:** Complete redesign matching Apple/Stripe aesthetics, simplified copy, removed redundant uppercase badges, unified type hierarchy, and integrated custom SVG robot scroll animation.
- [ ] **Sponsorship Form Integration:** Secure form capturing company information, sponsorship levels, and sending confirmations.
- [ ] **Outreach & Camp registration:** Clear details and call-to-actions for local STEM programs.
- [ ] **Outreach & Gallery Media:** Modern grid containing high-resolution images of outreach events and community initiatives.

## 5. Development Roadmap
- **Phase 1: Home Page Redesign** *(Completed)* - Aesthetic system baseline, fonts configuration, color tokens definition in CSS, and key layout structure.
- **Phase 2: Team & Mentors Directory** *(In Progress)* - Aligning layout cards with the new `DESIGN.md` guidelines (e.g. rounded corners, clean borders, typography).
- **Phase 3: Sponsors & Registration Portal** - Introducing the custom sponsor package layout and contact form logic.
- **Phase 4: Community & Resources Hub** - Uploading curriculum guides, CAD resources, and FLL mentoring checklists.
