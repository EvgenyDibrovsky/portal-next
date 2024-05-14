import Titles from "../../_components/PageSettings/Titles";
import { useTranslations } from "next-intl";
import BlogSwiper from "../../_components/Blog/BlogSwiper/BlogSwiper";
import CardsBlogPopularList from "../../_components/Blog/Cards/CardsBlogPopular/CardsBlogPopulatList";
import BlogSidebar from "../../_components/Sidebar/BlogSidebar/BlogSidebar";
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
            <CardsBlogPopularList />
            <h4 className="my-[2rem] after:content-[''] after:block after:mt-[0.3rem] after:w-full after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
              Самые просматриваемые
            </h4>
            <CardsBlogPopularList />
            <h4 className="my-[2rem] after:content-[''] after:block after:mt-[0.3rem] after:w-full after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
              Самые Коментируемые
            </h4>
            <CardsBlogPopularList />
          </div>
          <div className="w-3/12">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
