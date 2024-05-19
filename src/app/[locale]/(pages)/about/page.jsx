import Titles from "../../_components/PageSettings/Titles";
import Image from "next/image";
import { Link } from "../../../../navigation";
import { BsBox } from "react-icons/bs";

// import { useTranslations } from "next-intl";

export default function About() {
  // const t = useTranslations("pages.about");

  return (
    <section className="py-[2.5rem]">
      <div className="container">
        <Titles title="О нас" subTitle="Подзаголовок" />
        <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"></div>
        <div className="flex gap-[2rem]">
          <div className="w-6/12">
            <div className="relative flex items-center justify-center bg-transparent w-full h-full mb-5 ">
              <Image src="/images/demo/team.jpg" alt="Example Image" layout="fill" className="object-cover object-top" />
            </div>
          </div>
          <div className="w-6/12">
            <div className="flex flex-col justify-between">
              <h2 className="mb-2 text-black font-medium text-[1.6rem] relative pb-2 after:absolute after:bottom-0 after:left-0 after:content-[''] after:block after:w-[4rem] after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
                О нас
              </h2>

              <p className="mb-[1rem]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi numquam possimus aspernatur, voluptatum quis cum vitae, saepe pariatur amet eveniet expedita eaque magni. Sint voluptates
                earum animi, laborum quasi ducimus.
                <br />
                <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi numquam possimus aspernatur, voluptatum quis cum vitae, saepe pariatur amet eveniet expedita eaque magni. Sint
                voluptates earum animi, laborum quasi ducimus.
              </p>
              <ul className="grid grid-cols-2 gap-x-[1rem] list-disc	 list-inside marker:text-sky-600 marker:text-[1.2rem]">
                <li className="">Позиция 1</li>
                <li className="">Позиция 2</li>
                <li className="">Позиция 3</li>
                <li className="">Позиция 4</li>
                <li className="">Позиция 5</li>
                <li className="">Позиция 6</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-[4rem] flex gap-[2rem] ">
          <div className="w-4/12">
            <div className="h-full flex flex-col justify-center">
              <div className="flex-col justify-center">
                <h2 className="text-black font-medium text-[1.6rem] relative pb-2 after:absolute after:bottom-0 after:left-0 after:content-[''] after:block after:w-[4rem] after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
                  Миссиия
                </h2>
                <h3 className="text-[1.2rem]  relative pb-2">Процесс разработки</h3>
              </div>
            </div>
          </div>
          <div className="w-8/12">
            <ul className=" grid grid-cols-4 gap-x-[1.5rem] gap-y-[0.5rem]">
              <li className="flex justify-center items-center flex-col py-[2rem] px-[1rem] text-neutral-300">
                <BsBox className="mx-auto w-[4rem] h-[4rem] mb-4 border-2 p-4 rounded-full" />
                Работа
              </li>

              <li className="flex justify-center items-center flex-col py-[2rem] px-[1rem] text-neutral-300">
                <BsBox className="mx-auto w-[4rem] h-[4rem] mb-4 border-2 p-4 rounded-full" />
                Недвижимость
              </li>

              <li className="flex justify-center items-center flex-col py-[2rem] px-[1rem] text-neutral-300">
                <BsBox className="mx-auto w-[4rem] h-[4rem] mb-4 border-2 p-4 rounded-full" />
                Финансы
              </li>

              <li className="flex justify-center items-center flex-col py-[2rem] px-[1rem] text-neutral-300">
                <BsBox className="mx-auto w-[4rem] h-[4rem] mb-4 border-2 p-4 rounded-full" />
                Право
              </li>

              <li className="flex justify-center items-center flex-col py-[2rem] px-[1rem] text-neutral-300">
                <BsBox className="mx-auto w-[4rem] h-[4rem] mb-4 border-2 p-4 rounded-full" />
                Бизнес
              </li>

              <li className="flex justify-center items-center flex-col py-[2rem] px-[1rem] text-neutral-300">
                <BsBox className="mx-auto w-[4rem] h-[4rem] mb-4 border-2 p-4 rounded-full" />
                Образование
              </li>

              <li className="flex justify-center items-center flex-col py-[2rem] px-[1rem] text-neutral-300">
                <BsBox className="mx-auto w-[4rem] h-[4rem] mb-4 border-2 p-4 rounded-full" />
                Новости
              </li>

              <li>
                <Link href="/blogs" className="flex justify-center items-center flex-col py-[2rem] px-[1rem] text-sky-600 group">
                  <BsBox className="mx-auto w-[4rem] h-[4rem] mb-4 border-2 border-sky-600 p-4 rounded-full duration-300 group-hover:scale-105" />
                  Блоги
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
