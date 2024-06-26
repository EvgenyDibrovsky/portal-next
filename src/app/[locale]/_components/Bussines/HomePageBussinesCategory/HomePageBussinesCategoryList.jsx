import { BsArrowRight } from "react-icons/bs";
import { Link } from "../../../../../navigation";
import HomePageBussinesCategoryListItem from "./HomePageBussinesCategoryListItem";
export default function HomePageBussinesCategoryList() {
  return (
    <section className="py-[4rem] bg-neutral-100">
      <div className="container">
        <div className="flex gap-[2rem]">
          <div className="w-7/12">
            <HomePageBussinesCategoryListItem />
          </div>
          <div className="w-5/12">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="mb-[3rem]">
                  <h2 className="mb-2 text-black font-medium text-[1.6rem] relative pb-2 after:absolute after:bottom-0 after:left-0 after:content-[''] after:block after:w-[4rem] after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
                    Бизнес
                  </h2>
                  <h3 className="text-[1.2rem]  relative pb-2">Предложения и сотрудничество</h3>
                </div>
                <div>
                  <p className="text-[1.2rem] mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem quidem, iusto a corporis voluptatum. Nesciunt, est? Nesciunt aliquam quae at dolor earum rerum
                    necessitatibus deleniti veniam tempore, temporibus aspernatur.
                  </p>
                </div>
              </div>
              <Link href="/bussines" className="w-full duration-300 flex justify-start text-sky-600 text-[1.1rem] items-center gap-4 group">
                Смотреть все предложения
                <BsArrowRight className="text-[1.1rem] duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
