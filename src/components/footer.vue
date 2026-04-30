<template>
  <footer class="footer">

    <!-- Top hairline -->
    <div class="footer-rule" aria-hidden="true"></div>

    <div class="footer-inner">

      <!-- Left: name, role, availability, email -->
      <div class="footer-left">
        <p class="footer-name">Aarav Uppal</p>
        <p class="footer-role">Software Developer</p>
        <p class="footer-availability">Let's build something great together</p>
        <a href="mailto:contact@aaravuppal.com" class="footer-email">
          contact@aaravuppal.com
        </a>
      </div>

      <!-- Centre: quick links -->
      <nav class="footer-nav" aria-label="Quick links">
        <p class="footer-nav-label">Quick Links</p>
        <ul class="footer-nav-list">
          <li>
            <a href="https://www.aaravuppal.com/" class="footer-nav-link">Home</a>
          </li>
          <li>
            <a href="https://www.aaravuppal.com/projects" class="footer-nav-link">Projects</a>
          </li>
          <li>
            <a href="https://www.aaravuppal.com/contact" class="footer-nav-link">Contact Me</a>
          </li>
          <li>
            <a
              :href="resumePdf"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-nav-link"
            >Resume</a>
          </li>
        </ul>
      </nav>

      <!-- Right: social icons with hover labels -->
      <div class="footer-right">
        <div class="social-row">

          <a
            href="https://github.com/AaravUppal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="social-btn"
          >
            <i class="pi pi-github"></i>
            <span class="social-label">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/aarav-uppal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="social-btn"
          >
            <i class="pi pi-linkedin"></i>
            <span class="social-label">LinkedIn</span>
          </a>

          <a
            href="mailto:contact@aaravuppal.com"
            aria-label="Email"
            class="social-btn"
          >
            <i class="pi pi-envelope"></i>
            <span class="social-label">Email</span>
          </a>

          <a
            :href="resumePdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            class="social-btn"
          >
            <i class="pi pi-file-pdf"></i>
            <span class="social-label">Resume</span>
          </a>

        </div>
      </div>

    </div>

    <!-- Bottom bar: copyright + developed by -->
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 Aarav Uppal</span>
      <a
        href="https://www.aaravuppal.com"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-dev"
      >Developed by Aarav Uppal</a>
    </div>

  </footer>
</template>

<script setup>
import resumePdf from '@/assets/Aarav_Uppal_Resume.pdf'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');

:root {
  --cyan:         rgba(125, 211, 252, 0.95);
  --cyan-dim:     rgba(125, 211, 252, 0.08);
  --border-cyan:  rgba(125, 211, 252, 0.25);
  --bg:           #030608;
  --border:       rgba(255, 255, 255, 0.06);
  --text-primary: #e8edf2;
  --text-muted:   #4a5568;
  --text-dim:     #2a3444;
  --mono:         'Space Mono', monospace;
  --sans:         'Syne', sans-serif;
}

/* ── Root ── */
.footer {
  background-color: var(--bg);
  position: relative;
}

/* Gradient hairline at top */
.footer-rule {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(125, 211, 252, 0.15), transparent);
}

/* ── Inner layout ── */
.footer-inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem) clamp(2.5rem, 5vw, 4rem);
}

/* ── Left block ── */
.footer-left {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-name {
  font-family: var(--sans);
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.footer-role {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 0.35rem;
}

.footer-availability {
  font-family: var(--sans);
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.footer-email {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--text-muted);
  text-decoration: none;
  letter-spacing: 0.03em;
  border-bottom: 1px solid transparent;
  transition: color 220ms ease, border-color 220ms ease;
  width: fit-content;
  margin-top: 0.25rem;
}
.footer-email:hover {
  color: rgba(125, 211, 252, 0.95);
  border-color: rgba(125, 211, 252, 0.35);
}

/* ── Quick links nav ── */
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-nav-label {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 0.1rem;
}

.footer-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-nav-link {
  font-family: var(--sans);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--text-muted);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 200ms ease, border-color 200ms ease;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.footer-nav-link::before {
  content: '›';
  font-size: 1rem;
  color: var(--text-dim);
  transition: color 200ms ease, transform 200ms ease;
}
.footer-nav-link:hover {
  color: rgb(125, 211, 252);
  border-color: rgba(125, 211, 252, 0.3);
}
.footer-nav-link:hover::before {
  color: rgb(125, 211, 252);
  transform: translateX(3px);
}

/* ── Social row ── */
.social-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 32px;
}

.social-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid var(--border);
  color: var(--text-muted);
  text-decoration: none;
  overflow: visible;
  transition: color 250ms ease, border-color 250ms ease, background-color 250ms ease;
}
.social-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 6px;
  background: rgba(125, 211, 252, 0.08);
  opacity: 0;
  pointer-events: none;
  transition: opacity 250ms ease;
}
.social-btn:hover {
  color: rgba(125, 211, 252, 0.95);
  border-color: rgba(125, 211, 252, 0.28);
}
.social-btn:hover::before { opacity: 1; }

.social-btn i {
  font-size: 1.15rem;
  position: relative;
  z-index: 1;
}

/* Hover label — sky blue with glow */
.social-label {
  position: absolute;
  bottom: -26px;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  font-family: var(--mono);
  font-size: 0.5rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgb(125, 211, 252);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease, transform 0.18s ease;
  z-index: 10;
  text-shadow: 0 0 10px rgba(125, 211, 252, 0.45);
}
.social-btn:hover .social-label {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* ── Bottom bar ── */
.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.1rem clamp(1.5rem, 4vw, 3rem) 1.4rem;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-copy {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--text-dim);
}

.footer-dev {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--text-dim);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 200ms ease, border-color 200ms ease;
}
.footer-dev:hover {
  color: rgb(125, 211, 252);
  border-color: rgba(125, 211, 252, 0.3);
}

/* ── Mobile ── */
@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    gap: 1.75rem;
    padding-bottom: 1.5rem;
  }
  .footer-nav { order: 2; }
  .footer-right { order: 3; }
  .social-row { gap: 0.5rem; }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; }
}
</style>