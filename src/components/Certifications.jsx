import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const ITEMS = [
  {
    id: "hackerrank-java",
    title: "5-Star Java Developer",
    issuer: "HackerRank",
    issueDate: "2024",
    credentialUrl: "https://www.hackerrank.com/profile/divyanshu_kumar01",
    description: "Achieved the highest tier rating in Java problem solving, demonstrating proficiency in Object-Oriented Programming (OOP) concepts, loops, exception handling, data structures, and algorithms.",
    category: "Coding Milestone",
    icon: "☕",
    badgeColor: "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
  },
  {
    id: "leetcode-dsa",
    title: "200+ Solved Problems",
    issuer: "LeetCode",
    issueDate: "Ongoing",
    credentialUrl: "https://leetcode.com/u/divyanshu_kumar01/",
    description: "Solved more than 200 coding challenges covering fundamental arrays, lists, hash maps, sorting, strings, and tree structures.",
    category: "Coding Milestone",
    icon: "🧩",
    badgeColor: "bg-orange-400/20 text-orange-400 border border-orange-400/30"
  },
  {
    id: "eduskills-intern",
    title: "Full Stack Development Internship",
    issuer: "Eduskills Academy",
    issueDate: "2024",
    credentialUrl: "https://certificate.eduskillsfoundation.org/verify/4fa5bb734341286ac49b/4fa5bb734341286ac49b",
    description: "Successfully completed a structured full-stack development internship focusing on modern web layouts and database schemas.",
    category: "Internship",
    icon: "💼",
    badgeColor: "bg-blue-400/20 text-blue-400 border border-blue-400/30"
  },
  {
    id: "mysql-certified",
    title: "MySQL SQL Certification",
    issuer: "HackerRank",
    issueDate: "2024",
    credentialUrl: "https://www.hackerrank.com/certificates/1dad6fbd34f9",
    description: "Demonstrated skills in database layouts, DDL/DML transactions, complex joins, filters, grouping, aggregation, and subqueries.",
    category: "Certification",
    icon: "🗄️",
    badgeColor: "bg-green-400/20 text-green-400 border border-green-400/30"
  }
]

const stats = [
  { number: '200+', label: 'DSA Problems Solved', icon: '🧩' },
  { number: '2+', label: 'Internships Completed', icon: '💼' },
  { number: '4', label: 'Projects Engineered', icon: '🚀' },
  { number: '5★', label: 'Java on HackerRank', icon: '★' },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" aria-labelledby="certs-heading" className="section-padding relative">
      <div className="absolute top-0 left-1/2 w-96 h-64 bg-ink-400/8 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container-max" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-xs text-ink-500 dark:text-ink-400 tracking-widest uppercase mb-3 block">Creds & Numbers</span>
          <h2 id="certs-heading" className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Numeric Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="card-glass p-5 text-center bg-white/60 dark:bg-surface-dark-card/60"
            >
              <span className="block text-2xl mb-2" aria-hidden="true">{stat.icon}</span>
              <span className="block font-display font-extrabold text-2xl gradient-text">{stat.number}</span>
              <span className="block text-xs text-gray-500 dark:text-gray-400 font-semibold mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              tabIndex={0}
              className="group card-glass p-5 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-indigo-500 outline-none flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Visual Icon & Category tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-3xl p-1 bg-gray-100 dark:bg-surface-dark-border rounded-lg" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider ${item.badgeColor}`}>
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-white text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono font-medium text-ink-500 dark:text-ink-400 mt-1">
                    {item.issuer} — {item.issueDate}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="pt-4 mt-auto">
                {item.credentialUrl ? (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-600 dark:text-ink-400 hover:text-ink-700 dark:hover:text-ink-300 transition-colors outline-none"
                    aria-label={`Verify credentials for ${item.title} on ${item.issuer}`}
                  >
                    Verify Credential <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-gray-400 dark:text-gray-500 block italic">
                    Verification link coming soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
