import { useState } from "react";
import { HR_Content } from "../constant";
import { motion, AnimatePresence } from "framer-motion";

const Choose = () => {
  const [open, setOpen] = useState(null);

  const toggleOpen = (id) => {
    setOpen(open === id ? null : id);
  };

  const { title, list } = HR_Content[3];

  return (
    <div className="bg-heroImage bg-cover bg-no-repeat max-mobile:bg-center h-[32rem] max-mobile:h-[30rem] w-full flex items-center">
      <div className="w-[60%] max-mobile:w-full flex flex-col justify-center bg-gradient-to-r from-teal-50 h-full p-10 max-mobile:p-5 rounded-lg shadow-lg">
        <div className="px-10 max-tablet:px-6 max-mobile:px-0 gap-6 flex flex-col mb-10">
          <div>
            <h2 className="text-3xl max-mobile:text-xl font-bold text-t-primary">{title}</h2>
          </div>
          <div>
            {list.map((item) => (
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                key={item.id}
                className="mb-4 w-full bg-white/40 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 rounded-lg p-4 max-mobile:p-3"
                onClick={() => toggleOpen(item.id)}
              >
                <h2 className="text-xl max-mobile:text-base inline-flex items-center justify-between gap-[2rem] font-semibold text-t-primary">
                  {item.title}
                  {/* <motion.span
                    className="text-xl "
                    animate={{ rotate: open === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  > */}
                    {/* {open === item.id ? '-' : '+'} */}
                  {/* </motion.span> */}
                </h2>
                <AnimatePresence>
                  {open === item.id && (
                    <motion.p
                      className="text-sm text-black mt-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.01 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
