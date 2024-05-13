"use client";
import Link from "next/link";
import { BsArrowLeftCircle } from "react-icons/bs";
import "./[locale]/globals.css";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="not-found">
        <section className="flex justify-center items-center bg-black h-[100dvh]">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2">
              <h1>404</h1>
              <span className="text-white">|</span>
              <h2>This page could not be found.</h2>
            </div>
            <Link href="/" className="flex justify-center group text-white">
              <BsArrowLeftCircle className="text-[2rem] duration-300 hover:text-sky-500" />
            </Link>
          </div>
        </section>
      </body>
    </html>
  );
}
