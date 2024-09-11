import { IyyanContent } from "../constant/constant";
import { product } from "../../../../assets";

const Hero = () => {
  const { heading, subheading } = IyyanContent[0];
  return (
    <div className="w-[80%] max-mobile:w-[95%] mt-10 m-auto flex flex-col gap-5">
      <div className="w-36 h-36 bg-rose-500 fixed -z-10 blur-[10rem]"></div>
      <div className="w-9 h-9 top-6 rounded-full right-16 fixed bg-t-secondary  -z-10 "></div>
      <h2 className="text-5xl max-tablet:text-3xl leading-tight font-semibold text-t-primary text-center"> 
        {heading}
      </h2>
      <p className="w-[50%] max-mobile:w-[80%] text-center m-auto font-semibold max-mobile:font-medium">{subheading.slice(0,5)}<span className="text-t-primary text-xl">{subheading.slice(5,6)}</span><span className="text-t-secondary text-xl">{subheading.slice(6,7)}</span><span className="text-t-primary text-xl">{subheading.slice(7,8)}</span><span className="text-t-secondary text-xl">{subheading.slice(8,10)}</span>{subheading.slice(10,108)} </p>
      <img src={product} alt="Product_image" className="bg-cover w-[60%] max-mobile:w-[100%] m-auto -mt-1 opacity-85 -z-10" />
    </div>
  );
};

export default Hero;
