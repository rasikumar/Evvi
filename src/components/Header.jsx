import { useEffect, useState } from 'react';
import { Evvi_icon } from "../assets";
import { Navigation } from "../constant";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () =>{
    setIsOpen(false);
  }

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10){
        setScroll(false);
      }
      else{
        setScroll(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () =>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);


  return (
      <div className={`flex m-auto mt-8 items-center w-[90%] z-[1000] sticky top-0 justify-between tablet:px-16 mobile:px-10 py-5 max-mobile:px-4 ${scroll ?  'bg-white/50 w-full transition delay-150' : 'bg-white/0 border-2 border-t-secondary rounded-xl' }`}>
      <img src={Evvi_icon} alt="Evvi_icon" width={100} className="max-mobile:w-16"/>
      <div className="flex-1 flex justify-end items-center tablet:hidden">
        <button onClick={toggleMenu} className="text-t-primary transition-all delay-100 text-lg">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      <div className={`flex flex-col tablet:flex-row items-center ${isOpen ? 'absolute items-center justify-center left-0 top-0 -z-10 h-screen w-full p-5 gap-7 bg-white block transition delay-200' : 'hidden'} tablet:block `}>
        {
          Navigation.map(navigate => (
            <a key={navigate.id} href={navigate.url} onClick={closeMenu}  className={`text-t-primary mr-7 font-medium hover:border-b-2 hover:text-t-secondary border-t-secondary desktop:text-lg laptop:text-sm ${isOpen ? 'ml-7' : ''}`}>
              {navigate.title}
            </a>
          ))
        }
        {isOpen ? <button className='btn-primary w-full' onClick={closeMenu}>Contact Us</button> : ''}
      </div>
    </div>
  );
}

export default Header;
