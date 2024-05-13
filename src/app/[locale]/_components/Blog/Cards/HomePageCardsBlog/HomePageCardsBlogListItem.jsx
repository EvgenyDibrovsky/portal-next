// import Image from "next/image";
import { Link } from "../../../../../../navigation";
import Image from "next/image";
import { BsEyeFill, BsFillHeartFill, BsWechat } from "react-icons/bs";

export default function HomePageCardsBlogListItem() {
  return (
    <li className="shadow-md bg-white dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
      <div className="relative w-full h-[20rem] bg-neutral-200 overflow-hidden">
        <Image src="/images/demo/demo-post-3.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:scale-110  group-hover:rotate-2" />
        <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
      </div>
      <div className="px-3 py-6">
        <Link href="#">
          <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
        </Link>
        <p>Краткое описание поста... </p>
        <div className="mt-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
            <span>David Scott</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <BsEyeFill className="text-[1rem]" />
              <span>5k</span>
            </div>
            <div className="flex items-center gap-1">
              <BsFillHeartFill className="text-[0.9rem]" />
              <span>5k</span>
            </div>
            <div className="flex items-center gap-1">
              <BsWechat className="text-[1rem]" />
              <span>5k</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
