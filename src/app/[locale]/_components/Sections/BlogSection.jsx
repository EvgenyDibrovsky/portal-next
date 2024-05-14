import CardsBlogList from "../Blog/Cards/CardsBlog/CardsBlogList";
import { Link } from "../../../../navigation";
import { BsArrowRight } from "react-icons/bs";

export default function BlogSection() {
  return (
    <section className="py-[4rem]">
      <div className="container">
        <div>
          <div className="mb-10">
            <h2 className="mb-2 text-black font-medium text-[1.6rem] relative pb-2 after:absolute after:bottom-0 after:left-0 after:content-[''] after:block after:w-[4rem] after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
              Блоги пользователей
            </h2>
            <h3 className="text-[1.2rem]  relative pb-2">Подзаголоаок</h3>
          </div>
          <CardsBlogList />
          <div className="flex justify-center mt-10">
            <Link
              href="/blogs"
              className=" border border-sky-600  duration-300 hover:bg-sky-600 py-[1rem] px-[2rem] flex justify-center text-sky-600 hover:text-white text-[1.3rem] items-center gap-8 hover:shadow-md group"
            >
              Смотреть все посты
              <BsArrowRight className="text-[1.4rem] duration-300 group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}