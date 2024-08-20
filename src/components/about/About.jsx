import { aboutus } from "../../assets";
import { About_Full } from "../../constant";

const content = About_Full[1];

const About = () => {
  return (
    <div className="flex max-tablet:flex-col w-full max-mobile:px-10 py-10 px-24 items-center -mt-36">
      <div className="w-[50%] max-tablet:w-full flex flex-col gap-5">
        <h1 className="text-5xl max-tablet:text-3xl font-bold">{content.header}</h1>
        <h1 className="text-lg max-tablet:text-base font-medium">{content.subtitle}</h1>
        <p className="leading-snug max-tablet:text-sm">{content.paragraph1}</p>
        <p className="leading-snug max-tablet:text-sm">{content.paragraph2}</p>
      </div>
      <div className="w-[50%] max-tablet:w-full">
        <img src={aboutus} alt="aboutUsimage" />
      </div>
    </div>
  );
};

export default About;
