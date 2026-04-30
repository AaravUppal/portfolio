<template>
  <div class="page-root" ref="pageRoot">

    <!-- ── NOISE OVERLAY ── -->
    <div class="noise-overlay" aria-hidden="true"></div>

    <!-- ── GRID BG ── -->
    <div class="grid-bg" aria-hidden="true"></div>

    <!-- ── SCAN LINE ── -->
    <div class="scan-line" aria-hidden="true"></div>

    <!-- NavBar -->
    <NavBar />

    <!-- ══════════════════════════════════════
         MAIN CONTENT
    ══════════════════════════════════════ -->
    <main class="projects-main">

      <!-- Section Heading -->
      <div class="section-heading" ref="headingRef">
        <h1 class="section-title">my projects</h1>
        <div class="heading-rule" aria-hidden="true"></div>
      </div>

      <!-- Category Filter Pills -->
      <div class="filter-bar" ref="filterBarRef">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-pill"
          :class="{ 'filter-pill--active': selectedCategory === cat }"
          @click="setCategory(cat)"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid" ref="gridRef">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.title + project.year"
          class="project-card"
          :ref="el => { if (el) cardRefs[index] = el }"
          @mousemove="tiltMove"
          @mouseleave="tiltLeave"
        >
          <!-- Hover glow (follows cursor) -->
          <div class="card-glow"></div>

          <!-- Thumbnail -->
          <div class="project-thumb">
            <!-- Shimmer skeleton — visible while image is still loading -->
            <div
              v-if="project.imageUrl && !loadedImages.has(project.id)"
              class="thumb-skeleton"
              aria-hidden="true"
            ></div>

            <img
              v-if="project.imageUrl"
              :src="project.imageUrl"
              :alt="project.title"
              loading="lazy"
              class="project-thumb-img"
              :class="{ 'thumb-img--loading': !loadedImages.has(project.id) }"
              @load="loadedImages.add(project.id)"
            />
            <div v-if="!project.imageUrl" class="project-thumb-icon">
              <i :class="project.icon"></i>
            </div>
            <!-- Gradient fade at bottom of image into card body -->
            <div class="thumb-fade" aria-hidden="true"></div>
          </div>

          <!-- Card Body -->
          <div class="project-body">

            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <span class="project-year-badge">{{ project.year }}</span>
            </div>

            <p class="project-desc">{{ project.description }}</p>

            <div class="project-tags">
              <span v-for="tech in project.technologies" :key="tech" class="tag">
                {{ tech }}
              </span>
            </div>

            <!-- Action buttons -->
            <div class="project-actions">
              <!-- Certificate (outline style) -->
              <button
                v-if="project.hasCertificate"
                class="action-btn action-btn--outline"
                @click="showCertificate(project)"
              >
                <i class="pi pi-certificate"></i>
                <span>Certificate</span>
              </button>

              <!-- View Project (primary) -->
              <button
                v-if="project.link"
                class="action-btn action-btn--primary"
                :class="{ 'action-btn--solo': !project.hasCertificate }"
                @click="openLink(project)"
              >
                <i class="pi pi-external-link"></i>
                <span>View Project</span>
              </button>

              <!-- GitHub (primary, only when no direct link) -->
              <button
                v-else-if="project.github"
                class="action-btn action-btn--primary"
                :class="{ 'action-btn--solo': !project.hasCertificate }"
                @click="openGitHub(project)"
              >
                <i class="pi pi-github"></i>
                <span>GitHub</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <!-- ══ CTA Section ══ -->
      <div class="cta-section" ref="ctaRef">
        <div class="cta-inner">
          <span class="cta-eyebrow">let's build something</span>
          <h2 class="cta-title">Ready to work together?</h2>
          <p class="cta-desc">
            Let's create something amazing together. I'm always excited to take on
            new challenges and collaborate on innovative projects.
          </p>
          <RouterLink to="/contact" class="btn btn-primary">
            <span class="btn-label">Start a Project</span>
            <i class="pi pi-arrow-right btn-icon"></i>
          </RouterLink>
        </div>
      </div>

    </main>

    <Footer />

    <!-- ══════════════════════════════════════
         CERTIFICATE MODAL
    ══════════════════════════════════════ -->
    <Transition name="modal-fade">
      <div
        v-if="showModal"
        class="modal-backdrop"
        @click="closeModal"
        role="dialog"
        aria-modal="true"
      >
        <div class="modal-box" @click.stop>

          <!-- Modal header -->
          <div class="modal-header">
            <h3 class="modal-title">
              <i class="pi pi-certificate modal-title-icon"></i>
              {{ selectedProject?.title }}
            </h3>
            <button class="modal-close-btn" @click="closeModal" aria-label="Close modal">
              <i class="pi pi-times"></i>
            </button>
          </div>

          <!-- Certificate image -->
          <div class="modal-body">
            <img
              :src="selectedProject?.certificateUrl"
              :alt="`${selectedProject?.title} Certificate`"
              class="cert-img"
            />
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <p class="modal-meta">
              <span class="meta-dot">◎</span>
              {{ selectedProject?.title }} · {{ selectedProject?.year }}
            </p>
            <button class="modal-dismiss" @click="closeModal">Dismiss</button>
          </div>

        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// NavBar and Footer are assumed globally registered (as in original).
