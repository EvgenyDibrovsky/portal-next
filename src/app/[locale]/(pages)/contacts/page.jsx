import Titles from "../../_components/PageSettings/Titles";
import ContactFormContactPage from "../../_components/ContactForms/ContactPage/ContactFormContactPage";
export default function Contacts() {
  return (
    <section className="h-[100vh] py-10">
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
