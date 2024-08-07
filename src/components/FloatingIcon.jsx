import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { Popover } from "flowbite-react"

const FloatingIcon = () => {
    const [shake, setShake] = useState(false)

    const toggleShake = () => {
        setShake(true)
        setTimeout(() => setShake(false), 1000)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            toggleShake();
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    

  return (
    <div className="sticky top-[80%] px-14 flex flex-col items-end z-[100] ">
        <div className="absolute max-tablet:top-8 max-tablet:right-8 p-4 bg-white rounded-full shadow-2xl">
            <Popover
             aria-labelledby="default-popover"
             content={
               <div className="w-64 text-sm text-gray-500">
                 <div className="border-b border-gray-200 bg-gray-100 px-3 py-2">
                   <h3 id="default-popover" className="font-semibold text-gray-900">Popover title</h3>
                 </div>
                 <div className="px-3 py-2 bg-white">
                   <p>And heres some amazing content. Its very engaging. Right?</p>
                 </div>
               </div>
             }
            >
                <span href="" onClick={toggleShake} className="relative ">
                    <span className={`w-5 right-0 z-50 border-2 h-5 text-xs flex items-center text-white justify-center text-center bg-t-primary rounded-full absolute ${shake ? 'animate-shake' : ''}`}>1</span>
                    <FaWhatsapp className={`text-green-600 text-5xl ${shake ? 'animate-shake' : ''}`}/>
                </span>
            </Popover>
        </div>
    </div>
  )
}

export default FloatingIcon
