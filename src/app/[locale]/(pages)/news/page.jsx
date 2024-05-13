import Titles from "../../_components/PageSettings/Titles";
// import { useTranslations } from "next-intl";

export default function News() {
  // const t = useTranslations("pages.about");

  return (
    <section className="py-[2.5rem]">
      <div className="container">
        <Titles title="Новости" subTitle="Подзаголовок" />
        <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"></div>
      </div>
    </section>
  );
}
