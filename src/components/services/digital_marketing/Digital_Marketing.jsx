import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"
import SuperQuality from "./sections/SuperQuality"
import Services from "./sections/Services"
import SpecialOffer from "./sections/SpecialOffer"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"

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
    <>
    <Helmet>
      <meta name="description" content="Top digital marketing services in madurai,
List of digital marketing services in madurai,
Top 10 digital marketing services in madurai,
Best digital marketing services in madurai,
Digital marketing services in madurai pdf,
Best digital marketing company in Madurai,
Web design services in madurai,
Digital marketing services in madurai contact number," />
<meta name="keywords" content="Top Digital Marketing Service in madurai,Best Social Media Marketing in thiruparankundram
Effective Local SEO Service near me,
Professional Content Marketing,
Targeted Email Marketing Campaigns,
Leading SEO Optimization Services,
Expert Social Media Advertising in Thiruparankundram,
Comprehensive Content Creation,
High-Quality Lead Generation,
Advanced Online Marketing Solutions," />
    </Helmet>
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
    </>
  )
}

export default IT_Development
