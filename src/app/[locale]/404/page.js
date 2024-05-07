import Link from "next/link";
import TitlePage from "../components/PageSettings/Title";
import Section from "../components/PageSettings/Section";

export default function ErrorPage() {
  return (
    <Section>
      <TitlePage title="404" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-10">
        <Link href="/" className="btn">
          Вернутся на главную
        </Link>
        <Link href="/contacts" className="btn">
          Страница контактов
        </Link>
      </div>
    </Section>
  );
}
