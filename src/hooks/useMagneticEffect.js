import { useEffect, useRef } from "react"

const useMagneticEffect = () => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current

    const handleMouseMove = (e) => {
      const { left, top, width, height } =
        el.getBoundingClientRect()

      const x = e.clientX - (left + width / 2)
      const y = e.clientY - (top + height / 2)

      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
    }

    const reset = () => {
      el.style.transform = `translate(0px,0px)`
    }

    el.addEventListener("mousemove", handleMouseMove)
    el.addEventListener("mouseleave", reset)

    return () => {
      el.removeEventListener("mousemove", handleMouseMove)
      el.removeEventListener("mouseleave", reset)
    }
  }, [])

  return ref
}

export default useMagneticEffect