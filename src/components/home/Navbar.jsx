import { useState } from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion"

const navItems = [
  { name: "Home", id: "home", preview: "/images/home.jpg" },
  { name: "About", id: "about", preview: "/images/about.jpg" },
  { name: "Projects", id: "projects", preview: "/images/projects.jpg" },
  { name: "Skills", id: "skills", preview: "/images/skills.jpg" },
  { name: "Experience", id: "experience", preview: "/images/experience.jpg" },
  { name: "Contact", id: "contact", preview: "/images/contact.jpg" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)


  const [activePreview, setActivePreview] = useState(
    navItems?.[0]?.preview || null
  )

  // MAGNETIC CURSOR
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  // SMOOTH SCROLL
  const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (section) {
      const navbarHeight = 90
      const sectionPosition = section.offsetTop - navbarHeight

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      })
    }

    setIsOpen(false)
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
          fixed top-0 left-0 w-full z-50
          backdrop-blur-xl
          border-b border-white/10
          bg-black/20
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-3 h-20 flex items-center justify-between">
        {/* LOGO */}
<h1
  onClick={() => scrollToSection("home")}
  className="cursor-pointer flex items-center leading-none"
>
  <img
    src="/logo.png"
    alt="Rachael Logo"
    className="h-26 md:h-28 w-auto object-contain block"
  />
</h1>
          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10 text-1xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  text-white/70
                  hover:text-white
                  transition-all duration-300
                  relative
                  after:absolute
                  after:w-0
                  after:h-[2px]
                  after:bg-primary
                  after:left-0
                  after:-bottom-2
                  hover:after:w-full
                  after:transition-all
                "
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="
              hidden md:block
              px-6 py-3
              rounded-full
              border border-primary/50
              hover:bg-primary
              transition-all duration-300
            "
          >
            Let’s Talk
          </button>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8"
            >
              <span
                className={`absolute w-full h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 top-3" : "top-1"
                }`}
              />
              <span
                className={`absolute w-full h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : "top-3"
                }`}
              />
              <span
                className={`absolute w-full h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-40
              bg-[#050505]
              flex overflow-hidden
            "
          >
            {/* BACKGROUND */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(120,0,255,0.4),transparent)]" />

            {/* CURSOR GLOW */}
            <motion.div
              style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="
                pointer-events-none
                fixed w-[400px] h-[400px]
                rounded-full
                bg-primary/20 blur-3xl
              "
            />

            {/* LEFT NAV (NOT CENTERED) */}
            <div className="relative z-10 flex flex-col justify-center pl-12 md:pl-24 w-[70%]">
              <div className="flex flex-col gap-6 mt-16">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onMouseEnter={() =>
                      setActivePreview(item.preview)
                    }
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.7,
                    }}
                    whileHover={{
                      x: 30,
                      scale: 1.08,
                    }}
                    className="
                      group text-left
                      text-2xl md:text-1xl
                      font-semibold
                      text-white/40
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    <span className="relative">
                      {item.name}
                      <span className="
                        absolute left-0 -bottom-3 h-[2px]
                        w-0 group-hover:w-full
                        bg-primary transition-all duration-500
                      " />
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                onClick={() => scrollToSection("contact")}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="
                  mt-10 w-fit
                  px-10 py-4
                  rounded-full
                  border border-primary/50
                  hover:bg-primary
                  transition-all duration-300
                "
              >
                Let’s Talk
              </motion.button>
            </div>

            {/* RIGHT PREVIEW */}
            <div className="hidden md:flex w-[30%] items-center justify-center relative">
              <AnimatePresence mode="wait">
                {activePreview && (
                  <motion.img
                    key={activePreview}
                    src={activePreview}
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="
                      absolute w-[90%] h-[60%]
                      object-cover rounded-3xl
                    "
                  />
                )}
              </AnimatePresence>
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white/60 hover:text-white"
            >
              CLOSE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar