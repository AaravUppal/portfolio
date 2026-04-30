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

    <main class="contact-main">

      <!-- ── Page header ── -->
      <div class="contact-header" ref="headerRef">
        <p class="contact-eyebrow">get in touch</p>
        <h1 class="contact-title">Let's connect.</h1>
        <div class="header-rule" aria-hidden="true"></div>
      </div>

      <!-- ── Contact card ── -->
      <div class="contact-card" ref="cardRef">

        <!-- ══ SUCCESS STATE ══ -->
        <Transition name="fade-slide">
          <div v-if="formState === 'success'" class="state-panel">
            <div class="state-icon">
              <i class="pi pi-check"></i>
            </div>
            <p class="state-title">Message sent.</p>
            <p class="state-sub">I'll get back to you soon.</p>
            <button class="reset-btn" @click="resetForm">Send another</button>
          </div>
        </Transition>

        <!-- ══ ERROR STATE ══ -->
        <Transition name="fade-slide">
          <div v-if="formState === 'error'" class="state-panel state-panel--error">
            <div class="state-icon state-icon--error">
              <i class="pi pi-times"></i>
            </div>
            <p class="state-title">Something went wrong.</p>
            <p class="state-sub">Please try again or email me directly.</p>
            <button class="reset-btn" @click="resetForm">Try again</button>
          </div>
        </Transition>

        <!-- ══ FORM ══ -->
        <Transition name="fade-slide">
          <form
            v-if="formState === 'idle'"
            class="contact-form"
            @submit.prevent="handleSubmit"
            novalidate
          >
            <!-- Hidden Web3Forms fields -->
            <input type="hidden" name="access_key" value="85615592-3482-4e35-966a-721196462194" />
            <input type="hidden" name="subject" value="New message from portfolio" />
            <input type="checkbox" name="botcheck" class="sr-only" tabindex="-1" />

            <!-- Name -->
            <div class="field-group">
              <label for="name" class="field-label">
                Name <span class="required-dot" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
                placeholder="Your full name"
                class="field-input"
                :class="{ 'field-input--error': errors.name }"
                autocomplete="name"
                required
              />
              <p v-if="errors.name" class="field-error">{{ errors.name }}</p>
            </div>

            <!-- Email -->
            <div class="field-group">
              <label for="email" class="field-label">
                Email <span class="required-dot" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
                placeholder="you@example.com"
                class="field-input"
                :class="{ 'field-input--error': errors.email }"
                autocomplete="email"
                required
              />
              <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
            </div>

            <!-- Phone (optional) with country code -->
            <div class="field-group">
              <label for="phone" class="field-label">
                Phone <span class="field-optional">optional</span>
              </label>
              <div class="phone-input-row">
                <!-- Country code dropdown -->
                <div class="phone-code-wrap">
                  <select
                    v-model="form.phoneCode"
                    class="field-input phone-code-select"
                    aria-label="Country calling code"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+55">🇧🇷 +55</option>
                    <option value="+27">🇿🇦 +27</option>
                    <option value="+7">🇷🇺 +7</option>
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+82">🇰🇷 +82</option>
                    <option value="+60">🇲🇾 +60</option>
                    <option value="+66">🇹🇭 +66</option>
                    <option value="+62">🇮🇩 +62</option>
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+94">🇱🇰 +94</option>
                    <option value="+977">🇳🇵 +977</option>
                  </select>
                </div>
                <!-- Number field -->
                <input
                  id="phone"
                  v-model="form.phoneNumber"
                  type="tel"
                  name="phone"
                  placeholder="98765 43210"
                  class="field-input phone-number-input"
                  autocomplete="tel-national"
                />
              </div>
            </div>

            <!-- Message (optional) -->
            <div class="field-group">
              <label for="message" class="field-label">
                Message <span class="field-optional">optional</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                name="message"
                placeholder="What's on your mind?"
                class="field-input field-textarea"
                rows="4"
              ></textarea>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              class="submit-btn"
              :class="{ 'submit-btn--loading': formState === 'submitting' }"
              :disabled="formState === 'submitting'"
            >
              <span v-if="formState !== 'submitting'" class="submit-label">
                Send Message
                <i class="pi pi-arrow-right submit-icon"></i>
              </span>
              <span v-else class="submit-label submit-label--loading">
                <i class="pi pi-spin pi-spinner"></i>
                Sending…
              </span>
            </button>

          </form>
        </Transition>

      </div>

      <!-- ── Alternate contact line ── -->
      <p class="alt-contact" ref="altRef">
        Or reach me directly at
        <a href="mailto:contact@aaravuppal.com" class="alt-email">contact@aaravuppal.com</a>
      </p>

      <!-- ── Mobile CTA ── -->
      <div class="mobile-cta" ref="mobileCTARef">
        <div class="mobile-cta-inner">
          <p class="mobile-cta-eyebrow">
            <span class="label-bracket">[</span>open to work<span class="label-bracket">]</span>
          </p>
          <h2 class="mobile-cta-title">Let's get in touch</h2>
          <p class="mobile-cta-sub">
            Available for freelance projects, full-time roles, and collaborations.
          </p>
          <div class="mobile-cta-links">
            <a href="mailto:contact@aaravuppal.com" class="cta-pill cta-pill--primary">
              <i class="pi pi-envelope"></i>
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/aaravuppal"
              target="_blank"
              rel="noopener noreferrer"
              class="cta-pill cta-pill--ghost"
            >
              <i class="pi pi-linkedin"></i>
              LinkedIn
            </a>
            <a
              href="https://github.com/AaravUppal"
              target="_blank"
              rel="noopener noreferrer"
              class="cta-pill cta-pill--ghost"
            >
              <i class="pi pi-github"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>

    </main>

    <Footer />

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import NavBar from '@/components/NavBar.vue'
// import Footer from '@/components/Footer.vue'

