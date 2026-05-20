// ========================= HERO LEFT =========================

import { motion } from "framer-motion"
import { FiArrowUpRight, FiDownload } from "react-icons/fi"
import { FaMicrosoft } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";

// import myCV from "/@Rachael_Resumee.pdf"

const HeroLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="
        relative
        z-20
        w-full
        max-w-[610px]
        flex
        flex-col
        justify-center
        min-h-auto
       
  items-center
  text-center

  lg:items-start
  lg:text-left

  lg:pt-10

      
      "
    >
      {/* ================= TOP BADGE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="
          inline-flex
          items-center
          justify-center
          h-[42px]
          px-5
          w-fit
          rounded-full
          border
          border-purple-500/25
          bg-white/[0.03]
          backdrop-blur-xl
          text-[10px]
          sm:text-[11px]
          tracking-[0.24em]
          text-purple-300
          uppercase
          shadow-[0_0_25px_rgba(139,92,246,0.12)]
        "
      >
        Full Stack Developer
      </motion.div>

      {/* ================= MAIN TITLE ================= */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="
          mt-7
          font-semibold
          tracking-[-0.055em]
          leading-[0.92]
          text-white
          text-[2.7rem]
          sm:text-[2rem]
          md:text-[2.4rem]
          lg:text-[2.4rem]
        "
      >
        Building digital
        <br />

        experiences

        <span
          className="
            block
            mt-3
            text-purple-500
          "
        >
          that make impact.
        </span>
      </motion.h1>

      {/* ================= DESCRIPTION ================= */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="
          mt-5
          max-w-[520px]
          text-white/48
          leading-[2]
          font-light
          text-[12px]
          sm:text-[13px]
          lg:text-[14px]
        "
      >
        I craft exceptional web applications that are fast,
        <br />
        beautiful and built with love.
      </motion.p>

      {/* ================= BUTTONS ================= */}
{/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="
          flex
          flex-wrap
          items-center
          gap-5
          mt-7
        "
      >
  {/* PRIMARY BUTTON */}
  <a href="#projects">
        {/* PRIMARY BUTTON */}
        <button
          className="
            group
            relative
            h-[52px]
            px-6
            rounded-[14px]
            overflow-hidden
            bg-purple-600
            hover:bg-purple-500
            transition-all
            duration-500
            flex
            items-center
            gap-2
            text-[12px]
            font-medium
            shadow-[0_0_50px_rgba(139,92,246,0.45)]
            hover:scale-[1.03]
            active:scale-[0.98]
          "
        
    >
      {/* BUTTON LIGHT */}
      <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
              bg-[linear-gradient(to_right,rgba(255,255,255,0.12),transparent)]
            "
      />

      <span className="relative z-10">
        View My Work
      </span>

                <FiArrowUpRight
            className="
              relative
              z-10
              text-[18px]
              transition-all
              duration-500
              group-hover:translate-x-[3px]
              group-hover:-translate-y-[3px]
            "
      />
    </button>
  </a>

  {/* DOWNLOAD CV BUTTON */}
  <a
    href="/@Rachael_Resumee.pdf"
    download="Seun-Fullstack-Developer-CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      className="
        group
        h-[52px]
        px-6
        rounded-[14px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        hover:border-purple-500/30
        hover:bg-purple-500/10
        transition-all
        duration-500
        flex
        items-center
        gap-2
        text-[12px]
        font-medium
      "
    >
      Download CV

      <FiDownload
        className="
          text-[16px]
          transition-all
          duration-500
          group-hover:translate-y-[2px]
        "
      />
    </button>
  </a>
</motion.div>
          
      

      {/* ================= BRANDS ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-14"
      >
        {/* TITLE */}
        <p
          className="
            text-white/22
            text-[8px]
            tracking-[0.28em]
            uppercase
          "
        >
          Trusted By Global Brands
        </p>

        {/* LOGOS */}
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-10
            gap-y-6
            mt-6
            text-white/28
            font-semibold
            text-[16px]
            sm:text-[15px]
          "
        >
          <span className="hover:text-white/60 transition-all">
            Google
          </span>

<div className="flex items-center">

  <FaMicrosoft />
  <span className="hover:text-white/60 transition-all">
            Microsoft
          </span>
</div>
          
<div className="flex items-center">
 <IoLogoVercel />
          <span className="hover:text-white/60 transition-all">
           
            vercel
          </span>
</div>
          <span className="hover:text-white/60 transition-all">
            stripe
          </span>

          <span className="hover:text-white/60 transition-all">
            GitHub
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default HeroLeft