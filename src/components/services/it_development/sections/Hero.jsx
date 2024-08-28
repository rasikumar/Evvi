import { useState } from "react";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constant";
import { ShoeCard } from "../components";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <>
      <section
        id="about-us"
        className="flex items-center justify-center max-tablet:flex-col gap-10 w-full m-auto px-16 py-5 max-tablet:px-8 max-tablet:py-3 max-mobile:px-0 max-mobile:py-3"
      >
      <div className="relative flex-1 basis-1/2 w-1/2 max-tablet:w-[80%] flex justify-center items-center min-h-[30rem] max-xl:py-20 px-20 bg-slate-400 max-tablet:min-h-1 rounded-2xl ">
          <img
            src={bigShoeImg}
            alt="shoe colletion"
            width={410}
            height={502}
            className="object-contain relative z-10"
          />
          <div className="flex max-mobile:gap-6 gap-4 absolute -bottom-[5%] max-mobile:left-[2%] max-mobile:px-6">
            {shoes.map((image, index) => (
              <div key={index} className="bg-gray-50 rounded-xl">
                <ShoeCard
                  index={index}
                  imgURL={image}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-[50%] max-tablet:w-[80%] flex flex-col gap-4">
          <h1 className="font-semibold text-6xl max-tablet:text-4xl max-mobile:text-2xl font-montserrat">
          Your Trusted Partner for {" "}
            <span className="text-blue-400 font-semibold text-6xl max-tablet:text-4xl max-mobile:text-2xl font-montserrat">
            Comprehensive IT{" "}
            </span>
            Solutions
          </h1>
          <div className="text-blue-400">
          Elevate Your Business with Expert IT Consulting and Outsourcing.
          </div>
          <button className="btn-primary w-[25%] max-mobile:w-[40%]">
          Get Started
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
