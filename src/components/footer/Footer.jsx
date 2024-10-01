import { useEffect, useRef } from "react";
import Cf from "./Cf";
import Cs from "./Cs";
import Ct from "./Ct";

const Footer = () => {
  const bgRef = useRef(null); // Reference for the div

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply the actual background image when the element is in view
            entry.target.classList.add("bg-footerImage");
            observer.unobserve(entry.target); // Stop observing after the image is loaded
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    if (bgRef.current) {
      observer.observe(bgRef.current); // Start observing the element
    }

    return () => {
      if (bgRef.current) {
        observer.unobserve(bgRef.current); // Clean up the observer
      }
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="relative bg-gray-200 bg-no-repeat bg-start bg-cover w-full"
    >
      <div className="absolute -top-[4.5rem] left-24 max-tablet:relative max-tablet:left-0 max-tablet:top-0">
        <Cf />
      </div>
      <div>
        <Cs />
      </div>
      <div className="absolute w-full z-50">
        <Ct />
      </div>
    </div>
  );
};

export default Footer;
