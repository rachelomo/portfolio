const ScrollBadge = () => {
  return (
    <div
      className="
        absolute
        right-8
        bottom-10
        hidden
        xl:flex
        items-center
        justify-center
        z-40
      "
    >
      <div
        className="
          w-[90px]
          h-[90px]
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          flex
          items-center
          justify-center
          text-white/55
          text-sm
        "
      >
        Scroll
      </div>
    </div>
  )
}

export default ScrollBadge