// If not, uncomment the two lines below:
// import NavBar from '@/components/NavBar.vue'
// import Footer from '@/components/Footer.vue'

gsap.registerPlugin(ScrollTrigger)

// ── Refs ─────────────────────────────────────────────────────
const pageRoot    = ref(null)
const headingRef  = ref(null)
const filterBarRef= ref(null)
const gridRef     = ref(null)
const ctaRef      = ref(null)
const cardRefs    = ref([])   // populated by v-for :ref callback

// ── Data ─────────────────────────────────────────────────────
const selectedCategory = ref('All')
const categories = ['All', 'Web Development', 'University Project', 'Personal Project']
const showModal        = ref(false)
const selectedProject  = ref(null)

// Tracks which project IDs have finished loading their thumbnail image
const loadedImages = reactive(new Set())

const projects = ref([
  {
    id: 1,
    title: 'Koriken Website',
    description: 'Designed and developed a modern, responsive website for Koriken, a Korean restaurant in Bengaluru. Built using Vue.js, Tailwind CSS, and PrimeVue to showcase the menu, dining experience, location details, and contact information. Focused on clean UI design, mobile responsiveness, and performance optimization to enhance customer engagement and digital visibility.',
    category: 'Web Development',
    technologies: ['Vue.js', 'Tailwind CSS', 'PrimeVue', 'JavaScript'],
    year: '2026',
    icon: 'pi pi-star',
    link: 'https://koriken.vercel.app/',
    hasCertificate: false,
    imageUrl: new URL('@/assets/koriken.png', import.meta.url).href,
  },
  {
    id: 2,
    title: 'Ashok Roadlines Website',
    description: 'Designed and developed a complete website for Ashok Roadlines, a transportation and logistics company. Built a modern, responsive platform using Vue.js, Tailwind CSS, and PrimeVue to showcase services and enhance their digital presence.',
    category: 'Web Development',
    technologies: ['Vue.js', 'Tailwind CSS', 'PrimeVue', 'JavaScript'],
    year: '2025',
    icon: 'pi pi-truck',
    link: 'https://ashokroadlines.in',
    hasCertificate: false,
    imageUrl: new URL('@/assets/ar.png', import.meta.url).href,
  },
  {
    id: 3,
    title: 'Pom Power Web App',
    description: 'Developed a responsive web application for the Pom Power productivity platform during my internship at Pom Power, Bengaluru. Built with Vue.js and Tailwind CSS.',
    category: 'Web Development',
    technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'Git', 'GitHub'],
    year: '2024',
    icon: 'pi pi-clock',
    github: 'https://github.com/DerKaiser28/PomPowerWebsite',
    hasCertificate: true,
    certificateUrl: new URL('@/assets/pompower.jpg', import.meta.url).href,
    imageUrl: new URL('@/assets/pom.png', import.meta.url).href,
  },
  {
    id: 4,
    title: 'Mentor-Mentee App',
    description: 'University-wide mentor-mentee management application for CHRIST University. Built dynamic, responsive UI components and collaborated with team members.',
    category: 'University Project',
    technologies: ['Vue.js', 'Tailwind CSS', 'PrimeVue', 'Git', 'GitHub'],
    year: '2024',
    icon: 'pi pi-users',
    github: 'https://github.com/DerKaiser28/MentorMenteeApp',
    hasCertificate: true,
    certificateUrl: new URL('@/assets/mentormentee.png', import.meta.url).href,
    imageUrl: new URL('@/assets/christ.avif', import.meta.url).href,
  },
  {
    id: 5,
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a responsive portfolio website to showcase my projects, skills, and resume. Built using Vue.js, Tailwind CSS, and PrimeVue for an elegant, modern UI.',
    category: 'Personal Project',
    technologies: ['Vue.js', 'Tailwind CSS', 'PrimeVue'],
    year: '2025',
    icon: 'pi pi-user',
    github: 'https://github.com/AaravUppal/portfolio',
    hasCertificate: false,
    imageUrl: new URL('@/assets/website.png', import.meta.url).href,
  },
])

