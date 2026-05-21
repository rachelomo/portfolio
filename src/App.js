import { useEffect, useState } from "react"

// import Cursor from "./components/UI/Cursor"
// import ProgressBar from "./components/UI/ProgressBar"

import Intro from "./components/Intro"
import Lenis from "lenis"
import Home from "./pages/Home"
import Footer from "./Footer"


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      {loading ? (
        <Intro onFinish={() => setLoading(false)} />
      ) : (
        <div className="main-content">
          {/* <ProgressBar />
          <Cursor /> */}
          <Home/>

          
       <Footer />
        </div>
      )}
    </>
  )
}

export default App