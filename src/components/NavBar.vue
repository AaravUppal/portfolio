<template>
  <nav
    class="navbar"
    :class="{ scrolled: isScrolled, 'menu-open': isMenuOpen }"
  >
    <div class="nav-scan" aria-hidden="true"></div>

    <!-- BRAND -->
    <RouterLink to="/" class="brand" @click="closeMenu" aria-label="Home">
      <span class="brand-bracket">[</span>
      <span class="brand-name">AU</span>
      <span class="brand-bracket">]</span>
      <span class="brand-full">Aarav Uppal</span>
    </RouterLink>

    <!-- DESKTOP NAV LINKS -->
    <div class="nav-links">
      <RouterLink to="/" class="nav-link" @click="closeMenu">
        <span class="link-label">Home</span>
        <span class="link-bar"></span>
      </RouterLink>
      <RouterLink to="/projects" class="nav-link" @click="closeMenu">
        <span class="link-label">Projects</span>
        <span class="link-bar"></span>
      </RouterLink>
      <RouterLink to="/contact" class="nav-link" @click="closeMenu">
        <span class="link-label">Contact Me</span>
        <span class="link-bar"></span>
      </RouterLink>
    </div>

    <!-- HAMBURGER -->
    <button
      class="hamburger"
      @click="isMenuOpen = !isMenuOpen"
      :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
      :aria-expanded="isMenuOpen"
    >
      <span class="ham-label">{{ isMenuOpen ? 'CLOSE' : 'MENU' }}</span>
      <div class="ham-icon">
        <span class="bar" :class="{ open: isMenuOpen }"></span>
        <span class="bar" :class="{ open: isMenuOpen }"></span>
      </div>
    </button>

    <!-- MOBILE OVERLAY -->
    <Transition name="overlay">
      <div v-if="isMenuOpen" class="mobile-overlay" @click.self="closeMenu">
        <div class="mobile-menu">
          <div class="mobile-corner tl"></div>
          <div class="mobile-corner br"></div>

          <p class="mobile-tag">navigate</p>

          <nav class="mobile-nav" role="navigation">
            <RouterLink
              v-for="(link, i) in mobileLinks"
              :key="link.to"
              :to="link.to"
              class="mobile-link"
              :style="{ '--delay': `${i * 60 + 80}ms` }"
              @click="closeMenu"
            >
              <span class="mob-index">0{{ i + 1 }}</span>
              <span class="mob-label">{{ link.label }}</span>
              <span class="mob-arrow">→</span>
            </RouterLink>
          </nav>

          <div class="mobile-footer">
            <span class="footer-mono">aaravuppal.com</span>
            <span class="footer-status">
              <span class="status-dot"></span>
              Available
            </span>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const isScrolled  = ref(false)
const isMenuOpen  = ref(false)
const router      = useRouter()

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function closeMenu() {
  isMenuOpen.value = false
}

watch(isMenuOpen, val => {
  document.body.style.overflow = val ? 'hidden' : ''
})

router.afterEach(closeMenu)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const mobileLinks = [
  { to: '/',         label: 'Home'       },
  { to: '/projects', label: 'Projects'   },
  { to: '/contact',  label: 'Contact Me' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');

/* ── VARIABLES ───────────────────────────────────────────── */
.navbar {
  --cyan:         rgba(125, 211, 252, 0.95);
  --cyan-hex:     #7DD3FC;
  --cyan-dim:     rgba(125, 211, 252, 0.08);
  --cyan-mid:     rgba(125, 211, 252, 0.18);
  --border-cyan:  rgba(125, 211, 252, 0.28);
  --bg:           #030608;
  --surface:      #080c10;
  --white:        #ffffff;
  --border:       rgba(255, 255, 255, 0.1);
  --border-mid:   rgba(255, 255, 255, 0.22);
  --text-primary: rgba(255, 255, 255, 0.92);
  --text-muted:   rgba(255, 255, 255, 0.5);
  --text-dim:     rgba(255, 255, 255, 0.28);
  --mono:         'Space Mono', monospace;
  --sans:         'Syne', sans-serif;
}

/* ── BASE ────────────────────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(2rem, 6vw, 5rem);
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease;
}

.navbar.scrolled {
  background: rgba(3, 6, 8, 0.86);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

.nav-scan {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(255, 255, 255, 0.012) 3px,
    rgba(255, 255, 255, 0.012) 4px
  );
  opacity: 0;
  transition: opacity 300ms ease;
}
.navbar.scrolled .nav-scan { opacity: 1; }

/* ── BRAND ───────────────────────────────────────────────── */
.brand {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-bracket {
  font-family: var(--mono);
  font-size: 1.5rem;
  color: var(--text-dim);
  line-height: 1;
  transition: color 200ms ease;
}

.brand-name {
  font-family: var(--mono);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 0.06em;
  line-height: 1;
  transition: color 200ms ease;
}

.brand-full {
  display: none;
}

.brand:hover .brand-bracket,
.brand:hover .brand-name {
  color: var(--cyan);
}

/* ── DESKTOP NAV LINKS ───────────────────────────────────── */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  overflow: hidden;
}

/* hover background */
.nav-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 200ms ease;
}
.nav-link:hover::before { opacity: 1; }

.link-label {
  position: relative;
  font-family: var(--sans);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.02em;
  transition: color 200ms ease;
  z-index: 1;
}

.nav-link:hover .link-label { color: var(--white); }

/* active state — sky blue */
.nav-link.router-link-active .link-label {
  color: var(--cyan);
}

/* underline bar */
.link-bar {
  position: absolute;
  bottom: 5px;
  left: 1rem;
  right: 1rem;
  height: 1px;
  background: rgba(125, 211, 252, 0.6);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1);
}
.nav-link:hover .link-bar,
.nav-link.router-link-active .link-bar {
  transform: scaleX(1);
}