// ── Computed ─────────────────────────────────────────────────
const filteredProjects = computed(() =>
  selectedCategory.value === 'All'
    ? projects.value
    : projects.value.filter(p => p.category === selectedCategory.value)
)

// ── Category change: reset refs then re-animate ───────────────
function setCategory(cat) {
  selectedCategory.value = cat
  cardRefs.value = []
}
watch(filteredProjects, () => {
  nextTick(() => animateCards())
})

// ── Modal ─────────────────────────────────────────────────────
function showCertificate(project) {
  selectedProject.value = project
  showModal.value = true
  document.body.style.overflow = 'hidden'
}
function closeModal() {
  showModal.value = false
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}
function openGitHub(project) { if (project.github) window.open(project.github, '_blank') }
function openLink(project)   { if (project.link)   window.open(project.link,   '_blank') }

// ── Card tilt / cursor glow (white-only glow) ────────────────
function tiltMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const rx   = ((e.clientY - rect.top  - rect.height / 2) / rect.height) * -7
  const ry   = ((e.clientX - rect.left - rect.width  / 2) / rect.width ) *  7
  gsap.to(card, {
    rotateX: rx, rotateY: ry, translateZ: 6,
    duration: 0.25, ease: 'power2.out', transformPerspective: 900,
  })
  const glow = card.querySelector('.card-glow')
  if (glow) {
    const px = ((e.clientX - rect.left) / rect.width)  * 100
    const py = ((e.clientY - rect.top)  / rect.height) * 100
    glow.style.background =
      `radial-gradient(circle at ${px}% ${py}%, rgba(125,211,252,0.10) 0%, transparent 65%)`
  }
}
function tiltLeave(e) {
  gsap.to(e.currentTarget, {
    rotateX: 0, rotateY: 0, translateZ: 0,
    duration: 0.6, ease: 'power3.out', transformPerspective: 900,
  })
  const glow = e.currentTarget.querySelector('.card-glow')
  if (glow) gsap.to(glow, { background: 'none', duration: 0.3 })
}

// ════════════════════════════════════════════════════════════════
//  GSAP — all scroll animations are BIDIRECTIONAL
//  toggleActions: 'play reverse play reverse'
//  → Plays on scroll-down, reverses on scroll-up automatically.
// ════════════════════════════════════════════════════════════════
let ctx

function animateCards() {
  // Kill any stale card triggers before recreating
  ScrollTrigger.getAll()
    .filter(t => t.vars?.id?.startsWith('proj-card-'))
    .forEach(t => t.kill())

  cardRefs.value.forEach((el, i) => {
    if (!el) return
    // Snap invisible before animating (handles filter-switch re-runs)
    gsap.set(el, { y: 32, opacity: 0 })
    gsap.fromTo(
      el,
      { y: 32, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.65, ease: 'power3.out',
        // Stagger within each visual row (max 3 cols)
        delay: (i % 3) * 0.09,
        scrollTrigger: {
          id: `proj-card-${i}`,
          trigger: el,
          start: 'top 90%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse',
        },
      }
    )
  })
  ScrollTrigger.refresh()
}

