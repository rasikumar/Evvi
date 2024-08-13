import { useEffect, useState } from "react";
import { Evvi_icon } from "../assets";
import { Navigation } from "../constant";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredNavId, setHoveredNavId] = useState(null);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = (id) => {
    setHoveredNavId(id);
  };

  const handleMouseLeave = () => {
    setHoveredNavId(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex m-auto mt-8 items-center w-[90%] z-[1000] sticky top-0 backdrop-blur-sm justify-between tablet:px-16 mobile:px-10 py-5 max-mobile:px-4 ${
        scroll
          ? "bg-white/50 w-full transition delay-150"
          : "bg-white/0 border-2 border-t-secondary rounded-xl"
      }`}
    >
      <a href="/">
        <img
          src={Evvi_icon}
          alt="Evvi_icon"
          width={100}
          className="max-mobile:w-16 desktop:w-32"
        />
      </a>
      <div className="flex-1 flex justify-end items-center tablet:hidden">
        <button
          onClick={toggleMenu}
          className="text-t-primary transition-all delay-100 text-lg"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`flex flex-col tablet:flex-row items-center ${
          isOpen
            ? "absolute items-center justify-center left-0 top-0 -z-10 h-screen w-full p-5 gap-7 bg-white block transition delay-200"
            : "hidden"
        } tablet:block`}
      >
        {Navigation.map((navigate) => {
          if (navigate.sub) {
            return (
              <div
                key={navigate.id}
                className="relative inline-block"
                onMouseEnter={() => handleMouseEnter(navigate.id)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={navigate.url}
                  className={`text-t-primary mr-7 font-medium hover:border-b-2 hover:text-t-secondary border-t-secondary desktop:text-2xl laptop:text-sm ${
                    isOpen ? "ml-7" : ""
                  }`}
                >
                  {navigate.title}
                </a>
                {hoveredNavId === navigate.id && (
                  <motion.div className="absolute transition delay-75 w-48 border rounded shadow-lg" 
                    initial={{opacity : 0, x: -10}}
                    animate={{opacity : 1, x: 2}}
                    exit={{opacity: 0, x: -10}}
                    transition={{duration: 0.2}}  
                  >
                    {navigate.sub.map((subItem) => (
                      <a
                        key={subItem.id}
                        href={subItem.url}
                        className="block px-4 py-2 font-medium text-sm text-b-primary bg-t-primary hover:text-t-primary hover:bg-b-primary transition "
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          } else {
            return (
              <a
                key={navigate.id}
                href={navigate.url}
                onClick={closeMenu}
                className={`text-t-primary mr-7 font-medium hover:border-b-2 hover:text-t-secondary border-t-secondary desktop:text-2xl laptop:text-sm ${
                  isOpen ? "ml-7" : ""
                }`}
              >
                {navigate.title}
              </a>
            );
          }
        })}
        {isOpen ? (
          <button className="btn-primary w-full" onClick={closeMenu}>
            Contact Us
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
