import Titles from "../../_components/PageSettings/TitlePage/Titles";
import ContactFormContactPage from "../../_components/ContactForms/ContactPage/ContactFormContactPage";
export default function Contacts() {
  return (
    <section className="min-h-[calc(100dvh-14rem)] py-[2.5rem]">
      <div className="container mx-auto">
        <Titles title="Контакты" subTitle="Подзаголовок" />
        <div className="flex justify-center gap-4">
          <div className="w-5/12">
            <ContactFormContactPage />
          </div>
        </div>
      </div>
    </section>
  );
}
