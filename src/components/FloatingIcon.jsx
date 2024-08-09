import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { questions, answers, Testimonials } from "../constant"
import { Evvi_icon } from "../assets"

const FloatingIcon = () => { 
    const [shake, setShake] = useState(false)
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(0)
    const [ selectedQuestion,setSelectedQuestion ] = useState(false)
    const icon = Testimonials[0].lists[0]
    

    const popOver = () => {
      setOpen(!open)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setShake(true)
            setTimeout(() => setShake(false), 1000)
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    
    const handleQuestionSelect = (question) => {
      setSelectedQuestion(question);
      setStep(1);
  };

  const handleFollowUpSelect = (question) => {
      setSelectedQuestion(question);
      setStep(2);
  };

  return (
    <div className="sticky top-[80%] px-14 flex flex-col items-end z-[100] ">
        <div className="absolute max-tablet:top-8 max-tablet:right-8 p-4 bg-white rounded-full shadow-2xl">
              <span className="relative" onClick={popOver}>
                  <span className={`w-5 right-0 z-50 border-2 h-5 text-xs flex items-center text-white justify-center text-center bg-t-primary rounded-full absolute ${shake ? 'animate-shake' : ''} ${open ? 'hidden transition delay-300 animate-none': shake}`}>1</span>
                  <FaWhatsapp className={`text-green-600 text-5xl ${shake ? 'animate-shake' : ''} ${open ? 'transition animate-none': ''}`}/>
              </span>
              {open && (
                <div className="absolute bottom-16 right-14 h-[50vh] w-[70vh] max-tablet:w-[30vh] max-tablet:h-[30vh] bg-white/40 backdrop-blur-sm border-[1px] shadow-xl transition delay-100 rounded-xl p-1">
                   <img src={Evvi_icon} className="w-20 absolute top-1 rounded-sm p-1 right-4 max-tablet:w-16 max-tablet:hidden " alt="icon" />
                    <h3 className=" mb-3 p-3 bg-t-primary text-white text-base font-bold rounded-lg shadow-lg">Choose One of Our Service!</h3>
                  <div className="p-4 flex flex-col">
                      {step === 0 && (
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
                      )}

                      {step === 1 && (
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
                      )}

                      {step === 2 && (
                          <div>
                              <p>{`You asked: ${selectedQuestion}`}</p>
                              <p>{`The chatbot answered: ${answers[selectedQuestion].answer}`}</p>
                              {/* You can add further steps or conclude the chat here */}
                              <h1>hello</h1>
                          </div>
                      )}
                  </div>
                </div>
              )}
        </div>
    </div>
  )
}

export default FloatingIcon;




