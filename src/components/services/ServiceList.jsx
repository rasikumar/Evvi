import { Link } from "react-router-dom";
import { ServicePage } from "../../constant";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const ServiceList = () => {
  const itemRef = useRef(false);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["1 0.00000001", "1 1"],
  });

  return (
    <div className="grid grid-cols-1  w-[90%] max-tablet:py-8 max-mobile:gap-10 m-auto py-10 gap-32">
      <div className="flex flex-col gap-2 p-10">
        <motion.h2
          className="text-3xl text-center font-bold"
          initial={{ opacity: 0, y: "200px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1 }}
        >
          Services
        </motion.h2>
        <motion.p
          className="text-center max-mobile:text-sm"
          initial={{ opacity: 0, x: "300px" }}
          animate={{ opacity: 1, x: "0px" }}
          transition={{ duration: 1 }}
        >
          We offer a wide range of services tailored to your specific needs.
          From web development to digital marketing, we have got you covered.
        </motion.p>
        <motion.p
          className="text-center max-mobile:text-sm"
          initial={{ opacity: 0, x: "300px" }}
          animate={{ opacity: 1, x: "0px" }}
          transition={{ duration: 1 }}
        >
          At Urban Art, we strive to provide the best possible solutions for
          your business needs. We have a team of experienced professionals who
          will help you achieve your goals.
        </motion.p>
      </div>
      <div className="flex flex-col gap-10">
        {ServicePage.map((i) => (
          <motion.div
            key={i.id}
            ref={itemRef}
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
              transition: { duration: 0.5 },
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              transform: `translateY(${scrollYProgress * -10}px)`,
            }}
            className="flex max-mobile:flex-col p-5 items-center bg-slate-200 rounded-xl"
          >
            <div className="flex flex-col gap-5 p-3">
              <h1 className="font-semibold text-xl">{i.header}</h1>
              <p className="text-sm font-medium">{i.content}</p>
              <Link to={i.url} className="btn-primary w-32">
                {i.btn}
              </Link>
            </div>
            <motion.img
              whileHover={{
                scale: 1.021,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
              src={i.img}
              alt={i.header}
              className="rounded-2xl w-96"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
