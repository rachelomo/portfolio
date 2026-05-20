import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const testimonials = [
    {
    text: "Rachael delivered clean and responsive frontend components with strong attention to detail and user experience.",
    name: "Daniel Brooks",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Rachael contributed effectively to the frontend team, delivering responsive interfaces and maintaining clean code practices.",
    name: "Michael Adams",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    text: "Strong attention to UI details and collaboration. She adapted quickly to team workflows and project requirements.",
    name: "Emily Johnson",
    role: "Project Coordinator",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#04030B] text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm text-gray-400 mb-6"> WHAT CLIENTS SAY</p>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0B0A14] border border-[#1a1a2e] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* TEXT */}
          <p className="text-gray-300 text-lg max-w-xl">
            “{testimonials[index].text}”
          </p>

          {/* USER */}
          <div className="flex items-center gap-4">
            <img
              src={testimonials[index].image}
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{testimonials[index].name}</p>
              <p className="text-sm text-gray-400">{testimonials[index].role}</p>
            </div>
          </div>
        </motion.div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                i === index ? "bg-purple-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}