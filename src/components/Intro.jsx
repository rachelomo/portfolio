import { useEffect, useState } from "react"
import gsap from "gsap"


export default function Intro({ onFinish }) {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(".intro-text", {
      y: 0,
      opacity: 1,
      duration: 1,
    })
      .to(".intro", {
        y: "-100%",
        duration: 1.2,
        delay: 0.5,
        ease: "power4.inOut",
        onComplete: onFinish,
      })
  }, [onFinish])

  return (
    <div className="intro fixed top-0 left-0 w-full h-full bg-black z-[9999] flex items-center justify-center">
      <h1 className="intro-text text-white text-4xl opacity-0 translate-y-10">
        Loading Experience...
      </h1>
    </div>
  )
}

//Intro.jsx
// import { useEffect } from "react"
// import gsap from "gsap"

// export default function Intro({ onFinish }) {
//   useEffect(() => {
//     const tl = gsap.timeline()

//     tl.fromTo(
//       ".intro-text",
//       { y: 100, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1 }
//     )
//       .to(".intro-text", {
//         y: -100,
//         opacity: 0,
//         duration: 0.6,
//         delay: 0.5,
//       })
//       // 💥 "VOMIT"
//       .to(".intro", {
//         y: "-100%",
//         duration: 1.2,
//         ease: "power4.inOut",
//       })
//       .call(onFinish) // IMPORTANT

//   }, [])

//   return (
//     <div className="intro fixed top-0 left-0 w-full h-screen bg-black z-[9999] flex items-center justify-center">
//       <h1 className="intro-text text-white text-4xl">
//         Welcome 👀
//       </h1>
//     </div>
//   )
// }