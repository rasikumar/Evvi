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
      <title>IT Development</title>
      <meta name="description" content="
Top Web and Mobile App Development Service,
Best Web Development Company,
Leading Mobile App Developers,
Custom Web and Mobile App Solutions,
Expert App Development Services,
Professional Web Development Services,
Innovative Mobile App Design,
Reliable Web and App Development,
High-Quality App Development Company,
Comprehensive Web and Mobile Solutions,
Website Designing in Madurai,
Web Design Services Thiruparankundram,
Custom Website Design Madurai,
Professional Web Designers Madurai,
Madurai Website Development,
Responsive Web Design Thiruparankundram,
E-commerce Website Design Madurai,
Madurai Web Design Experts,
Website Redesign Services Madurai,
Creative Website Designers Thiruparankundram,

" />
<meta name="keywords" content="Website designing and web and mobile app development in madurai reviews,
Website designing and web and mobile app development in madurai address,
Website designing and web and mobile app development in madurai price,
Website designing and web and mobile app development in madurai contact,
Website designing and web and mobile app development in madurai cost,
Website design company in Madurai,
Best website company in madurai,
Internet marketing services in madurai," />
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
