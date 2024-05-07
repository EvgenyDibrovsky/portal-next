import Link from "next/link";
// import { useTranslation } from 'react-i18next';
const NavHeader = () => {
  return (
    <ul className="list-none flex flex-wrap gap-5  group">
      <li>
        <Link href="#" className="text-textLink duration-200 text-black dark:text-white hover:text-sky-500 hover:dark:text-white">
          Политика приватности
        </Link>
      </li>
      <li>
        <Link href="#" className="text-textLink duration-200 text-black dark:text-white hover:text-sky-500 hover:dark:text-white">
          Условия использования
        </Link>
      </li>
      <li>
        <Link href="#" className="text-textLink duration-200 text-black dark:text-white hover:text-sky-500 hover:dark:text-white">
          Регламент
        </Link>
      </li>
    </ul>
  );
};
export default NavHeader;
