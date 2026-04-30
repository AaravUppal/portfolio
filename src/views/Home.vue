<template>
  <div class="page-root" ref="pageRoot">

    <!-- ── NOISE OVERLAY ── -->
    <div class="noise-overlay" aria-hidden="true"></div>

    <!-- ══════════════════════════════════════
         HERO
    ══════════════════════════════════════ -->
    <section class="hero-section" ref="heroRef">
      <div class="grid-bg" aria-hidden="true" ref="gridBgRef"></div>
      <div class="scan-line" aria-hidden="true"></div>

      <div class="hero-inner">

        <!-- ── Image + Social Links ── -->
        <div class="hero-image-wrap" ref="imageRef">
          <div class="img-frame">
            <div class="img-corner tl" ref="cornerTL"></div>
            <div class="img-corner tr" ref="cornerTR"></div>
            <div class="img-corner bl" ref="cornerBL"></div>
            <div class="img-corner br" ref="cornerBR"></div>
            <img
              :src="heroImg"
              alt="Aarav Uppal"
              width="480"
              height="560"
              loading="eager"
              decoding="async"
              class="hero-img"
              ref="heroImgEl"
            />
            <div class="img-glitch-bar"></div>
          </div>

          <div class="social-links" ref="socialLinksRef">
            <a
              href="https://github.com/AaravUppal"
              target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              class="social-btn"
              @mousemove="magnetMove"
              @mouseleave="magnetLeave"
            >
              <i class="pi pi-github"></i>
              <span class="social-label" aria-hidden="true">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aarav-uppal/"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="social-btn"
              @mousemove="magnetMove"
              @mouseleave="magnetLeave"
            >
              <i class="pi pi-linkedin"></i>
              <span class="social-label" aria-hidden="true">LinkedIn</span>
            </a>
            <a
              href="mailto:contact@aaravuppal.com"
              aria-label="Email"
              class="social-btn"
              @mousemove="magnetMove"
              @mouseleave="magnetLeave"
            >
              <i class="pi pi-envelope"></i>
              <span class="social-label" aria-hidden="true">Email</span>
            </a>
            <a
              :href="resumePdf"
              target="_blank" rel="noopener noreferrer"
              aria-label="Resume"
              class="social-btn"
              @mousemove="magnetMove"
              @mouseleave="magnetLeave"
            >
              <i class="pi pi-file-pdf"></i>
              <span class="social-label" aria-hidden="true">Resume</span>
            </a>
          </div>
        </div>

        <!-- ── Hero Text Content ── -->
        <div class="hero-content" ref="contentRef">

          <p class="hero-bio" ref="heroBioRef">
            Hi, I'm <strong>Aarav Uppal</strong>, a <strong>software developer</strong> based in
            <strong>Bangalore, India</strong>. I help businesses
            <strong>grow their online presence</strong> through
            <strong>modern websites</strong> and build
            <strong>custom software solutions</strong> that improve
            <strong>internal operations and efficiency</strong>. I currently do this through
            <strong>freelance projects</strong>, with the goal of building my own
            <strong>software business</strong>.
          </p>

          <div class="hero-ctas" ref="heroCtasRef">
            <RouterLink to="/projects" class="btn btn-primary">
              <span class="btn-label">View Projects</span>
              <i class="pi pi-arrow-right btn-icon"></i>
            </RouterLink>
            <RouterLink to="/contact" class="btn btn-secondary">
              <span class="btn-label">Contact Me</span>
              <i class="pi pi-envelope btn-icon"></i>
            </RouterLink>
          </div>

        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════
         WORK EXPERIENCE — ALTERNATING TIMELINE
    ══════════════════════════════════════ -->
    <section class="exp-section" ref="expSectionRef">
      <div class="exp-inner">

        <div class="section-heading" ref="expHeadingRef">
          <h2 class="section-title">work experience</h2>
        </div>

        <div class="timeline-list" ref="timelineListRef">

          <div class="timeline-spine" ref="spineRef" aria-hidden="true">
            <div class="spine-progress" ref="spineProgressRef"></div>
          </div>

          <div
            v-for="(item, index) in workItems"
            :key="item.company + index"
            class="timeline-item"
            :class="index % 2 === 0 ? 'item-left' : 'item-right'"
            :ref="el => expItemRefs[index] = el"
          >
            <div class="tl-slot">
              <div
                class="exp-card"
                @mouseenter="tiltEnter"
                @mousemove="tiltMove"
                @mouseleave="tiltLeave"
              >
                <div class="card-glow"></div>
                <div class="card-inner">
                  <div class="card-header">
                    <div class="card-header-main">
                      <div class="company-logo">
                        <img
                          v-if="item.logo"
                          :src="item.logo"
                          :alt="item.company + ' logo'"
                          class="company-logo-img"
                        />
                        <span v-else class="company-logo-text">
                          {{ companyInitials(item.company) }}
                        </span>
                      </div>
                      <div class="card-titles">
                        <h3 class="card-role">{{ item.role }}</h3>
                        <p class="card-company">{{ item.company }}</p>
                      </div>
                    </div>
                    <div class="card-type-badge">{{ item.type }}</div>
                  </div>

                  <p class="card-meta">
                    <span class="meta-icon">◎</span>
                    {{ item.date }} • {{ item.location }}
                  </p>

                  <p class="card-desc">{{ item.description }}</p>

                  <div class="card-tags">
                    <span
                      v-for="tag in item.tags.filter(Boolean)"
                      :key="tag"
                      class="tag"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="tl-center">
              <div class="timeline-dot">
                <div class="timeline-dot-ring"></div>
              </div>
            </div>

            <div class="tl-spacer" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════
         EDUCATION
    ══════════════════════════════════════ -->
    <section class="edu-section" ref="eduSectionRef">
      <div class="edu-inner">

        <div class="section-heading" ref="eduHeadingRef">
          <h2 class="section-title">Academic Background</h2>
        </div>

        <div class="edu-stack">
          <div
            v-for="(item, index) in educationItems"
            :key="item.institution"
            class="edu-card"
            :ref="el => eduItemRefs[index] = el"
            @mouseenter="tiltEnter"
            @mousemove="tiltMove"
            @mouseleave="tiltLeave"
          >
            <div class="card-glow"></div>

            <div class="edu-card-header">
              <div class="edu-icon" aria-hidden="true"></div>
              <div class="edu-year">{{ item.date }}</div>
            </div>

            <h3 class="edu-inst">{{ item.institution }}</h3>
            <p class="edu-degree">{{ item.degree }}</p>

            <div class="edu-meta-row">
              <p class="edu-location">
                <span class="meta-icon">◎</span> {{ item.location }}
              </p>
              <p v-if="item.board" class="edu-board">{{ item.board }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImg from '@/assets/hero.jpeg'
import mediatekLogo from '@/assets/mediateklogo.jpeg';
import arLogo from '@/assets/ashoak.jpeg';
import koriken from '@/assets/korikenlogo.png';
import christ from '@/assets/christlogo.jpg';
import pom from '@/assets/pomlogo.jpeg';
import resumePdf from '@/assets/Aarav_Uppal_Resume .pdf';

gsap.registerPlugin(ScrollTrigger)

// ── Refs ──────────────────────────────────────────────────────
const pageRoot         = ref(null)
const heroRef          = ref(null)
const gridBgRef        = ref(null)
const imageRef         = ref(null)
const heroImgEl        = ref(null)
const cornerTL         = ref(null)
const cornerTR         = ref(null)
const cornerBL         = ref(null)
const cornerBR         = ref(null)
const socialLinksRef   = ref(null)
const contentRef       = ref(null)
const heroBioRef       = ref(null)
const heroCtasRef      = ref(null)
const expHeadingRef    = ref(null)
const timelineListRef  = ref(null)
const spineRef         = ref(null)
const spineProgressRef = ref(null)
const expSectionRef    = ref(null)
const eduHeadingRef    = ref(null)
const eduSectionRef    = ref(null)
const expItemRefs      = ref([])
const eduItemRefs      = ref([])

function companyInitials(name) {
  if (!name) return ''
  const words = name.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

function magnetMove(e) {
  const btn  = e.currentTarget
  const rect = btn.getBoundingClientRect()
  const dx   = (e.clientX - rect.left - rect.width  / 2) * 0.38
  const dy   = (e.clientY - rect.top  - rect.height / 2) * 0.38
  gsap.to(btn, { x: dx, y: dy, duration: 0.35, ease: 'power2.out' })
}
function magnetLeave(e) {
  gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
}

function tiltEnter(e) {
  gsap.to(e.currentTarget, { '--border-glow': 1, duration: 0.3 })
}
function tiltMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const rx   = ((e.clientY - rect.top  - rect.height / 2) / rect.height) * -8
  const ry   = ((e.clientX - rect.left - rect.width  / 2) / rect.width ) *  8
  gsap.to(card, {
    rotateX: rx, rotateY: ry, translateZ: 6,
    duration: 0.25, ease: 'power2.out', transformPerspective: 900,
  })
  const glow = card.querySelector('.card-glow')
  if (glow) {
    const px = ((e.clientX - rect.left) / rect.width)  * 100
    const py = ((e.clientY - rect.top)  / rect.height) * 100
    glow.style.background =
      `radial-gradient(circle at ${px}% ${py}%, rgba(125, 211, 252, 0.08) 0%, transparent 65%)`
  }
}
function tiltLeave(e) {
  const card = e.currentTarget
  gsap.to(card, {
    rotateX: 0, rotateY: 0, translateZ: 0,
    duration: 0.6, ease: 'power3.out', transformPerspective: 900,
  })
  const glow = card.querySelector('.card-glow')
  if (glow) gsap.to(glow, { background: 'none', duration: 0.3 })
}

let ctx

onMounted(() => {
  nextTick(() => {
    ctx = gsap.context(() => {

      // ── 1. HERO ENTRANCE ─────────────────────────────────────
      const heroTL = gsap.timeline({ delay: 0.1 })

      heroTL.fromTo(
        [cornerTL.value, cornerTR.value, cornerBL.value, cornerBR.value],
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)', stagger: 0.07 }
      )
      heroTL.fromTo(
        heroImgEl.value,
        { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
        { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1, ease: 'power4.out' },
        '-=0.2'
      )
      heroTL.fromTo(
        heroBioRef.value,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      if (heroCtasRef.value) {
        heroTL.fromTo(
          heroCtasRef.value.querySelectorAll('.btn'),
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', stagger: 0.12 },
          '-=0.4'
        )
      }
      heroTL.fromTo(
        Array.from(socialLinksRef.value?.querySelectorAll('.social-btn') ?? []),
        { y: 15, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)', stagger: 0.1 },
        '-=0.35'
      )

      // ── 2. HERO PARALLAX ─────────────────────────────────────
      gsap.to(imageRef.value, {
        y: -24, ease: 'none',
        scrollTrigger: {
          trigger: heroRef.value, start: 'top top', end: 'bottom top', scrub: 1.2,
        },
      })
      gsap.to(contentRef.value, {
        y: -40, ease: 'none',
        scrollTrigger: {
          trigger: heroRef.value, start: 'top top', end: 'bottom top', scrub: 1,
        },
      })

      ScrollTrigger.create({
        trigger: heroRef.value,
        start: 'bottom 65%',
        onEnter:     () => gsap.to(gridBgRef.value, { opacity: 0, duration: 0.8 }),
        onLeaveBack: () => gsap.to(gridBgRef.value, { opacity: 1, duration: 0.8 }),
      })

      // ── 3. SECTION HEADINGS ───────────────────────────────────
      ;[expHeadingRef.value, eduHeadingRef.value].forEach((el) => {
        if (!el) return
        gsap.fromTo(el,
          { y: 28, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: {
              trigger: el, start: 'top 88%', end: 'bottom 20%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      })

      // ── 4. SPINE PROGRESS ─────────────────────────────────────
      if (spineRef.value && spineProgressRef.value) {
        gsap.set(spineProgressRef.value, { scaleY: 0, transformOrigin: 'top center' })
        ScrollTrigger.create({
          trigger: spineRef.value,
          start: 'top 70%', end: 'bottom 30%', scrub: 0.8,
          onUpdate: (self) => {
            gsap.set(spineProgressRef.value, { scaleY: self.progress })
          },
        })
      }

      // ── 5. EXPERIENCE CARDS ───────────────────────────────────
      expItemRefs.value.forEach((el, index) => {
        if (!el) return
        const isLeft = index % 2 === 0
        const card   = el.querySelector('.exp-card')
        if (card) {
          gsap.fromTo(card,
            { x: isLeft ? -30 : 30, y: 16, opacity: 0 },
            {
              x: 0, y: 0, opacity: 1, duration: 0.65, ease: 'power3.out',
              scrollTrigger: {
                trigger: el, start: 'top 88%', end: 'bottom 15%',
                toggleActions: 'play reverse play reverse',
              },
            }
          )
        }
        const dot = el.querySelector('.timeline-dot')
        if (dot) {
          gsap.fromTo(dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2.2)',
              scrollTrigger: {
                trigger: el, start: 'top 85%', end: 'bottom 15%',
                toggleActions: 'play reverse play reverse',
              },
            }
          )
        }
      })

      // ── 6. EDUCATION CARDS ────────────────────────────────────
      eduItemRefs.value.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { y: 32, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el, start: 'top 88%', end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      })

    }, pageRoot.value)
  })
})

onUnmounted(() => {
  ctx?.revert()
  ScrollTrigger.getAll().forEach(t => t.kill())
})

// ── Data ─────────────────────────────────────────────────────
const workItems = [
  {
    role: 'Frontend Developer Intern',
    company: 'Pom Power',
    date: 'Apr 2024 – Aug 2024',
    location: 'Bengaluru',
    type: 'Internship',
    description: "Co-developed Pom Power's productivity platform used by customers.",
    tags: ['Vue.js', 'Tailwind CSS', 'Frontend'],
    logo: pom,
  },
  {
    role: 'Frontend Developer',
    company: 'CHRIST University',
    date: 'Jul 2024 – Sep 2024',
    location: 'Bengaluru',
    type: 'Internship',
    description: 'Contributed as a Frontend Developer to building the official mentor-mentee platform used across CHRIST University.',
    tags: ['Vue.js', 'PrimeVue', 'Tailwind CSS'],
    logo: christ,
  },
  {
    role: 'Software Development Intern',
    company: 'MediaTek',
    date: 'Nov 2025 – Apr 2026',
    location: 'Bengaluru',
    type: 'Internship',
    description: 'Worked on software development projects at MediaTek.',
    tags: ['Java', 'Software Development', 'N8N', 'SpringBoot'],
    logo: mediatekLogo,
  },
  {
    role: 'Freelance Web Developer',
    company: 'Ashoak Roadlines',
    date: 'Dec 2025',
    location: 'Freelance',
    type: 'Freelance',
    description: 'Designed and developed a professional website for Ashoak Roadlines, a logistics and transportation company.',
    tags: ['Vue.js', 'Tailwind CSS', 'Performance Optimization'],
    logo: arLogo,
  },
  {
    role: 'Freelance Developer',
    company: 'Koriken Restaurant',
    date: 'Jan 2026',
    location: 'Freelance',
    type: 'Freelance',
    description: 'Designed and developed a responsive website for Koriken, a Korean restaurant in Bengaluru.',
    tags: ['Vue.js', 'Tailwind CSS', 'PrimeVue', 'Responsive Design'],
    logo: koriken,
  },
]

const educationItems = [
  {
    institution: 'CHRIST University',
    degree: 'Bachelor of Computer Applications (BCA)',
    location: 'Bengaluru, Karnataka',
    date: '2023 — 2026',
    board: 'Deemed to be University',
  },
  {
    institution: 'La Martiniere for Boys',
    degree: 'Primary, Secondary & Higher Education',
    location: 'Kolkata, West Bengal',
    date: '2008 — 2023',
    board: 'ICSE & ISC Board',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');

/* ─── CSS Variables ─────────────────────────────────────────── */
:root {
  --bg:           #030608;
  --surface:      #080c10;
  --surface-2:    #0b1116;
  --border:       rgba(255, 255, 255, 0.08);
  --border-hi:    rgba(255, 255, 255, 0.16);
  --text-primary: #e8edf2;
  --text-muted:   #4a5568;
  --text-dim:     #2a3444;
  --mono:         'Space Mono', monospace;
  --sans:         'Syne', sans-serif;
  /* Sky-blue accent — identical to contact & projects pages */
  --accent:        rgba(125, 211, 252, 0.85);
  --accent-solid:  rgb(125, 211, 252);
  --accent-dim:    rgba(125, 211, 252, 0.08);
  --accent-border: rgba(125, 211, 252, 0.22);
  --accent-glow:   rgba(125, 211, 252, 0.14);
}

/* ─── Base ──────────────────────────────────────────────────── */
.page-root {
  background-color: var(--bg);
  position: relative;
  overflow-x: hidden;
}

.noise-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 128px;
}

/* ════════════════════════════════════════════════════════════
   HERO
════════════════════════════════════════════════════════════ */
.hero-section {
  position: relative;
  min-height: 100vh;
  background-color: var(--bg);
  display: flex;
  align-items: center;
  padding: clamp(5rem, 8vw, 7rem) clamp(1.5rem, 6vw, 6rem) clamp(2rem, 6vw, 5rem);
  overflow: hidden;
}

/* ── Grid bg — sky-blue 48px, matches contact & projects ── */
.grid-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(125, 211, 252, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(125, 211, 252, 0.055) 1px, transparent 1px);
  background-size: 48px 48px;
  animation: gridDrift 20s linear infinite;
}
@keyframes gridDrift { to { background-position: 48px 48px; } }

/* ── Scan line — sky blue ── */
.scan-line {
  position: fixed;
  left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(125, 211, 252, 0.85), transparent);
  opacity: 0.12;
  z-index: 1;
  pointer-events: none;
  animation: scanDown 8s linear infinite;
}
@keyframes scanDown {
  0%   { top: -2px; }
  100% { top: 100vh; }
}

.hero-inner {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: clamp(3rem, 7vw, 6rem);
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

/* ── Hero Image ── */
.hero-image-wrap {
  flex: 0 0 auto;
  width: clamp(160px, 22vw, 280px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.img-frame { position: relative; width: 100%; }

.img-corner {
  position: absolute;
  width: 18px;
  height: 18px;
  z-index: 2;
}
/* Corner brackets — sky blue */
.img-corner.tl { top: -6px;    left: -6px;   border-top: 2px solid var(--accent-solid); border-left:   2px solid var(--accent-solid); }
.img-corner.tr { top: -6px;    right: -6px;  border-top: 2px solid var(--accent-solid); border-right:  2px solid var(--accent-solid); }
.img-corner.bl { bottom: -6px; left: -6px;   border-bottom: 2px solid var(--accent-solid); border-left:   2px solid var(--accent-solid); }
.img-corner.br { bottom: -6px; right: -6px;  border-bottom: 2px solid var(--accent-solid); border-right:  2px solid var(--accent-solid); }

.hero-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
  aspect-ratio: 4 / 5;
  display: block;
  filter: grayscale(20%) contrast(1.05);
  transition: filter 500ms ease;
}
.img-frame:hover .hero-img { filter: grayscale(0%) contrast(1.1); }

.img-glitch-bar {
  position: absolute;
  left: 0; right: 0;
  height: 3px;
  background: var(--accent-solid);
  opacity: 0;
  animation: glitchBar 7s ease-in-out infinite;
}
@keyframes glitchBar {
  0%, 90%, 100% { opacity: 0; top: 30%; }
  92%           { opacity: 0.55; top: 28%; height: 2px; }
  94%           { opacity: 0.25; top: 55%; height: 4px; }
  96%           { opacity: 0; }
}

/* ── Social Links ── */
.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding-bottom: 32px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 6px;
  border: 1px solid var(--border);
  color: var(--text-muted);
  text-decoration: none;
  position: relative;
  overflow: visible;
  transition: color 300ms ease, border-color 300ms ease;
}
.social-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 6px;
  background: var(--accent-dim);
  opacity: 0;
  transition: opacity 300ms ease;
  pointer-events: none;
}
.social-btn:hover                { color: var(--accent-solid); border-color: var(--accent-border); }
.social-btn:hover::before        { opacity: 1; }
.social-btn i                    { font-size: 1rem; position: relative; z-index: 1; }

.social-label {
  position: absolute;
  bottom: -26px;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  font-family: var(--mono);
  font-size: 0.5rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  /* Sky-blue label — always this color, full saturation */
  color: rgb(125, 211, 252);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease, transform 0.18s ease;
  z-index: 20;
  /* Subtle glow so it reads against dark bg */
  text-shadow: 0 0 10px rgba(125, 211, 252, 0.45);
}
.social-btn:hover .social-label {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* ── Hero Content ── */
.hero-content {
  flex: 1 1 auto;
  min-width: 0;
}

.hero-bio {
  font-family: var(--sans);
  font-size: clamp(1.05rem, 1.8vw, 1.5rem);
  line-height: 1.85;
  color: var(--text-muted);
  max-width: 60ch;
  font-weight: 400;
}
.hero-bio strong {
  color: var(--text-primary);
  font-weight: 700;
}

/* ══ CTA Buttons — exact match to contact page style ══ */
.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: clamp(1.75rem, 3.5vw, 2.5rem);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--mono);
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.85rem 1.6rem;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  border: 1px solid transparent;
  transition:
    transform 250ms ease,
    background 250ms ease,
    border-color 250ms ease,
    box-shadow 250ms ease;
  will-change: transform;
  min-width: 148px;
  justify-content: center;
}
.btn .btn-icon {
  font-size: 0.7rem;
  transition: transform 250ms ease;
}
.btn:hover        { transform: translateY(-2px); }
.btn:active       { transform: translateY(0); }
.btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--accent-border);
}
.btn:hover .btn-icon { transform: translateX(3px); }

