import { useEffect, useState } from "react";
import { FaWhatsapp, FaChevronRight, FaMinus } from "react-icons/fa";
// import { questions, answers, Testimonials } from "../constant"
import FloatingIcon2 from "./FloatingIcon2"

const FloatingIcon = () => {
  const [shake, setShake] = useState(false);
  const [open, setOpen] = useState(false);
  // const [step, setStep] = useState(0)
  // const [ selectedQuestion,setSelectedQuestion ] = useState(false)
  // const icon = Testimonials[0].lists[0]

  const popOver = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  //     const handleQuestionSelect = (question) => {
  //       setSelectedQuestion(question);
  //       setStep(1);
  //   };

  //   const handleFollowUpSelect = (question) => {
  //       setSelectedQuestion(question);
  //       setStep(2);
  //   };

  return (
    <div className="sticky top-[80%] px-14 flex flex-col items-end z-[100] ">
      <div className="absolute max-tablet:top-8 max-tablet:right-8 p-4 bg-white rounded-full shadow-2xl">
        <span className="relative" onClick={popOver}>
          <span
            className={`w-5 right-0 z-50 border-2 h-5 text-xs flex items-center text-white justify-center text-center bg-t-primary rounded-full absolute ${
              shake ? "animate-shake" : ""
            } ${open ? "hidden transition delay-300 animate-none" : shake}`}
          >
            1
          </span>
          <FaWhatsapp
            className={`text-green-600 text-5xl ${
              shake ? "animate-shake" : ""
            } ${open ? "transition animate-none" : ""}`}
          />
        </span>
        {open && (
          <div className="absolute z-50 bottom-16 right-14 max-tablet:-right-5 h-[50vh] w-[55vh] max-tablet:w-[30vh] max-tablet:h-[30vh] max-mobile:w-[35vh] max-mobile:h-[40vh] bg-white/40 backdrop-blur-sm border-[1px] shadow-xl transition delay-100 rounded-xl p-1">
            <h3 className=" mb-3 p-3 bg-t-primary text-white text-base font-bold rounded-lg shadow-lg inline-flex w-full items-center justify-between">
              Welcome To Evvi Solutions <span onClick={() => {setOpen(false)}}><FaMinus/></span>
            </h3>
            <div className="p-4 flex flex-col">
              <div className="flex flex-col items-center justify-center gap-5 max-mobile:gap-10">
                <h2 className="text-lg max-mobile:text-sm text-center font-semibold">
                  Want to Know More About Our Company?
                </h2>
                <a
                  href="https://wa.me/+919900965657?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20your%20company."
                  target="_blank"
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="inline-flex items-center gap-10 max-mobile:gap-5 text-white bg-t-primary hover:bg-green-300 hover:text-black transition delay-100 px-5 py-3 max-mobile:px-3 max-mobile:py-2 rounded-2xl shadow-what"
                >
                  <FaWhatsapp className="text-3xl" />
                  Chat With Us
                  <FaChevronRight />
                </a>
                <FloatingIcon2/>
              </div>

              {/* {step === 0 && (
                          <div>
                              {questions.map((question, index) => (
                                <div key={index} className="flex items-center gap-2" >
                                  <img src={icon.cust_icon} width={icon.width-5} alt="#" className="mb-4 rounded-full" />
                                  <button key={index} onClick={() => handleQuestionSelect(question)} className="flex mb-4 bg-orange-500 p-2 rounded-xl font-medium text-sm">
                                      {question}
                                  </button>
                                </div>
                              ))}
                          </div>
                      )} */}

              {/* {step === 1 && (
                          <div>
                              <div>
                                  <div className="flex flex-row-reverse items-center gap-2">
                                    <img src={icon.cust_icon} width={icon.width-5} alt="" className="mb-4 rounded-full"/>
                                    <p className="w-[50%] ml-auto mb-4 bg-t-primary  text-white text-sm font-medium p-2 rounded-xl ">{answers[selectedQuestion].answer}</p>
                                  </div>
                              </div>
                              {answers[selectedQuestion].followUp.map((question, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                  <img src={icon.cust_icon} width={icon.width-5} alt="#" className="mb-4 rounded-full" />
                                  <button key={index} onClick={() => handleFollowUpSelect(question)} className="flex mb-4 bg-orange-500 p-2 rounded-xl font-medium text-sm">
                                      {question}
                                  </button>
                                  </div>
                              ))}
                          </div>
                      )} */}

              {/* {step === 2 && (
                          <div>
                              <p>{`You asked: ${selectedQuestion}`}</p>
                              <p>{`The chatbot answered: ${answers[selectedQuestion].answer}`}</p>
                              <p>hello</p>
                          </div>
                      )} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingIcon;
