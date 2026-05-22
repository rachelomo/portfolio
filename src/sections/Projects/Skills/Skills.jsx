import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPhp,
} from "react-icons/fa"

import {
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
    iconColor: "text-cyan-400",
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
    name: "UI/UX",
    icon: <IoLogoDesignernews />,
    iconColor: "text-pink-400",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    iconColor: "text-cyan-300",
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
  { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
  { name: "Laravel", icon: <SiLaravel />, color: "text-red-500" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-400" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
  { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-300" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
]

const container = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      duration: 0.8,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Skills() {
  const [showMore, setShowMore] = useState(false)

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="w-full bg-[#03030a] py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}
        <motion.div variants={item} className="mb-10">
          <h2 className="uppercase font-medium text-xs 
text-[10px] 
sm:text-[11px]

tracking-[0.25em]

 text-[#D948F0]">
            My Expertise
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {expertiseData.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              onClick={() => itemData.isMore && setShowMore(true)}
              className={`group relative h-[120px] rounded-2xl border border-white/10 bg-[#070711] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/50 ${
                itemData.active
                  ? "border-violet-500/40 shadow-[0_0_40px_rgba(139,92,246,0.25)]"
                  : ""
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-transparent" />

              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className={`text-4xl mb-3 ${itemData.iconColor}`}>
                  {itemData.icon}
                </div>

                <p className="text-sm text-white/90 text-center">
                  {itemData.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* BACKDROP */}
            <div
              onClick={() => setShowMore(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* MODAL */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              className="relative w-[95%] max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#080811] p-6 md:p-10"
            >
              {/* CLOSE */}
              <button
                onClick={() => setShowMore(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"
              >
                <HiX />
              </button>

              {/* TITLE */}
              <h2 className="text-3xl font-bold text-white mb-8">
                More Skills
              </h2>

              {/* GRID FIXED */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {moreSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="h-[120px] rounded-2xl border border-white/10 bg-[#0d0d18] flex flex-col items-center justify-center"
                  >
                    <div className={`text-3xl mb-2 ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <p className="text-sm text-white">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}