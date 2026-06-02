import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    role: 'Java Developer Intern',
    company: 'CodSoft',
    duration: 'Nov 2024 – Dec 2024',
    location: 'Remote',
    type: 'Internship',
    description: 'Worked as a Java Developer Intern, applying OOP principles to build practical applications.',
    responsibilities: [
      'Built Java applications using core OOP principles — encapsulation, inheritance, and polymorphism',
      'Debugged and optimized existing codebases to improve performance and code quality',
      'Collaborated using Git & GitHub for version control and team workflow',
      'Delivered project milestones on time within a structured internship program',
    ],
    tech: ['Java', 'OOP', 'Git', 'GitHub'],
    emoji: '☕',
  },
  {
    role: 'Full Stack Intern',
    company: 'Eduskills',
    duration: '2024',
    location: 'Remote',
    type: 'Internship',
    description: 'Full Stack development internship focused on modern web technologies and real-world application development.',
    responsibilities: [
      'Developed full-stack web applications using modern technologies',
      'Gained hands-on experience with both frontend and backend development',
      'Worked with databases and RESTful API integrations',
      'Participated in agile development practices',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    emoji: '🌐',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-xs text-ink-500 dark:text-ink-400 tracking-widest uppercase mb-3 block">Where I've Worked</span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-ink-400 via-violet-400 to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative flex gap-6 sm:gap-8"
                >
                  {/* Timeline icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-ink-500 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-ink-500/30 text-xl sm:text-2xl">
                      {exp.emoji}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card-glass p-5 sm:p-6 mb-2">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <FiBriefcase className="w-3.5 h-3.5 text-ink-400" />
                          <span className="font-medium text-ink-500 dark:text-ink-400 text-sm">{exp.company}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium px-2 py-0.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full border border-green-200 dark:border-green-800/50">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-mono">
                          <FiCalendar className="w-3 h-3" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-1 justify-end">
                          <FiMapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((r, ri) => (
                        <li key={ri} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-ink-400 mt-2 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-surface-dark-border">
                      {exp.tech.map(t => (
                        <span key={t} className="skill-tag text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
