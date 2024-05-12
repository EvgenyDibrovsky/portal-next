// import Image from "next/image";
import { Link } from "../../../../../../navigation";
import { BsArrowRight } from "react-icons/bs";
import CardsBlogPopularItem from "./CardsBlogPopularListItem";
export default function CardsBlogPopulatList() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[2rem]">
        <CardsBlogPopularItem />
        <CardsBlogPopularItem />
        <CardsBlogPopularItem />
        <CardsBlogPopularItem />
      </ul>
      <div className="flex justify-end">
        <Link href="/blog" className="inline-flex items-center gap-4 group">
          Смотреть больше
          <BsArrowRight className="duration-300 group-hover:translate-x-1 group-hover:text-sky-500 dark:group-hover:text-sky-400" />
        </Link>
      </div>
    </div>
  );
}