gsap.registerPlugin(ScrollTrigger)

// ── Refs ─────────────────────────────────────────────────────
const pageRoot     = ref(null)
const headerRef    = ref(null)
const cardRef      = ref(null)
const altRef       = ref(null)
const mobileCTARef = ref(null)

// ── Form state ───────────────────────────────────────────────
// 'idle' | 'submitting' | 'success' | 'error'
const formState = ref('idle')

const form = reactive({
  name:        '',
  email:       '',
  phoneCode:   '+91',
  phoneNumber: '',
  message:     '',
})

const errors = reactive({
  name:  '',
  email: '',
})

// ── Validation ───────────────────────────────────────────────
function validate() {
  errors.name  = ''
  errors.email = ''

  if (!form.name.trim()) {
    errors.name = 'Name is required.'
    return false
  }
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
    return false
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRe.test(form.email.trim())) {
    errors.email = 'Please enter a valid email.'
    return false
  }
  return true
}

// ── Form submission (Web3Forms) ───────────────────────────────
async function handleSubmit() {
  if (!validate()) return

  formState.value = 'submitting'

  try {
    const payload = {
      access_key: '85615592-3482-4e35-966a-721196462194',
      subject:    'New message from portfolio',
      name:       form.name.trim(),
      email:      form.email.trim(),
      phone:      form.phoneNumber.trim()
        ? `${form.phoneCode} ${form.phoneNumber.trim()}`
        : undefined,
      message:    form.message.trim() || '(no message provided)',
      botcheck:   '',
    }

    const res  = await fetch('https://api.web3forms.com/submit', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body:    JSON.stringify(payload),
    })
    const data = await res.json()

    if (data.success) {
      formState.value = 'success'
    } else {
      console.error('Web3Forms error', data)
      formState.value = 'error'
    }
  } catch (err) {
    console.error('Network error', err)
    formState.value = 'error'
  }
}

// ── Reset ────────────────────────────────────────────────────
function resetForm() {
  formState.value  = 'idle'
  form.name        = ''
  form.email       = ''
  form.phoneCode   = '+91'
  form.phoneNumber = ''
  form.message     = ''
  errors.name      = ''
  errors.email     = ''
}

// ── GSAP entrance animations ─────────────────────────────────
onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo(headerRef.value,
    { opacity: 0, y: 32 },
    { opacity: 1, y: 0, duration: 0.9 }
  )
  .fromTo(cardRef.value,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8 },
    '-=0.5'
  )
  .fromTo(altRef.value,
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.6 },
    '-=0.3'
  )

  if (mobileCTARef.value) {
    ScrollTrigger.create({
      trigger: mobileCTARef.value,
      start:   'top 88%',
      onEnter: () => gsap.fromTo(
        mobileCTARef.value,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }
      ),
    })
  }
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<style scoped>
/* ══════════════════════════════════════════════════════════════
   ROOT & BG
══════════════════════════════════════════════════════════════ */
.page-root {
  position: relative;
  min-height: 100dvh;
  background: var(--bg);
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  isolation: isolate;
}

