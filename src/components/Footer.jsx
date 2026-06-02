import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const socials = [
  { icon: FaGithub, href: 'https://github.com/divyanshu-kum-ar', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/divyanshu-kumar-974685294/', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/divyanshu_kumar01/', label: 'LeetCode' },
]

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-surface-dark-border bg-white/50 dark:bg-surface-dark-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6">

          {/* Logo */}
          <div className="font-display font-extrabold text-2xl">
            <span className="gradient-text">Divyanshu Kumar</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-ink-500 dark:hover:text-ink-400 transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-surface-dark-border text-gray-500 dark:text-gray-400 hover:text-ink-500 dark:hover:text-ink-400 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400 dark:text-gray-600 text-center">
            © {new Date().getFullYear()} Divyanshu Kumar. Built with React, Tailwind & Framer Motion.{' '}
            <span className="inline-flex items-center gap-1">
              Made with <FaHeart className="w-3 h-3 text-red-400" /> in India
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
