"use client";

// import Image from "next/image";
import Category from "../MainCategory/MainCategoryList";
import HeroSearch from "./HeroSearch";

export default function Hero() {
  return (
    <section className="flex flex-col justify-between w-full h-[calc(100dvh-4rem)]">
      <div className="relarive bg-hero bg-no-repeat bg-top bg-cover h-[100%] flex justify-center items-center">
        <div className="container">
          <div className="flex flex-col w-full -mt-[6rem]">
            <div className="mb-[2.5rem] px-[0.5rem] py-[1.5rem] bg-white/50 backdrop-blur-md">
              <h1 className="text-black text-center text-[3rem] font-semibold">Информационный портал hub24.info</h1>
              <p className="text-black text-center text-[2rem] font-medium">Краткое описание</p>
            </div>
            <HeroSearch />
          </div>
        </div>
      </div>
      <div className="container -mt-[5rem] mb-[1rem]">
        <Category />
      </div>
    </section>
  );
}
