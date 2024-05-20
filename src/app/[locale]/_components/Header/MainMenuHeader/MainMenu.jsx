"use client";

import { usePathname } from "next/navigation";
import { Link } from "../../../../../navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const linkClassName = (href) => `text-mainMenu duration-200 hover:text-sky-600 dark:hover:text-sky-400 ${pathname === href ? "text-sky-500 dark:text-yellow-500" : "text-black dark:text-white"}`;

  return (
    <nav className="flex items-center gap-4">
      <Link href="/" className={linkClassName("/")}>
        Главная
      </Link>

      <Link href="/about" className={linkClassName("/about")}>
        О нас
      </Link>

      <Link href="/catalog" className={linkClassName("/catalog")}>
        Каталог
      </Link>

      {/* <Link href="/blogs" className={linkClassName("/blog")}>
        Блоги и блогеры
      </Link> */}

      <Link href="/contacts" className={linkClassName("/contacts")}>
        Контакты
      </Link>
    </nav>
  );
};

export default MainMenu;
