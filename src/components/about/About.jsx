import { motion, useInView } from "framer-motion";
import { aboutus } from "../../assets";
import { About_Full } from "../../constant";
import { useRef } from "react";

const content = About_Full[1];


const About = () => {
  const itemRef = useRef(false);
  const inview = useInView(itemRef, {once:true})

 
  return (
    <div className="flex max-tablet:flex-col w-full max-mobile:px-4 py-16 px-24 items-center -mt-32 gap-32 max-tablet:gap-16 ">
      <div className="w-[50%] max-tablet:w-full flex flex-col gap-5">
        <h1 className="text-5xl max-tablet:text-3xl font-bold">{content.header}</h1>
        <h1 className="text-lg max-tablet:text-base font-medium">{content.subtitle}</h1>
        <p className="leading-snug max-tablet:text-sm text-justify">{content.paragraph1} </p>
        <p className="leading-snug max-tablet:text-sm text-justify">{content.paragraph2.slice(0,197)} <span className="font-bold text-t-primary">{content.paragraph2.slice(197,252)}</span> {content.paragraph2.slice(252,460)} </p>
        {/* <p className="leading-snug max-tablet:text-sm">{content.paragraph2}</p> */}
      </div>
      <div className="w-[50%] max-tablet:w-full gap-10 flex flex-col">
            <motion.div
            initial="hidden"
            animate={inview ? "visible" : "hidden"}
            ref={itemRef}
            variants={{
              hidden : { opacity:0, x:55},
              visible : { opacity:1, x:0},
            }}    
            transition={{
              duration : 1,
              type: "spring",
              ease: 'linear',
            }}
            className="flex gap-10">
                {/* <img src={aboutus} width={500}   alt="missionImage" /> */}
                <video src={aboutus} autoPlay loop muted className="rounded-xl shadow-f2"></video>
            </motion.div>
           
      </div>
    </div>
  );
};

export default About;
