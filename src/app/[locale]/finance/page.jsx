import Titles from "../components/PageSettings/Titles";
// import { useTranslations } from "next-intl";

export default function Finance() {
  // const t = useTranslations("pages.about");

  return (
    <section className="h-[100dvh] py-[2.5rem]">
      <div className="container">
        {/* <Titles title={t("title")} subTitle={t("sub_title")} /> */}
        <Titles title="Финансы" subTitle="Подзаголовок" />;
      </div>
    </section>
  );
}
