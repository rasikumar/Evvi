import { useState } from "react";
import { HR_Content } from "../constant";
import { motion } from "framer-motion";

const Choose = () => {
  const [open, setOpen] = useState(0);

  const toggleOpen = (id) => {
    setOpen(open === id ? null : id);
  };


  const { title, heading, list } = HR_Content[3];
  return (
    <div className="bg-heroImage bg-cover max-mobile:bg-right bg-no-repeat h-[30rem] w-full ">
      <div className="w-[60%] max-mobile:w-full flex flex-col justify-center bg-gradient-to-r from-t-secondary  h-full">
        <div className="px-28 max-tablet:px-14 max-mobile:px-8 gap-6 flex flex-col">
          <div>
            <h1 className="text-xl font-semibold text-white">{title}</h1>
            <p className="text-sm font-medium">{heading}</p>
          </div>
          <div>
            {list.map((item) => (
              <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.2 },
              }}
              key={item.id} className="mb-2 bg-gradient-to-r from-slate-100/40 to-t-secondary/40 backdrop-blur-md shadow-2xl flex flex-col gap-1 cursor-pointer  rounded-lg p-2">
                <h2
                  className="text-balance inline-flex items-center justify-between font-semibold text-t-primary"
                  onClick={() => toggleOpen(item.id)}
                >
                  {item.title}
                  <span className="pr-10 text-lg">{open === item.id ? '-' : '+'}</span>
                </h2>
                {open === item.id && (
                  <p className="text-sm font-medium text-white">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
