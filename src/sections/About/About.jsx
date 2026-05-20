import CountUp from "react-countup"
import picture from "../../assets/home/picture-removebg.png"
      import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { FaProjectDiagram, FaUsers, FaClock, FaCheckCircle } from "react-icons/fa"



const stats = [
  {
    number: 20,
    suffix: "+",
    label: "Projects Completed",
    icon: FaProjectDiagram,
  },
  {
    number: 15,
    suffix: "+",
    label: "Happy Clients",
    icon: FaUsers,
  },
  {
    number: 1000,
    suffix: "+",
    label: "Hours Coding",
    icon: FaClock,
  },
  {
    number: 100,
    suffix: "%",
    label: "Commitment",
    icon: FaCheckCircle,
  },
]

const About = () => {
   const [showMore, setShowMore] = useState(false)
  return (
    <section
      className="
      relative
      py-20
      overflow-hidden
      bg-[#050816]
      
    "
    >
      {/* BACKGROUND ATMOSPHERE */}

      <div
        className="
        absolute
        top-0
        left-0
        w-full
        h-full
        opacity-[0.03]
        bg-grid
        bg-[size:60px_60px]
      "
      />

      {/* MAIN BACKGROUND GLOW */}

      <div
        className="
        absolute
        top-20
        left-1/3
        w-[600px]
        h-[600px]
        rounded-full
        bg-purple-600/20
        blur-[140px]
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        rounded-full
        bg-fuchsia-500/10
        blur-[120px]
      "
      />

      {/* FLOATING ORBS */}


      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          top-32
          left-20
          w-6
          h-6
          rounded-full
          bg-primary
          blur-sm
        "
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-40
          right-40
          w-10
          h-10
          rounded-full
          border
          border-primary/30
        "
      />
      

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
          <div
          className="
          grid
          lg:grid-cols-[0.8fr_1.1fr_0.8fr]
          gap-9
          items-center
          
        "
        >
<div className="">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p
            className="
            text-primary
            uppercase
            tracking-[6px]
            text-[10px]
          sm:text-[11px]
          "
          >
            About Me
          </p>

          <h2
            className="
            mt-6
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            max-w-4xl
              text-[2.2rem]
          sm:text-[1.6rem]
          md:text-[1.9rem]
          lg:text-[1.9rem]
          "
          >
          Hi, I'm Rachael! 
            <span className="text-primary"> Learn more about me</span>
            <br />
            
and see how I can bring your ideas to life. 😊
          </h2>
        </motion.div>

        {/* MAIN GRID */}

      
          {/* LEFT TEXT */}
    <motion.div
      initial={{
        opacity: 0,
        x: -60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <p
        className="
          text-white/60
          text-[11px]
          sm:text-[12px]
          lg:text-[13px]
          leading-relaxed
          max-w-md
        "
      >
        I build web applications that solve real business
        problems. By combining my Full-Stack development
        skills with a background in Accounting, I create
        systems that automate tasks, improve operations,
        and support data-driven decisions.

        <AnimatePresence>
          {showMore && (
            <motion.span
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="inline"
            >
              {" "}
              My focus is always on building scalable and
              immersive digital experiences that help
              businesses save time, reduce errors, and grow
              efficiently. I enjoy blending clean UI design
              with powerful backend logic to create products
              that feel modern, smooth, and impactful.
            </motion.span>
          )}
        </AnimatePresence>
      </p>

      <button
        onClick={() => setShowMore(!showMore)}
        className="
          mt-10
          px-8
          py-4
          rounded-full
          border
          border-primary/30
          glass
          hover:bg-primary
          hover:border-primary
          transition-all
          duration-500
          glow
          text-white
        "
      >
        {showMore ? "Show Less" : "Read More"}
      </button>
    </motion.div>
</div>

          {/* CENTER IMAGE SECTION */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* GIANT CINEMATIC ORB */}

            <div
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2

                w-[700px]
                h-[700px]

                rounded-full

                bg-purple-600/20

                blur-[120px]

                opacity-80
              "
            />

            {/* INNER GLOW CORE */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2

                w-[350px]
                h-[350px]

                rounded-full

                bg-primary/30

                blur-[90px]
              "
            />

            {/* ORBIT RING */}

            <div
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2

                w-[650px]
                h-[650px]

                rounded-full

                border
                border-primary/10
              "
            />

            {/* ROTATING ORBIT */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  relative
                  w-[650px]
                  h-[650px]
                "
              >
                <div
                  className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2

                    w-4
                    h-4

                    rounded-full

                    bg-primary

                    shadow-[0_0_30px_#8b5cf6]
                  "
                />
              </div>
            </motion.div>

            {/* FLOATING PARTICLES */}

            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                absolute
                top-10
                right-16

                w-5
                h-5

                rounded-full

                bg-primary

                blur-sm
              "
            />

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="
                absolute
                bottom-20
                left-10

                w-8
                h-8

                rounded-full

                border
                border-primary/30
              "
            />

            {/* OUTER FRAME */}

            <div
              className="
              relative
              p-[1px]
              rounded-[40px]
              bg-gradient-to-b
              from-primary/40
              to-transparent
              z-10
            
            "
            >
              {/* IMAGE CARD */}

              <div
                className="
                relative
                rounded-[40px]
                overflow-hidden
                border
                border-white/10
                glass
                bg-black/40

                shadow-[0_0_80px_rgba(139,92,246,0.25)]
              "
              >
                {/* IMAGE */}

                <img
                  src={picture}
                  alt=""
                  className="
                    w-full
                    h-[460px]
                    object-cover

                    scale-[1.02]
                    hover:scale-[1.05]

                    transition-transform
                    duration-700
                  "
                />

                {/* SPOTLIGHT */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_60%)]
                "
                />

                {/* DARK OVERLAY */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-transparent
                "
                />
              </div>
            </div>

            {/* EXPERIENCE FLOAT CARD */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                left-[-50px]
                bottom-8

                px-4
                py-14
                mx-6
               
                rounded-3xl

                glass
                border
                border-primary/30

                backdrop-blur-xl

                shadow-[0_0_50px_rgba(139,92,246,0.35)]

                z-20
                flex 
                items-center
                flex-col
              "
            >
              <h3 className="text-5xl font-bold text-primary ">
                3+
              </h3>

              <p className="text-white/60 mt-2">
                Years Experience
              </p>
            </motion.div>

            {/* DECORATIVE RINGS */}

            <div
              className="
              absolute
              -top-10
              -left-10

              w-40
              h-40

              rounded-full

              border
              border-primary/20
            "
            />

            <div
              className="
              absolute
              bottom-[-20px]
              right-[-20px]

              w-72
              h-72

              rounded-full

              border
              border-primary/10
            "
            />
          </motion.div>

          {/* RIGHT STATS */}

          <div className="grid grid-cols-2 gap-5">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  relative
                  min-h-[190px]

                  rounded-3xl

                  border
                  border-white/10

                  glass
                  p-4

                  overflow-hidden

                  group
                "
              >
                {/* HOVER GLOW */}

                <div
                  className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500

                  bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_70%)]
                "
                />
{/* ICON */}
<div
  className="
    w-10
    h-10
    rounded-xl
    bg-primary/20
    border
    border-primary/30
    mb-6
    flex
    items-center
    justify-center
    text-primary
    relative
    z-10
  "
>
  <item.icon className="text-lg" />
</div>

                {/* NUMBER */}

                <h3
                  className="
                  text-4xl
                  font-bold
                  text-white

                  relative
                  z-10
                "
                >
                  <CountUp
                    end={item.number}
                    duration={4}
                    enableScrollSpy
                    scrollSpyOnce
                  />

                  {item.suffix}
                </h3>

                {/* LABEL */}

                <p
                  className="
                  mt-4
                  text-white/50
                  leading-relaxed

                  relative
                  z-10
                "
                >
                  {item.label}
                </p>

                {/* BORDER GLOW */}

                <div
                  className="
                  absolute
                  inset-0

                  rounded-3xl

                  border
                  border-primary/0

                  group-hover:border-primary/30

                  transition-all
                  duration-500
                "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION DIVIDER */}

      <div
        className="
        absolute
        bottom-0
        left-0

        w-full
        h-[1px]

        bg-gradient-to-r
        from-transparent
        via-primary/40
        to-transparent
      "


      
      />
    </section>
  )
}

export default About