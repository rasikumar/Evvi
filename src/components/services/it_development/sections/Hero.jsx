import { useState } from "react";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constant";
import { ShoeCard } from "../components";
import { Link } from "react-router-dom";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return ( 
    <>
      <section
        id="about-us"
        className="flex items-center justify-center max-tablet:flex-col gap-10 w-full m-auto px-16 py-5 max-tablet:px-8 max-tablet:py-3 max-mobile:px-0 max-mobile:py-3"
      >
      <div className="relative flex-1 basis-1/2 w-1/2 max-tablet:w-[80%] flex justify-center items-center  bg-slate-400 max-tablet:min-h-1 rounded-2xl ">
          <video src={bigShoeImg} autoPlay muted loop className="object-cover w-full h-full opacity-75"></video>
          <div className="flex max-mobile:gap-6 gap-4 absolute -bottom-[5%] max-mobile:left-[2%] max-mobile:px-6"> 
            {shoes.map((image, index) => (
              <div key={index} className="bg-gray-50 rounded-xl w-20">
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
          <h1 className="font-semibold text-5xl max-tablet:text-3xl  font-montserrat">
          Your Trusted Partner for {" "}
            <span className="text-t-primary font-semibold text-5xl max-tablet:text-3xl  font-montserrat">
            Comprehensive IT{" "}
            Solutions
            </span>
          </h1>
          <div className="text-t-primary text-lg">
          Elevate Your Business with Expert IT Consulting and Outsourcing.
          </div>
          <Link to={"/Contact_Us"} className="btn-primary w-[25%] max-mobile:w-[40%]">
          Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

export default Hero;
