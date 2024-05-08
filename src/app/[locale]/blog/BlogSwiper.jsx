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
    <Swiper modules={[Navigation, Autoplay, Pagination]} spaceBetween={50} slidesPerView={1} navigation autoplay={{ delay: 5000 }} pagination={{ clickable: true }} className="swiper-blog">
      <SwiperSlide className="swiper-slide">
        <div className="flex w-full h-[30rem] relative">
          <Image src="/images/home_slider/slide_1.jpg" alt="Example Image" layout="fill" className="object-cover" />
          <div className="w-full h-fit px-[2rem] py-[1rem] bg-black/50 relative z-20">
            <h2 className="mb-5 font-medium">Nowoczesna aranżacja Twojego ogrodu</h2>
            <p className="text-textBase">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.</p>
          </div>
          <div className="absolute bottom-0 right-0 py-1 px-2 bg-black/50">09.05.2024</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="flex w-full h-[30rem] relative">
          <Image src="/images/home_slider/slide_2.jpg" alt="Example Image" layout="fill" className="object-cover" />
          <div className="w-full h-fit px-[2rem] py-[1rem] bg-black/50 relative z-20">
            <h2 className="mb-5 font-medium">Nowoczesna aranżacja Twojego ogrodu</h2>
            <p className="text-textBase">
              Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.Marka GiardDesign to wieloletnie
              doświadczenie i wysoka estetyka realizacji.
            </p>
          </div>
          <div className="absolute bottom-0 right-0 py-1 px-2 bg-black/50">10.05.2024</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
