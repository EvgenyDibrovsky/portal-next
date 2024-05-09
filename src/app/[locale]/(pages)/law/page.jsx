import Titles from "../../_components/PageSettings/Titles";
// import { useTranslations } from "next-intl";

export default function Law() {
  // const t = useTranslations("pages.about");

  return (
    <section className="h-[100dvh] py-[2.5rem]">
      <div className="container">
        {/* <Titles title={t("title")} subTitle={t("sub_title")} /> */}
        <Titles title="Юридические услуги" subTitle="Подзаголовок" />
      </div>
    </section>
  );
}
