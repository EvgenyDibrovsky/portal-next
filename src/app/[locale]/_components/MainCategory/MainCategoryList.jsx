"use client";

import { BsBox } from "react-icons/bs";
import { Link } from "../../../../navigation";

export default function Category() {
  return (
    <ul className="grid grid-cols-7 gap-[1rem]">
      <li>
        <Link href="/work" className="flex justify-center items-center flex-col group ">
          <BsBox className="border-2 group-hover:border-transparent border-sky-400 dark:border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-300 dark:group-hover:bg-sky-500 group-hover:shadow-lg mb-4" />
          Работа
        </Link>
      </li>

      <li>
        <Link href="/real-estate" className="flex justify-center items-center flex-col group ">
          <BsBox className="border-2 group-hover:border-transparent  border-sky-400 dark:border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-300 dark:group-hover:bg-sky-500 group-hover:shadow-lg mb-4" />
          Недвижимость
        </Link>
      </li>

      <li>
        <Link href="/finance" className="flex justify-center items-center flex-col group ">
          <BsBox className="border-2 group-hover:border-transparent  border-sky-400 dark:border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-300 dark:group-hover:bg-sky-500 group-hover:shadow-lg mb-4" />
          Финансы
        </Link>
      </li>
      <li>
        <Link href="/law" className="flex justify-center items-center flex-col group ">
          <BsBox className="border-2 group-hover:border-transparent  border-sky-400 dark:border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-300 dark:group-hover:bg-sky-500 group-hover:shadow-lg mb-4" />
          Право
        </Link>
      </li>
      <li>
        <Link href="/bussines" className="flex justify-center items-center flex-col group ">
          <BsBox className="border-2 group-hover:border-transparent  border-sky-400 dark:border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-300 dark:group-hover:bg-sky-500 group-hover:shadow-lg mb-4" />
          Бизнес
        </Link>
      </li>
      <li>
        <Link href="/study" className="flex justify-center items-center flex-col group ">
          <BsBox className="border-2 group-hover:border-transparent  border-sky-400 dark:border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-300 dark:group-hover:bg-sky-500 group-hover:shadow-lg mb-4" />
          Учеба
        </Link>
      </li>

      <li>
        <Link href="/blogs" className="flex justify-center items-center flex-col group ">
          <BsBox className="border-2 group-hover:border-transparent  border-sky-400 dark:border-sky-300 p-5 mx-auto rounded-full w-20 h-20 duration-300 group-hover:bg-sky-300 dark:group-hover:bg-sky-500 group-hover:shadow-lg mb-4" />
          Блоги
        </Link>
      </li>
    </ul>
  );
}
