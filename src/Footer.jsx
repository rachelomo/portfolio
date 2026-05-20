import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

const resources = [
  {
     name: "Resume",
    href: "/@Rachael_Resumee.pdf",
    external: true,
   
  },
  {
    name: "Services",
    href: "#experience",
  },
  {
    name: "Case Studies",
    href: "#projects",
  },
]

const connect = [
  {
    name: "GitHub",
    href: "https://github.com/rachelomo",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rachael-adebisi-0b4543291/",
  },
  {
    name: "Email",
    href: "mailto:adebisirachael41@gmail.com",
  },
]



export default function Footer() {
  return (
    <footer className="bg-[#04030B] text-white px-6 md:px-16 pt-16 pb-10 border-t border-[#1a1a2e] relative overflow-hidden">
      
      {/* GLOW */}
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-purple-600 opacity-10 blur-[120px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

        {/* LEFT */}
        <div>
          <h2 className="text-xl font-bold tracking-[0.3em]">
            RACHAEL.
          </h2>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-xs">
            Building modern digital experiences with clean design,
            performance, and scalable frontend solutions.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
            Navigation
          </h3>

          <ul className="space-y-3 text-sm">
            {navigation.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="
                    text-gray-300
                    hover:text-purple-400
                    transition-all duration-300
                    hover:translate-x-1
                    inline-block
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
            Resources
          </h3>

         <ul className="space-y-3 text-sm">
  {resources.map((item, i) => (
    <li key={i}>
      <a
  href={item.href}
  target={item.external ? "_blank" : "_self"}
  rel={item.external ? "noopener noreferrer" : undefined}

        className="text-gray-300 hover:text-purple-400 transition-all duration-300"
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
            Connect
          </h3>

     <ul className="space-y-3 text-sm">
  {connect.map((item, i) => (
    <li key={i}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-gray-300
          hover:text-purple-400
          transition-all duration-300
        "
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-[#1a1a2e] flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4 relative z-10">
        
        <p>
          © 2026 Rachael Adebisi. All rights reserved.
        </p>

        {/* BACK TO TOP */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            w-11 h-11
            rounded-full
            border border-gray-700
            flex items-center justify-center
            hover:border-purple-500
            hover:bg-purple-500/10
            transition-all duration-300
          "
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  )
}