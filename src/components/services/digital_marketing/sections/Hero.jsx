import { useState } from "react";
import { bigShoe1 } from "../assets/images";
import { Link } from "react-router-dom";
// import { shoes } from "../constant";
// import { ShoeCard } from "../components";

function Hero() {
  const [bigShoeImg] = useState(bigShoe1);
  // const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <>
      <section
        id="about-us"
        className="flex items-center justify-center max-tablet:flex-col gap-10 w-full m-auto px-16 py-5 max-tablet:px-8 max-tablet:py-3 max-mobile:px-0 max-mobile:py-3"
      >
        <div className="relative flex-1 basis-1/2 w-1/2 max-tablet:w-[80%] flex justify-center items-center max-tablet:min-h-1 rounded-2xl  ">
          <img
            src={bigShoeImg}
            alt="shoe colletion"
            width={410}
            height={502}
            className="object-contain relative z-10"
          />
          {/* <div className="flex max-mobile:gap-6 gap-4 absolute -bottom-[5%] max-mobile:left-[2%] max-mobile:px-6">
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
          </div> */}
        </div>

        <div className="w-[50%] max-tablet:w-[80%] flex flex-col gap-4">
          <h2 className="font-semibold text-5xl max-tablet:text-3xl max-mobile:text-xl font-montserrat">
            Drive Your Business Forward with
            <span className="text-t-primary font-semibold text-5xl max-tablet:text-3xl max-mobile:text-xl font-montserrat">
              Digital Transformation
            </span>
          </h2>
          <div className="text-t-primary text-lg max-mobile:text-sm">
            Revolutionize Your Strategy with Expert Solutions
          </div>
          <Link
            to={"/ContactUs"}
            className="btn-primary w-[25%] max-mobile:w-full"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

export default Hero;
