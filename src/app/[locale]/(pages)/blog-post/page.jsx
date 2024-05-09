import Titles from "../../_components/PageSettings/Titles";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
export default function BlogPost() {
  const t = useTranslations("pages.about");

  return (
    <section className="py-[2.5rem]">
      <div className="container">
        <Titles title="Блог" subTitle="Подзаголовок" />
        <div className="flex gap-[2rem]">
          <div className="w-9/12">
            <div className="relative">
              <Image src="/images/home_slider/slide_1.jpg" alt="Example Image" layout="fill" className="object-cover" />
            </div>
            <h4 className="my-[2rem] after:content-[''] after:block after:mt-[0.3rem] after:w-full after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
              Недано добавленные
            </h4>
            <ul className="grid grid-cols-3 gap-x-[1.5rem] gap-y-[2rem]">
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500">
                <Link href="#">
                  <div className="w-full h-[12rem] bg-neutral-200 "></div>
                  <div className="px-3 py-6">
                    <h3 className="mb-4">Заголовок поста</h3>
                    <p>Краткое описание поста... </p>
                  </div>
                </Link>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500">
                <Link href="#">
                  <div className="w-full h-[12rem] bg-neutral-200 "></div>
                  <div className="px-3 py-6">
                    <h3 className="mb-4">Заголовок поста</h3>
                    <p>Краткое описание поста... </p>
                  </div>
                </Link>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500">
                <Link href="#">
                  <div className="w-full h-[12rem] bg-neutral-200 "></div>
                  <div className="px-3 py-6">
                    <h3 className="mb-4">Заголовок поста</h3>
                    <p>Краткое описание поста... </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-3/12">sidebar</div>
        </div>
      </div>
    </section>
  );
}
