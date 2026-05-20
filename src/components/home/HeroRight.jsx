import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"

import { useEffect } from "react"

import laptop from "../../assets/home/hero-laptop.png"
import card from "../../assets/home/floating-card-removebg.png"
import planet from "../../assets/home/planet-removebg.png"
import orb from "../../assets/home/orb-removebg.png"

const HeroRight = () => {
  // ================= PARALLAX =================
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 35,
    damping: 30,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 35,
    damping: 30,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // ================= DEPTH =================
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

        overflow-hidden

        h-[320px]
        sm:h-[430px]
        md:h-[520px]
        lg:h-[760px]
      "
    >
      {/* ================= PLANET ================= */}
      <motion.img
        src={planet}
        style={{
          x: planetX,
          y: planetY,
        }}
        initial={{
          opacity: 0,
          scale: 1.2,
        }}
        animate={{
          opacity: 0.45,
          scale: 1,
        }}
        transition={{
          duration: 1.8,
        }}
        className="
          absolute

          top-[5%]

          left-1/2
          -translate-x-1/2

          lg:left-auto
          lg:right-[-10%]
          lg:translate-x-0

          w-[180px]
          sm:w-[260px]
          md:w-[340px]
          lg:w-[680px]

          mix-blend-screen
          pointer-events-none
        "
      />

      {/* ================= ORB ================= */}
      <motion.img
        src={orb}
        style={{
          x: orbX,
          y: orbY,
        }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          top-[8%]

          left-1/2
          -translate-x-1/2

          lg:left-auto
          lg:right-[8%]
          lg:translate-x-0

          w-[120px]
          sm:w-[170px]
          md:w-[230px]
          lg:w-[430px]

          opacity-90
          mix-blend-screen
          pointer-events-none
        "
      />

      {/* ================= GLOW ================= */}
      <div
        className="
          absolute

          left-1/2
          -translate-x-1/2

          w-[180px]
          h-[180px]

          sm:w-[260px]
          sm:h-[260px]

          md:w-[360px]
          md:h-[360px]

          lg:w-[680px]
          lg:h-[680px]

          rounded-full

          blur-[80px]
          lg:blur-[140px]
        "
      />

      {/* ================= LAPTOP ================= */}
      <motion.div
        style={{
          x: laptopX,
          y: laptopY,
        }}
        initial={{
          opacity: 0,
          y: 40,
          rotate: -4,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: -2,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
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
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        className="
  w-full
  object-contain

  max-w-[340px]
  sm:max-w-[500px]
  md:max-w-[680px]
  lg:max-w-[980px]
  xl:max-w-[1100px]

  scale-[1.08]
  sm:scale-[1.12]
  lg:scale-[1.05]

  drop-shadow-[0_35px_120px_rgba(0,0,0,0.95)]
"
        />
      </motion.div>

      {/* ================= FLOATING CARD ================= */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: {
            duration: 1,
            delay: 0.3,
          },
          scale: {
            duration: 1,
            delay: 0.3,
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          z-40

          top-[15%]

          left-[65%]

          sm:left-[62%]

          lg:left-auto
          lg:right-[10%]
        "
      >
        <img
          src={card}
          className="
            w-[65px]
            sm:w-[90px]
            md:w-[120px]
            lg:w-[210px]
          "
        />
      </motion.div>
    </div>
  )
}

export default HeroRight