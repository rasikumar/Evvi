import { useRef, useState } from "react"
import { Faqs } from "../../constant"
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const ArrowIcon = ({ isOpen }) => (
    <svg
      className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

// eslint-disable-next-line react/prop-types
const Service = ({ question, answer, index, currentIndex, setCurrentIndex }) => {
    const answerRef = useRef(null);
    const itemRef = useRef(null);
    const isOpen = currentIndex === index;

    const handleToggle = () =>{
        setCurrentIndex(isOpen ? null : index);
    };

    return (
        <motion.div
        whileHover={{
          scale: 1.025,
        }}
        whileTap={{
          scale: 0.95,
        }}
        ref={itemRef} className={`border-2 rounded-xl p-4 flex flex-col transition-all delay-75 ${isOpen ? 'border-t-primary' : ''} cursor-pointer`} onClick={handleToggle}>
            <div className={`flex items-center justify-between w-full `}>
                <h2 className="text-t-primary font-semibold max-mobile:text-sm line-clamp-1">{question}</h2>
                <ArrowIcon isOpen={isOpen}/>
            </div>
                <div ref={answerRef}>
                    {isOpen && (
                        <p className="mt-5 select-none cursor-text line-clamp-3">{answer}</p>
                    )}
                </div>
        </motion.div>
    );
};

const Faq = () => {
    const { title, heading} = Faqs[0];
    const { lists } = Faqs[0];
    const [ currentIndex, setCurrentIndex ] = useState(0);
    
  return (
    <div className="flex flex-col gap-4 p-10 w-screen">
      <div className="flex flex-col gap-4">
        <h2 className="text-t-primary font-semibold">{heading}</h2>
        <h2 className="text-4xl max-tablet:text-3xl max-mobile:text-2xl font-semibold mb-4">{title}</h2>
      </div>
        {lists.map((faq, index) => (
            <Service 
                key = {index}
                index = {index}
                currentIndex = {currentIndex}
                setCurrentIndex = {setCurrentIndex}
                {...faq}
            /> 
        ))}
    </div>
  )
}

export default Faq