/* Primary — gradient sky-blue (identical to contact submit btn) */
.btn-primary {
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.18), rgba(103, 232, 249, 0.10));
  color: rgba(125, 211, 252, 0.95);
  border-color: rgba(125, 211, 252, 0.25);
}
.btn-primary:hover {
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.26), rgba(103, 232, 249, 0.16));
  border-color: rgba(125, 211, 252, 0.45);
  box-shadow: 0 0 24px rgba(125, 211, 252, 0.12);
}

/* Secondary — ghost pill (identical to contact ghost pill) */
.btn-secondary {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-muted);
  border-color: var(--border);
}
.btn-secondary:hover {
  border-color: rgba(125, 211, 252, 0.25);
  color: rgba(125, 211, 252, 0.8);
  background: rgba(125, 211, 252, 0.06);
}

/* ════════════════════════════════════════════════════════════
   WORK EXPERIENCE — ALTERNATING TIMELINE
════════════════════════════════════════════════════════════ */
.exp-section {
  position: relative;
  background-color: var(--bg);
  padding: clamp(5rem, 10vw, 9rem) clamp(1rem, 4vw, 3rem);
}
.exp-section::before {
  content: '';
  position: absolute;
  top: 0; left: 8%; right: 8%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--border), transparent);
}

.exp-inner {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
}

