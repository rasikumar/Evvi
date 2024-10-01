import { Ratings, Happy_Clients } from "../assets";
import { Testimonials } from "../constant";
import TestSlider from "./TestSlider";
import { FcGoogle } from "react-icons/fc";
import { FaRegFaceGrinBeam } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Testimonial = () => {
  const textRef = useRef(false);
  const inview = useInView(textRef, { triggeronce: true });
  const { title, heading, subtitle } = Testimonials[0];
  const [hover, sethover] = useState(0);

  const handleMouseEnter = (id) => {
    sethover(id);
  };

  const handleMouseLeave = () => {
    sethover(null);
  };

  return (
    <div className="flex overflow-x-hidden items-end max-tablet:flex-col gap-4 w-full p-14 max-tablet:p-5 max-tablet:gap-10 max-mobile:gap-5">
      <div className="flex flex-col w-[55%] max-tablet:w-full gap-12">
        <motion.div
          initial="hidden"
          animate={inview ? "visible" : "hidden"}
          ref={textRef}
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 5,
            stiffness: 100,
            ease: "linear",
          }}
          className="flex flex-col gap-3"
        >
          <h3 className="text-t-primary font-semibold">{heading}</h3>
          <h2 className="text-4xl max-tablet:text-3xl max-mobile:text-2xl font-semibold">
            {title}
          </h2>
          <p>{subtitle}</p>
          <div>
            {Testimonials.map((i) => (
              <ul key={i.id} className="flex flex-col gap-2">
                {i.items.map((j) => (
                  <motion.li
                    whileHover={{ x: 0, scale: 1.02 }}
                    key={j.id}
                    className="cursor-pointer rounded-lg bg-gray-300 p-3 flex max-mobile:flex-col gap-1 m-auto w-[38rem] max-mobile:w-[20rem]"
                    onMouseEnter={() => handleMouseEnter(j.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <h2
                      className={`font-bold text-t-primary text-justify text-sm m-auto  ${
                        hover === j.id
                          ? "transition duration-700"
                          : "text-center max-tablet:ml-0  flex items-center justify-center"
                      }`}
                      onMouseEnter={() => handleMouseEnter(j.id)}
                    >
                      {j.heading}
                    </h2>
                    <p
                      className={`transition-opacity duration-100 font-medium text-sm m-auto ${
                        hover === j.id ? "block" : "hidden"
                      }`}
                    >
                      {" "}
                      - {j.content}
                    </p>
                  </motion.li>
                ))}
              </ul>
            ))}
          </div>
        </motion.div>
        <div className="h-full  w-full">
          <TestSlider />
        </div>
      </div>

      <div className="grid max-mobile:grid-flow-row grid-cols-4 gap-4 grid-rows-6 grid-flow-col w-[100%] h-[32rem]">
        <div className="col-span-2 max-mobile:hidden row-span-4 rounded-3xl overflow-hidden">
          <img
            src={Ratings}
            width={300}
            height={200}
            alt="Ratings image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-blue-50 col-span-2  row-span-2 rounded-3xl px-8 py-5 shadow-md">
          <div className="flex flex-col gap-2">
            <FcGoogle className="text-5xl max-mobile:text-3xl" />
            <h2 className="text-2xl font-bold">4.9</h2>
            <p className="font-medium">Google Ratings</p>
          </div>
        </div>

        <div className="bg-amber-200 col-span-2 row-span-2 rounded-3xl px-8 py-8 shadow-md">
          <div className="flex flex-col gap-5">
            <FaRegFaceGrinBeam className="text-5xl max-mobile:text-3xl" />
            {/* <h2 className="text-2xl font-bold">4.5K +</h1> */}
            <p className="font-medium">Happy Clients</p>
          </div>
        </div>

        <div className="col-span-2 max-mobile:col-span-4 row-span-4 rounded-3xl overflow-hidden shadow-xl">
          <img
            src={Happy_Clients}
            width={300}
            height={200}
            alt="Happy clients Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
