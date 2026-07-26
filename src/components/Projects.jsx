import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi"
import { FaCss3Alt } from "react-icons/fa"
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiJsonwebtokens,
  SiFramer,
  SiHtml5,
  SiExpress,
  SiSocketdotio,
  SiGoogle,
  SiMaterialdesign
} from "react-icons/si"
import { PROJECTS } from "../data/projects"

/* ── Technology Icon Mapping ─────────────────── */
const TECH_ICONS = {
  "React": <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />,
  "Tailwind CSS": <SiTailwindcss className="w-3.5 h-3.5 text-[#38BDF8]" />,
  "Framer Motion": <SiFramer className="w-3.5 h-3.5 text-[#0055FF]" />,
  "Node.js": <SiNodedotjs className="w-3.5 h-3.5 text-[#339933]" />,
  "MongoDB": <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" />,
  "Firebase": <SiFirebase className="w-3.5 h-3.5 text-[#FFCA28]" />,
  "Firebase Auth": <SiFirebase className="w-3.5 h-3.5 text-[#FFCA28]" />,
  "JWT": <SiJsonwebtokens className="w-3.5 h-3.5 text-[#000000] dark:text-[#FFFFFF]" />,
  "Context API": <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />,
  "JavaScript": <SiJavascript className="w-3.5 h-3.5 text-[#F7DF1E]" />,
  "HTML": <SiHtml5 className="w-3.5 h-3.5 text-[#E34F26]" />,
  "CSS": <FaCss3Alt className="w-3.5 h-3.5 text-[#1572B6]" />,
  "Express.js": <SiExpress className="w-3.5 h-3.5 text-[#000000] dark:text-[#FFFFFF]" />,
  "Socket.IO": <SiSocketdotio className="w-3.5 h-3.5 text-[#010101] dark:text-[#FFFFFF]" />,
  "Gemini AI": <SiGoogle className="w-3.5 h-3.5 text-[#4285F4]" />,
  "Material UI": <SiMaterialdesign className="w-3.5 h-3.5 text-[#007FFF]" />
}

/* ── Card Component (Minimalist) ──────────────── */
function Card({ project, index, inView, onOpenDetails }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-white dark:bg-surface-dark-card border border-slate-200 dark:border-surface-dark-border hover:border-violet-500/30 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] focus-within:ring-2 focus-within:ring-indigo-500 outline-none transition-all duration-300 h-full shadow-sm hover:shadow-md"
    >
      <div>
        {/* Browser Mockup Bezel Frame */}
        <div className="flex flex-col bg-slate-950">
          <div className="bg-[#f1f5f9] dark:bg-[#1e2235]/60 border-b border-slate-200 dark:border-surface-dark-border px-4 py-2 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
            <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
            <div className="ml-2 text-[9px] font-mono text-slate-500 tracking-wider truncate select-none">
              {project.title.toLowerCase().replace(/\s+/g, '-')}.local
            </div>
          </div>
 
          {/* Image Container */}
          <div className="relative overflow-hidden aspect-[16/10] bg-[#0f172a]">
            {/* Floating Badges */}
            <div className="absolute top-2.5 left-2.5 z-10 flex flex-wrap gap-1.5">
              {project.featured && (
                <span className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 backdrop-blur-md shadow-sm">
                  ★ Featured
                </span>
              )}
              <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border ${
                project.status === 'Deployed'
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
              }`}>
                {project.status}
              </span>
            </div>
 
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} project interface`}
                width="400"
                height="250"
                loading="lazy"
                className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 select-none p-6 text-center">
                <svg className="w-8 h-8 text-slate-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-[10px] font-mono tracking-wider">
                  {project.id === 'novatalk'
                    ? 'NovaTalk screenshots will be added soon.'
                    : project.id === 'finpilot-ai'
                      ? 'FinPilot AI screenshots will be added soon.'
                      : 'Project screenshot will be added soon.'}
                </span>
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-65 pointer-events-none" />
          </div>
        </div>
 
        {/* Card Main Info */}
        <div className="p-5 space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-violet-450 dark:group-hover:text-violet-400 transition-colors font-display">
              {project.title}
            </h3>
            <p className="text-gray-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-2">
              {project.summary}
            </p>
          </div>
 
          {/* Minimal 3-4 Tech Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 dark:bg-[#1e2235]/40 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-white/5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
 
      {/* View Details Action Button */}
      <div className="p-5 pt-0">
        <button
          onClick={() => onOpenDetails(project)}
          className="w-full text-center py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-surface-dark-border group-hover:border-violet-500/35 group-hover:bg-violet-500/5 rounded-xl transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          View Details
        </button>
      </div>
    </motion.div>
  )
}

