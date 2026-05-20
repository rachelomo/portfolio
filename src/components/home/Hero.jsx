// ========================= HERO.tsx =========================

import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"
import ScrollBadge from "./ScrollBadge"
import SideIndicator from "./SideIndicator"

  

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#04030B]
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">

        {/* TOP RIGHT GLOW */}
        <div
          className="
            absolute
            top-[-10%]
            right-[-30%]

            w-[380px]
            h-[180px]

            sm:w-[500px]
            sm:h-[280px]

            lg:w-[750px]
            lg:h-[380px]

            rounded-full
            bg-purple-600/20
            blur-[120px]
            lg:blur-[180px]
          "
        />

        {/* BOTTOM LEFT GLOW */}
        <div
          className="
            absolute
            bottom-[-15%]
            left-[-25%]

            w-[280px]
            h-[280px]

            sm:w-[450px]
            sm:h-[450px]

            lg:w-[650px]
            lg:h-[650px]

            rounded-full
            bg-fuchsia-600/10
            blur-[120px]
            lg:blur-[180px]
          "
        />

        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]

            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

            bg-[size:45px_45px]
            sm:bg-[size:60px_60px]
            lg:bg-[size:80px_80px]
          "
        />
      </div>

      {/* SIDE INDICATOR */}
      <div className="hidden lg:block">
        <SideIndicator />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div
        className="
          relative
          z-20

          max-w-[1450px]
          mx-auto

          px-5
          sm:px-8
          md:px-10
          lg:px-14

          pt-28
          sm:pt-32
          md:pt-36
          lg:pt-24

          min-h-screen

          grid
          grid-cols-1
          lg:grid-cols-[0.9fr_1.1fr]

          items-center

          gap-10
          sm:gap-14
          lg:gap-10
        "
      >
        {/* LEFT */}
        <div className="order-1">
          <HeroLeft />
        </div>

        {/* RIGHT */}
        <div
          className="
            order-2

            flex
            justify-center
            items-center

            w-full
          "
        >
          <HeroRight />
        </div>
      </div>

      {/* SCROLL BADGE */}
      <div className="hidden sm:block">
        <ScrollBadge />
      </div>
    </section>
  )
}

export default Hero