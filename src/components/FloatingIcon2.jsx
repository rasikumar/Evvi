import { employee } from '../assets'

const FloatingIcon2 = () => {
  return (
    <div className="sticky top-[69%] px-16 flex flex-col items-end z-[100] ">
      <div className="absolute shadow-what max-tablet:top-8 max-tablet:right-8 p-3 bg-white rounded-full">
        <a href='#' className="relative text-xs inline-flex flex-col items-center">
            <img src={employee} alt="" width={20} />
          Career
        </a>
      </div>
    </div>
  );
};

export default FloatingIcon2;
