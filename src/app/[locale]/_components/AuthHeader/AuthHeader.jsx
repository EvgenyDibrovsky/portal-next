"use client";
import { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "../../../../navigation";
export default function AuthHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (!event.target.closest(".auth-header")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative flex items-center cursor-pointer auth-header">
      <div onClick={toggleDropdown}>
        <FaRegCircleUser className="duration-300 hover:text-sky-600" />
      </div>
      {isOpen && (
        <ul className="absolute top-8 right-0 bg-white dark:bg-slate-900 shadow-md">
          <li>
            <Link href="/register" className="block p-2 duration-300 hover:bg-sky-400  hover:text-white">
              Регистрация
            </Link>
          </li>
          <li>
            <Link href="/login" className="block p-2 duration-300 hover:bg-sky-400 hover:text-white">
              Логин
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
