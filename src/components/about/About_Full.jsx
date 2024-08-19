import { motion } from "framer-motion";
const About_Full = () => {
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
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        

      </motion.div>
  );
};

export default About_Full;
