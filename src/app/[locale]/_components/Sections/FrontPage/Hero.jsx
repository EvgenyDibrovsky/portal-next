"use client";

// import Image from "next/image";
import Category from "../../../_components/MainCategory/MainCategoryList";
export default function Hero() {
  return (
    <section className="flex w-full h-[calc(100dvh-3.5rem)]">
      <div className="container">
        <Category />
      </div>
    </section>
  );
}