/* ── Project Details Modal Component ─────────── */
function DetailsModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const jobPrepScreenshots = [
    {
      src: "/images/aiJobpre.png",
      label: "Technical Questions",
      alt: "AI Job Preparation technical questions dashboard"
    },
    {
      src: "/images/aiJobpre1.png",
      label: "AI Analytics",
      alt: "AI Job Preparation interview analytics dashboard"
    }
  ];

  // Lock body scroll when modal is active
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  // Listen to ESC key press for closing modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Animated Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl bg-white dark:bg-surface-dark-card border border-slate-200 dark:border-surface-dark-border rounded-2xl overflow-y-auto shadow-2xl z-10 flex flex-col max-h-[90vh] sm:max-h-[85vh] scrollbar-thin"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          aria-label="Close project details modal"
        >
          <FiX className="w-4 h-4" />
        </button>

        <div>
          {/* Large Browser Mockup Header */}
          <div className="flex flex-col bg-slate-950">
            <div className="bg-[#f1f5f9] dark:bg-[#1e2235]/60 border-b border-slate-200 dark:border-surface-dark-border px-4 py-3 flex flex-wrap items-center justify-between gap-2 select-none">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <div className="ml-2 text-[10px] font-mono text-slate-500 tracking-wider truncate">
                  {project.title.toLowerCase().replace(/\s+/g, '-').replace('---', '-')}.local
                </div>
              </div>

              {project.id === 'ai-jobprep' && (
                <div className="flex items-center gap-1 bg-slate-200 dark:bg-slate-950/80 p-0.5 rounded-lg border border-slate-300 dark:border-white/5" role="tablist">
                  {jobPrepScreenshots.map((scr, idx) => (
                    <button
                      key={idx}
                      role="tab"
                      aria-selected={activeTab === idx}
                      onClick={() => setActiveTab(idx)}
                      className={`px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-md transition-all duration-200 focus:outline-none ${
                        activeTab === idx
                          ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      {scr.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Screenshot Panel */}
            <div className="relative aspect-[16/10] sm:aspect-video bg-slate-950 w-full overflow-hidden flex items-center justify-center">
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                {project.featured && (
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 backdrop-blur-md shadow-sm">
                    ★ Featured
                  </span>
                )}
                <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border ${
                  project.status === 'Deployed'
                    ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                    : 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                }`}>
                  {project.status}
                </span>
              </div>

              {project.id === 'ai-jobprep' ? (
                <button
                  onClick={() => setIsZoomed(true)}
                  className="w-full h-full cursor-zoom-in focus:outline-none"
                  aria-label="Enlarge project preview screenshot"
                >
                  <img
                    src={jobPrepScreenshots[activeTab].src}
                    alt={jobPrepScreenshots[activeTab].alt}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </button>
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} detailed user interface`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 select-none p-8 text-center min-h-[300px]">
                  <svg className="w-12 h-12 text-slate-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-mono tracking-wider">
                    {project.id === 'novatalk'
                      ? 'NovaTalk screenshots will be added soon.'
                      : project.id === 'finpilot-ai'
                        ? 'FinPilot AI screenshots will be added soon.'
                        : 'Project screenshot will be added soon.'}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Information Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Title Block */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase font-mono">{project.category}</span>
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white font-display">
                {project.title}
              </h3>
            </div>

            {/* Problem Block */}
            <div className="border-l-2 border-amber-500/40 pl-4 space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono">The Problem</h4>
              <p className="text-gray-650 dark:text-slate-300 text-sm sm:text-base leading-relaxed">{project.problem}</p>
            </div>

            {/* Solution Block */}
            <div className="border-l-2 border-violet-500/40 pl-4 space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 font-mono">The Solution</h4>
              <p className="text-gray-650 dark:text-slate-300 text-sm sm:text-base leading-relaxed">{project.solution}</p>
            </div>

            {/* Features Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 font-mono">Key Features</h4>
              <ul className="space-y-2.5 text-gray-650 dark:text-slate-300 text-sm" role="list">
                {project.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-violet-500 dark:text-violet-400 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 font-mono">Complete Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-[#1e2235]/40 dark:hover:bg-[#1e2235]/70 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-white/5 rounded-lg text-xs font-medium transition-colors"
                  >
                    {TECH_ICONS[tech] || null}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 sm:px-8 sm:pb-8 sm:pt-4 border-t border-slate-150 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/20 mt-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-[#1e2235]/60 hover:bg-slate-200 dark:hover:bg-[#1e2235] text-slate-700 dark:text-slate-200 font-semibold rounded-xl border border-slate-200 dark:border-surface-dark-border hover:border-violet-500/30 transition-all duration-300 text-sm focus-visible:ring-2 focus-visible:ring-violet-500"
                aria-label={`View GitHub repository for ${project.title} in a new tab`}
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            ) : (
              <button
                disabled
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100/50 dark:bg-white/5 text-slate-400 dark:text-slate-500 font-semibold rounded-xl border border-slate-200 dark:border-white/5 cursor-not-allowed text-sm select-none"
                aria-label={`GitHub repository for ${project.title} is private`}
              >
                <FiGithub className="w-4 h-4 opacity-40" />
                <span>Repository Private</span>
              </button>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-500 to-ink-500 hover:from-violet-600 hover:to-ink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-300 text-sm focus-visible:ring-2 focus-visible:ring-violet-500"
                aria-label={`Open live demo of ${project.title} in a new tab`}
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <button
                disabled
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100/50 dark:bg-white/5 text-slate-400 dark:text-slate-500 font-semibold rounded-xl border border-slate-200 dark:border-white/5 cursor-not-allowed text-sm select-none"
                aria-label={`Live demo for ${project.title} is coming soon`}
              >
                <FiExternalLink className="w-4 h-4 opacity-40" />
                <span>Demo Coming Soon</span>
              </button>
            )}
          </div>
        </div>

        {/* Zoom Lightbox Overlay */}
        {isZoomed && project.id === 'ai-jobprep' && (
          <div className="absolute inset-0 z-30 bg-black/95 flex flex-col items-center justify-center p-4">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 z-40 w-8 h-8 rounded-full bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label="Close zoom preview"
            >
              <FiX className="w-4 h-4" />
            </button>
            <div className="relative max-w-full max-h-[85%] overflow-hidden flex items-center justify-center">
              <img
                src={jobPrepScreenshots[activeTab].src}
                alt={jobPrepScreenshots[activeTab].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
            <div className="mt-4 text-center select-none">
              <p className="text-xs font-mono uppercase tracking-widest text-violet-400 font-bold">
                {jobPrepScreenshots[activeTab].label}
              </p>
              <p className="text-[10px] text-slate-500 mt-1 font-mono">
                Click anywhere to close
              </p>
            </div>
            {/* Click backdrop to close */}
            <div className="absolute inset-0 -z-10 cursor-zoom-out" onClick={() => setIsZoomed(false)} />
          </div>
        )}

      </motion.div>
    </div>
  )
}

/* ── Main Section ─────────────────────────── */
export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [activeCategory, setActiveCategory] = useState("All Projects")
  const [selectedProject, setSelectedProject] = useState(null)

  // Dynamically compile available categories that contain projects
  const categories = ["All Projects", ...new Set(PROJECTS.map(p => p.category))]

  // Filter projects by category, then sort to show featured projects first
  const filteredProjects = PROJECTS
    .filter(p => activeCategory === "All Projects" || p.category === activeCategory)
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 px-6 bg-gradient-to-b from-[#fafbff] to-[#f0f4ff] dark:from-[#0d0f1a] dark:to-black text-gray-950 dark:text-white relative">
      <div ref={ref} className="max-w-6xl mx-auto">
 
        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-ink-500 dark:to-[#818cf8]" />
            <span
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink-600 dark:text-[#818cf8]"
            >
              MY WORK
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-ink-500 dark:from-[#818cf8] to-transparent" />
          </div>
 
          <h2
            id="projects-heading"
            className="text-gray-900 dark:text-[#f1f5f9] font-extrabold leading-tight mb-4"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Featured{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Projects
            </span>
          </h2>
 
          <p
            className="mx-auto text-[15px] leading-relaxed text-gray-500 dark:text-slate-400"
            style={{ maxWidth: 480 }}
          >
            A selection of projects where I solved real problems with code.
          </p>
 
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 mx-auto h-px w-24 rounded-full bg-gradient-to-r from-transparent via-ink-500 dark:via-[#818cf8] to-transparent"
          />
        </div>
 
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              aria-pressed={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-full border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-violet-500 to-ink-500 text-white border-transparent shadow-lg shadow-violet-500/25'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-[#131525]/40 dark:hover:bg-[#131525]/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-surface-dark-border hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Layout (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <Card
              key={project.id}
              project={project}
              index={i}
              inView={inView}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Details Modal overlay with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <DetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}