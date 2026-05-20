import { motion } from "framer-motion"

import laptop from "../../assets/home/hero-laptop.png"

const HeroLaptop = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: -8,
      }}

      animate={{
        opacity: 1,
        scale: 1,
        rotate: -6,
        y: [0, -15, 0],
      }}

      transition={{
        duration: 1.5,
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}

      className="
        relative
        flex
        justify-center
        items-center
      "
    >

      {/* MASSIVE PURPLE GLOW */}
      <div
        className="
          absolute
          w-[700px]
          h-[700px]
          rounded-full
          bg-purple-600/30
          blur-[150px]
          top-0
          right-0
        "
      />

      {/* LAPTOP */}
      <img
        src={laptop}
        alt="Laptop Mockup"
        className="
          relative
          z-10
          w-[850px]
          object-contain
          drop-shadow-[0_30px_80px_rgba(0,0,0,0.9)]
        "
      />

      {/* SMALL FLOATING ORBS */}
      <div
        className="
          absolute
          top-20
          left-10
          w-6
          h-6
          rounded-full
          bg-purple-500
          blur-[2px]
          animate-pulse
        "
      />

      <div
        className="
          absolute
          bottom-32
          right-20
          w-4
          h-4
          rounded-full
          bg-blue-500
          animate-ping
        "
      />

    </motion.div>
  )
}

export default HeroLaptop