.noise-overlay {
  position: fixed;
  inset: 0;
  background-image: url("image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.025;
  pointer-events: none;
  z-index: 0;
}

.grid-bg {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
  z-index: 0;
}

.scan-line {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(125,211,252,0.15), transparent);
  pointer-events: none;
  z-index: 1;
  animation: scan 6s linear infinite;
}
@keyframes scan {
  0%   { top: -2px; }
  100% { top: 100vh; }
}

/* ══════════════════════════════════════════════════════════════
   LAYOUT
══════════════════════════════════════════════════════════════ */
.contact-main {
  position: relative;
  z-index: 2;
  flex: 1;
  width: min(680px, 100%);
  margin-inline: auto;
  padding: clamp(5rem, 10vw, 7rem) clamp(1.25rem, 5vw, 2rem) clamp(3rem, 6vw, 5rem);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* ── Page header ── */
.contact-header  { text-align: left; }

.contact-eyebrow {
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.6rem;
}

.contact-title {
  font-family: var(--sans);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.header-rule {
  width: 40px;
  height: 1px;
  background: linear-gradient(to right, rgba(255,255,255,0.4), transparent);
}

/* ── Contact card ── */
.contact-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: clamp(1.75rem, 4vw, 2.5rem);
  position: relative;
  overflow: hidden;
}
.contact-card::before {
  content: '';
  position: absolute;
  top: 0; left: 8%; right: 8%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent);
}

/* ══════════════════════════════════════════════════════════════
   FORM
══════════════════════════════════════════════════════════════ */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

/* ── Field group ── */
.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.field-label {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.required-dot {
  color: rgba(125,211,252,0.8);
  font-size: 0.8rem;
  line-height: 1;
}

.field-optional {
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.25);
  font-style: italic;
}

/* ── Input / Textarea / Select ── */
.field-input {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.7rem 0.9rem;
  font-family: var(--sans);
  font-size: clamp(0.88rem, 1.4vw, 0.97rem);
  color: var(--text-primary);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  -webkit-appearance: none;
  appearance: none;
}
.field-input::placeholder {
  color: rgba(255,255,255,0.2);
  font-size: 0.88rem;
}
.field-input:focus {
  border-color: rgba(125,211,252,0.45);
  box-shadow: 0 0 0 3px rgba(125,211,252,0.08);
  background: rgba(255,255,255,0.06);
}
.field-input--error {
  border-color: rgba(248,113,113,0.5) !important;
  box-shadow: 0 0 0 3px rgba(248,113,113,0.08) !important;
}
.field-textarea {
  resize: vertical;
  min-height: 110px;
  line-height: 1.6;
}

/* ── Phone row ── */
.phone-input-row {
  display: flex;
  gap: 0.5rem;
  align-items: stretch;
}

.phone-code-wrap {
  flex-shrink: 0;
}

.phone-code-select {
  width: auto;
  min-width: 7.2rem;
  cursor: pointer;
  background-image: url("image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.65rem center;
  padding-right: 1.9rem;
}

.phone-code-select option {
  background: #1a1a1a;
  color: #e0e0e0;
}

.phone-number-input {
  flex: 1;
  min-width: 0;
}

/* ── Field error ── */
.field-error {
  font-size: 0.7rem;
  color: rgba(248,113,113,0.85);
  margin-top: 0.1rem;
}

/* ── Submit button ── */
.submit-btn {
  margin-top: 0.4rem;
  width: 100%;
  padding: 0.85rem 1.5rem;
  background: linear-gradient(135deg, rgba(125,211,252,0.18), rgba(103,232,249,0.1));
  border: 1px solid rgba(125,211,252,0.25);
  border-radius: 8px;
  color: rgba(125,211,252,0.95);
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease,
              transform 0.18s ease, box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;
}
.submit-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, rgba(125,211,252,0.26), rgba(103,232,249,0.16));
  border-color: rgba(125,211,252,0.45);
  box-shadow: 0 0 24px rgba(125,211,252,0.12);
  transform: translateY(-1px);
}
.submit-btn:active:not(:disabled) { transform: translateY(0); }
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.submit-btn--loading {
  border-color: rgba(125,211,252,0.15);
}

