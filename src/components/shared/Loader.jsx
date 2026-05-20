import { motion } from "framer-motion"

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black z-[999] flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          w-32 h-32
          rounded-full
          border-4 border-primary
          shadow-glow
        "
      />
    </div>
  )
}

export default Loader