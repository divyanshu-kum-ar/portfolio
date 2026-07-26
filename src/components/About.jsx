import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMapPin, FiPhone, FiMail, FiCalendar, FiArrowRight } from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'IMS Engineering College',
    year: '2023 – Present',
    score: 'CGPA: 8.5',
    icon: '🎓',
  },
  {
    degree: '12th Grade — UP Board',
    institution: 'Senior Secondary School',
    year: '2023',
    score: '89.6%',
    icon: '📚',
  },
  {
    degree: '10th Grade — UP Board',
    institution: 'Secondary School',
    year: '2021',
    score: '86.83%',
    icon: '📖',
  },
]

const info = [
  { icon: FiMapPin, label: 'Location', value: 'India' },
  { icon: FiPhone, label: 'Phone', value: '+91-9058414850' },
  { icon: FiMail, label: 'Email', value: 'divyanshu975677@gmail.com' },
  { icon: FiCalendar, label: 'Status', value: 'B.Tech CSE (2023-Present)' },
]

const highlights = [
  {
    emoji: "💻",
    title: "Full-Stack Foundations",
    desc: "Proficient in building responsive front-end interfaces using React and Tailwind, while expanding backend engineering capabilities with Node.js, Express, and MongoDB."
  },
  {
    emoji: "🧩",
    title: "Problem Solving & DSA",
    desc: "Possesses a strong foundation in Java, Object-Oriented Programming (OOP) concepts, and has successfully solved over 200 coding challenges on LeetCode."
  },
  {
    emoji: "📈",
    title: "Academic Focus",
    desc: "A dedicated Computer Science & Engineering student maintaining a solid 8.5 CGPA, focusing on software engineering principles and structured algorithms."
  }
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding relative">
      <div className="container-max" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-xs text-ink-500 dark:text-ink-400 tracking-widest uppercase mb-3 block">Who I Am</span>
          <h2 id="about-heading" className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: Introduction + Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Short Introduction */}
            <div className="gradient-border p-6 bg-white dark:bg-surface-dark-card rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl" aria-hidden="true">👨‍💻</span>
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">Professional Summary</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                I am an aspiring software engineer specializing in frontend and full-stack web development.
                I focus on building clean, user-centric, and accessible digital products. Currently, I am expanding my
                backend engineering capabilities while pursuing my B.Tech degree.
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white pl-2">Key Highlights</h3>
              <ul className="space-y-3.5 pl-0">
                {highlights.map((hl) => (
                  <li key={hl.title} className="card-glass p-4 flex gap-4 items-start">
                    <span className="text-xl p-2 bg-gray-100 dark:bg-surface-dark-border rounded-xl flex-shrink-0" aria-hidden="true">
                      {hl.emoji}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{hl.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{hl.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Actions (CTAs) */}
            <div className="flex flex-wrap items-center gap-3 pt-2 pl-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-ink-500 text-white rounded-lg hover:bg-ink-600 transition-colors focus-visible:ring-2 focus-visible:ring-ink-500 focus-visible:ring-offset-2 outline-none"
              >
                View Projects
                <FiArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 border border-gray-300 dark:border-ink-700/50 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-ink-900/30 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none"
              >
                Download Resume
              </a>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="card-glass p-4 flex items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-ink-50 dark:bg-ink-900/40 flex-shrink-0">
                    <Icon className="w-4 h-4 text-ink-500 dark:text-ink-400" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium mb-0.5">{label}</span>
                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200 break-all">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-ink-50 dark:bg-ink-900/40">
                <HiAcademicCap className="w-5 h-5 text-ink-500 dark:text-ink-400" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">Education History</h3>
            </div>

            <div className="relative space-y-4 pl-4">
              {/* Timeline line */}
              <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-ink-400 via-violet-400 to-transparent" />

              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="card-glass p-5 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-5 top-5 w-3 h-3 rounded-full bg-gradient-to-br from-ink-400 to-violet-500 ring-2 ring-white dark:ring-surface-dark" />

                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="font-display font-bold text-sm text-gray-900 dark:text-white leading-snug">
                      <span className="mr-1.5" aria-hidden="true">{edu.icon}</span>{edu.degree}
                    </h4>
                    <span className="skill-tag flex-shrink-0 text-xs">{edu.score}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  <p className="text-xs text-ink-400 dark:text-ink-500 mt-1 font-mono">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
