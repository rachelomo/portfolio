import { motion } from "framer-motion"
import orb from "../../assets/home/orb-removebg.png"

const container = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      staggerChildren: 0.18,
      ease: "easeOut",
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
    },
  },
}

export default function CTA() {
  return (
    <motion.section
      className="
      bg-[#04030B]
      px-4
      md:px-10
      pb-20
      "
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      <div
        className="
        max-w-6xl
        mx-auto

        relative
        overflow-hidden

        rounded-[18px]

        border
        border-[#2B1F4A]

        bg-[#070511]

        min-h-[220px]

        flex
        flex-col
        md:flex-row

        items-center
        justify-between

        px-6
        md:px-12

        py-8
        "
      >
        {/* BACKGROUND */}

        <motion.div
          variants={item}
          className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#070511]
          via-[#0B0718]
          to-[#140B2B]
          "
        />

        {/* GLOW */}

        <motion.div
          initial={{
            opacity: 0,
            scale: .6,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
          absolute

          right-[-120px]
          top-[-120px]

          w-[320px]
          h-[320px]

          bg-purple-600/20

          blur-[120px]
          "
        />

        {/* TEXT */}

        <motion.div
          variants={item}
          className="
          relative
          z-10

          max-w-[480px]

          text-center
          md:text-left
          "
        >
          <motion.p
            variants={item}
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
          </motion.p>

          <motion.h2
            variants={item}
            className="
            text-white

            font-medium

            leading-[1.25]

            text-[2rem]
            sm:text-[2.3rem]
            lg:text-[2.7rem]
            "
          >
            Have a project in mind?
            <br />

            Let’s create something{" "}

            <span className="text-[#7B61FF]">
              amazing.
            </span>
          </motion.h2>

          {/* BUTTON */}

          <motion.a
            href="mailto:adebisirachael41@gmail.com"

            variants={item}

            whileHover={{
              scale: 1.06,
              y: -3,
            }}

            whileTap={{
              scale: .95,
            }}

            className="
            mt-8

            inline-flex

            items-center

            gap-3

            px-6
            py-3

            rounded-full

            bg-[#6C4DFF]

            hover:bg-[#7B61FF]

            text-white

            transition-all

            duration-300

            shadow-[0_0_40px_rgba(123,97,255,.45)]
            "
          >
            Get In Touch

            <motion.span
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              ↗
            </motion.span>

          </motion.a>
        </motion.div>

        {/* DESKTOP ORB */}

        <motion.img
          src={orb}
          alt="orb"

          initial={{
            opacity: 0,
            scale: .7,
            x: 80,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}

          viewport={{
            once: true,
          }}

          animate={{
            y: [0, -14, 0],
            rotate: [0, 4, 0],
          }}

          transition={{
            duration: 6,
            repeat: Infinity,
          }}

          className="
          relative
          z-10

          hidden
          md:block

          w-[360px]
          lg:w-[430px]

          object-contain

          pointer-events-none
          "
        />

        {/* MOBILE */}

        <motion.img
          src={orb}
          alt="orb"

          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}

          animate={{
            y: [0, -10, 0],
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
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
    </motion.section>
  )
}