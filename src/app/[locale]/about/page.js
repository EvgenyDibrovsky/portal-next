import Titles from "../components/PageSettings/Titles";
import Section from "../components/PageSettings/Section";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("pages.about");

  return (
    <Section>
      <div className="container">
        <Titles title={t("title")} subTitle={t("sub_title")} />
      </div>
    </Section>
  );
}
