import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SideIcons = () => {
  return (
    <div className="sticky top-[30%] flex flex-col items-end z-[100] backdrop-blur-sm">
      <div className="flex absolute flex-col text-white gap-5 text-xl p-4 rounded-tl-lg rounded-bl-lg bg-slate-400/70">
        <a
          href="https://www.facebook.com/EvviSolutions/ "
          target="_blank"
          aria-label="This is for Facebook Icon"
        >
          <FaFacebook className="hover:text-blue-800 transition-all delay-75 hover:scale-150 cursor-pointer" />
        </a>
        <a
          href="https://x.com/Evvisolutions"
          target="_blank"
          aria-label="This is for Xtwitter Icon"
        >
          <FaXTwitter className="hover:text-black/50 transition-all delay-75 hover:scale-150 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/evvisolutions/"
          className="hover:text-pink-600 transition-all delay-75 hover:scale-150 cursor-pointer"
          target="_blank"
          aria-label="This is for Instagram Icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/evvisolutions/posts/?feedView=all"
          target="_blank"
          aria-label="This is for LinkedIn Icon"
        >
          <FaLinkedin className="hover:text-blue-700/50 transition-all delay-75 hover:scale-150 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default SideIcons;
