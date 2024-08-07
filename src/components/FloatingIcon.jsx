import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

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
    <div className="sticky top-[80%] px-14 flex flex-col items-end z-50 ">
        <div className="absolute p-4 bg-white rounded-full shadow-2xl">
                <a href="" onClick={toggleShake} className="relative ">
                    <span className={`w-5 right-0 z-50 border-2 h-5 text-xs flex items-center text-white justify-center text-center  bg-t-primary rounded-full absolute ${shake ? 'animate-shake' : ''}`}>1</span>
                    <FaWhatsapp className={`text-green-600 text-5xl ${shake ? 'animate-shake' : ''}`}/>
                </a>
        </div>
    </div>
  )
}

export default FloatingIcon
