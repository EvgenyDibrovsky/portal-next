import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Bloggers() {
  return (
    <section className="py-[4rem] bg-neutral-100">
      <div className="container">
        <div className="flex">
          <div className="w-4/12">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="mb-[1rem]">
                  <h2 className="mb-2 text-black font-medium text-[1.6rem] relative pb-2 after:absolute after:bottom-0 after:left-0 after:content-[''] after:block after:w-[4rem] after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
                    Блогеры
                  </h2>
                  <h3 className="text-[1.2rem]">Предложения и сотрудничество</h3>
                </div>
              </div>
              <Link href="/study" className="w-full  duration-300 flex text-sky-600 text-[1.1rem] items-center gap-4 group">
                Все блогеры
                <BsArrowRight className="text-[1.1rem] duration-300 group-hover:translate-x-1 " />
              </Link>
            </div>
          </div>
          <div className="w-8/12">
            <ul className="grid grid-cols-3 gap-2">
              <li className="flex justify-center group">
                <Link href="#" target="_blank" className="flex items-start justify-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/demo/demo-persone.jpg"
                      alt="Example Image"
                      width={100}
                      height={100}
                      className="w-[6.25rem] h-[6.25rem] rounded-full duration-300 group-hover:scale-110 shadow-md"
                    />
                  </div>
                  <div>
                    <h5 className="duration-300 group-hover:text-sky-600 text-[1.4rem] font-medium">David Scott</h5>
                    <p className="text-[1.2rem]">Только актуальніе новости Польши</p>
                  </div>
                </Link>
              </li>
              <li className="flex justify-center group">
                <Link href="#" target="_blank" className="flex items-start justify-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/demo/demo-persone.jpg"
                      alt="Example Image"
                      width={100}
                      height={100}
                      className="w-[6.25rem] h-[6.25rem] rounded-full duration-300 group-hover:scale-110 shadow-md"
                    />
                  </div>
                  <div>
                    <h5 className="duration-300 group-hover:text-sky-600 text-[1.4rem] font-medium">David Scott</h5>
                    <p className="text-[1.2rem]">Легализация пребывания в Польше</p>
                  </div>
                </Link>
              </li>
              <li className="flex justify-center group">
                <Link href="#" target="_blank" className="flex items-start justify-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/demo/demo-persone.jpg"
                      alt="Example Image"
                      width={100}
                      height={100}
                      className="w-[6.25rem] h-[6.25rem] rounded-full duration-300 group-hover:scale-110 shadow-md"
                    />
                  </div>
                  <div>
                    <h5 className="duration-300 group-hover:text-sky-600 text-[1.4rem] font-medium">David Scott</h5>
                    <p className="text-[1.2rem]">Новости Украины</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
