import { useState } from 'react';
import { Evvi_icon } from "../assets";
import { Navigation } from "../constant";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center w-[100%] sticky top-0 justify-between tablet:px-16 mobile:px-10 py-5 bg-b-primary">
      <img src={Evvi_icon} alt="Evvi_icon" width={100} className=" "/>
      <div className="flex-1 flex justify-end items-center tablet:hidden">
        <button onClick={toggleMenu} className="text-t-primary text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`flex flex-col tablet:flex-row items-center ${isOpen ? 'absolute  mt-80 w-[100%] bg-white block' : 'hidden'} tablet:block `}>
        {
          Navigation.map(navigate => (
            <a key={navigate.id} href={navigate.url} className={`text-t-primary mr-7 font-medium hover:border-b-2 hover:text-t-secondary border-t-secondary desktop:text-lg laptop:text-sm`}>
              {navigate.title}
            </a>
          ))
        }
      </div>
    </div>
  );
}

export default Header;
