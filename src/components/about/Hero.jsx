import { about_hero } from "../../assets";
import { About_Full } from "../../constant";

const hero = About_Full[0];

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 h-screen -top-32 -z-10 bg-t-secondary/30">
        <img src={about_hero} alt="About_hero"className="object-cover w-full h-full opacity-75" />
      </div>
      <div className="flex flex-col items-center justify-center py-40 gap-4 px-3">
        <h2 className="text-5xl max-tablet:text-3xl  font-semibold text-center text-white">{hero.header.slice(0,28)} <br /> {hero.header.slice(28,48)}</h2>
        <p className="text-center max-tablet:text-base max-mobile:text-sm text-lg font-medium text-white">{hero.paragraph}</p>
      </div>
    </div>
  );
};

export default Hero;

{/* <div className="flex flex-col items-center justify-center py-40 gap-4 px-3">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl max-tablet:text-3xl  font-semibold text-white">{header.slice(0,26)} </h1>
          <h2 className="text-5xl max-tablet:text-3xl font-semibold text-white">{header.slice(26,56)}</h1>
        </div>
        <p className="text-white font-semibold">{subheader }</p>
      </div> */}