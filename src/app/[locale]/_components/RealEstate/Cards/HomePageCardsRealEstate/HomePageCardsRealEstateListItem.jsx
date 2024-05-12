// import Image from "next/image";
import { Link } from "../../../../../../navigation";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

export default function HomePageCardsRealEstateListItem() {
  return (
    <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500">
      <Link href="#">
        <h5 className="text-center py-6 px-3">Название компании</h5>
        <div className="flex items-center justify-center bg-neutral-400 w-full h-[10rem] mb-5">Logo</div>
        <div className="flex items-center gap-1 py-6 px-3">
          <div className="flex">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStarHalfStroke className="text-yellow-500" />
            <FaRegStar />
          </div>
          <span className="font-medium ml-auto">Польша</span>
        </div>
      </Link>
    </li>
  );
}
