"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "../../../../navigation";
import { useTranslations } from "next-intl";
import { IoLanguageOutline } from "react-icons/io5";

const LanguageSwitcher = () => {
  const getInitialLanguage = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "en";
    }
    return "en";
  };

  const router = useRouter();
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState(getInitialLanguage());

  const languages = {
    en: "english",
    pl: "polish",
    uk: "ukrainian",
    ru: "russian",
  };

  const t = useTranslations("select_language");

  useEffect(() => {
    localStorage.setItem("language", selectedLanguage);
    router.replace(pathname, { locale: selectedLanguage });
  }, [selectedLanguage, pathname, router]);

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="flex items-center gap-1 text-[1rem]">
      <IoLanguageOutline className="text-[1.2rem] text-sky-600 dark:text-white" />

      <select value={selectedLanguage} onChange={handleChange} className="text-black px-[0.3rem] dark:text-white bg-transparent cursor-pointer focus:outline-0">
        {Object.entries(languages).map(([key, label]) => (
          <option key={key} value={key} className="bg-white dark:bg-black text-black dark:text-white">
            {t(label)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
