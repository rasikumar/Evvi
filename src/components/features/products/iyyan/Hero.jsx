import { IyyanContent } from "../constant/constant";
import { product } from "../../../../assets";

const Hero = () => {
  const { heading, subheading } = IyyanContent[0];
  return (
    <div className="w-[80%] mt-10 m-auto flex flex-col gap-5">
      <div className="w-36 h-36 bg-rose-500 fixed -z-10 blur-[10rem]"></div>
      <div className="w-9 h-9 top-6 rounded-full right-16 fixed bg-t-secondary  -z-10 "></div>
      <h1 className="text-5xl leading-tight font-semibold text-t-primary text-center">
        {heading}
      </h1>
      <p className="w-[50%] text-center m-auto font-semibold">{subheading}</p>
      <img src={product} alt="#" className="bg-cover w-[80%] m-auto -mt-24 opacity-85 -z-10" />
    </div>
  );
};

export default Hero;
