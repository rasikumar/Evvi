import { useState } from "react";
import { HR_Content } from "../constant";
import { motion } from "framer-motion";

const Domains = () => {
  const { title, description, description1, list } = HR_Content[2];
  const fthree = list[0].items.slice(0, 3);
  const sthree = list[0].items.slice(3, 6);
  const [tooltip, setTooltip] = useState(null);

  const setTip = (id) => {
    setTooltip(tooltip === id ? null : id);
  };

  return (
    <div className="flex max-tablet:flex-col w-full max-tablet:h-full h-[30rem] overflow-hidden">
      <div className="bg-t-primary w-[50%] max-tablet:w-full flex flex-col items-start max-tablet:px-24 max-tablet:py-20 max-mobile:py-10 max-mobile:px-4 px-20 justify-center relative">
        <h2 className="text-2xl font-semibold mb-5 text-white">{title}</h2>
        <p className="font-medium text-white max-tablet:text-sm text-justify mb-4">
          {description}
        </p>
        <p className="font-medium text-white max-tablet:text-sm text-justify">
          {description1}
        </p>
        <div className="w-10 h-10 max-tablet:-bottom-5 max-tablet:right-[45%] bg-t-primary absolute -right-5 rotate-45"></div>
      </div>
      <div className="w-[50%] max-tablet:w-full max-mobile:py-10 max-tablet:py-20 flex flex-col items-center justify-center overflow-hidden">
        {list.map((i) => (
          <div key={i.id} className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-xl">{i.title}</h2>

            <div className="flex flex-col overflow-hidden items-center justify-center gap-12 p-12 max-tablet:gap-10 max-mobile:gap-4 max-tablet:p-8 max-mobile:py-10">
              <div className="flex overflow-hidden gap-12 max-tablet:gap-10 max-mobile:gap-4 items-start">
                {fthree.map((j) => (
                  <div
                    key={j.id}
                    onMouseEnter={() => setTip(j.id)}
                    onMouseLeave={() => setTip(null)}
                    className="relative flex flex-col items-center justify-center"
                  >
                    <img src={j.img} alt="domain_image" className="w-20 max-tablet:w-28" />
                    {tooltip === j.id && (
                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 3 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute bottom-10 px-12 py-4 max-mobile:bottom-10 w-40 max-mobile:py-4 max-mobile:h-10 bg-white shadow-lg rounded text-sm text-gray-800 text-center max-mobile:text-xs"
                      >
                        {j.content}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex overflow-hidden gap-12 max-tablet:gap-10 max-mobile:gap-4 items-start">
                {sthree.map((j) => (
                  <div
                    key={j.id}
                    onMouseEnter={() => setTip(j.id)}
                    onMouseLeave={() => setTip(null)}
                    className="relative flex flex-col items-center"
                  >
                    <img src={j.img} alt="domain_image" className="w-20 max-tablet:w-28" />
                    {tooltip === j.id && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 10 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute bottom-10 w-40 px-11 py-4 max-mobile:py-4 max-mobile:h-10 bg-white shadow-lg rounded text-sm text-gray-800 text-center max-mobile:text-xs"
                      >
                        {j.content}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>

              {/* Uncomment if needed
              <div className="flex overflow-hidden gap-12 max-tablet:gap-10 max-mobile:gap-4 items-start">
                {tthree.map((j) => (
                  <div key={j.id} className="flex flex-col items-center">
                    <img
                      src={j.img}
                      alt=""
                      className="w-32 max-tablet:w-28"
                    />
                    <p className="font-medium max-mobile:text-xs max-mobile:w-28 text-sm w-40 text-center text-t-primary">{j.content}</p>
                  </div>
                ))}
              </div> 
              */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domains;
