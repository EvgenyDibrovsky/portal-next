import { BsArrowRight } from "react-icons/bs";
import { Link } from "../../../../../navigation";
import HomePageStudyListItem from "./HomePageStudyListItem";
export default function HomePageStudyList() {
  return (
    <section className="py-[4rem] bg-neutral-100">
      <div className="container">
        <div className="flex gap-[2rem]">
          <div className="w-8/12">
            <ul className="grid grid-cols-3 gap-x-[1.5rem] gap-y-[0.5rem]">
              <HomePageStudyListItem />
              <HomePageStudyListItem />
              <HomePageStudyListItem />
            </ul>
          </div>
          <div className="w-4/12">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="mb-[3rem]">
                  <h2 className="mb-2 text-black font-medium text-[1.6rem] relative pb-2 after:absolute after:bottom-0 after:left-0 after:content-[''] after:block after:w-[4rem] after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
                    Образование
                  </h2>
                  <h3 className="text-[1.2rem]  relative pb-2">Предложения и сотрудничество</h3>
                </div>
              </div>

              <Link href="/study" className="w-full duration-300 flex justify-start text-sky-600 text-[1.1rem] items-center gap-4 group">
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