onMounted(() => {
  // Page title
  const updateTitle = () => {
    document.title = window.innerWidth < 500 ? 'Projects - AU' : 'Projects - Aarav Uppal'
  }
  window.addEventListener('resize', updateTitle)
  updateTitle()

  // Escape key closes modal
  const onEsc = (e) => { if (e.key === 'Escape' && showModal.value) closeModal() }
  document.addEventListener('keydown', onEsc)

  nextTick(() => {
    ctx = gsap.context(() => {

      // ── Section heading ──────────────────────────────────────
      gsap.fromTo(
        headingRef.value,
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.value,
            start: 'top 88%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )

      // ── Filter bar ───────────────────────────────────────────
      gsap.fromTo(
        filterBarRef.value,
        { y: 18, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.55, ease: 'power3.out',
          scrollTrigger: {
            trigger: filterBarRef.value,
            start: 'top 90%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )

      // ── CTA section ──────────────────────────────────────────
      gsap.fromTo(
        ctaRef.value,
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.value,
            start: 'top 88%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )

      // ── Initial card animations ──────────────────────────────
      animateCards()

    }, pageRoot.value)
  })

  // Cleanup
  onUnmounted(() => {
    ctx?.revert()
    ScrollTrigger.getAll().forEach(t => t.kill())
    window.removeEventListener('resize', updateTitle)
    document.removeEventListener('keydown', onEsc)
    document.body.style.overflow = 'auto'
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');

/* ─── CSS Variables ─────────────────────────────────────────── */
:root {
  --bg:           #030608;
  --surface:      #0d0d0d;
  --surface-2:    #141414;
  --border:       rgba(255, 255, 255, 0.08);
  --border-hi:    rgba(255, 255, 255, 0.16);
  --border-hover: rgba(255, 255, 255, 0.26);
  --text-primary: #e8edf2;
  --text-muted:   #4a5568;
  --text-dim:     #2a3444;
  --mono:         'Space Mono', monospace;
  --sans:         'Syne', sans-serif;
  /* Sky-blue accent */
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Noise overlay */
.noise-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 128px;
}

/* Grid bg — sky-blue tinted lines, 48px cell matching contact page */
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

/* Scan line — sky blue */
.scan-line {
  position: fixed;
  left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.12;
  z-index: 1;
  pointer-events: none;
  animation: scanDown 8s linear infinite;
}
@keyframes scanDown {
  0%   { top: -2px; }
  100% { top: 100vh; }
}

/* ════════════════════════════════════════════════════════════
   MAIN LAYOUT
════════════════════════════════════════════════════════════ */
.projects-main {
  position: relative;
  z-index: 2;
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem) clamp(4rem, 8vw, 7rem);
}

/* ── Section Heading ── */
.section-heading {
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
}
.section-title {
  font-family: var(--sans);
  font-size: clamp(1.8rem, 4.5vw, 3rem);
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.2;
}
/* Sky-blue gradient underline rule */
.heading-rule {
  width: 56px;
  height: 2px;
  margin: 1.1rem auto 0;
  background: linear-gradient(to right, transparent, var(--accent), transparent);
  border-radius: 2px;
  opacity: 0.7;
}

/* ── Filter Pills ── */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  justify-content: center;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}
.filter-pill {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  background: transparent;
  border: 1px solid var(--border);
  padding: 0.4rem 1.05rem;
  border-radius: 999px;
  cursor: pointer;
  transition: color 220ms ease, border-color 220ms ease, background 220ms ease;
}
.filter-pill:hover {
  color: var(--accent-solid);
  border-color: var(--accent-border);
}
/* Active state: sky-blue accent */
.filter-pill--active {
  color: var(--accent-solid);
  background: var(--accent-dim);
  border-color: var(--accent-border);
}

/* ════════════════════════════════════════════════════════════
   PROJECT CARDS GRID
════════════════════════════════════════════════════════════ */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: clamp(4rem, 8vw, 7rem);
  align-items: start;
}

/* ── Individual Card ── */
.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: default;
  transform-style: preserve-3d;
  will-change: transform;
  transition: border-color 300ms ease, background-color 300ms ease;
}
.project-card:hover {
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

/* ── Thumbnail ── */
.project-thumb {
  position: relative;
  width: 100%;
  height: 176px;
  overflow: hidden;
  flex-shrink: 0;
}
.project-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(25%) contrast(1.05);
  transition: filter 400ms ease, transform 400ms ease, opacity 350ms ease;
}
/* Hidden while the image is still loading — fades in once @load fires */
.thumb-img--loading {
  opacity: 0;
}

/* ── Skeleton shimmer ── */
.thumb-skeleton {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(125, 211, 252, 0.09) 40%,
    rgba(255, 255, 255, 0.03) 80%
  );
  background-size: 200% 100%;
  animation: shimmer 1.6s ease-in-out infinite;
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.project-card:hover .project-thumb-img {
  filter: grayscale(0%) contrast(1.1);
  transform: scale(1.04);
}
.project-thumb-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-2);
  color: var(--accent);
  font-size: 2.4rem;
}
/* Dark gradient fades image into the card body */
.thumb-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 45%, rgba(13, 13, 13, 0.92) 100%);
  z-index: 1;
  pointer-events: none;
}

/* ── Card Body ── */
.project-body {
  position: relative;
  z-index: 1;
  padding: 1.3rem 1.45rem 1.45rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.project-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.65rem;
}
.project-title {
  font-family: var(--sans);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
  flex: 1;
  min-width: 0;
}
.project-year-badge {
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

.project-desc {
  font-family: var(--sans);
  font-size: 0.82rem;
  line-height: 1.7;
  color: var(--text-muted);
  /* Clamp to 3 lines to keep cards uniform */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.15rem;
}
/* Tags — sky-blue accent */
.tag {
  font-family: var(--mono);
  font-size: 0.54rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  padding: 0.16rem 0.5rem;
  border-radius: 4px;
}

/* ── Action Buttons ── */
.project-actions {
  display: flex;
  gap: 0.55rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.42rem;
  flex: 1;
  font-family: var(--mono);
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.62rem 0.9rem;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    transform 220ms ease,
    background 250ms ease,
    border-color 250ms ease,
    box-shadow 250ms ease;
}
.action-btn i { font-size: 0.65rem; }
.action-btn:hover  { transform: translateY(-1px); }
.action-btn:active { transform: translateY(0); }

/* Primary — gradient sky-blue (View Project / GitHub) — matches contact submit btn */
.action-btn--primary {
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.18), rgba(103, 232, 249, 0.10));
  color: rgba(125, 211, 252, 0.95);
  border-color: rgba(125, 211, 252, 0.25);
}
.action-btn--primary:hover {
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.26), rgba(103, 232, 249, 0.16));
  border-color: rgba(125, 211, 252, 0.45);
  box-shadow: 0 0 20px rgba(125, 211, 252, 0.12);
}

