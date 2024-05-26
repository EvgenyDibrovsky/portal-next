import Titles from "../../_components/PageSettings/TitlePage/Titles";
import ContactFormContactPage from "../../_components/ContactForms/ContactPage/ContactFormContactPage";
import { BsTelephone, BsEnvelope, BsFillPinMapFill, BsFacebook, BsTelegram, BsLinkedin } from "react-icons/bs";

export default function Contacts() {
  return (
    <section className="min-h-[calc(100dvh-14rem)] py-[2.5rem]">
      <div className="container mx-auto">
        <Titles title="Контакты" subTitle="Подзаголовок" />
        <div className="flex justify-between gap-[2rem]">
          <div className="w-6/12">
            <h2 className="text-[1.2rem] font-semibold mb-[1rem]">Cвязатся с нами</h2>
            <ContactFormContactPage />
          </div>
          <div className="w-6/12">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-[1.2rem] font-semibold mb-[1rem]">Детальная информация</h2>
                <div className="flex flex-col gap-[2rem]">
                  <div className="flex items-start gap-[1.5rem]">
                    <div>
                      <BsTelephone className="text-sky-600 text-[1.3rem] mt-[0.5rem]" />
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                      <h3 className="font-bold text-[1.1rem]">Phone</h3>
                      <div>+48 537 450 501</div>
                      <div>+48 537 450 501</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-[1.5rem]">
                    <div>
                      <BsEnvelope className="text-sky-600 text-[1.3rem] mt-[0.5rem]" />
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                      <h3 className="font-bold text-[1.1rem]">Email</h3>
                      <div>edweb@contact.com</div>
                      <div>edweb@contact.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-[1.5rem]">
                    <div>
                      <BsFillPinMapFill className="text-sky-600 text-[1.3rem] mt-[0.5rem]" />
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                      <h3 className="font-bold text-[1.1rem]">Location</h3>
                      <div>4517 Washington Ave. 32 King Street, Melbourne Manchester, Road USA</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-[1.2rem] font-semibold mb-[1rem]">Подписывайтесь на нас</h2>
                <ul className="flex items-center gap-[1.5rem]">
                  <li>
                    <BsFacebook className="text-[2rem] rounded-full text-sky-600" />
                  </li>
                  <li>
                    <BsTelegram className="text-[2rem] rounded-full text-sky-600" />
                  </li>
                  <li>
                    <BsLinkedin className="text-[2rem] rounded-full text-sky-600" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
