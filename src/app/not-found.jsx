"use client";
import Link from "next/link";
import { BsArrowLeftCircle } from "react-icons/bs";
import "./[locale]/globals.css";
import Error from "next/error";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <section>
          <Error statusCode={404} />
          <Link href="/" className="flex justify-center group text-black">
            <BsArrowLeftCircle className="text-[4rem] duration-300  hover:text-sky-500" />
          </Link>
        </section>
      </body>
    </html>
  );
}
