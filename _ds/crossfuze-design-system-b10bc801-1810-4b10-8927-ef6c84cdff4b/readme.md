# Crossfuze Design System

A working reference for designing anything Crossfuze: marketing pages, self-serve tools, decks, one-pagers and internal documents.

---

## 1. Company and product context

**Crossfuze** is a digital transformation consultancy and **Elite ServiceNow Partner** (EMEA). They help enterprise customers stand up, govern and scale ServiceNow workflows across IT, HR, Legal, Finance and Procurement.

The current go-to-market is built around one thesis: ServiceNow is collapsing five separate AI products (Now Assist, Moveworks, Context Engine, Workflow Data Fabric, AI Control Tower) into a single AI layer called **Otto**, with a 1 July 2026 end-of-sale cutover, and most enterprises are not ready for it. Everything in the source material points at that: two delivery tracks (**Track A, Autonomous IT** and **Track B, Business Re-invention**), one **Center of Excellence** with four pillars (Data, Workflows, AI, Governance), three engagement shapes (**CoreEssentials**, **RunState**, **CBS Delivery**), and a set of self-serve calculators.

### Surfaces represented here

| Surface | Where it lives |
| --- | --- |
| Marketing website | `ui_kits/marketing/` |
| Self-serve tools (AI Readiness Assessment, Ask Otto) | `ui_kits/tools/` |
| Slide deck, 1920x1080 | `slides/` |

### Sources used to build this

- **https://github.com/crossfuze-lighthouse/claudedesignsystem** (branch `main`). The previous design-system snapshot: brand token CSS, the full icon library, the logo set and self-hosted Source Sans 3 webfonts. Everything in `assets/` and `tokens/` traces back here.
- **https://github.com/crossfuze-lighthouse/Crossfuze-templates-examples** (branch `main`). Real built templates: `website/website/site.css` and the marketing pages, `website/readiness.html`, `website/ask-otto.html`, `slides/index.html`, and three standalone one-pagers (`one-pagers/CoreEssentials`, `CoreRunState`, `CBSDelivery`). Every component in this system is lifted from that CSS rather than invented.

Read those two repositories directly if you need more depth than this folder carries: the templates repo in particular contains long-form documents (`docs/ai-maturity.html`, `docs/aeo-signals.html`, `docs/readiness-assessment.html`) and the three service one-pagers that were not recreated here.

**Not available for this build:** no Figma file, no live crossfuze.com scrape, no product (ServiceNow instance) UI. The kits recreate what the repositories contain, nothing more.

---

## 2. Index

| Path | What it is |
| --- | --- |
| `readme.md` | This document |
| `SKILL.md` | Agent Skill manifest, for use in Claude Code |
| `github.md` | Source repository association and screen map |
| `styles.css` | Root entry point. Imports only. Link this one file |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `base.css` |
| `assets/` | 305 icon PNGs, `Logo/` (wordmarks and infinity marks), `logo/` (light and dark wordmark), `fonts/` (Source Sans 3 woff2) |
| `guidelines/` | 21 foundation specimen cards (colour, type, spacing, brand) |
| `components/` | React primitives, grouped by concern |
| `templates/marketing-page/` | Starting template: full marketing page |
| `templates/slide-deck/` | Starting template: six-slide 1920x1080 deck |
| `templates/service-one-pager/` | Starting template: single printable service offer page |
| `templates/long-form-guide/` | Starting template: Midnight cover, contents, flowing guide pages |
| `ui_kits/marketing/` | Marketing site recreation |
| `ui_kits/tools/` | AI Readiness and Ask Otto recreation |
| `slides/` | Seven sample slide types plus `slides.css` |
| `thumbnail.html` | Homepage tile |

### Components

**core** — `Button`, `Eyebrow`, `Card`, `Pill`, `Stat`, `GradientText`
**layout** — `Section`, `Hero`, `SiteNav`, `SiteFooter`
**patterns** — `Bluf`, `TrackCard`, `CalcCard`, `FaqItem`, `ChatBubble`, `Icon`
**forms** — `TextInput`, `OptionCard`
**data** — `ProgressBar`, `ScoreBar`, `ScoreTile`

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what and when, plus a usage example).

**Intentional additions.** `Icon` has no counterpart in the source CSS. It exists because the icon library ships as ~305 PNGs with a tone suffix (`{name}-midnight.png`), and a wrapper is the only way to keep consumers from hardcoding those paths.

---

## 3. Content fundamentals

### Voice
- **Outcome-led, not feature-led.** Headlines name the result. The icon library itself is organised around outcomes: Adoption, Cost Savings, Productivity, ROI, Time Savings, White-Glove Service, Governance, Visibility. Borrow that vocabulary.
- **Confident and declarative.** Short sentences, active voice. "We deliver." not "We strive to deliver."
- **Answer first.** The strongest pattern in the source is bottom-line-up-front: a one-sentence answer set bold, then the detail. Used in FAQ rows, `Bluf` callouts, and every Otto reply.
- **Technical credibility without jargon-spam.** ServiceNow modules and governance language, always tied to a business outcome.
- **Second person** ("you", "your team") in marketing copy. **First-person plural** ("we", "our") for how Crossfuze works.
- **Numbers carry the argument.** "5 → 1", "12 wk", "$100K fixed", "0 to 24", "1 July 2026". Specific, checkable, unrounded.

