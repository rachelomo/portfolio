import { useEffect } from "react"

const useMouseParallax = (ref, strength = 30) => {
  useEffect(() => {
    const element = ref.current

    const handleMouseMove = (e) => {
      const x =
        (window.innerWidth / 2 - e.pageX) / strength

      const y =
        (window.innerHeight / 2 - e.pageY) / strength

      element.style.transform =
        `translate(${x}px, ${y}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      )
    }
  }, [ref, strength])
}

export default useMouseParallax