// Hero.jsx
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const rise = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const SOCIALS = [
  { Icon: FiGithub,   href: 'https://github.com/divyanshu-kum-ar',                        title: 'GitHub'   },
  { Icon: FiLinkedin, href: 'https://linkedin.com/in/divyanshu-kumar-974685294/',           title: 'LinkedIn' },
  { Icon: SiLeetcode, href: 'https://leetcode.com/u/divyanshu_kumar01/',                   title: 'LeetCode' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#fdfbf7' }}
    >
      {/* ── Grain texture overlay ─────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px',
        }}
      />

      {/* ── Warm ambient blob top-right ──────────────────────── */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '-120px',
          right: '-80px',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(217,119,6,0.08) 0%, transparent 70%)',
        }}
      />
      {/* ── Cool blob bottom-left ─────────────────────────────── */}
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: '-100px',
          left: '-60px',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 w-full pt-28 pb-20 lg:pt-0 lg:pb-0">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-20">

          {/* ── LEFT: Text ────────────────────────────────────── */}
          <motion.div
            className="flex-1"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Small label */}
            <motion.p
              variants={rise}
              className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase mb-7"
              style={{ color: '#9c836a' }}
            >
              <span
                className="inline-block w-5 h-px"
                style={{ background: '#d97706' }}
              />
              Aspiring Software Engineer
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={rise}
              className="mb-5 font-black leading-[1.02] tracking-tight"
              style={{
                fontFamily: "'Instrument Serif', Georgia, 'Times New Roman', serif",
                fontSize: 'clamp(3rem, 6.5vw, 5rem)',
                letterSpacing: '-0.03em',
                color: '#14100a',
              }}
            >
              Divyanshu{' '}
              <span
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #d97706 0%, #b45309 60%, #92400e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Kumar
              </span>
            </motion.h1>

            {/* One-line description */}
            <motion.p
              variants={rise}
              className="mb-10 leading-relaxed"
              style={{
                fontSize: 'clamp(15px, 1.8vw, 17px)',
                color: '#6b6460',
                maxWidth: 440,
              }}
            >
             Building modern, scalable, and user-centric web applications using the MERN stack. Passionate about clean code, problem solving, and creating impactful digital experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={rise} className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: '#14100a',
                  color: '#fdfbf7',
                  boxShadow: '0 1px 12px rgba(20,16,10,0.18)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2a2018' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#14100a' }}
              >
                See my work
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: 'transparent',
                  color: '#4a3f35',
                  border: '1px solid rgba(20,16,10,0.15)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(20,16,10,0.04)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={rise} className="flex items-center gap-2">
              {SOCIALS.map(({ Icon, href, title }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={title}
                  className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200"
                  style={{
                    color: '#6b6460',
                    border: '1px solid rgba(20,16,10,0.1)',
                    background: 'rgba(20,16,10,0.02)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#14100a'
                    e.currentTarget.style.background = 'rgba(20,16,10,0.06)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#6b6460'
                    e.currentTarget.style.background = 'rgba(20,16,10,0.02)'
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  <Icon className="w-[15px] h-[15px]" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Profile image ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow/border frame */}
              <div
                className="absolute -inset-[2px] rounded-[22px]"
                style={{
                  background:
                    'linear-gradient(145deg, rgba(217,119,6,0.55) 0%, rgba(180,83,9,0.3) 40%, rgba(99,102,241,0.2) 100%)',
                  filter: 'blur(0.5px)',
                }}
              />

              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[20px]"
                style={{
                  width: 'clamp(240px, 28vw, 340px)',
                  height: 'clamp(290px, 34vw, 410px)',
                  boxShadow:
                    '0 20px 60px rgba(20,16,10,0.13), 0 4px 16px rgba(20,16,10,0.08)',
                }}
              >
                <img
                  src="/Pro Pic.jpeg"
                  alt="Divyanshu Kumar"
                  className="w-full h-full object-cover object-center"
                  style={{ display: 'block' }}
                  onError={e => {
                    e.target.style.display = 'none'
                    const p = e.target.parentElement
                    p.style.background = 'linear-gradient(145deg, #fef3c7, #fde68a)'
                    p.style.display = 'flex'
                    p.style.alignItems = 'center'
                    p.style.justifyContent = 'center'
                    const d = document.createElement('span')
                    d.style.cssText = 'font-size:3.5rem;font-weight:900;color:#92400e;font-family:Georgia,serif;letter-spacing:-0.04em'
                    d.textContent = 'DK'
                    p.appendChild(d)
                  }}
                />
                {/* Subtle inner shadow for depth */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 40px rgba(20,16,10,0.06)',
                  }}
                />
              </div>

              {/* Decorative element — offset dot grid */}
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: -24,
                  right: -24,
                  width: 80,
                  height: 80,
                  backgroundImage:
                    'radial-gradient(circle, rgba(217,119,6,0.28) 1.5px, transparent 1.5px)',
                  backgroundSize: '10px 10px',
                }}
              />

              {/* Year tag */}
              <div
                className="absolute -bottom-4 -left-4 rounded-xl px-3 py-2"
                style={{
                  background: '#fdfbf7',
                  border: '1px solid rgba(20,16,10,0.08)',
                  boxShadow: '0 4px 16px rgba(20,16,10,0.08)',
                }}
              >
                <p
                  className="text-[10px] font-semibold tracking-widest uppercase"
                  style={{ color: '#9c836a' }}
                >
                  B.Tech CSE
                </p>
                <p
                  className="text-[12px] font-bold"
                  style={{ color: '#14100a', letterSpacing: '-0.02em' }}
                >
                  2023 – Present
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
