import { motion, useInView } from "framer-motion"
import { legacy } from "../../assets"
import { About_Full } from "../../constant"
import { useRef } from "react"

const content = About_Full[2]

const Mission = () => {
    const itemRef = useRef(false);
    const inview =  useInView(itemRef, {once:true});

  return (
    <div className="flex items-center max-tablet:flex-col max-mobile:px-4 max-mobile:py-10 max-tablet:gap-10 w-full p-24 gap-20 bg-t-primary"> 
        <motion.div
            initial="hidden"
            animate={inview ? "visible" : "hidden"}
            ref={itemRef}
            variants={{
                hidden: {opacity: 0, x : -45},
                visible : { opacity : 1, x : 0},
            }}  
            transition={{
                duration:1,
                type : "spring",
                ease : 'linear',
            }}
        className="w-[50%] max-tablet:w-full flex flex-col gap-4">
            <h2 className="text-xl max-tablet:text-lg font-medium text-white">{content.title}</h2>
            <h2 className="text-white text-4xl max-tablet:text-2xl font-medium">{content.header}</h2>
            <p className="text-white leading-snug max-tablet:text-sm text-justify">{content.paragraph1}</p>
            <p className="text-white leading-snug max-tablet:text-sm text-justify">{content.paragraph2}</p>
        </motion.div>
        <div className="w-[50%] max-tablet:w-full">
            <motion.img
            initial="hidden"
            animate={inview ? "visible" : "hidden"}
            ref={itemRef}
            variants={{
                hidden: {opacity: 0, x : 45},
                visible : { opacity : 1, x : 0},
            }}  
            transition={{
                duration:1,
                type : "spring",
                ease : 'linear',
            }}
            whileHover={{
                scale: 1.1,
                Shadow: "0px 0px 20px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{
                scale: 1,
                shadow: "none"
            }}
            src={legacy} alt="legacy_image" />
        </div>
    </div>
  )
}

export default Mission