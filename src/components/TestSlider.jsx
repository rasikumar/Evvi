import { Testimonials } from "../constant";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const TestSlider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper bg-t-secondary rounded-3xl h-44 shadow-md"
      >
        {Testimonials[0].lists.map((list, index) => (
          <SwiperSlide key={index} className="max-mobile:p-4 p-8">
            <div className="flex flex-col gap-2">
              <img
                src={list.icon}
                alt={list.icon}
                width={list.width - 20}
                className="max-mobile:w-5"
              />
              <p className="text-white leading-tight text-sm max-mobile:text-xs font-medium">
                &apos;&apos; {list.content} &apos;&apos;
              </p>
              <div className="flex items-center gap-2">
                <img
                  src={list.cust_icon}
                  width={list.width}
                  height={10}
                  alt={list.cust_icon}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-sm max-mobile:text-xs text-t-primary ">
                    {list.cust_name}
                  </p>
                  <p className="text-sm max-mobile:text-xs">{list.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestSlider;
