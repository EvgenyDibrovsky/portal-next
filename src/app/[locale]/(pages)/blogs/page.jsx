import Titles from "../../_components/PageSettings/TitlePage/Titles";
import { useTranslations } from "next-intl";
import BlogSwiper from "../../_components/Blog/BlogSwiper/BlogSwiper";
import CardsBlogListItem from "../../_components/Blog/Cards/GridCardsBlog/CardsBlogListItem";
import BlogSidebar from "../../_components/Sidebar/BlogSidebar/BlogSidebar";
import Pagination from "../../_components/Pagination/Pagination";
export default function Blogs() {
  const t = useTranslations("pages.about");

  return (
    <section className="py-[2.5rem]">
      <div className="container">
        <Titles title="Блог" subTitle="Подзаголовок" />
        <div className="flex gap-[2rem]">
          <div className="w-9/12">
            <BlogSwiper />
            <h4 className="my-[2rem] after:content-[''] after:block after:mt-[0.3rem] after:w-full after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
              Недано добавленные
            </h4>
            <ul className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[2rem]">
              <CardsBlogListItem />
              <CardsBlogListItem />
              <CardsBlogListItem />
              <CardsBlogListItem />
            </ul>
            <Pagination />
          </div>
          <div className="w-3/12">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