/* Full-width when it's the only button */
.action-btn--solo { flex: 1; }

/* Outline — Certificate — matches contact's ghost pill */
.action-btn--outline {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-muted);
  border-color: var(--border);
}
.action-btn--outline:hover {
  border-color: rgba(125, 211, 252, 0.25);
  color: rgba(125, 211, 252, 0.8);
  background: rgba(125, 211, 252, 0.06);
}

/* ════════════════════════════════════════════════════════════
   CTA SECTION
════════════════════════════════════════════════════════════ */
.cta-section {
  position: relative;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface);
  overflow: hidden;
  text-align: center;
}
/* Sky-blue hairline at top edge */
.cta-section::before {
  content: '';
  position: absolute;
  top: 0; left: 12%; right: 12%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--accent), transparent);
  opacity: 0.5;
}
/* Sky-blue radial glow behind content */
.cta-section::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 70% at 50% 0%, rgba(125, 211, 252, 0.05) 0%, transparent 70%);
  pointer-events: none;
}
.cta-inner {
  position: relative;
  z-index: 1;
  padding: clamp(3rem, 6vw, 5rem) clamp(2rem, 6vw, 5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.cta-eyebrow {
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  opacity: 0.85;
}
.cta-title {
  font-family: var(--sans);
  font-size: clamp(1.5rem, 3.5vw, 2.25rem);
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.cta-desc {
  font-family: var(--sans);
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.75;
  max-width: 46ch;
}

/* CTA button — inverted white */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--sans);
  font-size: 0.875rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  padding: 0.85rem 1.75rem;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  border: 1.5px solid transparent;
  margin-top: 0.5rem;
  transition:
    transform 250ms cubic-bezier(.2, .8, .2, 1),
    background-color 250ms ease,
    border-color 250ms ease,
    box-shadow 250ms ease;
}
.btn .btn-icon {
  font-size: 0.78rem;
  transition: transform 250ms cubic-bezier(.2, .8, .2, 1);
}
.btn:hover           { transform: translateY(-2px); }
.btn:hover .btn-icon { transform: translateX(3px); }
.btn:active          { transform: translateY(0); }
.btn:focus-visible   {
  outline: none;
  box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--accent-border);
}

