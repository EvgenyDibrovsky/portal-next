"use client";

// import Image from "next/image";
import Category from "../../../_components/MainCategory/MainCategoryList";
export default function Hero() {
  return (
    <section className="flex flex-col justify-around w-full h-[calc(100dvh-3.5rem)]">
      <div></div>
      <div className="container">
        <Category />
      </div>
    </section>
  );
}
