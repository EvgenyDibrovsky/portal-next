import Titles from "../../_components/PageSettings/TitlePage/Titles";

// import { useTranslations } from "next-intl";

export default function Dashboard() {
  // const t = useTranslations("pages.about");

  return (
    <section className="py-[2.5rem]">
      <div className="flex">
        <div className="w-[10rem]"></div>
      </div>
      <div className="container">
        <Titles title="Dashboard" />
        <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"></div>
      </div>
    </section>
  );
}
