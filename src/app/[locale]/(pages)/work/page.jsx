// import { useTranslations } from "next-intl";
import Titles from "../../_components/PageSettings/TitlePage/Titles";
export default function Work() {
  // const t = useTranslations("pages.about");

  return (
    <section className="h-[100dvh] py-[2.5rem]">
      <div className="container">
        {/* <Titles title={t("title")} subTitle={t("sub_title")} /> */}
        <Titles title="Работа" subTitle="Подзаголовок" />
        <div className="grid grid-cols-3 "></div>
      </div>
    </section>
  );
}
