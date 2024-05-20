import { Link } from "../../../../navigation";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function Pagination() {
  return (
    <ul className="flex justify-center gap-2 mt-10">
      <li className="group">
        <Link href="#" className="flex justify-center items-center w-[2rem] h-[2rem] text-[1.2rem] text-black duration-300 group-hover:text-sky-600">
          <BsChevronLeft />
        </Link>
      </li>
      <li className="bg-white duration-300 hover:bg-sky-600 border border-sky-600 hover:border-transparent group">
        <Link href="#" className="flex justify-center items-center w-[2rem] h-[2rem] text-black text-[1.2rem] leading-[0] duration-300 group-hover:bg-sky-600 group-hover:text-white">
          1
        </Link>
      </li>
      <li className=" bg-white duration-300 hover:bg-sky-600 border border-sky-600 hover:border-transparent group">
        <Link href="#" className="flex justify-center items-center w-[2rem] h-[2rem] text-black text-[1.2rem] leading-[0] duration-300 group-hover:bg-sky-600 group-hover:text-white">
          2
        </Link>
      </li>
      <li className=" bg-white duration-300 hover:bg-sky-600 border border-sky-600 hover:border-transparent group">
        <Link href="#" className="flex justify-center items-center w-[2rem] h-[2rem] text-black text-[1.2rem] leading-[0] duration-300 group-hover:bg-sky-600 group-hover:text-white">
          3
        </Link>
      </li>
      <li className="duration-300 bg-sky-600 border  border-transparent group ">
        <Link href="#" className="flex justify-center items-center w-[2rem] h-[2rem] text-white text-[1.2rem] leading-[0] ">
          4
        </Link>
      </li>
      <li className=" bg-white duration-300 hover:bg-sky-600 border border-sky-600 hover:border-transparent group">
        <Link href="#" className="flex justify-center items-center w-[2rem] h-[2rem] text-black text-[1.2rem] leading-[0] duration-300 group-hover:bg-sky-600 group-hover:text-white">
          5
        </Link>
      </li>
      <li className="flex justify-center items-end">
        <Link href="#" className="flex justify-center items-center w-[2rem] h-[2rem] text-sky-600 text-[1.2rem] leading-[0]">
          ...
        </Link>
      </li>
      <li className="bg-white duration-300 hover:bg-sky-600 border border-sky-600 hover:border-transparent group">
        <Link href="#" className="flex justify-center items-center w-[2rem] h-[2rem] text-black text-[1.2rem] leading-[0] duration-300 group-hover:bg-sky-600 group-hover:text-white">
          10
        </Link>
      </li>
      <li className="group">
        <Link href="#" className="flex justify-center items-center w-[2rem] h-[2rem] text-[1.2rem] text-black duration-300 group-hover:text-sky-600">
          <BsChevronRight />
        </Link>
      </li>
    </ul>
  );
}
