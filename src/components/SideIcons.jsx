import { FaFacebook, FaTwitter, FaInstagram, FaMedium } from "react-icons/fa";

const SideIcons = () => {
  return (
        <div className="sticky top-[30%] flex flex-col items-end z-[100] backdrop-blur-sm">
            <div className="flex absolute flex-col text-white gap-5 text-xl p-4 rounded-tl-lg rounded-bl-lg bg-slate-400/70">
                <a href=""><FaFacebook className="hover:text-blue-800 transition-all delay-75 hover:scale-150 cursor-pointer"/></a>
                <a href=""><FaTwitter className="hover:text-blue-300 transition-all delay-75 hover:scale-150 cursor-pointer"/></a>
                <a href="" className="hover:text-pink-600 transition-all delay-75 hover:scale-150 cursor-pointer"><FaInstagram /></a>
                <a href=""><FaMedium className="hover:text-black/50 transition-all delay-75 hover:scale-150 cursor-pointer"/></a>
            </div>
        </div>
  )
}

export default SideIcons
