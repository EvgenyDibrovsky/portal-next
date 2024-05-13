"use client";

// import Image from "next/image";
import Category from "../MainCategory/MainCategoryList";
import HeroSearch from "./HeroSearch";

export default function Hero() {
  return (
    <section className="flex flex-col justify-between w-full h-[calc(100dvh-3.5rem)]">
      <div className="bg-neutral-500 h-[100%] flex flex-col justify-center items-center">
        <div className="mb-[2.5rem]">
          <h1 className="text-white text-center text-[3rem] font-semibold">Заголовок</h1>
          <p className="text-white text-center text-[2rem] font-medium">Краткое описание</p>
        </div>
        <HeroSearch />
      </div>
      <div className="container -mt-[5rem] mb-[1rem]">
        <Category />
      </div>
    </section>
  );
}
