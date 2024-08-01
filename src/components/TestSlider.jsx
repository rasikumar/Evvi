import { Testimonials } from "../constant"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../index.css';

// import required modules
import { Pagination } from 'swiper/modules';

const TestSlider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper bg-t-secondary rounded-3xl shadow-md"
      >
        {Testimonials[0].lists.map((list, index) => (
          <SwiperSlide key={index} className="p-8">
            <div className="flex flex-col gap-6">
              <img src={list.icon} alt="" width={list.width} height={list.height} />
              <p className="text-white font-medium">&apos;&apos; {list.content} &apos;&apos;</p>
              <div className="flex items-center gap-4">
                <img src={list.cust_icon} width={list.width + 10} alt={list.cust_icon} className="rounded-full" />
                <div>
                  <p className="font-semibold text-t-primary">{list.cust_name}</p>
                  <p>{list.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestSlider;
