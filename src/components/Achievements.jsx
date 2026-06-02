import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const achievements = [
  {
    icon: '⭐',
    title: '5-Star Java',
    subtitle: 'HackerRank',
    description: 'Achieved 5-star rating on HackerRank in Java, demonstrating strong command of the language.',
    color: 'from-yellow-400/20 to-orange-400/20',
    border: 'hover:border-yellow-400/40',
    badge: 'gold',
  },
  {
    icon: '🧩',
    title: '200+ DSA Problems',
    subtitle: 'LeetCode',
    description: 'Solved 200+ Data Structures & Algorithms problems on LeetCode, sharpening problem-solving skills.',
    color: 'from-orange-400/20 to-amber-400/20',
    border: 'hover:border-orange-400/40',
    badge: 'silver',
  },
  {
    icon: '🌐',
    title: 'Full Stack Internship',
    subtitle: 'Eduskills',
    description: 'Completed a Full Stack Development internship, gaining hands-on industry experience.',
    color: 'from-ink-400/20 to-violet-400/20',
    border: 'hover:border-ink-400/40',
    badge: 'blue',
  },
  {
    icon: '🗄️',
    title: 'MySQL Certification',
    subtitle: 'Certified',
    description: 'Earned a MySQL certification, validating proficiency in relational database management.',
    color: 'from-green-400/20 to-teal-400/20',
    border: 'hover:border-green-400/40',
    badge: 'green',
  },
]

const stats = [
  { number: '200+', label: 'DSA Problems', icon: '🧩' },
  { number: '2+', label: 'Internships', icon: '💼' },
  { number: '3+', label: 'Projects Built', icon: '🚀' },
  { number: '5⭐', label: 'Java HackerRank', icon: '⭐' },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute top-0 left-1/2 w-96 h-64 bg-ink-400/8 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-xs text-ink-500 dark:text-ink-400 tracking-widest uppercase mb-3 block">What I've Earned</span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="card-glass p-5 text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-display font-extrabold text-2xl gradient-text">{stat.number}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={`group card-glass border border-transparent ${ach.border} relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl p-5`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${ach.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className="text-3xl mb-3">{ach.icon}</div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">{ach.title}</h3>
                <p className="text-xs font-mono font-medium text-ink-500 dark:text-ink-400 mb-3">{ach.subtitle}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
