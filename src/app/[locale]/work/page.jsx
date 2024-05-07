// import { useTranslations } from "next-intl";
import Titles from "../components/PageSettings/Titles";

export default function Work() {
  // const t = useTranslations("pages.about");

  return (
    <section className="h-[100dvh] py-[2.5rem]">
      <div className="container">
        {/* <Titles title={t("title")} subTitle={t("sub_title")} /> */}
        <Titles title="Работа" subTitle="Подзаголовок" />
      </div>
    </section>
  );
}