/* CTA button — gradient sky-blue matching contact submit & action-btn--primary */
.btn-primary {
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.18), rgba(103, 232, 249, 0.10));
  color: rgba(125, 211, 252, 0.95);
  border-color: rgba(125, 211, 252, 0.25);
  /* Override sans font with mono to stay consistent with card buttons */
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 400;
}
.btn-primary:hover {
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.26), rgba(103, 232, 249, 0.16));
  border-color: rgba(125, 211, 252, 0.45);
  box-shadow: 0 0 24px rgba(125, 211, 252, 0.12);
}

/* ════════════════════════════════════════════════════════════
   CERTIFICATE MODAL
════════════════════════════════════════════════════════════ */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background: rgba(3, 6, 8, 0.88);
  backdrop-filter: blur(10px);
}

.modal-box {
  background: var(--surface);
  border: 1px solid var(--accent-border);
  border-radius: 12px;
  width: 100%;
  max-width: 680px;
  max-height: 86vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 0 60px -20px var(--accent-glow),
              0 24px 64px -16px rgba(0, 0, 0, 0.7);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1.1rem 1.4rem;
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
  flex-shrink: 0;
}
.modal-title {
  font-family: var(--sans);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.55rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.modal-title-icon {
  color: var(--accent);
  font-size: 0.88rem;
  flex-shrink: 0;
}
.modal-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  flex-shrink: 0;
  transition: color 200ms ease, border-color 200ms ease, background 200ms ease;
}
.modal-close-btn:hover {
  color: var(--accent-solid);
  border-color: var(--accent-border);
  background: var(--accent-dim);
}
.modal-close-btn i { font-size: 0.78rem; }

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
}
.cert-img {
  max-width: 100%;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.modal-footer {
  padding: 0.9rem 1.4rem;
  border-top: 1px solid var(--border);
  background: var(--surface-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  gap: 0.75rem;
}
.modal-meta {
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.06em;
  color: var(--text-dim);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.meta-dot { font-size: 0.5rem; flex-shrink: 0; }

.modal-dismiss {
  font-family: var(--sans);
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--text-muted);
  background: transparent;
  border: 1px solid var(--border);
  padding: 0.38rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  flex-shrink: 0;
  transition: color 200ms ease, border-color 200ms ease, background 200ms ease;
}
.modal-dismiss:hover {
  color: var(--text-primary);
  border-color: var(--border-hi);
  background: rgba(255, 255, 255, 0.04);
}

/* Modal scrollbar — sky blue */
.modal-body::-webkit-scrollbar        { width: 6px; }
.modal-body::-webkit-scrollbar-track  { background: var(--bg); }
.modal-body::-webkit-scrollbar-thumb  { background: var(--accent-border); border-radius: 3px; }
.modal-body::-webkit-scrollbar-thumb:hover { background: rgba(125, 211, 252, 0.32); }

/* Modal open/close transition */
.modal-fade-enter-active,
.modal-fade-leave-active { transition: opacity 0.22s ease; }
.modal-fade-enter-from,
.modal-fade-leave-to    { opacity: 0; }

.modal-fade-enter-active .modal-box,
.modal-fade-leave-active .modal-box  { transition: transform 0.22s ease; }
.modal-fade-enter-from .modal-box    { transform: scale(0.95) translateY(10px); }
.modal-fade-leave-to   .modal-box    { transform: scale(0.95) translateY(10px); }

/* ════════════════════════════════════════════════════════════
   RESPONSIVE
════════════════════════════════════════════════════════════ */
@media (max-width: 1024px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .projects-main  { padding: 3.5rem 1.25rem 3.5rem; }
  .projects-grid  { grid-template-columns: 1fr; }
  .filter-bar     { gap: 0.4rem; }
  .filter-pill    { font-size: 0.56rem; padding: 0.35rem 0.8rem; }
  .cta-inner      { padding: 2.5rem 1.25rem; }
  .cta-desc       { font-size: 0.88rem; }
  .btn            { width: 100%; justify-content: center; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
  /* Under reduced motion, skeleton is a static muted surface (no shimmer) */
  .thumb-skeleton {
    background: rgba(125, 211, 252, 0.05) !important;
    animation: none !important;
  }
}
</style>