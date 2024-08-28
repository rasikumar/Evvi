import { IyyanContent } from "../constant/constant";
import { product } from "../../../../assets";

const Hero = () => {
  const { heading, subheading } = IyyanContent[0];
  return (
    <div className="w-[80%] mt-10 m-auto flex flex-col gap-5">
      <h1 className="text-5xl leading-tight font-semibold text-t-primary text-center">
        {heading}
      </h1>
      <p className="w-[50%] text-center m-auto font-semibold">{subheading}</p>
      <img src={product} alt="#" className="bg-cover w-[80%] m-auto -mt-40 opacity-85 -z-10" />
    </div>
  );
};

export default Hero;
