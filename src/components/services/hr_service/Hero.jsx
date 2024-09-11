import { HR_hero } from "../../../assets";
import { HR_Content } from "../constant";

const Hero = () => {
  const { header, subheader } = HR_Content[0];
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 h-screen -top-32 -z-10 bg-t-secondary/60">
        <img
          src={HR_hero}
          alt="HR_hero_image"
          className="object-cover w-full h-full opacity-75"
        />
      </div>
      <div className="flex flex-col items-center justify-center py-40 gap-4 px-3">
        <div className="flex flex-col items-center max-tablet:text-center">
          <h2 className="text-5xl max-tablet:text-3xl  font-semibold text-white">
            {header}{" "}
          </h2>
        </div>
        <p className="text-white font-semibold max-tablet:text-center">{subheader}</p>
      </div>
    </div>
  );
};

export default Hero;
