import { motion } from "framer-motion"
import { FaMicrosoft } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";


import {
  FiArrowUpRight,
  FiDownload,
  FiCode,
  FiDatabase,
  FiServer,
} from "react-icons/fi"

export default function Hero() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }

  const downloadCV = () => {
    const link =
      document.createElement("a")

    link.href = "/@Rachael_Resumee.pdf"

    link.download =
      "/@Rachael_Resumee.pdf"

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)
  }

  return (
    <section
      className="
      relative
      overflow-hidden
      min-h-screen
      bg-hero
      text-white
      px-6
      lg:px-20
      py-16
      mt-14
      "
    >
      {/* STARS */}

      <div className="absolute inset-0">
        {[...Array(90)].map((_, i) => (
          <span
            key={i}
            className="
            absolute
            w-[2px]
            h-[2px]
            rounded-full
            bg-white/40
            "
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* PLANETS */}

      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[150px]" />

      <div className="absolute top-[15%] right-[10%] w-[380px] h-[380px] border border-purple-500/20 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div
          className="
          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-20
          "
        >

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .8,
            }}
            className="
            flex-1
             items-center
  text-center

  lg:items-start
  lg:text-left

  lg:pt-10
            "
          >

            <div>

              <span
                className="
                px-5
                py-2
                rounded-full
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                text-[10px]
          sm:text-[11px]
                "
              >
                FULL STACK DEVELOPER
              </span>

            </div>

            <h1
              className="
              mt-8

          

              leading-[0.95]
 text-[2.7rem]
          sm:text-[2rem]
          md:text-[2.4rem]
          lg:text-[2.4rem]
              font-black
              "
            >
              Building digital
              experiences

              <span
                className="
                block
                bg-gradient-to-r
                from-purple-400
                via-fuchsia-500
                to-blue-500
                bg-clip-text
                text-transparent

                "
              >
                that make impact.
              </span>
            </h1>

            <p
              className="
              mt-8

              text-gray-400

              max-w-xl

                text-[12px]
          sm:text-[13px]
          lg:text-[14px]
              "
            >
              I build responsive,
              scalable and beautiful
              applications across frontend,
              backend and database systems.
            </p>

            {/* BUTTONS */}

            <div
              className="
              mt-10

              flex
              flex-col
              sm:flex-row

              gap-5
              "
            >

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: .95,
                }}
                onClick={scrollToProjects}
                className="
                px-4
                py-2

                rounded-2xl

                bg-gradient-to-r
                from-purple-600
                to-blue-600

                shadow-[0_0_80px_rgba(139,92,246,.4)]
                "
              >

                <span className="flex items-center gap-3">

                  View My Work

                  <FiArrowUpRight />

                </span>

              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .95,
                }}
                onClick={downloadCV}
                className="
                px-4
                py-2

                rounded-2xl

                border
                border-white/10

                bg-white/5

                backdrop-blur-xl
                "
              >

                <span className="flex items-center gap-3">

                  Download CV

                  <FiDownload />

                </span>

              </motion.button>

            </div>

            {/* BRANDS */}

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
            gap-x-8
            gap-y-4
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

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
            flex-1
            relative
            flex
            justify-center
            "
          >

            <motion.div
              animate={{
                rotate: [-2, 2, -2],
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
              }}
              className="relative"
            >

              {/* SCREEN */}

              <div
                className="
                w-[340px]
                sm:w-[500px]
                lg:w-[620px]

                h-[280px]
                lg:h-[400px]

                rounded-[30px]

                border
                border-white/10

                bg-gradient-to-br
                from-[#161125]
                to-[#090612]

                overflow-hidden

                shadow-[0_50px_120px_rgba(109,40,217,.35)]
                "
              >

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,.3),transparent)]" />

                <div className="relative p-10">

                  <p className="text-purple-300">
                    FULL STACK ENGINEER
                  </p>

                  <h2 className="text-4xl font-bold mt-5">
                    Crafting products
                    users love
                  </h2>

                  <div className="grid grid-cols-2 gap-4 mt-10">

                    <div className="bg-white/5 rounded-2xl p-5">
                      <FiCode size={28} />
                      <p className="mt-3">
                        Frontend
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-5">
                      <FiServer size={28} />
                      <p className="mt-3">
                        Backend
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-5">
                      <FiDatabase size={28} />
                      <p className="mt-3">
                        Database
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-5">
                      <p className="text-purple-400 text-2xl">
                        2+
                      </p>

                      <p>
                        Live Projects
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* FLOATING PROJECT */}

              <motion.div
                animate={{
                  y: [0, -18, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="
                absolute
                -right-6
                top-20

                w-[220px]

                rounded-3xl

                border
                border-white/10

                bg-white/5

                backdrop-blur-3xl

                p-6
                "
              >

                <p className="text-purple-300">
                  Recent Work
                </p>

                <div className="mt-5 space-y-5">

                  <div>
                    <h4>
                      Ecommerce Platform
                    </h4>

                    <p className="text-gray-500">
                      Shopping experience
                    </p>
                  </div>

                  <div>
                    <h4>
                      AremxyPlug
                    </h4>

                    <p className="text-gray-500">
                      Full stack product
                    </p>
                  </div>

                </div>

              </motion.div>

            </motion.div>

          </motion.div>
          

        </div>
{/* SCROLL DOWN BUTTON */}
<motion.div
  onClick={() =>
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  animate={{
    y: [0, 10, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
  className="
    absolute
    bottom-2
    right-2
    z-20

    flex
    flex-col
    items-center
    justify-center

    cursor-pointer
  "
>
  {/* circle */}
  <div
    className="
      w-14
      h-14
      rounded-full
      border
      border-white/20
      bg-white/5
      backdrop-blur-xl
   

      flex
      items-center
      justify-center

      hover:bg-white/10
      transition-all
    "
  >
    <FiArrowUpRight
      className="rotate-90 text-white/70"
      size={18}
    />
  </div>
</motion.div>
      </div>

    </section>
  )
}