### Casing and punctuation
- Slide titles **Title Case**. Body and UI **sentence case**. Buttons Title Case or a short sentence.
- Eyebrows and section labels **ALL CAPS**, bold, 0.22 to 0.25em tracking.
- No trailing periods on labels, headings or button text.
- **Middle dots (·) separate clauses in labels**: "Two Tracks · One CoE", "Calculator 01 · AI Readiness", "Crossfuze · Elite ServiceNow Partner · EMEA". This is as characteristic as the tracking.
- **Never use em dashes.** Rewrite with a comma, colon, period or parentheses. This is an explicit house rule and the source repos state it twice.
- Ampersands are fine in pairings ("People & Teams").

### Emoji and exclamations
None. No emoji anywhere in branded comms, no exclamation marks except in genuinely celebratory product copy. Headlines land by being declarative.

### On brand
- *"Vision. Velocity. Victory."*
- *"Otto goes live in 2026. Most enterprises are not ready."*
- *"Senior architects from kickoff to go-live. No handoffs to junior consultants."*
- Eyebrow: *TWO TRACKS · ONE COE*
- CTA: *"Take the 5-minute readiness test"*, *"Book a 45-min audit"*

### Off brand
- "Unlock the power of synergy 🚀" (hype, emoji)
- "We help customers leverage ServiceNow" (vague, feature-led)
- Any sentence built around an em dash
- A green headline on a white page

---

## 4. Visual foundations

### Colour
Two modes, one fixed palette. Never invent a hue.

Midnight `#040E3D` · Bright Green `#8FFFDB` · Bright Blue `#71F1F7` · Utility Blue `#2CB0CD` · Purple `#6400EC` · Lavender `#C0A6FF` · Callout Red `#F65275` · Crisp Grey `#F2F2F4`. `#22E36C` is banned.

- **Light surfaces:** white or Crisp Grey. Midnight for all text. Calm gradient for emphasis.
- **Dark surfaces:** Midnight. White text at 100 / 78 / 55 percent. Bright Green for eyebrows, stat figures and the primary button. Vibrant gradient for two or three emphasised words.
- **Bright Green is a highlight pen.** A few words, a rule, one icon. Never a panel fill. Never on white as text.
- **Pillar colour coding** runs through the product: Data = Bright Blue, Workflows = Lavender, AI = Bright Green, Governance = Callout Red.

### Gradients
- **Vibrant** (Bright Green to Bright Blue), 90deg, for text and small shapes on Midnight.
- **Calm** (Utility Blue to Bright Blue), for emphasis text on light.
- **Storm** (radial Purple, Utility Blue, Midnight), tentpole moments only, one or two per deck.
- **Hero glow** (`--glow-hero`): a utility-blue ellipse top right plus a purple ellipse bottom left, layered over Midnight. This is on every dark hero, footer and dark slide, and it is what makes a Crossfuze page recognisable.

### Type
One family, **Source Sans Pro**, shipped as **Source Sans 3** (self-hosted woff2, identical metrics). Regular 400 and Bold 700, with 600 available for dense UI labels. No second face, no mono face: labels are the same family, tracked out to 0.22em.

Web: H1 clamp(40, 5.6vw, 76) at -0.025em · H2 clamp(32, 4vw, 52) · FAQ question 22 · H4 18 · lede 19 · body 15 to 16 · detail 13.5 · eyebrow 11. Deck: title 132 · section 72 · body 24 · eyebrow 22. Slide text never drops below 24px.

### Spacing and layout
4pt grid (`--sp-1` = 4px). 1280px content well, 920px narrow well for prose and FAQ, 32px gutters, 88px section bands (96px for tentpole sections). Grids are plain: two-up tracks, three-up cards, four-up stats and pillars. Fixed elements are minimal: the sticky nav, and the deck footer bottom right.

### Backgrounds
Solid Midnight, solid white, or Crisp Grey. **No photography, no textures, no grain, no patterns, no hand-drawn motifs.** The only non-flat background is the ambient hero glow and the Storm gradient. Alternate at most two background colours per page.

### Borders and dividers
Hairlines only: `--border-subtle` (midnight 10%) on light, white 12% on dark. Dotted white 8% for data rows. No heavy outlines. The only coloured left border in the whole system is the 3px Bright Green rule on a `Bluf` callout, and it is reserved for that.

### Cards
Light: white, 1px hairline, 12px radius, 24 to 28px padding, `--shadow-2` when it needs lift. Dark: 4% white wash, 12% white border, 12px radius, no shadow (shadows disappear on Midnight). Hover lifts 2px and tints the border Utility Blue on light, Bright Green on dark. Track cards go to 16px radius. Feature panels 24px.

