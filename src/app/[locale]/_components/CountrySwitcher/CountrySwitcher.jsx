import { IoGlobeOutline } from "react-icons/io5";

const CountrySwitcher = () => {
  return (
    <div className="flex items-center gap-1 text-[1rem]">
      <IoGlobeOutline className="text-[1.2rem] text-sky-600 dark:text-white" />
      <select className="appearance-none pl-[0.5rem] pr-[2.3rem]  w-full focus:outline-none cursor-pointer bg-[url('/images/arrow-select.svg')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1rem_1rem] bg-white">
        <option className="bg-white dark:bg-black text-black dark:text-white">Польша</option>
        <option className="bg-white dark:bg-black text-black dark:text-white">Чехия</option>
        <option className="bg-white dark:bg-black text-black dark:text-white">Словакия</option>
        <option className="bg-white dark:bg-black text-black dark:text-white">Германия</option>
      </select>
    </div>
  );
};

export default CountrySwitcher;
