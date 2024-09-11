import { HR_video } from "../../../assets"
import { Business_Consulting } from "../constant/index"
import { useEffect, useRef, useState } from 'react';


const Main = () => {
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
  const { header, subheader } = Business_Consulting[0]
  
  return (
    <div className="relative w-full h-screen">
      <div ref={videoRef} className="absolute inset-0 h-screen -top-32 -z-10 bg-t-secondary/60">
      {isIntersecting &&(
        <video preload="metadata" autoPlay muted loop className="object-cover w-full h-full opacity-75">
          <source src={HR_video} type="video/mp4"/>
        </video>
      )
      }
      </div>
      <div className="flex flex-col items-center justify-center py-40 gap-4 px-3">
        <div className="flex flex-col items-center max-tablet:text-center">
          <h2 className="text-5xl max-tablet:text-3xl  font-semibold text-white">{header.slice(0,26)} </h2>
          <h2 className="text-5xl max-tablet:text-3xl font-semibold text-white">{header.slice(26,56)}</h2>
        </div>
        <p className="text-white font-semibold max-tablet:text-center">{subheader }</p>
      </div>
    </div>
  )
}

export default Main