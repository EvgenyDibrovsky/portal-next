import Titles from "../../_components/PageSettings/Titles";

export default function Contacts() {
  return (
    <section className="h-[100dvh] py-[2.5rem]">
      <div className="container">
        <Titles title="Контакты" subTitle="Подзаголовок" />
        <div className="flex gap-[1rem]">
          <div className="w-4/12 mx-auto">контактная форма</div>
          <div className="w-8/12 mx-auto">
            <form action=""></form>
          </div>
        </div>
      </div>
    </section>
  );
}
