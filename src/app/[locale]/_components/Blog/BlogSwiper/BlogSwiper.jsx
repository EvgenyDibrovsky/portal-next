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
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="swiper-blog relative"
      >
        <SwiperSlide className="swiper-slide ">
          <div className="flex w-full h-[30rem] relative">
            <Image src="/images/home_slider/slide_1.jpg" alt="Example Image" layout="fill" className="object-cover" />
            <div className="w-10/12 mt-[2rem] h-fit px-[2rem] py-[1rem] bg-black/50 relative z-20">
              <h2 className="mb-[1rem] text-white text-[1.6rem] font-medium">Nowoczesna aranżacja Twojego ogrodu</h2>
              <p className=" text-white text-[1.2rem] ">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.</p>
            </div>
            <div className="absolute bottom-0 left-0 py-1 px-2 bg-black/50 text-white">09.05.2024</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="flex w-full h-[30rem] relative">
            <Image src="/images/home_slider/slide_2.jpg" alt="Example Image" layout="fill" className="object-cover" />
            <div className="w-10/12 mt-[2rem] h-fit px-[2rem] py-[1rem] bg-black/50 relative z-20">
              <h2 className="mb-[1rem] text-white text-[1.6rem] font-medium">Nowoczesna aranżacja Twojego ogrodu</h2>
              <p className=" text-white text-[1.2rem] ">
                Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyка realizacji.Marka GiardDesign to wieloletnie
                doświadczenie i wysoka estetyka realizacji.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 py-1 px-2 bg-black/50 text-white">10.05.2024</div>
          </div>
        </SwiperSlide>
        <div className="w-[10rem] h-auto z-20 absolute bottom-0 right-0 bg-white">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </Swiper>
    </div>
  );
}
