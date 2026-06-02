import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMapPin, FiPhone, FiMail, FiCalendar } from 'react-icons/fi'
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

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding relative">
      <div className="container-max" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-xs text-ink-500 dark:text-ink-400 tracking-widest uppercase mb-3 block">Who I Am</span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: Objective + Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="gradient-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">👨‍💻</span>
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">Professional Summary</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                Aspiring MERN Stack Developer with strong knowledge of HTML, CSS, JavaScript, and React. 
                Skilled in building responsive and user-friendly applications. Currently expanding backend 
                expertise using Node.js, Express.js, and MongoDB, with a strong foundation in Java and OOP concepts.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="card-glass p-4 flex items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-ink-50 dark:bg-ink-900/40 flex-shrink-0">
                    <Icon className="w-4 h-4 text-ink-500 dark:text-ink-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 break-all">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-ink-50 dark:bg-ink-900/40">
                <HiAcademicCap className="w-5 h-5 text-ink-500 dark:text-ink-400" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">Education</h3>
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
                      {edu.icon} {edu.degree}
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
