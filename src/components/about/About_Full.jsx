import Hero from "./Hero";
import About from "./About";
import Mission from "./Mission";
import Vision_Mission from "./Vision_Mission";
import Join from "./Join";
import Team from "./Team";

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
const About_Full = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>About Evvi Solutions</title>
        <meta
          name="description"
          content="We offer tailored Business Consulting, HR Services, Digital Marketing, and Web & Mobile App solutions."
        />
        <link rel="canonical" href="https://evvisolutions.com/About" />
      </Helmet>
      <Hero />
      <About />
      <Team />
      <Vision_Mission />
      <Mission />
      <Join />
    </motion.div>
  );
};

export default About_Full;
