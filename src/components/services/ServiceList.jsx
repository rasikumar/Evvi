import { Link } from "react-router-dom";
import { ServicePage } from "../../constant";
import { motion } from "framer-motion";

const ServiceList = () => {

  
  return (
    <div className="grid grid-cols-1  w-[90%] max-tablet:py-8 max-mobile:gap-10 m-auto py-12 gap-2">
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
          Transform your business with our tailored solutions
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
          <div
            key={i.id}
            className="flex max-mobile:flex-col p-5 items-center bg-slate-200 rounded-xl"
          >
            <motion.div className="flex flex-col gap-5 p-3">
              <h1 className="font-semibold text-xl">{i.header}</h1>
              <p className="text-sm font-medium">{i.content}</p>
              <Link to={i.url} className="btn-primary w-32">
                {i.btn}
              </Link>
            </motion.div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
