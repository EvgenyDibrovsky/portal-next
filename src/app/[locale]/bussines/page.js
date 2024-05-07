// import Titles from "../components/PageSettings/Titles";
import Section from "../components/PageSettings/Section";
// import { useTranslations } from "next-intl";

export default function bussines() {
  // const t = useTranslations("pages.about");

  return (
    <Section>
      <div className="container">
        {/* <Titles title={t("title")} subTitle={t("sub_title")} /> */}
        <h1>Страница Бизнеса</h1>
      </div>
    </Section>
  );
}
