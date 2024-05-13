import Image from "next/image";
import { Link } from "../../../../navigation";
import { BsArrowRight } from "react-icons/bs";

export default function HomePageAbout() {
  return (
    <section className="py-[4rem]">
      <div className="container">
        <div className="flex gap-[2rem]">
          <div className="w-6/12">
            <div className="relative flex items-center justify-center bg-transparent w-full h-full mb-5 ">
              <Image src="/images/demo/team.jpg" alt="Example Image" layout="fill" className="object-cover object-top" />
            </div>
          </div>
          <div className="w-6/12">
            <div className="flex flex-col justify-between">
              <h2 className="mb-2 text-black font-medium text-[1.6rem] relative pb-2 after:absolute after:bottom-0 after:left-0 after:content-[''] after:block after:w-[4rem] after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
                О нас
              </h2>

              <p className="mb-[1rem]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi numquam possimus aspernatur, voluptatum quis cum vitae, saepe pariatur amet eveniet expedita eaque magni. Sint voluptates
                earum animi, laborum quasi ducimus.
                <br />
                <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi numquam possimus aspernatur, voluptatum quis cum vitae, saepe pariatur amet eveniet expedita eaque magni. Sint
                voluptates earum animi, laborum quasi ducimus.
              </p>
              <ul className="grid grid-cols-2 gap-x-[1rem] list-disc	 list-inside marker:text-sky-600 marker:text-[1.2rem]">
                <li className="">Позиция 1</li>
                <li className="">Позиция 2</li>
                <li className="">Позиция 3</li>
                <li className="">Позиция 4</li>
                <li className="">Позиция 5</li>
                <li className="">Позиция 6</li>
              </ul>
              <Link href="/about" className="inline-flex mt-[1rem] ml-auto items-center gap-4 group">
                Больше о нас
                <BsArrowRight className="duration-300 group-hover:translate-x-1 group-hover:text-sky-500 dark:group-hover:text-sky-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