.section-heading {
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
}
.section-title {
  font-family: var(--sans);
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.timeline-list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: clamp(1.75rem, 3vw, 2.5rem);
}

/* Spine — sky blue */
.timeline-spine {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0; bottom: 0;
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(125, 211, 252, 0.1) 8%,
    rgba(125, 211, 252, 0.06) 85%,
    transparent
  );
  z-index: 0;
  pointer-events: none;
}
.spine-progress {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(125, 211, 252, 0.5) 8%,
    rgba(125, 211, 252, 0.25) 85%,
    transparent
  );
  transform-origin: top center;
}
.spine-progress::after {
  content: '';
  position: absolute;
  top: 0; left: -1px;
  width: 3px;
  height: 80px;
  background: linear-gradient(to bottom, var(--accent-solid), transparent);
  opacity: 0.7;
  animation: spineGlow 3s ease-in-out infinite;
}
@keyframes spineGlow {
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 1; }
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 1;
}
.item-left  { flex-direction: row; }
.item-right { flex-direction: row-reverse; }

.tl-slot { flex: 1 1 0; min-width: 0; }
.item-left  .tl-slot { padding-right: 1.75rem; }
.item-right .tl-slot { padding-left:  1.75rem; }

.tl-center {
  flex: 0 0 56px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 22px;
  position: relative;
  z-index: 3;
}
.tl-spacer { flex: 1 1 0; min-width: 0; }

