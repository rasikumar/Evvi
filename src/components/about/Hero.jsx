import { HR_video } from "../../assets";
import { About_Full } from "../../constant";

const hero = About_Full[0];

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 h-screen -top-32 -z-10 bg-t-secondary/60">
        <video
          src={HR_video}
          autoPlay
          muted
          loop
          className="object-cover w-full h-full opacity-75"
        ></video>
      </div>
      <div className="flex flex-col w-[60%] items-center max-mobile:items-start gap-5 m-auto py-10">
        <h1 className="text-center max-tablet:text-3xl font-semibold leading-relaxed text-6xl text-white">{hero.header}</h1>
        <p className="text-center max-tablet:text-base max-mobile:text-sm text-lg font-medium text-white">{hero.paragraph}</p>
      </div>
    </div>
  );
};

export default Hero;
