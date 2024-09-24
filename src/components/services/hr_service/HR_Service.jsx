import Hero from "./Hero";
import Services from "./Services";
import Domains from "./Domains";
import Choose from "./Choose";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

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

const HR_Service = () => {
  return (
    <>
      <Helmet>
        <title>Professional HR Services in Madurai | Evvi Solutions</title>
        <meta
          name="description"
          content="Streamline your hiring process with Evvi Solutions' HR services in Madurai. We offer tailored solutions for recruitment, training, and employee management."
        />
        <meta
          name="keywords"
          content="The hr company,
Hr service partner in madurai address,
Hr business partner in madurai, tamil nadu,
Senior hr business partner,
Strategic hr business partner,
Best hr service partner in madurai,
Hr outsourcing in chennai,
"
        />
        <link rel="canonical" href="https://evvisolutions.com/HRService" />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Hero />
        <Services />
        <Domains />
        <Choose />
      </motion.div>
    </>
  );
};

export default HR_Service;