/* ── HAMBURGER ───────────────────────────────────────────── */
.hamburger {
  display: none;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.45rem 0.75rem;
  cursor: pointer;
  transition: border-color 200ms ease, background 200ms ease;
}
.hamburger:hover {
  border-color: var(--border-cyan);
  background: var(--cyan-dim);
}

.ham-label {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  color: var(--text-dim);
  transition: color 200ms ease;
}
.hamburger:hover .ham-label { color: var(--cyan); }

.ham-icon {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 16px;
}

.bar {
  display: block;
  height: 1px;
  background: var(--text-muted);
  border-radius: 1px;
  transform-origin: center;
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1),
              opacity 250ms ease,
              background 200ms ease;
}
.hamburger:hover .bar { background: var(--cyan); }

.bar.open:first-child {
  transform: translateY(2.5px) rotate(45deg);
}
.bar.open:last-child {
  transform: translateY(-2.5px) rotate(-45deg);
}

/* ── MOBILE OVERLAY ──────────────────────────────────────── */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(3, 6, 8, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}

.mobile-menu {
  position: relative;
  width: min(340px, 90vw);
  margin-top: 80px;
  margin-right: clamp(1rem, 4vw, 2rem);
  background: #0a0f14;
  border: 1px solid rgba(125, 211, 252, 0.15);
  border-radius: 8px;
  padding: 1.75rem 1.5rem 1.5rem;
  box-shadow:
    0 0 0 1px rgba(125, 211, 252, 0.04),
    0 24px 64px rgba(0, 0, 0, 0.6);
}

/* corner accents */
.mobile-corner {
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: rgba(125, 211, 252, 0.45);
  border-style: solid;
}
.mobile-corner.tl {
  top: -1px; left: -1px;
  border-width: 1px 0 0 1px;
  border-radius: 8px 0 0 0;
}
.mobile-corner.br {
  bottom: -1px; right: -1px;
  border-width: 0 1px 1px 0;
  border-radius: 0 0 8px 0;
}

.mobile-tag {
  font-family: var(--mono);
  font-size: 0.54rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(125, 211, 252, 0.45);
  margin-bottom: 1rem;
}

/* ── MOBILE NAV LINKS ────────────────────────────────────── */
.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 0.75rem;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid transparent;
  transition:
    background 200ms ease,
    border-color 200ms ease;
  animation: linkFadeIn 300ms var(--delay, 0ms) both ease;
}
.mobile-link:hover {
  background: rgba(125, 211, 252, 0.06);
  border-color: rgba(125, 211, 252, 0.15);
}
.mobile-link.router-link-active {
  background: rgba(125, 211, 252, 0.06);
  border-color: rgba(125, 211, 252, 0.2);
}

@keyframes linkFadeIn {
  from { opacity: 0; transform: translateX(12px); }
  to   { opacity: 1; transform: translateX(0); }
}

.mob-index {
  font-family: var(--mono);
  font-size: 0.56rem;
  color: rgba(125, 211, 252, 0.4);
  letter-spacing: 0.08em;
  min-width: 20px;
}

.mob-label {
  font-family: var(--sans);
  font-size: 1.15rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
  flex: 1;
  transition: color 200ms ease;
}
.mobile-link:hover .mob-label,
.mobile-link.router-link-active .mob-label {
  color: rgba(125, 211, 252, 0.95);
}

.mob-arrow {
  font-size: 0.85rem;
  color: rgba(125, 211, 252, 0.3);
  transition: transform 200ms ease, color 200ms ease;
}
.mobile-link:hover .mob-arrow,
.mobile-link.router-link-active .mob-arrow {
  color: rgba(125, 211, 252, 0.7);
  transform: translateX(3px);
}

/* ── MOBILE FOOTER ───────────────────────────────────────── */
.mobile-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer-mono {
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.2);
}

.footer-status {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 0.08em;
  color: rgba(125, 211, 252, 0.6);
}

.status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(125, 211, 252, 0.8);
  box-shadow: 0 0 6px rgba(125, 211, 252, 0.6);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

/* ── TRANSITIONS ─────────────────────────────────────────── */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 220ms ease;
}
.overlay-enter-active .mobile-menu,
.overlay-leave-active .mobile-menu {
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1), opacity 220ms ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.overlay-enter-from .mobile-menu {
  transform: translateY(-12px) scale(0.97);
  opacity: 0;
}
.overlay-leave-to .mobile-menu {
  transform: translateY(-8px) scale(0.98);
  opacity: 0;
}

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 680px) {
  .nav-links  { display: none; }
  .hamburger  { display: flex; }
}

/* ── REDUCED MOTION ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; animation: none !important; }
}
</style>