### Corner radii
6px buttons and inputs · 8px small containers · 10px assessment rows and tiles · 12px cards · 16px track cards · 24px hero panels · 999px pills. Nothing sharp, nothing pillowy.

### Shadows
Cool, midnight-tinted, restrained. `--shadow-1` surface lift, `--shadow-2` card default, `--shadow-3` modal, `--shadow-card-hover` for the 2px lift, `--shadow-panel-dark` for panels floating on Midnight. Glow tokens (`--shadow-glow-green`, `--shadow-glow-blue`) only on dark, only around an icon or featured asset.

### Transparency and blur
Blur appears in exactly one place: the sticky nav, `rgba(4,14,61,0.95)` with an 18px backdrop blur. Transparency is used for the white-alpha surface ladder on Midnight (2, 3, 4, 6, 8, 12 percent) and the midnight-alpha text ladder on light. No frosted glass anywhere else.

### Motion
`cubic-bezier(0.2, 0, 0, 1)`, 120ms hover, 200ms state change, 360ms reveal, 600ms for a score bar filling. Vocabulary is opacity plus an 8 to 16px translate, and a 2px lift on card hover. No bounce, no spring, no scale pop, no rotation.

### Hover and press
Hover: 5% midnight overlay on light, 8% white on dark, or a one-step brighten for the primary button (`#8FFFDB` to `#B3FFE8`). Arrow glyphs nudge 2px right. Press: 10% overlay, no shrink. Focus: 2px Utility Blue ring at 2px offset.

### Imagery
No stock photography and no illustration beyond the icon library. Where a product view is needed, use a real screenshot or an abstract gradient panel. Nothing warm, nothing grainy: the palette is cool by construction.

---

## 5. Iconography

The official library ships in `assets/` as **transparent PNGs at 2400px**, roughly 305 files covering about 130 concepts. Naming is `{concept}-{tone}.png`.

**Three tones:** `-midnight` (default, on light), `-bright-blue` (on dark), `-vibrant` (gradient stroke, hero moments). Not every concept exists in all three; check the folder before referencing.

**Style:** outline, square aspect, roughly 2px stroke at 220px source, slightly rounded caps, and a small four-pointed "spark" detail on most outcome icons. That spark is a brand signature.

**Categories in the library:** Customer Outcomes (accuracy, adoption, automation, capacity, compliance, cost-savings, efficiency, employee-satisfaction, governance, increased-revenue, innovation, process-optimization, productivity, roi, standardization, time-savings, visibility, white-glove-service), Sales Cycle (business-drivers, budget, scoping, documentation, fixed-price, time-and-materials, price, proposal, discount, software-licensing, contract, sign-contract, win-a-deal, veto, approve, value, challenge, prioritize, metrics), ServiceNow products (itsm, itom, hrsd, csm, crm, sam, ham, irm, sir, cmdb, virtual-agent, custom-app), People and Teams (hr-team, finance-team, legal-team, internal-team, onshore-team, offshore-team, build-team, architect, platform-admin, executive-sponsor, salesperson, solutions-consultant, technical-consultant, superheroes), and Status and Projects (kickoff, initiate, in-progress, milestones, phase-1, phase-2, deadline, up-next, future-phase, deprecated, go-live-cake, uat-testing, project-risk, monitor-and-control, close-the-project).

Use the `Icon` component rather than raw `<img>` so the tone suffix stays consistent.

**No icon font, no SVG sprite, no CDN icon set is used.** Emoji are never used as icons. Unicode arrows (→) and the middle dot (·) are used as typographic glyphs, not as icons.

**Fallback:** if a concept genuinely is not in the library, use **Lucide** at 2px stroke, square caps, Midnight, and flag the substitution in the deliverable so it can be swapped later.

**Do not:** filled glyphs, off-palette recolours, green icons on white, or a hand-drawn SVG standing in for a library icon.

---

## 6. Caveats

1. **Fonts** are the real self-hosted Source Sans 3 woff2 files from the source repo. No Google Fonts substitution was needed.
2. **Logos** are the official PNGs (wordmark navy and white, infinity mark navy, white and vibrant gradient). No SVG exists upstream, so PNG is the delivered format. Nothing was drawn or reconstructed.
3. **The icon library is partial per concept.** Some concepts only exist in one or two tones.
4. **No Figma, no live-site scrape, no ServiceNow product UI** was available. The UI kits recreate the HTML templates in the templates repository, which are themselves the team's own built pages.
5. **The three service one-pagers and three long-form guides in the templates repo are shipped as self-inflating bundles** (assets base64-packed into a single-file exporter), not plain HTML, so their exact layouts could not be read back out. Rather than guess at a byte-for-byte recreation, `templates/service-one-pager/` and `templates/long-form-guide/` give the team reusable, on-brand starting points in the same spirit (one-page service overview; Midnight-cover guide with contents and pillar callouts). Swap in the real content when you have it.
