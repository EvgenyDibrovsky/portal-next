import Titles from "../../_components/PageSettings/Titles";
// import { useTranslations } from "next-intl";

export default function Study() {
  // const t = useTranslations("pages.about");

  return (
    <section className="h-[100dvh] py-[2.5rem]">
      <div className="container">
        {/* <Titles title={t("title")} subTitle={t("sub_title")} /> */}
        <Titles title="Образование" subTitle="Подзаголовок" />
      </div>
    </section>
  );
}
