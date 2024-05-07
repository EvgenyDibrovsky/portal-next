import Titles from "../components/PageSettings/Titles";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function Blogs() {
  const t = useTranslations("pages.about");

  return (
    <section className="py-[2.5rem]">
      <div className="container">
        <Titles title="Блог" subTitle="Подзаголовок" />;
        <div className="flex gap-[2rem]">
          <div className="w-9/12">
            <ul className="grid grid-cols-3 gap-4">
              <li className="duration-300 hover:shadow-lg">
                <Link href="# ">
                  <div className="w-full h-[12rem] bg-neutral-200"></div>
                  <h3 className="mb-4">Заголовок поста</h3>
                  <p>Краткое описание поста... </p>
                </Link>
              </li>
              <li className="duration-300 hover:shadow-lg">
                <Link href="# ">
                  <div className="w-full h-[12rem] bg-neutral-200"></div>
                  <h3 className="mb-4">Заголовок поста</h3>
                  <p>Краткое описание поста... </p>
                </Link>
              </li>
              <li className="duration-300 hover:shadow-lg">
                <Link href="# ">
                  <div className="w-full h-[12rem] bg-neutral-200"></div>
                  <h3 className="mb-4">Заголовок поста</h3>
                  <p>Краткое описание поста... </p>
                </Link>
              </li>
              <li className="duration-300 hover:shadow-lg">
                <Link href="# ">
                  <div className="w-full h-[12rem] bg-neutral-200"></div>
                  <h3 className="mb-4">Заголовок поста</h3>
                  <p>Краткое описание поста... </p>
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
