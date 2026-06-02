import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'divyanshu975677@gmail.com', href: 'mailto:divyanshu975677@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+91-9058414850', href: 'tel:+919058414850' },
  { icon: FiMapPin, label: 'Location', value: 'India', href: '#' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/divyanshu-kum-ar', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/divyanshu-kumar-974685294/', label: 'LinkedIn', color: 'hover:text-blue-600' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/divyanshu_kumar01/', label: 'LeetCode', color: 'hover:text-orange-500' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-ink-400/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-violet-400/10 rounded-full blur-3xl" />

      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-xs text-ink-500 dark:text-ink-400 tracking-widest uppercase mb-3 block">Get In Touch</span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto text-sm">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="gradient-border p-6">
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">Let's work together</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                I'm currently open to internship opportunities, freelance projects, and full-time roles. 
                If you have a project that needs a dedicated developer, feel free to reach out!
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="card-glass p-4 flex items-center gap-4 hover:shadow-md transition-shadow group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ink-500 to-violet-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-ink-500/30 transition-shadow">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5 font-medium">{label}</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 break-all">{value}</p>
                </div>
              </a>
            ))}

            {/* Socials */}
            <div className="card-glass p-5">
              <p className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-surface-dark-border text-gray-500 dark:text-gray-400 ${color} transition-all border border-transparent hover:border-ink-200 dark:hover:border-ink-700/50`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card-glass p-6 sm:p-8">
              <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-6">Send a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mx-auto mb-4">
                    <FiCheck className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Thank you for reaching out. I'll get back to you soon!</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline mt-6 text-sm py-2 px-4">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      placeholder="Divyanshu Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-surface-dark-border border border-gray-200 dark:border-surface-dark-border focus:border-ink-400 dark:focus:border-ink-500 focus:ring-2 focus:ring-ink-400/20 outline-none text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-surface-dark-border border border-gray-200 dark:border-surface-dark-border focus:border-ink-400 dark:focus:border-ink-500 focus:ring-2 focus:ring-ink-400/20 outline-none text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="Hi Divyanshu, I'd love to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-surface-dark-border border border-gray-200 dark:border-surface-dark-border focus:border-ink-400 dark:focus:border-ink-500 focus:ring-2 focus:ring-ink-400/20 outline-none text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
