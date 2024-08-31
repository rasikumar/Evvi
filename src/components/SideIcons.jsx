import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SideIcons = () => {
  return (
    <div className="sticky top-[30%] flex flex-col items-end z-[100] backdrop-blur-sm">
      <div className="flex absolute flex-col text-white gap-5 text-xl p-4 rounded-tl-lg rounded-bl-lg bg-slate-400/70">
        <a href="https://www.facebook.com/EvviSolutions/">
          <FaFacebook className="hover:text-blue-800 transition-all delay-75 hover:scale-150 cursor-pointer" />
        </a>
        <a href="">
          <FaTwitter className="hover:text-blue-300 transition-all delay-75 hover:scale-150 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/evvisolutions/"
          className="hover:text-pink-600 transition-all delay-75 hover:scale-150 cursor-pointer"
        >
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/evvisolutions/posts/?feedView=all">
          <FaLinkedin className="hover:text-black/50 transition-all delay-75 hover:scale-150 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default SideIcons;
