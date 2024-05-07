"use client";

import { BsBox } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { Link } from "../../../../../navigation";

export default function Category() {
  const pathname = usePathname();
  const linkClassName = (href) => `text-center text-[1rem] ${pathname === href ? "text-sky-500 dark:text-yellow-500" : "text-black dark:text-white"}`;

  return (
    <section className="py-[4rem]">
      <div className="container">
        <ul className="grid grid-cols-6 gap-[1rem]">
          <li>
            <Link href="/work" className="flex justify-center items-center flex-col group ">
              <BsBox className="border border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-200 group-hover:shadow-lg mb-4" />
              Работа
            </Link>
          </li>

          <li>
            <Link href="/real-estate" className="flex justify-center items-center flex-col group ">
              <BsBox className="border  border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-200 group-hover:shadow-lg mb-4" />
              Недвижимость
            </Link>
          </li>

          <li>
            <Link href="/finance" className="flex justify-center items-center flex-col group ">
              <BsBox className="border  border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-200 group-hover:shadow-lg mb-4" />
              Финансы
            </Link>
          </li>
          <li>
            <Link href="/law" className="flex justify-center items-center flex-col group ">
              <BsBox className="border  border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-200 group-hover:shadow-lg mb-4" />
              Право
            </Link>
          </li>
          <li>
            <Link href="/bussines" className="flex justify-center items-center flex-col group ">
              <BsBox className="border  border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-200 group-hover:shadow-lg mb-4" />
              Бизнес
            </Link>
          </li>
          <li>
            <Link href="/study" className="flex justify-center items-center flex-col group ">
              <BsBox className="border  border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-200 group-hover:shadow-lg mb-4" />
              Учеба
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
