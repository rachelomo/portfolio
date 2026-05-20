import { motion } from "framer-motion"

const experiences = [
  {
    year: "2025 - Present",
    role: "Full Stack Developer",
    company: "Freelance",
    desc: "Building modern web applications for global clients.",
    tech: ["React", "Next.js", "Node.js"],
  },
  {
    year: "2024 - 2025",
    role: "Frontend Developer",
    company: "remxyPlug",
    desc: "Built responsive web apps, integrated APIs, and optimized performance for better user experience.",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    year: "2023 - 2024",
    role: "Software Development IT Institute",
    company: "Malhub",
    desc: "Worked on real-world projects with clean and maintainable code. Collaborated on team projects using Git and version control.",
    tech: [ "HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "Laravel", "React.js", "Node.js", "MySQL", "Git", "Teamwork", "Communication", "Problem-solving"]
  },
]

export default function Experience() {
  return (
    <section className="bg-[#04030B] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto ">

        {/* HEADER */}
        <p className="text-sm text-gray-400 mb-6">EXPERIENCE</p>

        {/* TIMELINE */}
        <div className="relative border-l border-gray-800 pl-8 space-y-10 flex items-center gap-10">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              {/* DOT */}
              <div className="absolute -left-[34px] top-2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7]" />

              <p className="text-sm text-gray-400">{exp.year}</p>
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-300 mt-2">{exp.desc}</p>

              <div className="flex gap-2 mt-3 flex-wrap">
                {exp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#111] px-3 py-1 rounded-full border border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}