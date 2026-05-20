const SideIndicator = () => {
  return (
    <div
      className="
        absolute
        left-6
        top-1/2
        -translate-y-1/2
        hidden
        2xl:flex
        flex-col
        items-center
        gap-14
        z-40
      "
    >
      <div className="text-white/40 text-sm">01</div>

      <div className="relative w-[2px] h-24 bg-purple-500">

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-4
            h-4
            rounded-full
            bg-purple-500
            shadow-[0_0_30px_rgba(139,92,246,1)]
          "
        />

      </div>

      <div className="text-white/20 text-sm">03</div>
      <div className="text-white/20 text-sm">04</div>
    </div>
  )
}

export default SideIndicator