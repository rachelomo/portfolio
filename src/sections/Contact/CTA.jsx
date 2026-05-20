import { motion } from "framer-motion"
import orb from "../../assets/home/orb-removebg.png"

export default function CTA() {
  return (
    <section className="bg-[#04030B] px-4 md:px-10 pb-20">
      <div
        className="
          max-w-6xl mx-auto
          relative overflow-hidden
          rounded-[18px]
          border border-[#2B1F4A]
          bg-[#070511]
          min-h-[210px]
          flex items-center justify-between
          px-6 md:px-12
          py-8
        "
      >
        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070511] via-[#0B0718] to-[#140B2B]" />

        {/* GLOW EFFECT */}
        <div className="absolute right-[-120px] top-[-120px] w-[320px] h-[320px] bg-purple-600/20 blur-[120px]" />

        {/* TEXT CONTENT */}
        <div className="relative z-10 max-w-[480px]">
          <p
            className="
                text-[10px]
          sm:text-[11px]
              tracking-[0.25em]
              text-[#8B7DB8]
              uppercase
              mb-3
            "
          >
            LET’S WORK TOGETHER
          </p>

          <h2
            className="
              text-white
              font-medium
              leading-[1.25]
              text-[2.2rem]
          sm:text-[1.6rem]
          md:text-[1.9rem]
          lg:text-[1.9rem]
            "
          >
            Have a project in mind?
            <br />
            Let’s create something{" "}
            <span className="text-[#7B61FF]">amazing.</span>
          </h2>

          {/* BUTTON */}
         <motion.a
  href="mailto:adebisirachael41@gmail.com"
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  className="
    mt-6
    inline-flex items-center gap-2
    px-5 py-2.5
    rounded-full
    bg-[#6C4DFF]
    hover:bg-[#7B61FF]
    text-white
    text-sm
    transition-all duration-300
    shadow-[0_0_30px_rgba(123,97,255,0.35)]
  "
>
  Get In Touch
  <span className="text-lg">↗</span>
</motion.a>
        </div>

        {/* ORB IMAGE */}
        <motion.img
          src={orb}
          alt="orb"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative z-10
            hidden md:block
            w-[360px]
            lg:w-[430px]
            object-contain
            pointer-events-none
            select-none
          "
        />

        {/* MOBILE ORB */}
        <motion.img
          src={orb}
          alt="orb"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            md:hidden
            absolute
            right-[-40px]
            bottom-[-40px]
            w-[220px]
            opacity-90
          "
        />
      </div>
    </section>
  )
}