/* Timeline dot — sky blue */
.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--text-dim);
  position: relative;
  flex-shrink: 0;
  transition: border-color 300ms ease, box-shadow 300ms ease;
}
.timeline-item:hover .timeline-dot {
  border-color: var(--accent-solid);
  box-shadow: 0 0 10px var(--accent-glow);
}
.timeline-dot-ring {
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 1px solid var(--accent-solid);
  opacity: 0;
  transition: opacity 300ms ease;
}
.timeline-item:hover .timeline-dot-ring {
  opacity: 0.5;
  animation: ringPulse 1.6s ease-in-out infinite;
}
@keyframes ringPulse {
  0%, 100% { transform: scale(1);   opacity: 0.5; }
  50%       { transform: scale(1.6); opacity: 0; }
}

/* Experience Cards */
.exp-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: default;
  transform-style: preserve-3d;
  will-change: transform;
  transition: border-color 300ms ease, background-color 300ms ease;
}
.exp-card:hover {
  border-color: var(--accent-border);
  background: var(--surface-2);
}

.card-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  z-index: 0;
}
.card-inner {
  position: relative;
  z-index: 1;
  padding: 1.5rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.card-header-main {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-width: 0;
}

/* Company logo — sky blue tint */
.company-logo {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  overflow: hidden;
}
.company-logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
.company-logo-text {
  font-family: var(--mono);
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  color: var(--accent-solid);
}

.card-titles { min-width: 0; }
.card-role {
  font-family: var(--sans);
  font-size: clamp(0.92rem, 1.3vw, 1.02rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}
.card-company {
  font-family: var(--sans);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-solid);
  opacity: 0.85;
  margin-top: 0.15rem;
}

.card-type-badge {
  font-family: var(--mono);
  font-size: 0.56rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
  border: 1px solid var(--border);
  padding: 0.18rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
  align-self: flex-start;
}

.card-meta {
  font-family: var(--mono);
  font-size: 0.64rem;
  color: var(--text-dim);
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.1rem;
}
.meta-icon { font-size: 0.55rem; }

.card-desc {
  font-family: var(--sans);
  font-size: 0.84rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-top: 0.2rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.5rem;
}
/* Tags — sky-blue accent, consistent with projects & contact */
.tag {
  font-family: var(--mono);
  font-size: 0.56rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  padding: 0.18rem 0.5rem;
  border-radius: 4px;
}

/* ════════════════════════════════════════════════════════════
   EDUCATION — Vertical Stack
════════════════════════════════════════════════════════════ */
.edu-section {
  background-color: var(--bg);
  padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 6rem);
  position: relative;
}
.edu-section::before {
  content: '';
  position: absolute;
  top: 0; left: 8%; right: 8%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--border), transparent);
}

