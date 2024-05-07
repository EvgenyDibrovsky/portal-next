import Titles from "../components/PageSettings/Titles";

export default function Contacts() {
  return (
    <section className="h-[100dvh] py-[2.5rem] bg-slate-900">
      <div className="container">
        <Titles title="Контакты" subTitle="Подзаголовок" />

        <div className="w-8/12 mx-auto">контактная форма</div>
      </div>
    </section>
  );
}
