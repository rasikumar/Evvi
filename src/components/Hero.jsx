import { Link } from "react-router-dom";
import { bgvid } from "../assets";
import { HeroText } from "../constant";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
// import { FaArrowUpRightFromSquare, FaSquarePhone, FaRegFaceGrinBeam, FaStar } from "react-icons/fa6";
// import { FcGoogle } from "react-icons/fc";

const Hero = () => {
  const videoRef = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect();
      }
    });
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <div className="flex items-center w-[90%] gap-5 m-auto h-full max-tablet:flex-col max-tablet:gap-0">
      <div className="absolute w-[80%] -z-20">
        <div className="absolute right-0 top-0 w-60 h-72 blur-[200px] -z-10 bg-t-secondary"></div>
      </div>
      <div className="w-[50%] p-2 flex flex-col gap-10 max-mobile:gap-5 mt-24 max-mobile:mt-20 max-tablet:w-full">
        {/* <div>
          <h3 className="bg-btn w-fit rounded-full desktop:px:5 desktop:py-3 px-3 py-1 max-mobile:text-xs max-mobile:px-5 max-mobile:py-3 max-mobile:w-48">
            {HeroText[0].content}
          </h3>
        </div> */}

        <div itemRef={videoRef} className="flex flex-col gap-4">
          {isIntersecting && (
            <h2 className="text-5xl desktop:text-8xl max-mobile:text-4xl max-mobile:w-[22rem] font-semibold">
              {HeroText[0].content}
            </h2>
          )}
          <p className="text-lg font-medium">{HeroText[0].subheading}</p>
        </div>

        <div className="flex gap-10 max-mobile:gap-2">
          <Link
            to={HeroText[1].url}
            className="btn-primary desktop:text-2xl max-mobile:text-sm flex items-center max-mobile:w-[10rem] gap-3"
          >
            {HeroText[1].content}
            <FaArrowUpRightFromSquare />
          </Link>
          {/* <p className="btn-secondary desktop:text-2xl max-mobile:text-sm flex items-center max-mobile:w-[10.4rem] gap-1">
                        <FaSquarePhone />
                        {HeroText[3].content}
                    </p> */}
        </div>
      </div>

      <div className="w-[50%] max-tablet:w-full h-fit relative mt-24 max-mobile:mt-10">
        <div
          ref={videoRef}
          className="relative w-full h-96 desktop:h-[35rem] rounded-xl overflow-hidden"
        >
          {isIntersecting && (
            <video
              src={bgvid}
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              width={640}
              height={360}
              muted
              loop
              playsInline
              preload="metadata"
            ></video>
          )}
        </div>

        {/* <div className="px-4 py-4 desktop:px-6 desktop:py-6 rounded-xl shadow-xl bg-white flex flex-col gap-1 absolute top-0 right-0 z-50 desktop:w-[30%] w-[35%] max-mobile:w-[40%]">
                    <div className="flex items-end justify-end">
                        <FaRegFaceGrinBeam className="text-xl desktop:text-4xl" />
                    </div>
                    <div className="flex items-center flex-col">
                        <h2 className="text-3xl desktop:text-4xl font-bold">1k+</h1>
                        <p className="text-sm desktop:text-lg font-medium">Happy Clients</p>
                    </div>
                </div> */}

        {/* <div className="px-4 desktop:px-6 absolute bottom-0 shadow-xl right-0 border-8 border-transparent py-4 desktop:py-6 rounded-xl bg-white flex flex-col desktop:w-[30%] w-[35%] max-mobile:w-[60%] gap-4">
          <div className="text-sm desktop:text-xl font-bold">
            Clients Feedback
          </div>
          <div className="flex items-center gap-2">
            <FcGoogle className="text-3xl desktop:text-5xl" />
            <div className="flex flex-col gap-3">
              <ul className="flex desktop:text-2xl text-yellow-500">
                {Array(5).fill(<FaStar />)}
              </ul>
              <p className="text-xs desktop:text-base font-semibold">
                Review 4.8/5.0
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
