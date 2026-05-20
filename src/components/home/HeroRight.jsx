import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"

import laptop from "../../assets/home/hero-laptop.png"
import card from "../../assets/home/floating-card-removebg.png"
import planet from "../../assets/home/planet-removebg.png"
import orb from "../../assets/home/orb-removebg.png"

const HeroRight = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 35, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 35, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const planetX = useTransform(smoothX, [-0.5, 0.5], [-15, 15])
  const planetY = useTransform(smoothY, [-0.5, 0.5], [-15, 15])

  const orbX = useTransform(smoothX, [-0.5, 0.5], [-10, 10])
  const orbY = useTransform(smoothY, [-0.5, 0.5], [-10, 10])

  const laptopX = useTransform(smoothX, [-0.5, 0.5], [-6, 6])
  const laptopY = useTransform(smoothY, [-0.5, 0.5], [-6, 6])

  return (
    <div
      className="
        relative
        w-full
        flex
        items-center
        justify-center
        overflow-visible

        h-[340px]
        sm:h-[480px]
        md:h-[560px]
        lg:h-[760px]
      "
    >
      {/* ================= SOFT BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[220px] h-[220px] sm:w-[340px] sm:h-[340px] lg:w-[680px] lg:h-[680px] rounded-full bg-purple-600/20 blur-[90px] lg:blur-[140px]" />
      </div>

      {/* ================= PLANET (HIDDEN ON VERY SMALL SCREENS) ================= */}
      <motion.img
        src={planet}
        style={{ x: planetX, y: planetY }}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.8 }}
        className="
          hidden sm:block
          absolute
          top-[0%]
          left-1/2
          -translate-x-1/2

          lg:left-auto lg:right-[-10%] lg:translate-x-0

          w-[180px] sm:w-[260px] md:w-[340px] lg:w-[680px]
          mix-blend-screen
          pointer-events-none
        "
      />

      {/* ================= ORB ================= */}
      <motion.img
        src={orb}
        style={{ x: orbX, y: orbY }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="
          absolute
          top-[6%]
          left-1/2
          -translate-x-1/2

          lg:left-auto lg:right-[8%] lg:translate-x-0

          w-[90px] sm:w-[140px] md:w-[200px] lg:w-[430px]
          opacity-80 sm:opacity-90
          mix-blend-screen
          pointer-events-none
        "
      />

      {/* ================= LAPTOP (MAIN FOCUS) ================= */}
      <motion.div
        style={{ x: laptopX, y: laptopY }}
        initial={{ opacity: 0, y: 25, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1.2 }}
        className="
          relative
          z-30
          flex
          items-center
          justify-center
          w-full
        "
      >
        <motion.img
          src={laptop}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="
            w-full
            object-contain

            max-w-[260px]
            sm:max-w-[420px]
            md:max-w-[580px]
            lg:max-w-[980px]
            xl:max-w-[1100px]

            scale-[1.05]
            sm:scale-[1.1]

            drop-shadow-[0_25px_80px_rgba(0,0,0,0.85)]
          "
        />
      </motion.div>

      {/* ================= FLOATING CARD (FIXED MOBILE POSITION) ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          scale: { duration: 1, delay: 0.3 },
          y: { duration: 4, repeat: Infinity },
        }}
        className="
          absolute
          z-40

          top-[10%]
          right-[5%]

          sm:top-[12%]
          sm:right-[8%]

          lg:top-[15%]
          lg:right-[10%]
        "
      >
        <img
          src={card}
          className="
            w-[55px]
            sm:w-[85px]
            md:w-[110px]
            lg:w-[210px]
          "
        />
      </motion.div>
    </div>
  )
}

export default HeroRight