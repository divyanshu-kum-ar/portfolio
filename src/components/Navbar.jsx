// Navbar.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('')
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const ids = ['about', 'skills', 'projects', 'experience', 'contact']
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -56 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
        style={{
          background: scrolled ? 'rgba(253,251,247,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px) saturate(160%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(160%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(20,16,10,0.07)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        }}
      >
        <div
          className="max-w-5xl mx-auto px-6 sm:px-10 flex items-center justify-between"
          style={{ height: 58 }}
        >
          {/* Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-1.5 group"
            style={{ textDecoration: 'none' }}
          >
            <span
              className="font-black tracking-tighter leading-none select-none"
              style={{
                fontSize: 17,
                fontFamily: "'Instrument Serif', Georgia, serif",
                color: '#14100a',
                letterSpacing: '-0.04em',
              }}
            >
              dk
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full mb-0.5 transition-transform duration-300 group-hover:scale-125"
              style={{ background: '#d97706', display: 'inline-block', flexShrink: 0 }}
            />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {LINKS.map(({ label, href }) => {
              const id = href.slice(1)
              const isActive = active === id
              return (
                <a
                  key={id}
                  href={href}
                  className="relative px-3.5 py-1.5 rounded-lg text-[13px] font-medium"
                  style={{
                    color: isActive ? '#14100a' : '#6b6460',
                    transition: 'color 0.15s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#14100a'; e.currentTarget.style.background = 'rgba(20,16,10,0.04)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = isActive ? '#14100a' : '#6b6460'; e.currentTarget.style.background = 'transparent' }}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: '#d97706' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:divyanshu975677@gmail.com"
              className="hidden md:inline-flex items-center text-[13px] font-semibold px-4 py-1.5 rounded-lg"
              style={{
                background: '#14100a',
                color: '#fdfbf7',
                textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              Say hello
            </a>
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg"
              style={{ color: '#14100a', background: 'rgba(20,16,10,0.05)' }}
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {open ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 z-40 md:hidden"
            style={{
              top: 58,
              background: 'rgba(253,251,247,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(20,16,10,0.07)',
            }}
          >
            <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col gap-1">
              {LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="py-2.5 px-3 rounded-lg text-[14px] font-medium"
                  style={{ color: '#14100a', textDecoration: 'none' }}
                >
                  {label}
                </motion.a>
              ))}
              <a
                href="mailto:divyanshu975677@gmail.com"
                onClick={() => setOpen(false)}
                className="mt-2 py-2.5 px-3 rounded-lg text-[14px] font-semibold text-center"
                style={{ background: '#14100a', color: '#fdfbf7', textDecoration: 'none' }}
              >
                Say hello
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
