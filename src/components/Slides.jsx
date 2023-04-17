import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './slides.css'

// import required modules
import { Pagination } from "swiper";
import { testimonials } from "../data";

export const Slides = () => {
  return (
     <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          testimonials.map( tes => (
            <SwiperSlide key={tes.uid} className="wrapper__item">
              <div className="wrapper__image">
                <img src={tes.image} alt="" />
              </div>
              <p className="subtitle center">{tes.name}</p>
              <blockquote className="text center">{tes.comments}</blockquote>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}
