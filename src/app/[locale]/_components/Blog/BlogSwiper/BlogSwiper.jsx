"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function BlogSwiper() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{ delay: 500000 }}
        pagination={{ clickable: true }}
        className="swiper-blog"
      >
        <SwiperSlide className="swiper-slide ">
          <div className="flex w-full h-[30rem]">
            <Image src="/images/home_slider/slide_1.jpg" alt="Example Image" layout="fill" className="object-cover" />
            <div className="w-10/12 mt-[2rem] h-fit px-[2rem] py-[1rem] bg-black/50 relative z-20 shadow-md ">
              <h2 className="mb-[1rem] text-white text-[1.6rem] font-medium">Nowoczesna aranżacja Twojego ogrodu</h2>
              <p className=" text-white text-[1.2rem] ">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.</p>
            </div>
            <div className="absolute bottom-0 left-0 py-1 px-2 bg-black/50 text-white text-[0.7rem]">09.05.2024</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="flex w-full h-[30rem] relative">
            <Image src="/images/home_slider/slide_2.jpg" alt="Example Image" layout="fill" className="object-cover" />
            <div className="w-10/12 mt-[2rem] h-fit px-[2rem] py-[1rem] bg-black/50 relative z-20 shadow-md">
              <h2 className="mb-[1rem] text-white text-[1.6rem] font-medium">Nowoczesna aranżacja Twojego ogrodu</h2>
              <p className=" text-white text-[1.2rem] ">
                Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyка realizacji.Marka GiardDesign to wieloletnie
                doświadczenie i wysoka estetyka realizacji.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 py-1 px-2 bg-black/50 text-white text-[0.7rem]">10.05.2024</div>
          </div>
        </SwiperSlide>
        <div className="absolute bottom-0 w-[6.5rem] right-0 z-10 ">
          <div className="relative flex items-center justify-center z-50 h-[3.5rem]">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}
