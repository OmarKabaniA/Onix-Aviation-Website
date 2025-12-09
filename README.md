# Onix Aviation – Creative Agency Website
## Product Requirements Document (PRD)
*A premium, aviation-inspired marketing website*

## Overview

Onix Aviation is a high-end aviation marketing agency. This project delivers a **premium, single-page website** with smooth motion design, a strong brand identity, and subtle aviation cues.

The goal is to clearly communicate expertise, services, and client success to aviation decision-makers seeking a creative partner who understands their industry.

The website aesthetic blends **modern editorial design** with **glassmorphism**, creating a sophisticated and future-forward experience.

---

## Design Archetype
### Modern Editorial × Glassmorphism Hybrid

A refined, premium design system rooted in:

- Elegant typography  
- Generous whitespace  
- Translucent glass panels  
- Atmospheric lighting and layered depth  
- Subtle aviation-inspired geometric lines  

The design avoids cliché airplane icons while delivering a strong aviation identity.

---

## Color Palette Strategy

All colors originate from the **Onix Aviation logo**.

### Primary Colors

- **Deep Navy / Midnight Blue**  
  - Used for hero backgrounds, high-impact sections, and primary CTAs.

- **Vibrant Accent (Orange / Coral / Teal)**  
  - Used sparingly for highlights, buttons, and animations.

### Secondary Colors

- **Atmospheric Sky Gradients**  
  - Navy → Twilight Purple → Horizon Orange  
  - Used in hero and section backgrounds.

- **Neutral Foundation**  
  - Warm off-white: `#F8F6F3`  
  - Tinted charcoal: `#1A1D29`

### Glassmorphism Layers

- Panels with **10–20% opacity**
- Subtle inner/outer glows
- Soft shadows
- Blur (around 20px) to create depth

---

## Key Components

### 1. Navigation & Header

- Floating translucent navbar  
- Blur + transparency  
- Logo on the left, links on the right  
- Sticky behavior with slight compression on scroll  
- Animated underline on link hover  

### 2. Hero Section

- Full viewport height  
- Atmospheric gradient background  
- Animated flight-path lines or geometric patterns  
- Bold display typography (100–120px)  
- Staggered fade-in animations  
- Dual contrasting CTAs  

### 3. Services

- Glassmorphic cards  
- Minimal aviation line-art icons  
- Hover state: lift, glow, and reveal more content  
- Expandable **accordion** for detailed service descriptions  

### 4. Client Showcase

- Masonry or bento-style grid  
- Translucent branded cards for logos  
- Hover previews with mini case-study teasers  
- Smooth stagger animation on scroll  

### 5. Blog Listing

- Editorial layout  
- Featured image cards  
- Category tags  
- Reading time + metadata  
- Smooth zoom hover effect  

### 6. Contact Form

- Floating labels  
- Accent-color glow on input focus  
- Brand-styled map marker  
- Animated success state  

### 7. Footer

- Multi-column layout  
- Runway-inspired geometric background  
- Newsletter signup  
- Social links  

---

## Core Interactions & User Flows

### Entrance Animation

- Gradient fades in  
- Flight-path lines animate  
- Typography staggers in  
- CTAs fade up  
- Navigation slides down  

### Navigation Flow

- Smooth scrolling to anchored sections  
- Active section highlighted in the navbar  
- On mobile: full-screen overlay menu  

### Service Interaction

- Hover: card lift + glow + partial reveal  
- Click: expand a modal with:
  - Detailed service description  
  - Case studies  
  - Animated transitions  

### Client Case Studies

- Clicking a logo opens a case study page or overlay  
- Case studies include:
  - Challenge  
  - Solution  
  - Results  

### Blog Flow

- Hover lift on blog cards  
- Clean, readable article layout  
- Related articles section at the bottom  

### Contact Submission

- Inline validation  
- Animated loading spinner on submit  
- Animated success confirmation message  

---

## Visual Direction

### Atmosphere

The visual atmosphere is inspired by a twilight view from a private jet window:

- Premium  
- Calm  
- Deep colors  
- Subtle, controlled motion  

### Layout Principles

- Vertical padding per section: **120–160px**  
- Element spacing: **40–60px**  
- Asymmetric compositions  
- Alternating (left/right) content layout  
- Bento-grid influence in client and blog sections  
- Layered Z-axis depth (foreground, midground, background elements)

### Typography

**Heading Fonts (Option A / Option B):**
- Syne (800)  
- Space Grotesk (700)  

**Body Fonts (Option A / Option B):**
- Manrope  
- Plus Jakarta Sans  

**Technical / Metadata:**
- JetBrains Mono  

**Font Sizes:**
- Hero heading: **100–120px**  
- Section titles: **56–72px**  
- Subheads: **32–40px**  
- Body text: **16–18px**  

### Motion Design

- Easing curves: `cubic-bezier(0.4, 0.0, 0.2, 1)`  
- Fast interactions: **200–300ms**  
- Entrance animations: **600–800ms**  
- Stagger timing: **80–120ms**

**Signature animations:**

- Flight-path line drawing  
- Card lift with glow  
- Smooth upward reveal of text  

### Aviation Theming (Subtle)

- Thin runway-line patterns  
- Navigation chart-inspired geometry  
- Minimal cockpit instrument icons  
- Color-graded aviation photography  

> Avoid literal airplane silhouettes or clichéd clipart.

---

## Page-Specific Notes

> Even though the main experience is single-page style, these notes define logical “sections” that could also map to separate pages if needed.

### Home

- 90vh hero section  
- 3-column service grid  
- Featured client logos  
- CTA section with a contrasting background  

### About

- Split layout with alternating left/right content  
- Mission and vision cards  
- Team section with hover reveals (role, experience, social links)  
- Animated milestones timeline  

### Services

- Overview hero for services  
- Expandable detailed service blocks  
- Visual process (step-by-step flow or diagram)  
- Related case studies shown near relevant services  

### Our Clients

- Filterable client logo grid (e.g., by segment: airlines, MRO, charter, OEMs)  
- Clicking a logo opens a case study  
- Testimonials between rows of logos  
- Animated counters (e.g., years of experience, projects delivered, countries served)  

### Blogs

- Featured article hero (top story)  
- Filterable grid layout (categories, tags)  
- Sidebar for:
  - Popular posts  
  - Categories  
  - Possibly a newsletter signup  
- SEO-optimized article layout:
  - H1, H2, H3 structure  
  - Featured image  
  - Metadata (author, date, reading time)  

### Contact Us

- Split layout: contact form + map  
- Floating labels on fields  
- Custom map styling matching brand colors  
- Quick contact actions (click-to-call, click-to-email)  

---

## Technical Considerations

*(Informational for design context, not full implementation details.)*

- Fully responsive, **mobile-first** approach  
- All animations must respect `prefers-reduced-motion`  
- Optimized images with lazy loading  
- Semantic HTML for SEO and accessibility  
- Accessible form validation (error states, ARIA where needed)  
- Smooth, GPU-friendly animations where possible  
