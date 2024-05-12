import Image from "next/image";
import Link from "next/link";
const Card2 = () => {
  return (
    <Link
      href="#"
      className=" relative h-[15rem] w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <Image src="/images/home_slider/slide_1.jpg" alt="Example Image" layout="fill" className="object-cover rounded-t-lg" />

      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </Link>
  );
};

export default Card2;
