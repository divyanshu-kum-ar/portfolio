import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi"

/* ── Project Data ───────────────────────── */
const PROJECTS = [
  {
    num: "01",
    title: "Expense Tracker with AI Insights",
    desc: "Full-stack expense manager with real-time dashboards, AI insights, and PDF export.",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    github: "https://github.com/divyanshu-kum-ar",
    live: "#",
    accent: "#f59e0b",
    tag: "Full Stack",
    image: "/images/Expense.jpg",
  },
  {
    num: "02",
    title: "AI Job Preparation App",
    desc: "Resume analysis, skill gap detection, and AI-generated interview questions.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/divyanshu-kum-ar",
    live: "#",
    accent: "#8b5cf6",
    tag: "AI / Full Stack",
    image: "/images/jobprep.jpg",
  },
  {
    num: "03",
    title: "Task Management App",
    desc: "Kanban-style task manager with full CRUD and smooth state management.",
    tech: ["React", "Context API", "JavaScript"],
    github: "https://github.com/divyanshu-kum-ar",
    live: "#",
    accent: "#10b981",
    tag: "Frontend",
    image: "/images/Todo.jpg",
  },
  {
    num: "04",
    title: "Developer Portfolio",
    desc: "Modern responsive portfolio with premium UI and animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/divyanshu-kum-ar",
    live: "#",
    accent: "#3b82f6",
    tag: "Frontend",
    image: "/images/portfolio.jpg",
  },
]

/* ── Card Component ─────────────────────── */
function Card({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15 }}
      className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-[1.03] transition duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 text-white text-sm flex items-center gap-1">
            View Project <FiArrowUpRight />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Top */}
        <div className="flex justify-between items-center text-xs">
          <span style={{ color: project.accent }}>{project.num}</span>
          <span
            className="px-2 py-1 rounded-md"
            style={{
              background: project.accent + "20",
              color: project.accent,
            }}
          >
            {project.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold">{project.title}</h3>

        {/* Desc */}
        <p className="text-gray-400 text-sm">{project.desc}</p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-white/10 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          <a href={project.github} target="_blank">
            <FiGithub className="hover:text-blue-400 cursor-pointer" />
          </a>
          <a href={project.live} target="_blank">
            <FiExternalLink className="hover:text-green-400 cursor-pointer" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main Section ───────────────────────── */
export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section   id="projects"
     className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <p className="text-gray-400 mt-2">
            Some of my best work showcasing skills & creativity
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <Card key={i} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}