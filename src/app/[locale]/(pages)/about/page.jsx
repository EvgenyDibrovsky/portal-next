import Titles from "../../_components/PageSettings/Titles";
// import { useTranslations } from "next-intl";

export default function About() {
  // const t = useTranslations("pages.about");

  return (
    <section className="py-[2.5rem]">
      <div className="container">
        <Titles title="О нас" subTitle="Подзаголовок" />
      </div>
    </section>
  );
}
