import { Link } from "react-router-dom";
import { codingImage, digitalImage } from "../assets";
import { AboutUs } from "../constant";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["0 1", "-0.5"],
  });

  return (
    <div className="flex items-center max-tablet:flex-col gap-20 w-full p-14 max-tablet:p-5 max-tablet:gap-10">
      <div className="relative w-[50%] max-tablet:w-full">
        <div className="w-36 h-36 bg-t-secondary blur-[100px] absolute top-0 -z-10"></div>
        <div className="relative">
          <img src={codingImage} alt="" className="w-[70%] rounded-3xl max-tablet:w-full" />
          <img src={digitalImage} alt="" className="absolute top-12 left-44 w-[70%] rounded-3xl max-tablet:hidden" />
        </div>
      </div>
      <div className="relative w-[50%] max-tablet:w-full">
        {AboutUs.map((about) => (
          <motion.div
            key={about.id}
            ref={textRef} 
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
            }}
            className="flex flex-col gap-3"
          >
            <p className="text-t-primary font-semibold">{about.heading}</p>
            <h1 className="text-4xl max-tablet:text-3xl max-mobile:text-2xl font-semibold">{about.title}</h1>
            <p className="font-normal text-justify"><span className="font-semibold text-t-primary">{about.description.slice(0, 65)}</span>{about.description.slice(65, 510)}</p> 
            <p className="font-normal text-justify"><span className="font-semibold text-t-primary">{about.description2.slice(0, 97)}</span>{about.description2.slice(97, 196)}<span className="font-semibold text-t-primary">{about.description2.slice(196, 238)}</span></p> 
            <p className="font-normal text-justify">{about.description3}</p>
            <Link to={about.url} className="btn-primary mt-5 w-[25%] max-tablet:w-full">
              {about.btn}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
            // <ul>
            //   {about.lists.map((list) => (
            //     <li key={list.id} className="flex items-start max-mobile:text-sm mb-2 text-justify">
            //       <list.icon  className="mt-1 w-10"/>
            //       {list.heading}
            //       {/* {list.content} */}
            //     </li>
            //   ))}
            // </ul>
