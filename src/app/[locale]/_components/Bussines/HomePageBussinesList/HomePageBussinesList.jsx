import { BsArrowRight } from "react-icons/bs";
import { Link } from "../../../../../navigation";
import HomePageBussinesListItem from "./HomePageBussinesListItem";
export default function HomePageBussinesList() {
  return (
    <section className="py-[4rem] bg-neutral-100">
      <div className="container">
        <div className="flex gap-[2rem]">
          <div className="w-7/12">
            <ul className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[0.5rem]">
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
              <HomePageBussinesListItem />
            </ul>
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

              <Link
                href="/work"
                className="w-full border border-sky-600  duration-300 hover:bg-sky-600 p-[1rem] flex justify-center text-sky-600 hover:text-white text-[1.3rem] items-center gap-8 hover:shadow-md group"
              >
                Смотреть все предложения
                <BsArrowRight className="text-[1.4rem] duration-300 group-hover:translate-x-1 group-hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
