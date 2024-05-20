"use client";
import React, { useState, useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Обработчик скролла для определения видимости кнопки
  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight * 0.4) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Обработчик клика для плавной прокрутки вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Добавляем обработчик скролла при монтировании компонента
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`flex items-center justify-center fixed bottom-[5rem] right-[1.25rem] z-20 w-[3rem] h-[3rem] bg-sky-600 text-[2rem] text-white font-bold border border-transparent  ease-in-out transition-all duration-300  hover:border-sky-600 hover:text-sky-600 hover:bg-white ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={scrollToTop}
      style={{ transition: "duration-300 opacity 0.5s, visibility 0.5s" }}
    >
      <BsChevronUp />
    </button>
  );
};

export default ScrollToTopButton;