.edu-inner {
  max-width: 680px;
  margin: 0 auto;
}

.edu-stack {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.edu-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.75rem 2rem;
  position: relative;
  overflow: hidden;
  cursor: default;
  transform-style: preserve-3d;
  will-change: transform;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: border-color 300ms ease, background-color 300ms ease;
}
.edu-card:hover {
  border-color: var(--accent-border);
  background: var(--surface-2);
}

/* Left accent stripe — sky blue */
.edu-card::before {
  content: '';
  position: absolute;
  left: 0; top: 18%; bottom: 18%;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--accent-solid), transparent);
  opacity: 0.35;
  border-radius: 0 2px 2px 0;
}

.edu-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.edu-icon {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  color: var(--accent-solid);
  flex-shrink: 0;
}
.edu-icon i { font-size: 0.9rem; }

.edu-year {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-solid);
  opacity: 0.85;
  border: 1px solid var(--accent-border);
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  white-space: nowrap;
}

.edu-inst {
  font-family: var(--sans);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.3;
}
.edu-degree {
  font-family: var(--sans);
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--accent-solid);
  opacity: 0.75;
}

.edu-meta-row {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-top: 0.65rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border);
}
.edu-location {
  font-family: var(--mono);
  font-size: 0.64rem;
  color: var(--text-dim);
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}
.edu-board {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.06em;
  color: var(--text-dim);
  text-transform: uppercase;
}

