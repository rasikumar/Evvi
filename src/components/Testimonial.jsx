import { Testimonials } from "../constant"
import { Swiper,SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import '../index.css      '

const Testimonial = () => {
  return (
    <div className="flex items-center max-tablet:flex-col gap-20 w-full p-14 max-tablet:p-5 max-tablet:gap-10">
      {Testimonials.map(testimonial => (
        <div key={testimonial.id}>
          <h3>{testimonial.heading}</h3>
          <h1>{testimonial.title}</h1>
          <div>
            <Swiper 
            pagination={{
              dynamicBullets : true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
              <SwiperSlide>adsasdadh</SwiperSlide>
              <SwiperSlide>2212</SwiperSlide>
              <SwiperSlide>adsas</SwiperSlide>

            </Swiper>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Testimonial
