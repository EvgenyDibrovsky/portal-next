import Titles from "../../_components/PageSettings/TitlePage/Titles";
// import { useTranslations } from "next-intl";

export default function RealEstate() {
  // const t = useTranslations("pages.about");

  return (
    <section className="h-[100dvh] py-[2.5rem]">
      <div className="container">
        {/* <Titles title={t("title")} subTitle={t("sub_title")} /> */}
        <Titles title="Недвижимость" subTitle="Подзаголовок" />
      </div>
    </section>
  );
}