/* ════════════════════════════════════════════════════════════
   MOBILE RESPONSIVE
════════════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  .hero-section     { padding: 5rem 1.25rem 2.5rem; }
  .hero-inner       { flex-direction: column; align-items: flex-start; gap: 2rem; }
  .hero-image-wrap  { width: clamp(130px, 45vw, 200px); margin: 0 auto; align-self: center; gap: 1.25rem; }
  .hero-content     { width: 100%; }
  .hero-bio         { font-size: clamp(0.95rem, 4vw, 1.15rem); max-width: 100%; }

  .hero-ctas { flex-direction: column; width: 100%; gap: 0.65rem; }
  .btn       { width: 100%; min-width: unset; padding: 0.9rem 1rem; }

  .social-links { gap: 0.6rem; padding-bottom: 32px; }

  .timeline-spine               { left: 27px; transform: none; }
  .timeline-item                { flex-direction: row !important; }
  .tl-center                    { order: -1; flex: 0 0 54px; }
  .tl-spacer                    { display: none; }
  .item-left  .tl-slot,
  .item-right .tl-slot          { padding-left: 0 !important; padding-right: 0 !important; }

  .card-inner   { padding: 1.2rem 1.25rem; }
  .company-logo { width: 36px; height: 36px; }

  .exp-section,
  .edu-section  { padding: 3rem 1.25rem; }
  .edu-inner    { max-width: 100%; }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .exp-inner            { max-width: 900px; }
  .item-left .tl-slot   { padding-right: 1.25rem; }
  .item-right .tl-slot  { padding-left:  1.25rem; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>