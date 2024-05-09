// import Image from "next/image";
import { Link } from "../../../../../navigation";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

export default function Work() {
  return (
    <section className="py-[4rem]">
      <div className="container">
        <h2 className="mb-10 text-[1.2rem]  relative pb-2 after:absolute after:bottom-0 after:left-0 after:content-[''] after:block after:w-[4rem] after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
          Агентства по трудоустройству
        </h2>
        <div>
          <ul className="grid grid-cols-5 gap-x-[1.5rem] gap-y-[2rem] mb-8">
            <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500">
              <Link href="#">
                <h5 className="text-center py-6 px-3 border-b border-neutral-400">Название компании</h5>
                <div className="relative flex items-center justify-center bg-transparent w-full h-[10rem] mb-5 ">
                  <Image src="/images/demo/demo-logo-1.png" alt="Example Image" layout="fill" className="object-contain  duration-300 group-hover:grayscale" />
                </div>
                <div className="flex items-center gap-1 py-6 px-3 border-t border-neutral-400">
                  <div className="flex">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalfStroke className="text-yellow-500" />
                    <FaRegStar />
                  </div>
                  <span className="font-medium ml-auto">Польша</span>
                </div>
              </Link>
            </li>
            <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500">
              <Link href="#">
                <h5 className="text-center py-6 px-3 border-b border-neutral-400">Название компании</h5>
                <div className="relative flex items-center justify-center bg-transparent w-full h-[10rem] mb-5 ">
                  <Image src="/images/demo/demo-logo-2.png" alt="Example Image" layout="fill" className="object-contain  duration-300 group-hover:grayscale" />
                </div>
                <div className="flex items-center gap-1 py-6 px-3 border-t border-neutral-400">
                  <div className="flex">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalfStroke className="text-yellow-500" />
                    <FaRegStar />
                  </div>
                  <span className="font-medium ml-auto">Польша</span>
                </div>
              </Link>
            </li>
            <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500">
              <Link href="#">
                <h5 className="text-center py-6 px-3 border-b border-neutral-400">Название компании</h5>
                <div className="relative flex items-center justify-center bg-transparent w-full h-[10rem] mb-5 ">
                  <Image src="/images/demo/demo-logo-3.png" alt="Example Image" layout="fill" className="object-contain duration-300 group-hover:grayscale" />
                </div>
                <div className="flex items-center gap-1 py-6 px-3 border-t border-neutral-400">
                  <div className="flex">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalfStroke className="text-yellow-500" />
                    <FaRegStar />
                  </div>
                  <span className="font-medium ml-auto">Польша</span>
                </div>
              </Link>
            </li>
            <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500">
              <Link href="#">
                <h5 className="text-center py-6 px-3 border-b border-neutral-400">Название компании</h5>
                <div className="relative flex items-center justify-center bg-transparent w-full h-[10rem] mb-5 ">
                  <Image src="/images/demo/demo-logo-1.png" alt="Example Image" layout="fill" className="object-contain  duration-300 group-hover:grayscale" />
                </div>
                <div className="flex items-center gap-1 py-6 px-3 border-t border-neutral-400">
                  <div className="flex">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalfStroke className="text-yellow-500" />
                    <FaRegStar />
                  </div>
                  <span className="font-medium ml-auto">Польша</span>
                </div>
              </Link>
            </li>
            <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500">
              <Link href="#">
                <h5 className="text-center py-6 px-3 border-b border-neutral-400">Название компании</h5>
                <div className="relative flex items-center justify-center bg-transparent w-full h-[10rem] mb-5 ">
                  <Image src="/images/demo/demo-logo-2.png" alt="Example Image" layout="fill" className="object-contain  duration-300 group-hover:grayscale" />
                </div>
                <div className="flex items-center gap-1 py-6 px-3 border-t border-neutral-400">
                  <div className="flex">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalfStroke className="text-yellow-500" />
                    <FaRegStar />
                  </div>
                  <span className="font-medium ml-auto">Польша</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="flex justify-end">
            <Link href="/work" className="inline-flex items-center gap-4  group">
              Смотреть больше
              <BsArrowRight className="duration-300 group-hover:translate-x-1 group-hover:text-sky-500 dark:group-hover:text-sky-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
