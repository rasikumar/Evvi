import { useState, useEffect } from "react";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
import { Teams } from "../../constant";

const Team = () => {
  const [activeImage, setActiveImage] = useState(2);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const contents = Teams.map((image) => ({
    id: image.contentId,
    imgSrc: image.src,
    title: image.title,
    subtitle: image.subTitle,
    urlf: image.urlf,
    urli: image.urli,
    urll: image.urll,
    urlx: image.urlx,
  }));

  return (
    <div className="flex flex-col gap-16 justify-center items-center h-[800px] bg-gray-900">
      <div className="flex w-[80%] max-mobile:w-[85%] max-mobile:leading-snug flex-col items-center gap-4">
        <h2 className="text-white text-3xl font-semibold">Our Teams</h2>
        <p className="text-white">
          Meet our team — the driving force behind our commitment to excellence. With gratitude to everyone who&apos;s
          ever been part of our journey, we celebrate their contributions that have shaped who we are today.
        </p>
      </div>
      <div className="relative w-[500px] max-mobile:w-[300px] max-mobile:h-[300px] h-[500px] border-2 border-t-secondary rounded-full">
        <div className="relative left-[-50%] w-full h-full flex justify-center items-center cursor-pointer">
          {Teams.map((img) => (
            <div
              key={img.id}
              className={`absolute max-mobile:w-10 max-mobile:h-10 w-20 h-20 rounded-full transition duration-500 border border-white shadow-[0_0_0_4px_#222,0_0_0_6px_#fff] ${
                activeImage === img.id ? "shadow-[0_0_0_4px_#222,0_0_0_12px_#ff1d50] border-t-secondary" : ""
              } max-mobile:transform-origin-[20px]`}
              style={{
                transform: `rotate(${(360 / 8) * img.id}deg)`,
                zIndex: 100,
                transformOrigin: isMobile ? "170px" : "290px",
              }}
              onMouseOver={() => setActiveImage(img.id)}
              onClick={() => setActiveImage(img.id)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="absolute top-0 left-0 w-full h-full rounded-full object-cover transition duration-500 grayscale hover:grayscale-0"
                style={{ transform: `rotate(-${(360 / 8) * img.id}deg)` }}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden flex justify-center items-center">
          <div className="absolute inset-12 border-4 border-transparent text-white border-l-blue-500 border-r-white rounded-full animate-spinslow"></div>
          <div className="absolute inset-20 border-4 border-transparent border-l-pink-600 border-r-white rounded-full animate-spinreverse"></div>

          {contents.map((content) => (
            <div
              key={content.id}
              className={`absolute transition duration-500 transform ${
                activeImage === parseInt(content.id.replace("content", ""))
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
              } flex justify-center items-center`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="relative max-mobile:w-20 max-mobile:h-20 w-36 h-36 rounded-lg overflow-hidden">
                  <img
                    src={content.imgSrc}
                    alt={content.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center text-center text-white">
                  <h2 className="text-xl max-mobile:text-sm font-semibold uppercase">{content.title}</h2>
                  <span className="text-xs font-medium tracking-widest">{content.subtitle}</span>
                  <ul className="flex gap-2 mt-2">
                    <li>
                      <a
                        href={content.urli}
                        target="_blank"
                        className="w-8 h-8 flex justify-center items-center bg-gray-700 text-white rounded-lg hover:bg-blue-500 transition duration-500"
                      >
                        <RiInstagramFill />
                      </a>
                    </li>
                    <li>
                      <a
                        href={content.urll}
                        target="_blank"
                        className="w-8 h-8 flex justify-center items-center bg-gray-700 text-white rounded-lg hover:bg-blue-500 transition duration-500"
                      >
                        <RiLinkedinFill />
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href={content.urlf}
                        target="_blank"
                        className="w-8 h-8 flex justify-center items-center bg-gray-700 text-white rounded-lg hover:bg-blue-500 transition duration-500"
                      >
                        <RiFacebookFill />
                      </a>
                    </li>
                    <li>
                      <a
                        href={content.urlx}
                        target="_blank"
                        className="w-8 h-8 flex justify-center items-center bg-gray-700 text-white rounded-lg hover:bg-blue-500 transition duration-500"
                      >
                        <RiXingFill />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
