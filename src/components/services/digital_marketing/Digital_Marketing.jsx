import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"
import SuperQuality from "./sections/SuperQuality"
import Services from "./sections/Services"
import SpecialOffer from "./sections/SpecialOffer"
import { motion } from "framer-motion"

const IT_Development = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 0 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y:"-100vw" },
  }
  const pageTransition = {
    type: "linear",
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.4,
  }

  return (
    <motion.div
    initial="initial"
      animate= "in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero/>
      <PopularProducts/>
      <SuperQuality/>
      <Services/>
      <SpecialOffer/>
    </motion.div>
  )
}

export default IT_Development
