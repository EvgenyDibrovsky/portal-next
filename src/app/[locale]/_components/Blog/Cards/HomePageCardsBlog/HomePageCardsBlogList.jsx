// import Image from "next/image";
import { Link } from "../../../../../../navigation";
import { BsArrowRight } from "react-icons/bs";
import CardsBlogHomeItem from "./HomePageCardsBlogListItem";
export default function HomePageCardsBlogList() {
  return (
    <section className="py-[4rem]">
      <div className="container">
        <div>
          <h2 className="mb-10 text-[1.2rem]  relative pb-2 after:absolute after:bottom-0 after:left-0 after:content-[''] after:block after:w-[4rem] after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
            Последние посты
          </h2>
          <ul className="grid grid-cols-3 gap-x-[1.5rem] gap-y-[2rem] mb-10 ">
            <CardsBlogHomeItem />
            <CardsBlogHomeItem />
            <CardsBlogHomeItem />
          </ul>
          <div className="flex justify-end">
            <Link href="/blog" className="inline-flex items-center gap-4 group">
              Смотреть больше
              <BsArrowRight className="duration-300 group-hover:translate-x-1 group-hover:text-sky-500 dark:group-hover:text-sky-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
