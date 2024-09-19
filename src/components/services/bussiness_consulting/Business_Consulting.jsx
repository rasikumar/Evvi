import Main from "./Main";
import Card from "./card/Card";
// import Services from "./Services"
import Domains from "./Domains";
// import Choose from "./Choose"
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

const Digital_Marketing = () => {
  return (
    <>
      <Helmet>
        <title>Business Consulting</title>
        <meta
          name="description"
          content="Business Consulting in Madurai,
Business Advisors Thiruparankundram,
Madurai Business Solutions,
Expert Business Consulting Thiruparankundram,
Business Strategy Consultants Madurai,
Business Growth Consulting Madurai,
Thiruparankundram Business Advisors,
Corporate Consulting Services Madurai,
Madurai Business Development Experts,
Local Business Consulting Madurai,
"
        />
        <meta
          name="keywords"
          content="
Top business consulting in madurai,
Best business consulting in madurai

"
        />
        <link rel="canonical" href="https://evvisolutions.com/BusinessConsulting" />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Main />
        {/* <Services/> */}
        <Card />
        <Domains />
        {/* <Choose/> */}
      </motion.div>
    </>
  );
};

export default Digital_Marketing;
