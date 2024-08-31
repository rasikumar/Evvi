import { employee } from '../assets'

const FloatingIcon2 = () => {
  return (
    <div className="sticky px-16 flex flex-col items-end z-[100] ">
      <div className="absolute shadow-what -right-20 max-mobile:-right-10 p-3 bg-white rounded-full">
        <a href='#' target='_blank' className="relative text-xs inline-flex flex-col items-center">
            <img src={employee} alt="" width={20} />
          Career
        </a>
      </div>
    </div>
  );
};

export default FloatingIcon2;
