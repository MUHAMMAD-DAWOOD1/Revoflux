# Revoflux AI — Founder Approval Checklist
**Document ID:** `REVOFLUX-FOUNDER-APPROVAL-CHECKLIST.md`  
**Purpose:** Actionable decision and asset inventory requiring founder confirmation prior to Stage 1 execution.  
**Target Project:** `revoflux.app`  
**Date:** 2026-11-04  

---

## Instructions for Founder
Before implementation begins, please review the decisions and asset requirements below. You may confirm, amend, or reject each item. No destructive or code-modifying steps will be taken until these items are agreed upon.

---

### Category 1: Brand Identity & Public Naming
- [ ] **1.1 Public Company Name:**
  * *Recommendation:* Use **Revoflux AI** in general copy and metadata, with **REVOFLUX** retained for the visual wordmark.
  * *Founder Decision:* `[ ] Approved as recommended | [ ] Alternative:` ________________________

- [ ] **1.2 Canonical Domain:**
  * *Current Live Domain:* `https://revoflux.app`
  * *Note:* Existing code schema incorrectly references `https://revoflux.com`.
  * *Founder Decision:* `[ ] Confirm revoflux.app as canonical | [ ] Use revoflux.com`

- [ ] **1.3 Primary Brand Tagline:**
  * *Current Tagline:* "Intelligent Automation For Modern Businesses."
  * *Recommended Evolution:* **"Intelligent Software and AI Solutions for Modern Businesses."**
  * *Founder Decision:* `[ ] Approved as recommended | [ ] Keep current | [ ] Alternative:` ________________________

---

### Category 2: Service Portfolio & Availability Status
Please confirm the initial availability tier for each solution family for Phase 1:

- [ ] **2.1 AI Solutions (Custom Agents, Assistants, LLM Integration):**
  * *Recommended Status:* `Available Now (Scoped by Project)`
  * *Founder Decision:* `[ ] Confirmed | [ ] Modify:` ________________________

- [ ] **2.2 Software Development (Full-Stack Web, SaaS, MVPs, Custom APIs):**
  * *Recommended Status:* `Available Now (Scoped by Project)`
  * *Founder Decision:* `[ ] Confirmed | [ ] Modify:` ________________________

- [ ] **2.3 Automation & Integrations (Workflow Automation, CRM/ERP Sync):**
  * *Recommended Status:* `Available Now (Core Competency)`
  * *Founder Decision:* `[ ] Confirmed | [ ] Modify:` ________________________

- [ ] **2.4 Cloud & Data Solutions:**
  * *Recommended Status:* `Conditional / Phase 2 (Only if verified)`
  * *Founder Decision:* `[ ] Confirmed (Hold for Phase 2) | [ ] Include in Phase 1`

---

### Category 3: Credibility, Proof & Claims Governance
- [ ] **3.1 Removal of Fictional Testimonials:**
  * *Current Status:* Homepage contains reviews from fictional individuals (James Carter, Sophia Martinez, David Reynolds, Emily Wong).
  * *Recommendation:* **Remove immediately.** Replace with engineering principles and architecture diagrams.
  * *Founder Decision:* `[ ] Confirmed for removal | [ ] Replace with real client reviews (Provide below)`

- [ ] **3.2 Removal of Fictional Case Studies:**
  * *Current Status:* Homepage contains stock imagery and unverified metrics for "Global Logistics Group", "Future Mobility Corp", etc.
  * *Recommendation:* **Remove immediately.** Replace with technical demonstrations or transparent building-in-public prototypes.
  * *Founder Decision:* `[ ] Confirmed for removal | [ ] Provide real case study data`

- [ ] **3.3 Handling Quantified Marketing Claims:**
  * *Current Claims:* "Up to 300% efficiency boost", "15+ hours saved weekly", "100% accurate data processing", "zero-downtime integration".
  * *Recommendation:* Qualify or remove absolute numbers unless backed by documented customer audits.
  * *Founder Decision:* `[ ] Remove/Qualify claims | [ ] Retain specific claims (Specify evidence):` ________________________

---

### Category 4: Real Work & Assets Provision
- [ ] **4.1 Published Work & Demonstrations:**
  * Do we have any verified client case studies, internal tools, or public prototypes ready for publication?
  * *Founder Decision:*
    * `[ ] Yes, details provided below`
    * `[ ] No, publish an honest "Technical Demonstrations & Capabilities" lab instead`

- [ ] **4.2 Founder & Company Facts for `/about`:**
  * *Founding Story:* Briefly state origin, vision, and core engineering background.
  * *Headquarters / Operations:* Confirm "Remote-First, Global Operations".
  * *Founder Profile:* Confirm whether founder name / LinkedIn profile should be publicly featured on the About page.
  * *Founder Decision:* `[ ] Feature founder profile | [ ] Keep company-level only`

---

### Category 5: Form Handling & Technical Integrations
- [ ] **5.1 Contact Form Email Routing:**
  * *Current Destination:* `revoflux.ai@gmail.com` via Web3Forms.
  * *Recommendation:* Retain Web3Forms on the backend via server route `/api/contact` or connect directly to a custom domain email (`contact@revoflux.app`).
  * *Founder Decision:* `[ ] Keep Web3Forms (Secured on server) | [ ] Use custom SMTP / Resend API`

- [ ] **5.2 Calendly Booking Link:**
  * *Current URL:* `https://calendly.com/revoflux-ai/30min`
  * *Founder Decision:* `[ ] Confirmed active and ready | [ ] Update Calendly URL:` ________________________

- [ ] **5.3 Analytics & Tracking:**
  * *Recommendation:* Privacy-first analytics (e.g. Plausible / Cloudflare Web Analytics / Google Analytics 4) subject to privacy policy disclosure.
  * *Founder Decision:* `[ ] Approved (Specify platform):` ________________________ `| [ ] No analytics at launch`

---

### Category 6: Roadmap & Stage Approval
- [ ] **6.1 Authorization to Begin Stage 1 (Foundation):**
  * Resolve existing Next.js / ESLint syntax errors.
  * Establish Tailwind v4 token system.
  * Implement shared layout, navigation header, and footer.
  * *Founder Approval:* `[ ] Approved to begin Stage 1 upon receipt of this checklist`

---
*Signed by Founder:* ____________________________________  
*Date:* ____________________
