"use client";
import React, { useState, useEffect } from "react";

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
      className={`flex items-center justify-center fixed bottom-[5rem] right-[1.25rem] z-20   duration-300 hover:-translate-y-2 ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onClick={scrollToTop}
      style={{ transition: "duration-300 opacity 0.5s, visibility 0.5s" }}
    >
      <svg width="29" height="65" viewBox="0 0 39 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.235 75.0001L18.3095 74.9C18.3095 74.8834 18.3144 74.8667 18.3168 74.85C18.0878 74.8262 17.8612 74.7833 17.6322 74.7809C15.744 74.7738 13.9751 74.2427 12.2526 73.5521C8.50789 72.0493 5.51357 69.6272 3.26965 66.3311C1.58854 63.8591 0.51897 61.1417 0.192494 58.1885C0.0268193 56.6881 0.0195101 55.1687 0.0146374 53.6564C-0.00485375 47.2785 0.0073282 40.9007 1.90292e-05 34.5228C-0.00485375 30.6361 0.925847 27.0066 3.08205 23.72C5.88146 19.4546 9.78943 16.6515 14.7986 15.3655C16.9281 14.8201 19.0989 14.6224 21.3014 14.8606C27.6384 15.5465 32.5185 18.5496 36.0001 23.7534C37.4546 25.9277 38.3902 28.3212 38.7678 30.8957C38.9311 32.015 38.9847 33.1582 38.9896 34.2918C39.0066 41.1365 38.9993 47.9787 38.992 54.8234C38.992 55.8498 39.0066 56.8834 38.9092 57.9027C38.7021 60.0652 38.0735 62.1205 37.0965 64.071C35.2741 67.7077 32.5843 70.5537 28.9809 72.5351C26.793 73.7402 24.4443 74.5214 21.9348 74.7857C21.4987 74.831 21.0553 74.8286 20.6119 74.8881C20.7386 74.9238 20.8653 74.9619 20.9919 74.9977H17.2399L17.235 75.0001ZM3.08449 44.8374H3.08692C3.08692 48.3288 3.06743 51.8202 3.09911 55.3116C3.10885 56.3952 3.18925 57.486 3.3598 58.5553C3.7618 61.1107 4.80458 63.428 6.40772 65.4714C9.05851 68.8532 12.5133 70.9847 16.8355 71.6968C18.8869 72.035 20.9432 72.0207 22.9654 71.5754C26.8271 70.7227 30.0236 68.7865 32.4649 65.7119C34.8891 62.6587 36.0001 59.1864 35.9831 55.3187C35.9489 48.2193 35.9684 41.1174 35.9757 34.0156C35.9757 32.7533 35.8344 31.5078 35.5372 30.286C34.7015 26.8565 32.94 23.9653 30.1698 21.6957C26.1522 18.402 21.5401 17.1802 16.3994 18.1209C12.8374 18.7735 9.82841 20.4715 7.38959 23.1294C4.53901 26.235 3.12103 29.8764 3.09423 34.037C3.07231 37.6379 3.08936 41.2365 3.08936 44.8374H3.08449Z"
          fill="#0284c7"
        ></path>
        <path
          d="M38.9366 56.4832C38.9221 56.3784 38.8906 56.2736 38.8906 56.1712C38.8882 48.8645 38.8858 41.5578 38.8882 34.2512C38.8882 34.0463 38.9196 33.8415 38.9366 33.6367V56.4855V56.4832Z"
          fill="#0284c7"
        ></path>
        <path
          d="M11.0357 8.95451C10.999 8.54541 11.2848 8.24485 11.5533 7.94116C13.5496 5.68071 15.5481 3.42338 17.5466 1.16501C17.7569 0.927071 17.9575 0.68078 18.1807 0.455361C18.7965 -0.167673 19.5601 -0.150976 20.1404 0.503367C22.4106 3.06229 24.6765 5.62435 26.9403 8.18954C27.4321 8.74683 27.3997 9.4857 26.8831 9.91462C26.3342 10.3696 25.6472 10.3133 25.123 9.72573C23.2669 7.64686 21.4227 5.5586 19.5763 3.47243C19.132 2.97046 19.1395 2.9715 18.6758 3.49748C16.8801 5.53251 15.08 7.56546 13.2822 9.6005C12.9888 9.93237 12.6556 10.1693 12.1756 10.1453C11.5188 10.114 11.0357 9.62972 11.0357 8.95451Z"
          fill="#0284c7"
        ></path>
        <path
          d="M16.0445 34.8729C16.0445 34.0632 16.0006 33.2487 16.0542 32.4413C16.1614 30.798 17.5234 29.481 19.2045 29.4429C20.9611 29.4024 22.267 30.6123 22.5277 32.0769C22.6081 32.5318 22.6398 33.001 22.6398 33.463C22.6398 34.7372 22.652 36.0137 22.5911 37.2878C22.5082 38.9835 21.0245 40.3196 19.319 40.3077C17.5697 40.2957 16.1419 38.9716 16.0591 37.2449C16.0226 36.4566 16.0518 35.6636 16.0518 34.8729C16.0518 34.8729 16.0494 34.8729 16.0469 34.8729H16.0445Z"
          fill="#0284c7"
        ></path>
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