.submit-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.submit-label--loading { gap: 0.6rem; }

.submit-icon {
  font-size: 0.75rem;
  transition: transform 0.2s ease;
}
.submit-btn:hover .submit-icon { transform: translateX(3px); }

/* ══════════════════════════════════════════════════════════════
   STATE PANELS (success / error)
══════════════════════════════════════════════════════════════ */
.state-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: clamp(2rem, 5vw, 3rem) 1rem;
  gap: 0.75rem;
}

.state-icon {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: rgba(125,211,252,0.1);
  border: 1px solid rgba(125,211,252,0.25);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
  color: rgba(125,211,252,0.9);
  margin-bottom: 0.5rem;
}
.state-icon--error {
  background: rgba(248,113,113,0.1);
  border-color: rgba(248,113,113,0.25);
  color: rgba(248,113,113,0.9);
}

.state-title {
  font-family: var(--sans);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}
.state-sub {
  font-size: 0.88rem;
  color: var(--text-muted);
}

.reset-btn {
  margin-top: 0.5rem;
  padding: 0.55rem 1.4rem;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-muted);
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}
.reset-btn:hover {
  border-color: rgba(125,211,252,0.35);
  color: rgba(125,211,252,0.85);
}

/* ══════════════════════════════════════════════════════════════
   ALT CONTACT LINE
══════════════════════════════════════════════════════════════ */
.alt-contact {
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.6;
}
.alt-email {
  color: rgba(125,211,252,0.75);
  text-decoration: none;
  transition: color 0.2s ease;
  margin-left: 0.3rem;
}
.alt-email:hover { color: rgba(125,211,252,1); }

/* ══════════════════════════════════════════════════════════════
   MOBILE CTA — shown on mobile only
══════════════════════════════════════════════════════════════ */
.mobile-cta {
  display: none;
}

@media (max-width: 639px) {
  .mobile-cta {
    display: block;
    opacity: 0; /* animated in by GSAP */
  }

  .mobile-cta-inner {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 1.75rem 1.5rem;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  .mobile-cta-inner::before {
    content: '';
    position: absolute;
    top: 0; left: 10%; right: 10%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(125,211,252,0.2), transparent);
  }

  .mobile-cta-eyebrow {
    font-family: var(--mono);
    font-size: 0.55rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(125,211,252,0.6);
    margin-bottom: 0.6rem;
  }

  .label-bracket {
    opacity: 0.45;
    margin: 0 0.1rem;
  }

  .mobile-cta-title {
    font-family: var(--sans);
    font-size: clamp(1.5rem, 6vw, 1.9rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--text-primary);
    line-height: 1.1;
    margin-bottom: 0.7rem;
  }

  .mobile-cta-sub {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.65;
    max-width: 30ch;
    margin: 0 auto 1.5rem;
  }

  .mobile-cta-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: center;
  }

  .cta-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem 1.1rem;
    border-radius: 9999px;
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.22s ease;
    cursor: pointer;
  }

  .cta-pill--primary {
    background: linear-gradient(135deg, rgba(125,211,252,0.2), rgba(103,232,249,0.12));
    border: 1px solid rgba(125,211,252,0.35);
    color: rgba(125,211,252,0.95);
  }
  .cta-pill--primary:hover {
    background: linear-gradient(135deg, rgba(125,211,252,0.3), rgba(103,232,249,0.2));
    border-color: rgba(125,211,252,0.55);
    box-shadow: 0 0 16px rgba(125,211,252,0.12);
    transform: translateY(-1px);
  }

  .cta-pill--ghost {
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
    color: var(--text-muted);
  }
  .cta-pill--ghost:hover {
    border-color: rgba(125,211,252,0.25);
    color: rgba(125,211,252,0.8);
    background: rgba(125,211,252,0.06);
    transform: translateY(-1px);
  }
}

/* ══════════════════════════════════════════════════════════════
   TRANSITIONS
══════════════════════════════════════════════════════════════ */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ── sr-only ── */
.sr-only {
  position: absolute; width: 1px; height: 1px;
  padding: 0; margin: -1px; overflow: hidden;
  clip: rect(0,0,0,0); white-space: nowrap; border-width: 0;
}
</style>
