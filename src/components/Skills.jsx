import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiJavascript, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiFirebase, SiGit,
  SiVercel, SiTailwindcss, SiHtml5,
} from 'react-icons/si'
import { FaJava, FaCss3Alt } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'

const GROUPS = [
  {
    label: 'Languages',
    items: [
      { name: 'Java', Icon: FaJava, hex: '#f97316' },
      { name: 'JavaScript', Icon: SiJavascript, hex: '#facc15' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', Icon: SiReact, hex: '#38bdf8' },
      { name: 'HTML5', Icon: SiHtml5, hex: '#f87171' },
      { name: 'CSS3', Icon: FaCss3Alt, hex: '#60a5fa' },
      { name: 'Tailwind', Icon: SiTailwindcss, hex: '#34d399' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs, hex: '#4ade80' },
      { name: 'Express', Icon: SiExpress, hex: '#a78bfa' },
      { name: 'REST APIs', Icon: TbApi, hex: '#c084fc' },
    ],
  },
  {
    label: 'Data & Tools',
    items: [
      { name: 'MongoDB', Icon: SiMongodb, hex: '#4ade80' },
      { name: 'MySQL', Icon: SiMysql, hex: '#38bdf8' },
      { name: 'Firebase', Icon: SiFirebase, hex: '#fb923c' },
      { name: 'Git', Icon: SiGit, hex: '#f87171' },
      { name: 'Vercel', Icon: SiVercel, hex: '#e2e8f0' },
    ],
  },
]

const EXTRAS = [
  'OOP Concepts', 'DSA', 'Context API', 'JWT Auth',
  'Gemini AI API', 'Agile', 'Responsive Design',
]

/* ── Skill card ─────────────────────────────────────────────── */
function SkillCard({ name, Icon, hex, delay, inView }) {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      tabIndex={0}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="group relative flex flex-col items-center gap-3 py-5 px-3 rounded-2xl cursor-default select-none overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      style={{
        background: active ? `rgba(${hexToRgb(hex)}, 0.08)` : 'rgba(255,255,255,0.03)',
        border: active ? `1px solid ${hex}50` : '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transform: active ? 'translateY(-6px) scale(1.03)' : 'translateY(0) scale(1)',
        boxShadow: active ? `0 0 24px ${hex}25, 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)` : 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease',
      }}
    >
      {/* Corner shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${hex}18 0%, transparent 70%)`,
        }}
      />

      {/* Icon container */}
      <div
        className="relative w-11 h-11 flex items-center justify-center rounded-xl z-10 transition-all duration-300"
        style={{
          background: `${hex}15`,
          border: `1px solid ${hex}30`,
          boxShadow: active ? `0 0 16px ${hex}60` : `0 0 0 0 ${hex}40`,
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <Icon style={{ color: hex, width: 20, height: 20, filter: `drop-shadow(0 0 6px ${hex}80)` }} />
      </div>

      {/* Name */}
      <span
        className="text-[11.5px] font-semibold text-center leading-none z-10 text-gray-700 dark:text-slate-200"
      >
        {name}
      </span>
    </motion.div>
  )
}

/* hex → "r,g,b" helper for rgba() */
function hexToRgb(hex) {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16)
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`
}

/* ── Main component ─────────────────────────────────────────── */
export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  let globalIndex = 0

  return (
    <section
      id="skills"
      className="relative py-28 px-6 sm:px-10 overflow-hidden skills-section-bg"
    >
      {/* ── Background ambient blobs ──────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full blur-[120px] opacity-20"
          style={{
            width: 480, height: 480,
            top: '-10%', left: '-5%',
            background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[100px] opacity-15"
          style={{
            width: 380, height: 380,
            bottom: '5%', right: '-5%',
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[80px] opacity-10"
          style={{
            width: 260, height: 260,
            top: '40%', left: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Subtle grid overlay ───────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div ref={ref} className="relative max-w-5xl mx-auto z-10">

        {/* ── Section header ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-ink-500 dark:to-[#818cf8]" />
            <span
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink-600 dark:text-[#818cf8]"
            >
              Technical Arsenal
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-ink-500 dark:from-[#818cf8] to-transparent" />
          </div>

          {/* Heading */}
          <h2
            className="text-gray-900 dark:text-[#f1f5f9] font-extrabold leading-tight mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Skills &{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Technologies
            </span>
          </h2>

          <p
            className="mx-auto text-[15px] leading-relaxed text-gray-500 dark:text-slate-400"
            style={{ maxWidth: 440 }}
          >
            Tools and frameworks I reach for when building full-stack web products.
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 mx-auto h-px w-24 rounded-full bg-gradient-to-r from-transparent via-ink-500 dark:via-[#818cf8] to-transparent"
          />
        </motion.div>

        {/* ── Skill groups ──────────────────────────────────────── */}
        <div className="flex flex-col gap-12">
          {GROUPS.map((group, gi) => {
            const groupStart = globalIndex
            globalIndex += group.items.length

            return (
              <div key={group.label}>
                {/* Group label */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: gi * 0.08 }}
                  className="flex items-center gap-3 mb-5"
                >
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full text-gray-500 dark:text-[#94a3b8] bg-slate-100 dark:bg-slate-800/40 border border-gray-200 dark:border-slate-800"
                  >
                    {group.label}
                  </span>
                  <div
                    className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-850 to-transparent"
                  />
                </motion.div>

                {/* Card grid */}
                <div className="grid grid-cols-2 min-[375px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
                  {group.items.map((item, ii) => (
                    <SkillCard
                      key={item.name}
                      {...item}
                      delay={(groupStart + ii) * 0.04 + gi * 0.07}
                      inView={inView}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Extras tag cloud ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 flex flex-wrap items-center gap-2.5"
        >
          <span
            className="text-[11px] font-bold uppercase tracking-[0.15em] mr-1 text-gray-500 dark:text-[#475569]"
          >
            Also:
          </span>
          {EXTRAS.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.6 + i * 0.04 }}
              className="text-[12px] font-medium px-3 py-1 rounded-full cursor-default bg-indigo-50 dark:bg-indigo-900/10 text-indigo-650 dark:text-[#a5b4fc] border border-indigo-200/50 dark:border-indigo-900/30 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
