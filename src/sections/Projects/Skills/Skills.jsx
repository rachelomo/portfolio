import { useState } from "react"
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPhp,
} from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import {
  // SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiLaravel,
  SiMysql,
  SiRedux,
  SiFirebase,
  SiDocker,
  SiJavascript,
} from "react-icons/si"

import { HiDotsHorizontal, HiX } from "react-icons/hi"
import { IoLogoDesignernews } from "react-icons/io5"

const expertiseData = [
    {
    name: "JavaScript",
    icon: <SiJavascript />,
    active: true,
     glow: "from-violet-500/40 to-blue-500/20",
      iconColor: "text-blue-400",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-yellow-300",
  },

  {
    name: "TypeScript",
    icon: <SiTypescript />,
    iconColor: "text-blue-500",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    iconColor: "text-green-500",
  },
  {
    name: "UX/UI Design Principles",
    icon: <IoLogoDesignernews />,
    iconColor: "text-green-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    iconColor: "text-cyan-400",
  },
  {
    name: "GSAP",
    icon: <SiGreensock />,
    iconColor: "text-lime-400",
  },
  {
    name: "More",
    icon: <HiDotsHorizontal />,
    iconColor: "text-white",
    isMore: true,
  },

]


const moreSkills = [
  {
    name: "PHP",
    icon: <FaPhp />,
    color: "text-indigo-400",
  },
  {
    name: "Laravel",
    icon: <SiLaravel />,
    color: "text-red-500",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-500",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "text-purple-400",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "text-yellow-400",
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    color: "text-blue-400",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-300",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },
]

export default function Skills() {
  const [showMore, setShowMore] = useState(false)
  return (
    <section className="w-full bg-[#03030a] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          {/* <span className="text-zinc-500 text-sm tracking-[0.3em]">
            03
          </span> */}

          <h2 className="text-white uppercase tracking-[0.25em] text-sm font-medium">
            My Expertise
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {expertiseData.map((item, index) => (
         <div
  key={index}
 onClick={() => item.isMore && setShowMore(true)}
  className={`group relative h-[120px] rounded-2xl border border-white/10 bg-[#070711] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] ${
    item.active
      ? "border-violet-500/40 shadow-[0_0_40px_rgba(139,92,246,0.25)]"
      : ""
  }`}
>
              {/* Animated Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${
                  item.glow || "from-violet-500/10 to-transparent"
                }`}
              />

              {/* Blur Effect */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-violet-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* Active Bottom Line */}
              {item.active && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-400 via-fuchsia-500 to-violet-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
              )}

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div
                  className={`text-4xl mb-3 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 ${item.iconColor}`}
                >
                  {item.icon}
                </div>

                <p className="text-sm text-white/90 font-medium tracking-wide text-center px-2">
                  {item.name}
                </p>
              </div>

              {/* Border Shine */}
              <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-violet-400/30 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
   {/* MODAL */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          showMore
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setShowMore(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Content */}
        <div
          className={`absolute left-1/2 top-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] max-h-[85vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-[#080811]/95 p-6 md:p-10 shadow-[0_0_80px_rgba(139,92,246,0.2)] transition-all duration-500 ${
            showMore
              ? "scale-100 opacity-100"
              : "scale-90 opacity-0"
          }`}
        >
          
          {/* Close Button */}
          <button
            onClick={() => setShowMore(false)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-violet-500/20 transition"
          >
            <HiX size={22} />
          </button>

          {/* Modal Title */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              More Skills
            </h2>

            <p className="text-zinc-400">
              Additional technologies and tools I work with.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {moreSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative h-[120px] rounded-2xl border border-white/10 bg-[#0d0d18] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,0.2)]"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/20 to-transparent transition duration-500" />

                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div
                    className={`text-4xl mb-3 transition-all duration-500 group-hover:scale-125 ${skill.color}`}
                  >
                    {skill.icon}
                  </div>

                  <p className="text-sm text-white font-medium">
                    {skill.name}
                   
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  
  )
}