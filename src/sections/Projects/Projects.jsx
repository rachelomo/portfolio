import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import aremxyImage from "../../assets/home/aremxy.PNG"
import Medirent from "../../assets/home/Medirent.PNG"
import Technologies from "../../assets/home/Technologies.PNG"
import {
  FiArrowRight,
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi"

const projects = [

  {
    title: "E-Commerce Platform",
    type: "Full Stack",
    desc: "Modern e-commerce solution with powerful admin panel.",
    tech: ["React", "Node.js", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=2070&auto=format&fit=crop",
    demo: "https://your-domain.com/ecommerce-preview",
    code: "https://github.com/your-github-link",
  },
    {
    title: "Aremxyplug",
    type: "Frontend Contribution (Team Project)",
    desc: "Contributed as a Frontend Developer to a collaborative web application project at Aremxyplug. Focused on building UI components, improving responsiveness, and integrating backend APIs.",
    tech: ["React", "Tailwind CSS"],
    image:
      aremxyImage,
    demo: "https://www.aremxyplug.com/",
    code: "https://github.com/AremxyPlug-Business-Enterprises/aremxyplug-fe",
  },
  {
    title: "Med Housing Platform",
    type: "Full Stack",
    desc:  "A platform designed to provide personalized housing solutions for the medical community, worldwide.",
    tech: ["Frontend"],
    image:
      Medirent,
    demo: "https://medhousing-rep.vercel.app/",
    code: "https://github.com/rachelomo/medhouse_rep",
  },
  {
    title: "Technologies Platform",
    type: "Full Stack",
    desc:  "A platform empowering tech professionals with innovative tools for career growth and development.",
    tech: ["React.js", "Tailwind CSS", "Laravel"],
    image:
      Technologies,
    demo: "https://technologies-tau.vercel.app/",
    code: "https://github.com/rachelomo/Technologies",
  },
  {
    title: "Portfolio System",
    type: "Frontend",
    desc: "Interactive modern portfolio with premium UI animations.",
    tech: ["React", "Framer Motion", "Tailwind Css"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    demo: "https://rach-folio.vercel.app/",
    code: "https://github.com/rachelomo/RachFolio",
  },
]

export default function Projects() {
 const scrollRef = useRef(null)
 const [hovered, setHovered] = useState(null)

 const scroll = (direction) => {
  if (scrollRef.current) {
    const amount = 380

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }
}

  return (
    <section className="relative overflow-hidden bg-[#04030B] text-white py-24 px-5 md:px-12 lg:px-20">
      
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/10 blur-[140px] rounded-full" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-14">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase mb-3 text-xs 
text-[10px] 
sm:text-[11px]

tracking-[0.25em]
 text-[#D948F0]">
              Featured Projects
            </p>

            <h2 className="
            font-medium

            leading-[1.25]

             text-[2.2rem]
          sm:text-[1.6rem]
          md:text-[1.9rem]
          lg:text-[1.9rem]">
              Real projects.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600    text-[2.2rem]
          sm:text-[1.6rem]
          md:text-[1.9rem]
          lg:text-[1.9rem]">
                Real impact.
              </span>
            </h2>

            <motion.a
              whileHover={{
                scale: 1.04,
                borderColor: "#8B5CF6",
              }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="mt-8 inline-flex items-center gap-3 border border-white/10 px-6 py-3 rounded-full text-sm bg-white/[0.03] backdrop-blur-md hover:bg-purple-500/10 transition-all duration-300"
            >
              View All Projects
              <FiArrowRight />
            </motion.a>
          </motion.div>

          {/* Arrows */}
          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{
                backgroundColor: "#7C3AED",
              }}
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-white/[0.03] backdrop-blur-md transition-all duration-300"
            >
              <FiArrowLeft size={18} />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{
                backgroundColor: "#7C3AED",
              }}
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-white/[0.03] backdrop-blur-md transition-all duration-300"
            >
              <FiArrowRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Projects Slider */}
        <div
           ref={(el) => (scrollRef.current = el)}
          className="flex gap-7 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative min-w-[340px] md:min-w-[360px] bg-white/[0.03] border border-white/10 rounded-[28px] overflow-hidden backdrop-blur-xl group"
            >
              
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-[28px] border border-purple-500/40 shadow-[0_0_60px_rgba(139,92,246,0.4)]" />
              </div>

              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04030B] via-[#04030B]/40 to-transparent" />

                {/* Hover Buttons */}
                <AnimatePresence>
                  {hovered === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/40 backdrop-blur-[3px] flex items-center justify-center gap-4"
                    >
                      <motion.a
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{
                          scale: 1.08,
                          backgroundColor: "#8B5CF6",
                        }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-medium transition-all duration-300"
                      >
                        <FiExternalLink />
                        Demo
                      </motion.a>

                      <motion.a
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{
                          scale: 1.08,
                          backgroundColor: "#8B5CF6",
                        }}
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#111] border border-white/10 px-5 py-3 rounded-xl font-medium transition-all duration-300"
                      >
                        <FiGithub />
                        Code
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-2xl font-semibold mb-1">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {project.type}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {project.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}