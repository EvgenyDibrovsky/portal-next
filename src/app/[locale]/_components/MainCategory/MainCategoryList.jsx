"use client";

import { BsBox } from "react-icons/bs";
import { Link } from "../../../../navigation";

export default function Category() {
  return (
    <ul className="grid grid-cols-7 gap-[1rem] bg-white shadow-md">
      <li className="border-r duration-300 hover:bg-sky-300">
        <Link href="/work" className="flex justify-center items-center flex-col py-[2rem] px-[1rem]">
          <BsBox className="mx-auto w-[2rem] h-[2rem] duration-300 mb-4" />
          Работа
        </Link>
      </li>

      <li className="border-r duration-300 hover:bg-sky-300">
        <Link href="/real-estate" className="flex justify-center items-center flex-col py-[2rem] px-[1rem]">
          <BsBox className="mx-auto w-[2rem] h-[2rem] duration-300 mb-4" /> Недвижимость
        </Link>
      </li>

      <li className="border-r duration-300 hover:bg-sky-300">
        <Link href="/finance" className="flex justify-center items-center flex-col py-[2rem] px-[1rem]">
          <BsBox className="mx-auto w-[2rem] h-[2rem] duration-300 mb-4" /> Финансы
        </Link>
      </li>
      <li className="border-r duration-300 hover:bg-sky-300">
        <Link href="/law" className="flex justify-center items-center flex-col py-[2rem] px-[1rem]">
          <BsBox className="mx-auto w-[2rem] h-[2rem] duration-300 mb-4" /> Право
        </Link>
      </li>
      <li className="border-r duration-300 hover:bg-sky-300">
        <Link href="/bussines" className="flex justify-center items-center flex-col py-[2rem] px-[1rem]">
          <BsBox className="mx-auto w-[2rem] h-[2rem] duration-300 mb-4" /> Бизнес
        </Link>
      </li>
      <li className="border-r duration-300 hover:bg-sky-300">
        <Link href="/study" className="flex justify-center items-center flex-col py-[2rem] px-[1rem]">
          <BsBox className="mx-auto w-[2rem] h-[2rem] duration-300 mb-4" /> Учеба
        </Link>
      </li>

      <li className="border-r duration-300 hover:bg-sky-300">
        <Link href="/blogs" className="flex justify-center items-center flex-col py-[2rem] px-[1rem]">
          <BsBox className="mx-auto w-[2rem] h-[2rem] duration-300 mb-4" /> Блоги
        </Link>
      </li>
    </ul>
  );
}
