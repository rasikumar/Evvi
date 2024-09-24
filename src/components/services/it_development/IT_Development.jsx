import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const IT_Development = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 0 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: "-100vw" },
  };
  const pageTransition = {
    type: "linear",
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.4,
  };

  return (
    <>
      <Helmet>
        <title>Web Design, App Development & IT Support | Evvi Solutions</title>
        <meta
          name="description"
          content="Evvi Solutions provides web development, app development, cloud services, and technical support to help your business thrive."
        />
        <meta
          name="keywords"
          content="Website designing and web and mobile app development in madurai reviews,
Website designing and web and mobile app development in madurai address,
Website designing and web and mobile app development in madurai price,
Website designing and web and mobile app development in madurai contact,
Website designing and web and mobile app development in madurai cost,
Website design company in Madurai,
Best website company in madurai,
Internet marketing services in madurai,"
        />
        <link rel="canonical" href="https://evvisolutions.com/ITDevelopment" />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffer />
      </motion.div>
    </>
  );
};

export default IT_Development;
